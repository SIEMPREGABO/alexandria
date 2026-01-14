import React from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../themeManager';

const Navbar = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <nav style={{
      padding: '20px',
      backgroundColor: 'var(--light)',
      color: 'var(--dark)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 10px var(--shadow-light)',
      transition: 'var(--transition)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontSize: '28px',
            fontWeight: '900',
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Montserrat, sans-serif'
          }}>
            <img src="/logo.png" alt="Boss Babe Lab Logo" style={{ height: '50px', width: '100px', verticalAlign: 'middle', marginRight: '10px' }} />
          </div>
        </Link>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0, alignItems: 'center' }}>
          <li>
            <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          </li>
          <li>
            <Link to="/sm" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>SM</Link>
          </li>
          <li>
            <Link to="/ss" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>SS</Link>
          </li>
          <li>
            <Link to="/contrato" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Contrato</Link>
          </li>
          <li>
            <button onClick={handleToggleTheme} style={{
              background: 'var(--button)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'var(--transition)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
