import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { twilightAPI } from '../services/api';
import '../styles/explorer.css';

// Format time ago
function timeAgo(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

// Truncate hash
function truncateHash(hash, length = 8) {
  if (!hash || hash.length <= length * 2) return hash;
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

function BlocksList() {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latestHeight, setLatestHeight] = useState(null);
  const [page, setPage] = useState(1);
  const blocksPerPage = 25;

  const fetchBlocks = useCallback(async () => {
    try {
      setLoading(true);

      // Get latest block height
      const latestBlockResponse = await twilightAPI.getLatestBlock();
      const latest = parseInt(latestBlockResponse.block.header.height);
      setLatestHeight(latest);

      // Calculate range for current page
      const startHeight = latest - (page - 1) * blocksPerPage;
      const endHeight = Math.max(1, startHeight - blocksPerPage + 1);

      // Fetch blocks
      const blockPromises = [];
      for (let height = startHeight; height >= endHeight; height--) {
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

      const blockResults = await Promise.all(blockPromises);
      setBlocks(blockResults.filter(Boolean));

    } catch (err) {
      console.error('Blocks fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBlocks();
  }, [fetchBlocks]);

  const totalPages = latestHeight ? Math.ceil(latestHeight / blocksPerPage) : 1;

  return (
    <div className="explorer-container">
      <Header />
      <main className="explorer-main">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            Blocks
          </h1>
          {latestHeight && (
            <span style={{ color: 'var(--text-secondary)' }}>
              Total: {latestHeight.toLocaleString()} blocks
            </span>
          )}
        </div>

        <div className="explorer-card">
          <div className="explorer-card-body" style={{ padding: 0 }}>
            <table className="explorer-table">
              <thead>
                <tr>
                  <th>Height</th>
                  <th>Hash</th>
                  <th>Time</th>
                  <th style={{ textAlign: 'center' }}>Transactions</th>
                  <th>Proposer</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: blocksPerPage }).map((_, i) => (
                    <tr key={i}>
                      <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '150px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '60px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '40px', margin: '0 auto' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '100px' }} /></td>
                    </tr>
                  ))
                ) : blocks.length > 0 ? (
                  blocks.map((block) => (
                    <tr key={block.height}>
                      <td>
                        <Link to={`/explorer/block/${block.height}`} className="block-height">
                          {block.height?.toLocaleString()}
                        </Link>
                      </td>
                      <td>
                        <Link to={`/explorer/block/${block.hash}`} className="tx-hash">
                          {truncateHash(block.hash, 12)}
                        </Link>
                      </td>
                      <td>
                        <span className="time-relative">{timeAgo(block.time)}</span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {block.txCount > 0 ? (
                          <span style={{
                            backgroundColor: 'rgba(79, 195, 247, 0.2)',
                            color: 'var(--accent-blue)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-mono)',
                          }}>
                            {block.txCount}
                          </span>
                        ) : (
                          <span style={{ color: 'var(--text-muted)' }}>0</span>
                        )}
                      </td>
                      <td>
                        <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          {truncateHash(block.proposer, 8)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                      No blocks found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1 || loading}
          >
            First
          </button>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1 || loading}
          >
            Previous
          </button>
          <span style={{ padding: '0.5rem 1rem', color: 'var(--text-secondary)' }}>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || loading}
          >
            Next
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages || loading}
          >
            Last
          </button>
        </div>
      </main>
    </div>
  );
}

export default BlocksList;
