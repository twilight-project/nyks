import React from 'react';
import { Link } from 'react-router-dom';

// Transaction type display names and colors
const TX_TYPE_CONFIG = {
  MsgTransferTx: { label: 'Transfer', className: 'transfer' },
  MsgMintBurnTradingBtc: { label: 'Mint/Burn', className: 'mint' },
  MsgRegisterClearingAccount: { label: 'Register', className: 'deposit' },
  MsgConfirmBtcDeposit: { label: 'Deposit', className: 'deposit' },
  MsgWithdrawBtcRequest: { label: 'Withdraw', className: 'withdraw' },
  MsgSweepProposal: { label: 'Sweep', className: 'burn' },
  MsgSend: { label: 'Send', className: 'transfer' },
  default: { label: 'Other', className: '' },
};

function getTxTypeConfig(type) {
  if (!type) return TX_TYPE_CONFIG.default;
  const typeName = type.name || type.split('.').pop() || type;
  return TX_TYPE_CONFIG[typeName] || TX_TYPE_CONFIG.default;
}

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

function TransactionRow({ tx }) {
  const primaryMsg = tx.messages?.[0] || {};
  const typeConfig = getTxTypeConfig(primaryMsg.type);
  const status = tx.code === 0 ? 'success' : 'failed';

  return (
    <tr>
      <td>
        <Link to={`/explorer/tx/${tx.hash}`} className="tx-hash">
          {truncateHash(tx.hash, 10)}
        </Link>
      </td>
      <td>
        <span className={`tx-type ${typeConfig.className}`}>
          {typeConfig.label}
        </span>
        {tx.messages?.length > 1 && (
          <span style={{
            marginLeft: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            +{tx.messages.length - 1}
          </span>
        )}
      </td>
      <td>
        <Link to={`/explorer/block/${tx.height}`} className="block-height">
          {tx.height?.toLocaleString()}
        </Link>
      </td>
      <td>
        <span className="time-relative">{timeAgo(tx.timestamp)}</span>
      </td>
      <td>
        {status === 'success' ? (
          <span style={{ color: 'var(--accent-green)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
        ) : (
          <span style={{ color: 'var(--accent-red)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </span>
        )}
      </td>
      <td style={{ textAlign: 'right' }}>
        {tx.fee?.[0] ? (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            {(parseInt(tx.fee[0].amount) / 1000000).toFixed(6)} {tx.fee[0].denom}
          </span>
        ) : (
          <span style={{ color: 'var(--text-muted)' }}>-</span>
        )}
      </td>
    </tr>
  );
}

function TransactionListSkeleton({ rows = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, i) => (
        <tr key={i}>
          <td><div className="skeleton skeleton-text" style={{ width: '150px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '60px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '20px' }} /></td>
          <td><div className="skeleton skeleton-text" style={{ width: '80px', marginLeft: 'auto' }} /></td>
        </tr>
      ))}
    </>
  );
}

function TransactionList({ transactions = [], loading = false, showHeader = true, limit }) {
  const displayTxs = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="explorer-card">
      {showHeader && (
        <div className="explorer-card-header">
          <h3 className="explorer-card-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <path d="M12 2v20M2 12h20" />
            </svg>
            Recent Transactions
          </h3>
          <Link to="/explorer/transactions" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            View All
          </Link>
        </div>
      )}
      <div className="explorer-card-body" style={{ padding: 0 }}>
        <table className="explorer-table">
          <thead>
            <tr>
              <th>Tx Hash</th>
              <th>Type</th>
              <th>Block</th>
              <th>Time</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Fee</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TransactionListSkeleton rows={limit || 10} />
            ) : displayTxs.length > 0 ? (
              displayTxs.map((tx) => (
                <TransactionRow key={tx.hash} tx={tx} />
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;
