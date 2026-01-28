import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Format satoshis to BTC
function formatBTC(satoshis) {
  if (!satoshis && satoshis !== 0) return '-';
  const btc = satoshis / 100000000;
  return btc.toFixed(8);
}

// Truncate address for display
function truncateAddress(address, startLen = 12, endLen = 8) {
  if (!address || address.length <= startLen + endLen) return address;
  return `${address.slice(0, startLen)}...${address.slice(-endLen)}`;
}

// UTXO type badge component
function UTXOTypeBadge({ type }) {
  const typeNames = {
    0: 'coin',
    1: 'memo',
    2: 'state',
    coin: 'coin',
    memo: 'memo',
    state: 'state',
  };
  const typeName = typeNames[type] || 'unknown';

  return <span className={`utxo-type ${typeName}`}>{typeName}</span>;
}

// Single input item
function InputItem({ input, index }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="io-item input">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
        <span style={{ color: 'var(--accent-red)', fontSize: '1.25rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            {input.utxoType !== undefined && <UTXOTypeBadge type={input.utxoType} />}
            {input.txid ? (
              <Link to={`/explorer/tx/${input.txid}`} className="io-address">
                {truncateAddress(input.txid, 16, 12)}
              </Link>
            ) : input.address ? (
              <Link to={`/explorer/address/${input.address}`} className="io-address">
                {truncateAddress(input.address)}
              </Link>
            ) : (
              <span className="io-address" style={{ color: 'var(--text-muted)' }}>
                Unknown
              </span>
            )}
            {input.outputIndex !== undefined && (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                #{input.outputIndex}
              </span>
            )}
          </div>
          {showDetails && input.commitment && (
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <div>Commitment: {truncateAddress(input.commitment, 20, 16)}</div>
              {input.witnessIndex !== undefined && <div>Witness Index: {input.witnessIndex}</div>}
            </div>
          )}
        </div>
      </div>
      <div className="io-amount">
        <span className="io-amount-btc">{formatBTC(input.value)}</span>
        <span className="io-amount-unit">BTC</span>
      </div>
      {(input.commitment || input.witnessIndex !== undefined) && (
        <button
          className="details-toggle"
          onClick={() => setShowDetails(!showDetails)}
          style={{ marginLeft: '0.5rem' }}
        >
          {showDetails ? 'Hide' : 'Details'}
        </button>
      )}
    </div>
  );
}

// Single output item
function OutputItem({ output, index }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="io-item output">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
        <span style={{ color: 'var(--accent-green)', fontSize: '1.25rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            {output.utxoType !== undefined && <UTXOTypeBadge type={output.utxoType} />}
            {output.address ? (
              <Link to={`/explorer/address/${output.address}`} className="io-address">
                {truncateAddress(output.address)}
              </Link>
            ) : output.owner ? (
              <Link to={`/explorer/address/${output.owner}`} className="io-address">
                {truncateAddress(output.owner)}
              </Link>
            ) : (
              <span className="io-address" style={{ color: 'var(--text-muted)' }}>
                Unknown
              </span>
            )}
          </div>
          {showDetails && (
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {output.commitment && <div>Commitment: {truncateAddress(output.commitment, 20, 16)}</div>}
              {output.scriptAddress && <div>Script: {truncateAddress(output.scriptAddress, 16, 12)}</div>}
              {output.timebounds && <div>Timebounds: {JSON.stringify(output.timebounds)}</div>}
            </div>
          )}
        </div>
      </div>
      <div className="io-amount">
        <span className="io-amount-btc">{formatBTC(output.value)}</span>
        <span className="io-amount-unit">BTC</span>
      </div>
      {(output.commitment || output.scriptAddress) && (
        <button
          className="details-toggle"
          onClick={() => setShowDetails(!showDetails)}
          style={{ marginLeft: '0.5rem' }}
        >
          {showDetails ? 'Hide' : 'Details'}
        </button>
      )}
    </div>
  );
}

// Main InputsOutputs component
function InputsOutputs({ inputs = [], outputs = [], fee = null }) {
  const totalInput = inputs.reduce((sum, input) => sum + (input.value || 0), 0);
  const totalOutput = outputs.reduce((sum, output) => sum + (output.value || 0), 0);
  const calculatedFee = fee !== null ? fee : totalInput - totalOutput;

  return (
    <div className="explorer-card">
      <div className="explorer-card-header">
        <h3 className="explorer-card-title">Inputs & Outputs</h3>
        <button className="details-toggle">Details</button>
      </div>
      <div className="explorer-card-body">
        <div className="io-container">
          {/* Inputs Section */}
          <div className="io-section">
            <h4 className="io-section-title inputs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Inputs ({inputs.length})
            </h4>
            {inputs.length > 0 ? (
              inputs.map((input, index) => (
                <InputItem key={index} input={input} index={index} />
              ))
            ) : (
              <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
                No inputs
              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="io-arrow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* Outputs Section */}
          <div className="io-section">
            <h4 className="io-section-title outputs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Outputs ({outputs.length})
            </h4>
            {outputs.length > 0 ? (
              outputs.map((output, index) => (
                <OutputItem key={index} output={output} index={index} />
              ))
            ) : (
              <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
                No outputs
              </div>
            )}
            {outputs.length > 0 && (
              <div className="io-total">
                <span className="io-total-label">Total Output</span>
                <span className="io-total-amount">{formatBTC(totalOutput)} BTC</span>
              </div>
            )}
          </div>
        </div>

        {/* Fee display */}
        {calculatedFee > 0 && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{ color: 'var(--text-secondary)' }}>Transaction Fee</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-orange)' }}>
              {formatBTC(calculatedFee)} BTC
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputsOutputs;
