import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

// Truncate hash for display
function truncateHash(hash, length = 8) {
  if (!hash || hash.length <= length * 2) return hash;
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

function BlockRow({ block }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (hash) => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <tr>
      <td>
        <Link to={`/explorer/block/${block.height}`} className="block-height">
          {block.height?.toLocaleString()}
        </Link>
      </td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)' }} title={block.hash}>
            {truncateHash(block.hash, 10)}
          </span>
          <button
            onClick={() => copyToClipboard(block.hash)}
            title="Copy hash"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: copied ? 'var(--accent-green)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {copied ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            )}
          </button>
          {copied && (
            <span style={{
              position: 'absolute',
              left: '100%',
              marginLeft: '0.5rem',
              fontSize: '0.75rem',
              color: 'var(--accent-green)',
              whiteSpace: 'nowrap',
            }}>
              Copied!
            </span>
          )}
        </div>
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
  );
}

function BlockListSkeleton({ rows = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i}>
          <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '150px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '60px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '40px', margin: '0 auto' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '100px' }} /></td>
        </tr>
      ))}
    </>
  );
}

function BlockList({ blocks = [], loading = false, showHeader = true, limit }) {
  const displayBlocks = limit ? blocks.slice(0, limit) : blocks;

  return (
    <div className="explorer-card">
      {showHeader && (
        <div className="explorer-card-header">
          <h3 className="explorer-card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            Recent Blocks
          </h3>
          <Link to="/explorer/blocks" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            View All
          </Link>
        </div>
      )}
      <div className="explorer-card-body" style={{ padding: 0 }}>
        <table className="explorer-table">
          <thead>
            <tr>
              <th>Height</th>
              <th>Hash</th>
              <th>Time</th>
              <th style={{ textAlign: 'center' }}>Txs</th>
              <th>Proposer</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <BlockListSkeleton rows={limit || 10} />
            ) : displayBlocks.length > 0 ? (
              displayBlocks.map((block) => (
                <BlockRow key={block.height} block={block} />
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
  );
}

export default BlockList;
