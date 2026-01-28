import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import TransactionList from '../components/TransactionList';
import { twilightAPI } from '../services/api';
import { extractTransactionData } from '../services/indexer';
import '../styles/explorer.css';

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function AddressDetail() {
  const { address } = useParams();
  const [account, setAccount] = useState(null);
  const [balances, setBalances] = useState([]);
  const [clearingAccount, setClearingAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAddressData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch account info
      try {
        const accountResponse = await twilightAPI.getAccount(address);
        setAccount(accountResponse.account);
      } catch (e) {
        console.log('Account not found or error:', e);
      }

      // Fetch balances
      try {
        const balancesResponse = await twilightAPI.getBalances(address);
        setBalances(balancesResponse.balances || []);
      } catch (e) {
        console.log('Balances error:', e);
      }

      // Fetch clearing account (for Twilight addresses)
      if (address.startsWith('twilight')) {
        try {
          const clearingResponse = await twilightAPI.getClearingAccount(address);
          setClearingAccount(clearingResponse);
        } catch (e) {
          console.log('No clearing account:', e);
        }
      }

      // Search for transactions involving this address
      try {
        const senderTxs = await twilightAPI.searchTxs(`message.sender='${address}'`);
        const receiverTxs = await twilightAPI.searchTxs(`transfer.recipient='${address}'`);

        const allTxs = [
          ...(senderTxs.tx_responses || []).map((txResp, i) =>
            extractTransactionData(senderTxs.txs[i], txResp)
          ),
          ...(receiverTxs.tx_responses || []).map((txResp, i) =>
            extractTransactionData(receiverTxs.txs[i], txResp)
          ),
        ];

        // Remove duplicates and sort
        const uniqueTxs = Array.from(
          new Map(allTxs.map(tx => [tx.hash, tx])).values()
        ).sort((a, b) => b.height - a.height);

        setTransactions(uniqueTxs);
      } catch (e) {
        console.log('Transaction search error:', e);
      }

    } catch (err) {
      console.error('Address fetch error:', err);
      setError(err.message || 'Failed to load address data');
    } finally {
      setLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchAddressData();
  }, [fetchAddressData]);

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

  return (
    <div className="explorer-container">
      <Header />
      <main className="explorer-main">
        {/* Address Header */}
        <div className="tx-detail-header">
          <h1 className="tx-detail-title">Address</h1>
          {address.startsWith('twilight') && (
            <span className="tx-type transfer">Twilight</span>
          )}
        </div>

        {/* Address Info */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Address Details</h3>
          </div>
          <div className="explorer-card-body">
            <div className="info-item" style={{ marginBottom: '1rem' }}>
              <div className="info-label">Address</div>
              <div className="info-value hash" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ wordBreak: 'break-all' }}>{address}</span>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(address)}
                  title="Copy to clipboard"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>

            {account && (
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">Account Type</div>
                  <div className="info-value">
                    {account['@type']?.split('.').pop() || 'Unknown'}
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-label">Sequence</div>
                  <div className="info-value">{account.sequence || '0'}</div>
                </div>
                <div className="info-item">
                  <div className="info-label">Account Number</div>
                  <div className="info-value">{account.account_number || '-'}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Balances */}
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Balances</h3>
          </div>
          <div className="explorer-card-body">
            {balances.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {balances.map((balance, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      padding: '1rem 1.5rem',
                      borderRadius: '8px',
                      minWidth: '200px',
                    }}
                  >
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                      {balance.denom?.toUpperCase() || 'Unknown'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: '600' }}>
                      {(parseInt(balance.amount) / 1000000).toLocaleString(undefined, { maximumFractionDigits: 6 })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
                No balances found
              </div>
            )}
          </div>
        </div>

        {/* Clearing Account (ZkOS) */}
        {clearingAccount && (
          <div className="explorer-card">
            <div className="explorer-card-header">
              <h3 className="explorer-card-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
                ZkOS Clearing Account
              </h3>
            </div>
            <div className="explorer-card-body">
              <div className="info-grid">
                {clearingAccount.btcValue && (
                  <div className="info-item">
                    <div className="info-label">BTC Balance</div>
                    <div className="info-value" style={{ color: 'var(--accent-green)' }}>
                      {(parseInt(clearingAccount.btcValue) / 100000000).toFixed(8)} BTC
                    </div>
                  </div>
                )}
                {clearingAccount.qqAccount && (
                  <div className="info-item">
                    <div className="info-label">QQ Account</div>
                    <div className="info-value" style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>
                      {clearingAccount.qqAccount}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Transactions */}
        {transactions.length > 0 ? (
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
              Transactions ({transactions.length})
            </h3>
            <TransactionList
              transactions={transactions}
              showHeader={false}
              loading={false}
            />
          </div>
        ) : (
          <div className="explorer-card">
            <div className="explorer-card-header">
              <h3 className="explorer-card-title">Transactions</h3>
            </div>
            <div className="explorer-card-body" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
              No transactions found for this address
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AddressDetail;
