import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ZkOS Transaction type constants
export const ZKOS_TX_TYPES = {
  TRANSFER: 'transfer',
  SCRIPT: 'script',
  MESSAGE: 'message',
  DEPLOY: 'deploy',
  UNKNOWN: 'unknown',
};

// IOType constants
export const IO_TYPES = {
  COIN: 0,
  MEMO: 1,
  STATE: 2,
};

// Format hex for display
function formatHex(hex, maxLen = 32) {
  if (!hex) return '-';
  if (hex.length <= maxLen) return hex;
  return `${hex.slice(0, maxLen / 2)}...${hex.slice(-maxLen / 2)}`;
}

// Format satoshis to BTC
function formatBTC(satoshis) {
  if (!satoshis && satoshis !== 0) return '-';
  const btc = satoshis / 100000000;
  return btc.toFixed(8);
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// IOType badge
function IOTypeBadge({ type }) {
  const typeNames = {
    [IO_TYPES.COIN]: { name: 'Coin', color: 'var(--accent-purple)' },
    [IO_TYPES.MEMO]: { name: 'Memo', color: 'var(--accent-orange)' },
    [IO_TYPES.STATE]: { name: 'State', color: 'var(--accent-cyan)' },
    'coin': { name: 'Coin', color: 'var(--accent-purple)' },
    'memo': { name: 'Memo', color: 'var(--accent-orange)' },
    'state': { name: 'State', color: 'var(--accent-cyan)' },
  };

  const typeInfo = typeNames[type] || { name: 'Unknown', color: 'var(--text-muted)' };

  return (
    <span
      style={{
        backgroundColor: `${typeInfo.color}20`,
        color: typeInfo.color,
        padding: '0.125rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 500,
      }}
    >
      {typeInfo.name}
    </span>
  );
}

// Transaction Type Badge
function TxTypeBadge({ type }) {
  const typeStyles = {
    [ZKOS_TX_TYPES.TRANSFER]: { bg: 'var(--accent-green)', label: 'Transfer' },
    [ZKOS_TX_TYPES.SCRIPT]: { bg: 'var(--accent-purple)', label: 'Script' },
    [ZKOS_TX_TYPES.MESSAGE]: { bg: 'var(--accent-orange)', label: 'Message' },
    [ZKOS_TX_TYPES.DEPLOY]: { bg: 'var(--accent-cyan)', label: 'Deploy Contract' },
    [ZKOS_TX_TYPES.UNKNOWN]: { bg: 'var(--text-muted)', label: 'Unknown' },
  };

  const style = typeStyles[type] || typeStyles[ZKOS_TX_TYPES.UNKNOWN];

  return (
    <span
      style={{
        backgroundColor: `${style.bg}20`,
        color: style.bg,
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        fontSize: '0.875rem',
        fontWeight: 600,
      }}
    >
      {style.label}
    </span>
  );
}

// Decoded Input Item
function DecodedInputItem({ input, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '0.5rem',
        border: '1px solid var(--border-color)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              backgroundColor: 'var(--accent-red)20',
              color: 'var(--accent-red)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            #{index}
          </span>
          {input.io_type !== undefined && <IOTypeBadge type={input.io_type} />}
          <div>
            {input.txid || input.previous_output?.txid ? (
              <Link
                to={`/explorer/tx/${input.txid || input.previous_output?.txid}`}
                className="io-address"
              >
                {formatHex(input.txid || input.previous_output?.txid, 24)}
              </Link>
            ) : input.owner ? (
              <span className="io-address">{formatHex(input.owner, 24)}</span>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>Unknown</span>
            )}
            {(input.output_index !== undefined || input.previous_output?.index !== undefined) && (
              <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem', fontSize: '0.75rem' }}>
                : {input.output_index ?? input.previous_output?.index}
              </span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {input.value !== undefined && (
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-red)' }}>
              {formatBTC(input.value)} BTC
            </span>
          )}
          <button
            className="details-toggle"
            onClick={() => setExpanded(!expanded)}
            style={{ fontSize: '0.75rem' }}
          >
            {expanded ? 'Hide' : 'Details'}
          </button>
        </div>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.75rem',
          }}
        >
          {input.commitment && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Commitment: </span>
              <code style={{ color: 'var(--accent-cyan)' }}>{formatHex(input.commitment, 48)}</code>
            </div>
          )}
          {input.witness_index !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Witness Index: </span>
              <span>{input.witness_index}</span>
            </div>
          )}
          {input.script_address && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Script Address: </span>
              <code style={{ color: 'var(--accent-purple)' }}>{formatHex(input.script_address, 48)}</code>
            </div>
          )}
          {input.state_nonce !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>State Nonce: </span>
              <span>{input.state_nonce}</span>
            </div>
          )}
          <pre
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.5rem',
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '200px',
              margin: 0,
            }}
          >
            {JSON.stringify(input, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// Decoded Output Item
function DecodedOutputItem({ output, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '0.5rem',
        border: '1px solid var(--border-color)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              backgroundColor: 'var(--accent-green)20',
              color: 'var(--accent-green)',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            #{index}
          </span>
          {output.io_type !== undefined && <IOTypeBadge type={output.io_type} />}
          <div>
            {output.owner ? (
              <span className="io-address">{formatHex(output.owner, 24)}</span>
            ) : output.script_address ? (
              <span className="io-address">{formatHex(output.script_address, 24)}</span>
            ) : (
              <span style={{ color: 'var(--text-muted)' }}>Unknown</span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {output.value !== undefined && (
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-green)' }}>
              {formatBTC(output.value)} BTC
            </span>
          )}
          <button
            className="details-toggle"
            onClick={() => setExpanded(!expanded)}
            style={{ fontSize: '0.75rem' }}
          >
            {expanded ? 'Hide' : 'Details'}
          </button>
        </div>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.75rem',
          }}
        >
          {output.commitment && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Commitment: </span>
              <code style={{ color: 'var(--accent-cyan)' }}>{formatHex(output.commitment, 48)}</code>
            </div>
          )}
          {output.encrypted_value && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Encrypted Value: </span>
              <code style={{ color: 'var(--accent-orange)' }}>{formatHex(output.encrypted_value, 48)}</code>
            </div>
          )}
          {output.script_address && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Script Address: </span>
              <code style={{ color: 'var(--accent-purple)' }}>{formatHex(output.script_address, 48)}</code>
            </div>
          )}
          {output.timebounds && (
            <div style={{ marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Timebounds: </span>
              <span>{JSON.stringify(output.timebounds)}</span>
            </div>
          )}
          <pre
            style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.5rem',
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '200px',
              margin: 0,
            }}
          >
            {JSON.stringify(output, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

// Program/Script Display
function ProgramDisplay({ program, callProof }) {
  const [showBytecode, setShowBytecode] = useState(false);

  if (!program) return null;

  return (
    <div className="explorer-card">
      <div className="explorer-card-header">
        <h3 className="explorer-card-title">Contract Program</h3>
        <button className="details-toggle" onClick={() => setShowBytecode(!showBytecode)}>
          {showBytecode ? 'Hide Bytecode' : 'Show Bytecode'}
        </button>
      </div>
      <div className="explorer-card-body">
        {callProof && (
          <div style={{ marginBottom: '1rem' }}>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Call Proof Root</div>
                <div className="info-value">
                  <code>{formatHex(callProof.root, 48)}</code>
                </div>
              </div>
              {callProof.leaf_index !== undefined && (
                <div className="info-item">
                  <div className="info-label">Leaf Index</div>
                  <div className="info-value">{callProof.leaf_index}</div>
                </div>
              )}
            </div>
          </div>
        )}
        {showBytecode && (
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '8px',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                {program.length / 2} bytes
              </span>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(program)}
                title="Copy bytecode"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </button>
            </div>
            <pre
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '0.75rem',
                borderRadius: '6px',
                overflow: 'auto',
                maxHeight: '300px',
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                wordBreak: 'break-all',
                whiteSpace: 'pre-wrap',
                margin: 0,
              }}
            >
              {program}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

// Witness Display
function WitnessDisplay({ witnesses }) {
  const [expanded, setExpanded] = useState(false);

  if (!witnesses || witnesses.length === 0) return null;

  return (
    <div className="explorer-card">
      <div className="explorer-card-header">
        <h3 className="explorer-card-title">Witnesses ({witnesses.length})</h3>
        <button className="details-toggle" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide' : 'Show'}
        </button>
      </div>
      {expanded && (
        <div className="explorer-card-body">
          {witnesses.map((witness, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span
                  style={{
                    backgroundColor: 'var(--bg-hover)',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                  }}
                >
                  #{index}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {witness.type || 'Witness'}
                </span>
              </div>
              {witness.signature && (
                <div style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Signature: </span>
                  <code style={{ color: 'var(--accent-cyan)' }}>{formatHex(witness.signature, 48)}</code>
                </div>
              )}
              {witness.sigma_proof && (
                <div style={{ fontSize: '0.75rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Sigma Proof: </span>
                  <code style={{ color: 'var(--accent-purple)' }}>{formatHex(witness.sigma_proof, 48)}</code>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Main Decoded Transaction Component
function DecodedTransaction({ decoded, rawBytecode }) {
  const [showRaw, setShowRaw] = useState(false);

  // Determine transaction type from decoded data
  const getTxType = () => {
    if (!decoded) return ZKOS_TX_TYPES.UNKNOWN;
    if (decoded.tx_type) return decoded.tx_type;
    if (decoded.program && decoded.program.length > 0) {
      // Check if this is a deployment (has zero-balance proof)
      if (decoded.witnesses?.some(w => w.zero_balance_proof)) {
        return ZKOS_TX_TYPES.DEPLOY;
      }
      return ZKOS_TX_TYPES.SCRIPT;
    }
    if (decoded.inputs?.some(i => i.io_type === IO_TYPES.STATE)) {
      return ZKOS_TX_TYPES.SCRIPT;
    }
    return ZKOS_TX_TYPES.TRANSFER;
  };

  const txType = getTxType();
  const inputs = decoded?.inputs || [];
  const outputs = decoded?.outputs || [];
  const totalInputValue = inputs.reduce((sum, i) => sum + (i.value || 0), 0);
  const totalOutputValue = outputs.reduce((sum, o) => sum + (o.value || 0), 0);
  const fee = decoded?.fee ?? (totalInputValue - totalOutputValue);

  return (
    <div>
      {/* Transaction Overview */}
      <div className="explorer-card">
        <div className="explorer-card-header">
          <h3 className="explorer-card-title">Decoded ZkOS Transaction</h3>
          <TxTypeBadge type={txType} />
        </div>
        <div className="explorer-card-body">
          {decoded ? (
            <div className="info-grid">
              {decoded.version !== undefined && (
                <div className="info-item">
                  <div className="info-label">Version</div>
                  <div className="info-value">{decoded.version}</div>
                </div>
              )}
              {decoded.maturity !== undefined && (
                <div className="info-item">
                  <div className="info-label">Maturity</div>
                  <div className="info-value">{decoded.maturity}</div>
                </div>
              )}
              <div className="info-item">
                <div className="info-label">Inputs</div>
                <div className="info-value">{inputs.length}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Outputs</div>
                <div className="info-value">{outputs.length}</div>
              </div>
              {fee > 0 && (
                <div className="info-item">
                  <div className="info-label">Transaction Fee</div>
                  <div className="info-value" style={{ color: 'var(--accent-orange)' }}>
                    {formatBTC(fee)} BTC
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-muted)' }}>
              Unable to decode transaction bytecode
            </div>
          )}
        </div>
      </div>

      {/* Inputs */}
      {inputs.length > 0 && (
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title" style={{ color: 'var(--accent-red)' }}>
              Inputs ({inputs.length})
            </h3>
            {totalInputValue > 0 && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                Total: {formatBTC(totalInputValue)} BTC
              </span>
            )}
          </div>
          <div className="explorer-card-body">
            {inputs.map((input, index) => (
              <DecodedInputItem key={index} input={input} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Outputs */}
      {outputs.length > 0 && (
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title" style={{ color: 'var(--accent-green)' }}>
              Outputs ({outputs.length})
            </h3>
            {totalOutputValue > 0 && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                Total: {formatBTC(totalOutputValue)} BTC
              </span>
            )}
          </div>
          <div className="explorer-card-body">
            {outputs.map((output, index) => (
              <DecodedOutputItem key={index} output={output} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Program (for Script transactions) */}
      {decoded?.program && (
        <ProgramDisplay program={decoded.program} callProof={decoded.call_proof} />
      )}

      {/* Witnesses */}
      {decoded?.witnesses && <WitnessDisplay witnesses={decoded.witnesses} />}

      {/* Raw Bytecode */}
      {rawBytecode && (
        <div className="explorer-card">
          <div className="explorer-card-header">
            <h3 className="explorer-card-title">Raw Bytecode</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(rawBytecode)}
                title="Copy bytecode"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </button>
              <button className="details-toggle" onClick={() => setShowRaw(!showRaw)}>
                {showRaw ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {showRaw && (
            <div className="explorer-card-body">
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '8px',
                  padding: '1rem',
                }}
              >
                <div style={{ marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {rawBytecode.length / 2} bytes
                </div>
                <pre
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    overflow: 'auto',
                    maxHeight: '400px',
                    fontSize: '0.65rem',
                    fontFamily: 'var(--font-mono)',
                    wordBreak: 'break-all',
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                  }}
                >
                  {rawBytecode}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DecodedTransaction;
