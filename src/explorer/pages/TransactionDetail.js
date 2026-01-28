import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import InputsOutputs from '../components/InputsOutputs';
import { twilightAPI } from '../services/api';
import { extractTransactionData, parseZkOSTransaction, TX_TYPES } from '../services/indexer';
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

// Truncate hash
function truncateHash(hash, length = 12) {
  if (!hash || hash.length <= length * 2) return hash;
  return `${hash.slice(0, length)}...${hash.slice(-length)}`;
}

function TransactionDetail() {
  const { hash } = useParams();
  const [tx, setTx] = useState(null);
  const [zkosData, setZkosData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRawData, setShowRawData] = useState(false);

  const fetchTransaction = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await twilightAPI.getTxByHash(hash);
      if (!response.tx_response) {
        throw new Error('Transaction not found');
      }

      const txData = extractTransactionData(response.tx, response.tx_response);
      setTx(txData);

      // Check for zkOS transactions and decode
      for (const msg of txData.messages) {
        if (msg.type.module === 'zkos') {
          const zkos = await parseZkOSTransaction(msg);
          setZkosData(zkos);
          break;
        }
      }

    } catch (err) {
      console.error('Transaction fetch error:', err);
      setError(err.message || 'Failed to load transaction');
    } finally {
      setLoading(false);
    }
  }, [hash]);

  useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);

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
              <h2 style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>Transaction Not Found</h2>
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

  const primaryMsg = tx.messages?.[0] || {};
  const txType = primaryMsg.type?.name || 'Unknown';
  const isZkOS = primaryMsg.type?.module === 'zkos';
  const isSuccess = tx.code === 0;

  return (
    <div className="explorer-container">
      <Header />
      <main className="explorer-main">
        {/* Transaction Header */}
        <div className="tx-detail-header">
          <h1 className="tx-detail-title">Transaction</h1>
          <span className={`tx-status ${isSuccess ? 'confirmed' : 'failed'}`}>
            {isSuccess ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Confirmed
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Failed
              </>
            )}
          </span>
          {isZkOS && (
            <span className="tx-type transfer" style={{ marginLeft: '0.5rem' }}>
              ZkOS
            </span>
          )}
        </div>

        {/* Transaction Info */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Transaction Details</h3>
          </div>
          <div className="explorer-card-body">
            <div className="info-grid">
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <div className="info-label">Transaction Hash</div>
                <div className="info-value hash" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ wordBreak: 'break-all' }}>{tx.hash}</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(tx.hash)}
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
                <div className="info-label">Block Height</div>
                <div className="info-value">
                  <Link to={`/explorer/block/${tx.height}`} className="block-height">
                    {tx.height?.toLocaleString()}
                  </Link>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Timestamp</div>
                <div className="info-value">{formatDate(tx.timestamp)}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Transaction Type</div>
                <div className="info-value">
                  <span className={`tx-type ${isZkOS ? 'transfer' : 'deposit'}`}>
                    {txType}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Messages</div>
                <div className="info-value">{tx.messages?.length || 0}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Gas Used / Wanted</div>
                <div className="info-value">
                  {tx.gasUsed?.toLocaleString()} / {tx.gasWanted?.toLocaleString()}
                </div>
              </div>

              <div className="info-item">
                <div className="info-label">Fee</div>
                <div className="info-value">
                  {tx.fee?.[0] ? (
                    `${(parseInt(tx.fee[0].amount) / 1000000).toFixed(6)} ${tx.fee[0].denom}`
                  ) : (
                    '-'
                  )}
                </div>
              </div>

              {tx.memo && (
                <div className="info-item" style={{ gridColumn: 'span 2' }}>
                  <div className="info-label">Memo</div>
                  <div className="info-value">{tx.memo}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ZkOS Inputs & Outputs */}
        {isZkOS && zkosData && (
          <InputsOutputs
            inputs={zkosData.inputs}
            outputs={zkosData.outputs}
            fee={zkosData.fee}
          />
        )}

        {/* Decoded zkOS Transaction */}
        {isZkOS && zkosData?.rawDecoded && (
          <DecodedZkOSTransaction data={zkosData.rawDecoded} />
        )}

        {/* Messages */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Messages ({tx.messages?.length})</h3>
          </div>
          <div className="explorer-card-body">
            {tx.messages?.map((msg, index) => (
              <MessageDisplay key={index} msg={msg} index={index} />
            ))}
          </div>
        </div>

        {/* Events */}
        {tx.events && tx.events.length > 0 && (
          <div className="explorer-card">
            <div className="explorer-card-header">
              <h3 className="explorer-card-title">Events ({tx.events.length})</h3>
              <button
                className="details-toggle"
                onClick={() => setShowRawData(!showRawData)}
              >
                {showRawData ? 'Hide Raw' : 'Show Raw'}
              </button>
            </div>
            <div className="explorer-card-body">
              {showRawData ? (
                <pre style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1rem',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {JSON.stringify(tx.events, null, 2)}
                </pre>
              ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {tx.events.map((event, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {event.type}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Error Log (if failed) */}
        {!isSuccess && tx.rawLog && (
          <div className="explorer-card">
            <div className="explorer-card-header">
              <h3 className="explorer-card-title" style={{ color: 'var(--accent-red)' }}>Error Log</h3>
            </div>
            <div className="explorer-card-body">
              <pre style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                padding: '1rem',
                borderRadius: '8px',
                color: 'var(--accent-red)',
                overflow: 'auto',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-mono)',
              }}>
                {tx.rawLog}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Message display component
function MessageDisplay({ msg, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      backgroundColor: 'var(--bg-primary)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: index < msg.length - 1 ? '1rem' : 0,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: expanded ? '1rem' : 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            backgroundColor: 'var(--bg-hover)',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
          }}>
            #{index}
          </span>
          <span className={`tx-type ${msg.type?.module === 'zkos' ? 'transfer' : 'deposit'}`}>
            {msg.type?.name || 'Unknown'}
          </span>
        </div>
        <button
          className="details-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {expanded && (
        <pre style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '1rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          margin: 0,
        }}>
          {JSON.stringify(msg.data, null, 2)}
        </pre>
      )}
    </div>
  );
}

// Decoded zkOS Transaction display component
function DecodedZkOSTransaction({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="explorer-card">
      <div className="explorer-card-header">
        <h3 className="explorer-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
          Decoded zkOS Transaction
        </h3>
        <button
          className="details-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
      <div className="explorer-card-body">
        {expanded ? (
          <pre style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '1rem',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            maxHeight: '600px',
            margin: 0,
          }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
          }}>
            Full decoded transaction data available. Click "Expand" to view.
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionDetail;
