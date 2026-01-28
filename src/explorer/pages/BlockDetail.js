import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import TransactionList from '../components/TransactionList';
import { twilightAPI } from '../services/api';
import { extractTransactionData } from '../services/indexer';
import '../styles/explorer.css';

// Copy to clipboard helper
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// Format date
function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleString();
}

// Time ago
function timeAgo(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

function BlockDetail() {
  const { heightOrHash } = useParams();
  const [block, setBlock] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latestHeight, setLatestHeight] = useState(null);

  const fetchBlock = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Get latest height for navigation
      const latestBlockResponse = await twilightAPI.getLatestBlock();
      const latest = parseInt(latestBlockResponse.block.header.height);
      setLatestHeight(latest);

      // Fetch block by height or hash
      const blockResponse = await twilightAPI.getBlockByHeight(heightOrHash);
      const blockData = blockResponse.block;
      const blockId = blockResponse.block_id;

      setBlock({
        height: parseInt(blockData.header.height),
        hash: blockId?.hash || '',
        time: blockData.header.time,
        proposer: blockData.header.proposer_address,
        chainId: blockData.header.chain_id,
        txCount: blockData.data?.txs?.length || 0,
        appHash: blockData.header.app_hash,
        consensusHash: blockData.header.consensus_hash,
        dataHash: blockData.header.data_hash,
        evidenceHash: blockData.header.evidence_hash,
        lastBlockHash: blockData.header.last_block_id?.hash,
        lastCommitHash: blockData.header.last_commit_hash,
        lastResultsHash: blockData.header.last_results_hash,
        nextValidatorsHash: blockData.header.next_validators_hash,
        validatorsHash: blockData.header.validators_hash,
      });

      // Fetch transactions in this block
      try {
        const txsResponse = await twilightAPI.getBlockWithTxs(heightOrHash);
        if (txsResponse.txs && txsResponse.tx_responses) {
          const txs = txsResponse.txs.map((tx, idx) =>
            extractTransactionData(tx, txsResponse.tx_responses[idx])
          );
          setTransactions(txs);
        }
      } catch (txErr) {
        console.log('No transactions in block');
        setTransactions([]);
      }

    } catch (err) {
      console.error('Block fetch error:', err);
      setError(err.message || 'Failed to load block');
    } finally {
      setLoading(false);
    }
  }, [heightOrHash]);

  useEffect(() => {
    fetchBlock();
  }, [fetchBlock]);

  if (loading) {
    return (
      <div className="explorer-container">
        <Header />
        <main className="explorer-main">
          <div className="loading">
            <div className="loading-spinner" />
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="explorer-container">
        <Header />
        <main className="explorer-main">
          <div className="explorer-card">
            <div className="explorer-card-body" style={{ textAlign: 'center', padding: '3rem' }}>
              <h2 style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>Block Not Found</h2>
              <p style={{ color: 'var(--text-secondary)' }}>{error}</p>
              <Link to="/explorer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Back to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const canGoPrev = block.height > 1;
  const canGoNext = latestHeight && block.height < latestHeight;

  return (
    <div className="explorer-container">
      <Header />
      <main className="explorer-main">
        {/* Block Header with Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}>
          <div className="tx-detail-header" style={{ marginBottom: 0 }}>
            <h1 className="tx-detail-title">Block</h1>
            <span style={{
              backgroundColor: 'var(--accent-blue)',
              color: 'var(--bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              fontSize: '1.25rem',
            }}>
              #{block.height.toLocaleString()}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link
              to={canGoPrev ? `/explorer/block/${block.height - 1}` : '#'}
              className={`btn btn-secondary ${!canGoPrev ? 'disabled' : ''}`}
              style={{
                opacity: canGoPrev ? 1 : 0.5,
                pointerEvents: canGoPrev ? 'auto' : 'none',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Previous
            </Link>
            <Link
              to={canGoNext ? `/explorer/block/${block.height + 1}` : '#'}
              className={`btn btn-secondary ${!canGoNext ? 'disabled' : ''}`}
              style={{
                opacity: canGoNext ? 1 : 0.5,
                pointerEvents: canGoNext ? 'auto' : 'none',
              }}
            >
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Block Info */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Block Details</h3>
          </div>
          <div className="explorer-card-body">
            <div className="info-grid">
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <div className="info-label">Block Hash</div>
                <div className="info-value hash" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ wordBreak: 'break-all' }}>{block.hash}</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(block.hash)}
                    title="Copy to clipboard"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Timestamp</div>
                <div className="info-value">
                  <div>{formatDate(block.time)}</div>
                  <div className="time-relative" style={{ marginTop: '0.25rem' }}>
                    {timeAgo(block.time)}
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Transactions</div>
                <div className="info-value">
                  <span style={{
                    backgroundColor: block.txCount > 0 ? 'rgba(79, 195, 247, 0.2)' : 'var(--bg-hover)',
                    color: block.txCount > 0 ? 'var(--accent-blue)' : 'var(--text-muted)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {block.txCount}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Chain ID</div>
                <div className="info-value">{block.chainId}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Proposer</div>
                <div className="info-value" style={{ fontSize: '0.75rem' }}>
                  {block.proposer || '-'}
                </div>
              </div>

              {block.lastBlockHash && (
                <div className="info-item" style={{ gridColumn: 'span 2' }}>
                  <div className="info-label">Previous Block Hash</div>
                  <div className="info-value hash">
                    <Link to={`/explorer/block/${block.height - 1}`} style={{ wordBreak: 'break-all' }}>
                      {block.lastBlockHash}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Block Hashes */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Block Hashes</h3>
          </div>
          <div className="explorer-card-body">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">App Hash</div>
                <div className="info-value" style={{ fontSize: '0.7rem', wordBreak: 'break-all' }}>
                  {block.appHash || '-'}
                </div>
              </div>
              <div className="info-item">
                <div className="info-label">Data Hash</div>
                <div className="info-value" style={{ fontSize: '0.7rem', wordBreak: 'break-all' }}>
                  {block.dataHash || '-'}
                </div>
              </div>
              <div className="info-item">
                <div className="info-label">Consensus Hash</div>
                <div className="info-value" style={{ fontSize: '0.7rem', wordBreak: 'break-all' }}>
                  {block.consensusHash || '-'}
                </div>
              </div>
              <div className="info-item">
                <div className="info-label">Validators Hash</div>
                <div className="info-value" style={{ fontSize: '0.7rem', wordBreak: 'break-all' }}>
                  {block.validatorsHash || '-'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions in Block */}
        {transactions.length > 0 ? (
          <TransactionList
            transactions={transactions}
            showHeader={true}
            loading={false}
          />
        ) : (
          <div className="explorer-card">
            <div className="explorer-card-header">
              <h3 className="explorer-card-title">Transactions</h3>
            </div>
            <div className="explorer-card-body" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
              No transactions in this block
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default BlockDetail;
