import React from 'react';

function StatCard({ label, value, color, icon }) {
  return (
    <div className="stat-card">
      {icon && (
        <div style={{ marginBottom: '0.5rem', color: color || 'var(--text-secondary)' }}>
          {icon}
        </div>
      )}
      <div className="stat-label">{label}</div>
      <div className={`stat-value ${color ? color : ''}`}>{value}</div>
    </div>
  );
}

function Stats({ stats = {}, loading = false }) {
  const {
    latestBlock = '-',
    totalTransactions = '-',
    totalAddresses = '-',
    avgBlockTime = '-',
    networkStatus = 'unknown',
    zkosTransactions = '-',
  } = stats;

  if (loading) {
    return (
      <div className="stats-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="stat-card">
            <div className="skeleton skeleton-text short" style={{ marginBottom: '0.5rem' }} />
            <div className="skeleton skeleton-text" style={{ height: '2rem', width: '60%', margin: '0 auto' }} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="stats-grid">
      <StatCard
        label="Latest Block"
        value={typeof latestBlock === 'number' ? latestBlock.toLocaleString() : latestBlock}
        color="blue"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        }
      />
      <StatCard
        label="Total Transactions"
        value={typeof totalTransactions === 'number' ? totalTransactions.toLocaleString() : totalTransactions}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M2 12h20" />
          </svg>
        }
      />
      <StatCard
        label="ZkOS Transactions"
        value={typeof zkosTransactions === 'number' ? zkosTransactions.toLocaleString() : zkosTransactions}
        color="green"
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v6l4 2" />
          </svg>
        }
      />
      <StatCard
        label="Indexed Addresses"
        value={typeof totalAddresses === 'number' ? totalAddresses.toLocaleString() : totalAddresses}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      />
      <StatCard
        label="Avg Block Time"
        value={avgBlockTime}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        }
      />
      <StatCard
        label="Network Status"
        value={networkStatus === 'syncing' ? 'Syncing' : 'Online'}
        color={networkStatus === 'syncing' ? '' : 'green'}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
          </svg>
        }
      />
    </div>
  );
}

export default Stats;
