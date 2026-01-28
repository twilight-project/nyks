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

// Transaction type constants
export const TX_TYPES = {
  // ZkOS types
  TRANSFER_TX: 'twilightproject.nyks.zkos.MsgTransferTx',
  MINT_BURN_TX: 'twilightproject.nyks.zkos.MsgMintBurnTradingBtc',
  // Volt types
  REGISTER_CLEARING: 'twilightproject.nyks.volt.MsgRegisterClearingAccount',
  DEPOSIT: 'twilightproject.nyks.volt.MsgConfirmBtcDeposit',
  WITHDRAW: 'twilightproject.nyks.volt.MsgWithdrawBtcRequest',
  SWEEP: 'twilightproject.nyks.volt.MsgSweepProposal',
  // Bridge types
  REGISTER_DEPOSIT_ADDRESS: 'twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress',
  CONFIRM_DEPOSIT: 'twilightproject.nyks.bridge.MsgConfirmBtcDeposit',
  WITHDRAW_REQUEST: 'twilightproject.nyks.bridge.MsgWithdrawBtcRequest',
  REGISTER_RESERVE: 'twilightproject.nyks.bridge.MsgRegisterReserveAddress',
  PROPOSE_SWEEP: 'twilightproject.nyks.bridge.MsgProposeSweepAddress',
};

// ZkOS Transaction subtypes (detected from decoded data)
export const ZKOS_TX_SUBTYPES = {
  TRANSFER: 'transfer',      // Basic value transfer (Coin -> Coin)
  SCRIPT: 'script',          // Smart contract execution
  DEPLOY: 'deploy',          // Contract deployment
  ORDER: 'order',            // Trading order
  SETTLEMENT: 'settlement',  // Order settlement
  FUNDING: 'funding',        // Coin -> Memo (contract funding)
  WITHDRAW: 'withdraw',      // Memo -> Coin (contract withdrawal)
  STATE_UPDATE: 'state_update', // State -> State transition
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

// IO Type constants
const IO_TYPES = {
  COIN: 0,
  MEMO: 1,
  STATE: 2,
};

// Detect ZkOS transaction subtype from decoded data
export function detectZkOSSubtype(decoded) {
  if (!decoded) return ZKOS_TX_SUBTYPES.TRANSFER;

  const inputs = decoded.inputs || [];
  const outputs = decoded.outputs || [];
  const hasProgram = decoded.program && decoded.program.length > 0;

  // Check for state inputs/outputs (indicates contract interaction)
  const hasStateInput = inputs.some(i => i.io_type === IO_TYPES.STATE);
  const hasStateOutput = outputs.some(o => o.io_type === IO_TYPES.STATE);
  const hasMemoInput = inputs.some(i => i.io_type === IO_TYPES.MEMO);
  const hasMemoOutput = outputs.some(o => o.io_type === IO_TYPES.MEMO);
  const hasCoinInput = inputs.some(i => i.io_type === IO_TYPES.COIN || i.io_type === undefined);
  const hasCoinOutput = outputs.some(o => o.io_type === IO_TYPES.COIN || o.io_type === undefined);

  // Contract deployment: has program, state output, and zero-balance proof
  if (hasProgram && hasStateOutput && !hasStateInput) {
    return ZKOS_TX_SUBTYPES.DEPLOY;
  }

  // Contract execution with state transition
  if (hasStateInput && hasStateOutput) {
    // Check if it looks like an order or settlement based on memo patterns
    if (hasMemoInput || hasMemoOutput) {
      // This could be an order or settlement
      if (decoded.tx_type === 'order') return ZKOS_TX_SUBTYPES.ORDER;
      if (decoded.tx_type === 'settlement') return ZKOS_TX_SUBTYPES.SETTLEMENT;
    }
    return ZKOS_TX_SUBTYPES.STATE_UPDATE;
  }

  // Script/contract interaction
  if (hasProgram || hasMemoInput || hasMemoOutput) {
    // Funding: Coin -> Memo
    if (hasCoinInput && hasMemoOutput && !hasCoinOutput) {
      return ZKOS_TX_SUBTYPES.FUNDING;
    }
    // Withdraw: Memo -> Coin
    if (hasMemoInput && hasCoinOutput && !hasMemoOutput) {
      return ZKOS_TX_SUBTYPES.WITHDRAW;
    }
    return ZKOS_TX_SUBTYPES.SCRIPT;
  }

  // Default: basic transfer
  return ZKOS_TX_SUBTYPES.TRANSFER;
}

// Parse zkOS transaction with inputs/outputs
export async function parseZkOSTransaction(msg) {
  const result = {
    inputs: [],
    outputs: [],
    fee: null,
    type: null,
    subtype: null,
    decoded: null,
    bytecode: null,
  };

  if (msg.type.fullType === TX_TYPES.TRANSFER_TX) {
    result.type = 'transfer';
    const bytecode = msg.data.txByteCode || msg.data.tx_byte_code;
    result.bytecode = bytecode;

    // Try to decode the transaction bytecode if present
    if (bytecode) {
      try {
        const decoded = await twilightAPI.decodeTransaction(bytecode);
        if (decoded) {
          result.inputs = decoded.inputs || [];
          result.outputs = decoded.outputs || [];
          result.fee = decoded.fee;
          result.decoded = decoded;
          result.subtype = detectZkOSSubtype(decoded);
        }
      } catch (error) {
        console.error('Failed to decode zkOS transaction:', error);
      }
    }
  } else if (msg.type.fullType === TX_TYPES.MINT_BURN_TX) {
    result.type = msg.data.mintOrBurn === 'MINT' ? 'mint' : 'burn';
    result.amount = msg.data.btcValue;
    result.qqAccount = msg.data.qqAccount;
    result.subtype = result.type;
  }

  return result;
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
