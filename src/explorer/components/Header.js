import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // Detect search type
    if (query.match(/^[0-9]+$/)) {
      // Block height
      navigate(`/explorer/block/${query}`);
    } else if (query.match(/^[A-Fa-f0-9]{64}$/)) {
      // Transaction hash
      navigate(`/explorer/tx/${query}`);
    } else if (query.startsWith('twilight')) {
      // Twilight address
      navigate(`/explorer/address/${query}`);
    } else {
      // Default to transaction search
      navigate(`/explorer/tx/${query}`);
    }

    setSearchQuery('');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="explorer-header">
      <div className="explorer-header-content">
        <Link to="/explorer" className="explorer-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
            <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Twilight Explorer</span>
        </Link>

        <nav className="explorer-nav">
          <Link to="/explorer" className={isActive('/explorer') ? 'active' : ''}>
            Dashboard
          </Link>
          <Link to="/explorer/blocks" className={isActive('/explorer/blocks') ? 'active' : ''}>
            Blocks
          </Link>
          <Link to="/explorer/transactions" className={isActive('/explorer/transactions') ? 'active' : ''}>
            Transactions
          </Link>
        </nav>

        <form onSubmit={handleSearch} className="search-container" style={{ margin: 0, maxWidth: '400px' }}>
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search by Tx Hash / Block / Address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
