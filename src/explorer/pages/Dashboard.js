import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import BlockList from '../components/BlockList';
import TransactionList from '../components/TransactionList';
import { twilightAPI } from '../services/api';
import { indexer, extractTransactionData } from '../services/indexer';
import '../styles/explorer.css';

function Dashboard() {
  const [stats, setStats] = useState({});
  const [blocks, setBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch latest block
      const latestBlockResponse = await twilightAPI.getLatestBlock();
      const latestHeight = parseInt(latestBlockResponse.block.header.height);

      // Fetch recent blocks
      const blockPromises = [];
      for (let i = 0; i < 10; i++) {
        const height = latestHeight - i;
        if (height > 0) {
          blockPromises.push(
            twilightAPI.getBlockByHeight(height)
              .then(data => ({
                height,
                hash: data.block_id?.hash || '',
                time: data.block?.header?.time || '',
                proposer: data.block?.header?.proposer_address || '',
                txCount: data.block?.data?.txs?.length || 0,
              }))
              .catch(() => null)
          );
        }
      }
      const blockResults = await Promise.all(blockPromises);
      setBlocks(blockResults.filter(Boolean));

      // Fetch recent transactions using the global transactions API
      try {
        const txsResponse = await twilightAPI.getAllTransactions(1, 10);
        if (txsResponse.txs && txsResponse.tx_responses) {
          const allTxs = txsResponse.txs.map((tx, idx) =>
            extractTransactionData(tx, txsResponse.tx_responses[idx])
          );
          setTransactions(allTxs);
        } else {
          setTransactions([]);
        }
      } catch (e) {
        console.error('Failed to fetch transactions:', e);
        setTransactions([]);
      }

      // Get network status
      let networkStatus = 'online';
      try {
        const syncStatus = await twilightAPI.getSyncing();
        networkStatus = syncStatus.syncing ? 'syncing' : 'online';
      } catch (e) {
        networkStatus = 'unknown';
      }

      // Calculate stats
      const indexerStatus = indexer.getStatus();
      setStats({
        latestBlock: latestHeight,
        totalTransactions: indexerStatus.transactionsIndexed || allTxs.length,
        zkosTransactions: indexerStatus.zkosTransactionsIndexed || '-',
        totalAddresses: indexerStatus.addressesIndexed || '-',
        avgBlockTime: '~6s',
        networkStatus,
      });

    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Failed to load blockchain data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    // Refresh every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return (
    <div className="explorer-container">
      <Header />
      <main className="explorer-main">
        {/* Search bar */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <SearchBar />
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            border: '1px solid var(--accent-red)',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '1.5rem',
            color: 'var(--accent-red)',
          }}>
            {error}
            <button
              onClick={fetchData}
              style={{
                marginLeft: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--accent-blue)',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Stats */}
        <Stats stats={stats} loading={loading} />

        {/* Recent data grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem',
        }}>
          <BlockList blocks={blocks} loading={loading} limit={8} />
          <TransactionList transactions={transactions} loading={loading} limit={8} />
        </div>
      </main>
    </div>
  );
}

// Inline search bar component
function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = query.trim();
    if (!searchQuery) return;

    // Detect search type and redirect
    if (searchQuery.match(/^[0-9]+$/)) {
      window.location.href = `/explorer/block/${searchQuery}`;
    } else if (searchQuery.match(/^[A-Fa-f0-9]{64}$/)) {
      window.location.href = `/explorer/tx/${searchQuery}`;
    } else if (searchQuery.startsWith('twilight')) {
      window.location.href = `/explorer/address/${searchQuery}`;
    } else {
      window.location.href = `/explorer/tx/${searchQuery}`;
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by Tx Hash, Block Height, or Address..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default Dashboard;
