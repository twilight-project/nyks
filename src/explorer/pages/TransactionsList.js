import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { twilightAPI } from '../services/api';
import { extractTransactionData } from '../services/indexer';
import '../styles/explorer.css';

// Transaction type config
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

// Truncate hash
function truncateHash(hash, length = 8) {
  if (!hash || hash.length <= length * 2) return hash;
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalTxs, setTotalTxs] = useState(0);
  const txsPerPage = 25;

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);

      // Fetch all transactions with pagination
      const txsResponse = await twilightAPI.getAllTransactions(page, txsPerPage);

      if (txsResponse.txs && txsResponse.tx_responses) {
        const txs = txsResponse.txs.map((tx, idx) =>
          extractTransactionData(tx, txsResponse.tx_responses[idx])
        );
        setTransactions(txs);

        // Check if there are more transactions
        const total = parseInt(txsResponse.pagination?.total || '0');
        setTotalTxs(total);
        setHasMore(page * txsPerPage < total);
      } else {
        setTransactions([]);
        setTotalTxs(0);
        setHasMore(false);
      }

    } catch (err) {
      console.error('Transactions fetch error:', err);
      setTransactions([]);
      setTotalTxs(0);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

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
              <path d="M12 2v20M2 12h20" />
            </svg>
            Transactions
          </h1>
          {totalTxs > 0 && (
            <span style={{ color: 'var(--text-secondary)' }}>
              Total: {totalTxs.toLocaleString()} transactions
            </span>
          )}
        </div>

        <div className="explorer-card">
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
                  Array.from({ length: txsPerPage }).map((_, i) => (
                    <tr key={i}>
                      <td><div className="skeleton skeleton-text" style={{ width: '150px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '80px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '60px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '20px' }} /></td>
                      <td><div className="skeleton skeleton-text" style={{ width: '80px', marginLeft: 'auto' }} /></td>
                    </tr>
                  ))
                ) : transactions.length > 0 ? (
                  transactions.map((tx) => {
                    const primaryMsg = tx.messages?.[0] || {};
                    const typeConfig = getTxTypeConfig(primaryMsg.type);
                    const isSuccess = tx.code === 0;

                    return (
                      <tr key={tx.hash}>
                        <td>
                          <Link to={`/explorer/tx/${tx.hash}`} className="tx-hash">
                            {truncateHash(tx.hash, 12)}
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
                          {isSuccess ? (
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
                  })
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
            Page {page} {totalTxs > 0 && `of ${Math.ceil(totalTxs / txsPerPage)}`}
          </span>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={!hasMore || loading}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}

export default TransactionsList;
