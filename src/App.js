import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/sm" style={{ color: 'white', textDecoration: 'none' }}>SM</Link>
            </li>
            <li>
              <Link to="/ss" style={{ color: 'white', textDecoration: 'none' }}>SS</Link>
            </li>
            <li>
              <Link to="/contrato" style={{ color: 'white', textDecoration: 'none' }}>Contrato</Link>
            </li>
          </ul>
        </nav>

        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
