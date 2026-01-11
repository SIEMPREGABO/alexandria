import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/routes';
import { toggleTheme } from './themeManager';

function App() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  return (
    <Router>
      <div className="App">
            
        <AppRoutes />

        

      </div>
    </Router>
  );
}

export default App;
