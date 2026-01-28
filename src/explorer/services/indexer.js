// Twilight Block Explorer Indexer Service
// This service indexes blockchain data for fast querying

import { twilightAPI } from './api';

// In-memory storage (replace with database in production)
const indexedData = {
  blocks: new Map(),
  transactions: new Map(),
  addresses: new Map(),
  zkosTransactions: new Map(),
  latestHeight: 0,
  isIndexing: false,
};

// Transaction type constants (with leading slash as returned by Cosmos SDK)
export const TX_TYPES = {
  TRANSFER_TX: '/twilightproject.nyks.zkos.MsgTransferTx',
  MINT_BURN_TX: '/twilightproject.nyks.zkos.MsgMintBurnTradingBtc',
  REGISTER_CLEARING: '/twilightproject.nyks.volt.MsgRegisterClearingAccount',
  DEPOSIT: '/twilightproject.nyks.volt.MsgConfirmBtcDeposit',
  WITHDRAW: '/twilightproject.nyks.volt.MsgWithdrawBtcRequest',
  SWEEP: '/twilightproject.nyks.volt.MsgSweepProposal',
};

// Parse transaction type from @type field
export function parseTransactionType(typeUrl) {
  const typeName = typeUrl.split('.').pop();
  return {
    module: typeUrl.includes('zkos') ? 'zkos' : typeUrl.includes('volt') ? 'volt' : 'other',
    name: typeName,
    fullType: typeUrl,
  };
}

// Extract transaction data from cosmos tx response
export function extractTransactionData(tx, txResponse) {
  const messages = tx.body?.messages || [];
  const parsedMessages = messages.map((msg) => ({
    type: parseTransactionType(msg['@type'] || ''),
    data: msg,
  }));

  return {
    hash: txResponse.txhash,
    height: parseInt(txResponse.height),
    timestamp: txResponse.timestamp,
    gasUsed: parseInt(txResponse.gas_used || 0),
    gasWanted: parseInt(txResponse.gas_wanted || 0),
    fee: tx.auth_info?.fee?.amount || [],
    memo: tx.body?.memo || '',
    messages: parsedMessages,
    logs: txResponse.logs || [],
    events: txResponse.events || [],
    code: txResponse.code || 0,
    rawLog: txResponse.raw_log || '',
  };
}

// Parse zkOS transaction with inputs/outputs
export async function parseZkOSTransaction(msg) {
  const result = {
    inputs: [],
    outputs: [],
    fee: null,
    type: null,
    rawDecoded: null, // Store full decoded JSON
  };

  if (msg.type.fullType === TX_TYPES.TRANSFER_TX) {
    result.type = 'transfer';
    // Try to decode the transaction bytecode if present
    if (msg.data.txByteCode || msg.data.tx_byte_code) {
      try {
        const decoded = await twilightAPI.decodeTransaction(
          msg.data.txByteCode || msg.data.tx_byte_code
        );
        if (decoded && decoded.success && decoded.data?.tx) {
          // Store the full decoded response
          result.rawDecoded = decoded.data;

          const txData = decoded.data.tx.TransactionScript || decoded.data.tx;

          // Parse fee
          result.fee = txData.fee || 0;

          // Parse inputs
          if (txData.inputs) {
            result.inputs = txData.inputs.map((inp, idx) => {
              const input = inp.input?.Coin || inp.input || inp;
              const utxo = input.utxo || {};
              const outCoin = input.out_coin || {};
              return {
                utxoType: inp.in_type || 'Coin',
                txid: utxo.txid ? bytesToHex(utxo.txid) : null,
                outputIndex: utxo.output_index,
                owner: outCoin.owner || null,
                value: null, // Value is encrypted in zkOS
                commitment: outCoin.encrypt?.c ? bytesToHex(outCoin.encrypt.c) : null,
                witnessIndex: input.witness,
              };
            });
          }

          // Parse outputs
          if (txData.outputs) {
            result.outputs = txData.outputs.map((out, idx) => {
              const output = out.output?.Memo || out.output?.Coin || out.output || out;
              const commitment = output.commitment?.Closed || output.commitment;
              return {
                utxoType: out.out_type || 'Memo',
                owner: output.owner || null,
                scriptAddress: output.script_address || null,
                value: null, // Value is encrypted in zkOS
                commitment: commitment ? bytesToHex(commitment) : null,
                timebounds: output.timebounds,
              };
            });
          }
        }
      } catch (error) {
        console.error('Failed to decode zkOS transaction:', error);
      }
    }
  } else if (msg.type.fullType === TX_TYPES.MINT_BURN_TX) {
    result.type = msg.data.mintOrBurn === 'MINT' ? 'mint' : 'burn';
    result.amount = msg.data.btcValue;
    result.qqAccount = msg.data.qqAccount;
  }

  return result;
}

