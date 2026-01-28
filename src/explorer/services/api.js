// Twilight Block Explorer API Service
const LCD_BASE_URL = 'https://lcd.twilight.org';
const DECODE_API_URL = 'http://143.198.60.224:8449/api';

class TwilightAPI {
  constructor(baseUrl = LCD_BASE_URL) {
    this.baseUrl = baseUrl;
    this.decodeUrl = DECODE_API_URL;
  }

  async fetch(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`API Error: ${endpoint}`, error);
      throw error;
    }
  }

  // Block endpoints
  async getLatestBlock() {
    return this.fetch('/cosmos/base/tendermint/v1beta1/blocks/latest');
  }

  async getBlockByHeight(height) {
    return this.fetch(`/cosmos/base/tendermint/v1beta1/blocks/${height}`);
  }

  async getBlockWithTxs(height) {
    return this.fetch(`/cosmos/tx/v1beta1/txs/block/${height}`);
  }

  // Transaction endpoints
  async getTxByHash(hash) {
    return this.fetch(`/cosmos/tx/v1beta1/txs/${hash}`);
  }

  async searchTxs(query, page = 1, limit = 20) {
    const params = new URLSearchParams({
      events: query,
      'pagination.offset': ((page - 1) * limit).toString(),
      'pagination.limit': limit.toString(),
      order_by: 'ORDER_BY_DESC',
    });
    return this.fetch(`/cosmos/tx/v1beta1/txs?${params}`);
  }

  async getTxsByHeight(height) {
    return this.searchTxs(`tx.height=${height}`);
  }

  // Account endpoints
  async getAccount(address) {
    return this.fetch(`/cosmos/auth/v1beta1/accounts/${address}`);
  }

  async getBalances(address) {
    return this.fetch(`/cosmos/bank/v1beta1/balances/${address}`);
  }

  // ZkOS specific endpoints
  async getZkOSTransferTx(txId) {
    return this.fetch(`/twilight/zkos/transfer_tx/${txId}`);
  }

  async getMintOrBurnTx(address, qqAccount) {
    return this.fetch(`/twilight/zkos/mint_or_burn/${address}/${qqAccount}`);
  }

  // Volt module endpoints
  async getReserves() {
    return this.fetch('/twilight/volt/reserves');
  }

  async getReserve(reserveId) {
    return this.fetch(`/twilight/volt/reserve/${reserveId}`);
  }

  async getClearingAccount(address) {
    return this.fetch(`/twilight/volt/clearing_account/${address}`);
  }

  // Decode zkOS transaction
  async decodeTransaction(txByteCode) {
    try {
      const response = await fetch(`${this.decodeUrl}/decode-transaction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tx_byte_code: txByteCode }),
      });
      if (!response.ok) {
        throw new Error(`Decode error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Decode Transaction Error:', error);
      throw error;
    }
  }

  // Node info
  async getNodeInfo() {
    return this.fetch('/cosmos/base/tendermint/v1beta1/node_info');
  }

  async getSyncing() {
    return this.fetch('/cosmos/base/tendermint/v1beta1/syncing');
  }

  // Validators
  async getValidators(status = 'BOND_STATUS_BONDED') {
    return this.fetch(`/cosmos/staking/v1beta1/validators?status=${status}`);
  }

  // Supply
  async getTotalSupply() {
    return this.fetch('/cosmos/bank/v1beta1/supply');
  }
}

export const twilightAPI = new TwilightAPI();
export default TwilightAPI;
