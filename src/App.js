import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SM from './SM';
import SS from './SS';
import Contrato from './Contrato';

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sm" element={<SM />} />
          <Route path="/ss" element={<SS />} />
          <Route path="/contrato" element={<Contrato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