// Helper to convert byte array to hex string
function bytesToHex(bytes) {
  if (!bytes) return null;
  if (typeof bytes === 'string') return bytes;
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Index a single block
async function indexBlock(height) {
  try {
    // Get block data
    const blockData = await twilightAPI.getBlockByHeight(height);
    const block = blockData.block;
    const blockId = blockData.block_id;

    const indexedBlock = {
      height,
      hash: blockId?.hash || '',
      time: block?.header?.time || '',
      proposer: block?.header?.proposer_address || '',
      txCount: block?.data?.txs?.length || 0,
      transactions: [],
    };

    // Get transactions for this block
    try {
      const txsResponse = await twilightAPI.getBlockWithTxs(height);
      if (txsResponse.txs) {
        for (let i = 0; i < txsResponse.txs.length; i++) {
          const tx = txsResponse.txs[i];
          const txResponse = txsResponse.tx_responses[i];

          const txData = extractTransactionData(tx, txResponse);
          indexedBlock.transactions.push(txData.hash);

          // Index transaction
          indexedData.transactions.set(txData.hash, txData);

          // Index by address
          for (const msg of txData.messages) {
            const addresses = extractAddressesFromMessage(msg.data);
            for (const addr of addresses) {
              if (!indexedData.addresses.has(addr)) {
                indexedData.addresses.set(addr, { transactions: [], balance: null });
              }
              indexedData.addresses.get(addr).transactions.push(txData.hash);
            }

            // If zkOS transaction, parse and store separately
            if (msg.type.module === 'zkos') {
              const zkOSData = await parseZkOSTransaction(msg);
              indexedData.zkosTransactions.set(txData.hash, {
                ...txData,
                zkos: zkOSData,
              });
            }
          }
        }
      }
    } catch (error) {
      // Block might not have transactions
      console.log(`No transactions in block ${height}`);
    }

    indexedData.blocks.set(height, indexedBlock);
    return indexedBlock;
  } catch (error) {
    console.error(`Error indexing block ${height}:`, error);
    throw error;
  }
}

// Extract addresses from transaction message
function extractAddressesFromMessage(msgData) {
  const addresses = new Set();
  const addressFields = ['creator', 'twilightAddress', 'twilight_address', 'sender', 'receiver', 'from', 'to'];

  for (const field of addressFields) {
    if (msgData[field]) {
      addresses.add(msgData[field]);
    }
  }

  return Array.from(addresses);
}

// Start indexing from a specific height
export async function startIndexing(fromHeight = null, batchSize = 10) {
  if (indexedData.isIndexing) {
    console.log('Indexer already running');
    return;
  }

  indexedData.isIndexing = true;

  try {
    const latestBlock = await twilightAPI.getLatestBlock();
    const latestHeight = parseInt(latestBlock.block.header.height);

    const startHeight = fromHeight || Math.max(1, latestHeight - 100); // Index last 100 blocks by default

    console.log(`Starting indexer from block ${startHeight} to ${latestHeight}`);

    for (let height = startHeight; height <= latestHeight; height += batchSize) {
      const promises = [];
      for (let i = 0; i < batchSize && height + i <= latestHeight; i++) {
        promises.push(indexBlock(height + i));
      }
      await Promise.all(promises);
      indexedData.latestHeight = Math.min(height + batchSize - 1, latestHeight);
      console.log(`Indexed blocks ${height} to ${indexedData.latestHeight}`);
    }
  } catch (error) {
    console.error('Indexer error:', error);
  } finally {
    indexedData.isIndexing = false;
  }
}

// Query functions
export function getIndexedBlock(height) {
  return indexedData.blocks.get(height);
}

export function getIndexedTransaction(hash) {
  return indexedData.transactions.get(hash);
}

export function getZkOSTransaction(hash) {
  return indexedData.zkosTransactions.get(hash);
}

export function getAddressTransactions(address) {
  return indexedData.addresses.get(address)?.transactions || [];
}

export function getRecentBlocks(limit = 10) {
  const blocks = Array.from(indexedData.blocks.values());
  return blocks
    .sort((a, b) => b.height - a.height)
    .slice(0, limit);
}

export function getRecentTransactions(limit = 10) {
  const txs = Array.from(indexedData.transactions.values());
  return txs
    .sort((a, b) => b.height - a.height)
    .slice(0, limit);
}

export function getIndexerStatus() {
  return {
    isIndexing: indexedData.isIndexing,
    latestHeight: indexedData.latestHeight,
    blocksIndexed: indexedData.blocks.size,
    transactionsIndexed: indexedData.transactions.size,
    addressesIndexed: indexedData.addresses.size,
    zkosTransactionsIndexed: indexedData.zkosTransactions.size,
  };
}

// Export for use in components
export const indexer = {
  start: startIndexing,
  getBlock: getIndexedBlock,
  getTransaction: getIndexedTransaction,
  getZkOSTransaction,
  getAddressTransactions,
  getRecentBlocks,
  getRecentTransactions,
  getStatus: getIndexerStatus,
};

export default indexer;
