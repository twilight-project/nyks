// Twilight Block Explorer API Service

// Use relative paths - requests go through the proxy server
// In development: setupProxy.js handles /cosmos and /twilight
// In production: server/proxy.js handles the same paths
const DECODE_API_URL = 'http://143.198.60.224:8449/api';

class TwilightAPI {
  constructor() {
    this.decodeUrl = DECODE_API_URL;
  }

  async fetch(endpoint, options = {}) {
    try {
      const response = await fetch(endpoint, {
        ...options,
        headers: {
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        // Handle 400-level errors gracefully (often means empty results)
        if (response.status >= 400 && response.status < 500) {
          console.warn(`API ${response.status} for ${endpoint}`);
          return { error: true, status: response.status };
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed for: ${endpoint}`, error);
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
    // Use search endpoint which handles empty blocks gracefully
    const result = await this.fetch(`/cosmos/tx/v1beta1/txs?events=tx.height=${height}&pagination.limit=100`);
    if (result.error) {
      return { txs: [], tx_responses: [] };
    }
    return result;
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
    const result = await this.fetch(`/cosmos/tx/v1beta1/txs?${params}`);
    if (result.error) {
      return { txs: [], tx_responses: [], pagination: { total: '0' } };
    }
    return result;
  }

  async getTxsByHeight(height) {
    return this.searchTxs(`tx.height=${height}`);
  }

  // Account endpoints
  async getAccount(address) {
    return this.fetch(`/cosmos/auth/v1beta1/accounts/${address}`);
  }

  async getBalances(address) {
    const result = await this.fetch(`/cosmos/bank/v1beta1/balances/${address}`);
    if (result.error) {
      return { balances: [] };
    }
    return result;
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
    const result = await this.fetch('/twilight/volt/reserves');
    if (result.error) {
      return { reserves: [] };
    }
    return result;
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
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Decode Transaction Error:', error);
      return null;
    }
  }

  // Node info
  async getNodeInfo() {
    return this.fetch('/cosmos/base/tendermint/v1beta1/node_info');
  }

  async getSyncing() {
    const result = await this.fetch('/cosmos/base/tendermint/v1beta1/syncing');
    if (result.error) {
      return { syncing: false };
    }
    return result;
  }

  // Validators
  async getValidators(status = 'BOND_STATUS_BONDED') {
    const result = await this.fetch(`/cosmos/staking/v1beta1/validators?status=${status}`);
    if (result.error) {
      return { validators: [] };
    }
    return result;
  }

  // Supply
  async getTotalSupply() {
    const result = await this.fetch('/cosmos/bank/v1beta1/supply');
    if (result.error) {
      return { supply: [] };
    }
    return result;
  }
}

export const twilightAPI = new TwilightAPI();
export default TwilightAPI;
