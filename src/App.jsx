// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

// Importamos las páginas
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar Global (aparece en todas las páginas) */}
        <Navbar />
        
        {/* Aquí definimos las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
        </Routes>

        {/* Footer Global */}
        <footer style={{ 
          textAlign: 'center', 
          padding: '40px', 
          borderTop: '1px solid #222',
          background: '#050505',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p>RAWKODE © 2026 | Caracas, Venezuela 🇻🇪</p>
          
          {/* Enlaces legales */}
          <div style={{ marginTop: '15px', fontSize: '0.85rem' }}>
            <Link to="/privacidad" style={{ color: '#888', marginRight: '20px', textDecoration: 'none' }}>
              Privacidad
            </Link>
            <Link to="/terminos" style={{ color: '#888', textDecoration: 'none' }}>
              Términos
            </Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;