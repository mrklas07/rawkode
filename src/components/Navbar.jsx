import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Importamos iconos
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Nuevo estado para el menú móvil

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cerrar el menú al hacer clic en un link
  const handleLinkClick = (id) => {
    setIsOpen(false); // Cerramos el menú móvil
    if (id === 'home') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        
        {/* LOGO */}
        <div className="brand" onClick={() => handleLinkClick('home')}>
          RAWKODE<span className="dot">.</span>
        </div>

        {/* ICONO MENÚ MÓVIL (Solo visible en celular) */}
        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>

        {/* MENÚ DE NAVEGACIÓN (Escritorio + Móvil) */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li onClick={() => handleLinkClick('home')}>Inicio</li>
          <li onClick={() => handleLinkClick('services')}>Servicios</li>
          <li onClick={() => handleLinkClick('projects')}>Portafolio</li>
          <li onClick={() => handleLinkClick('calculator')}>Cotizador</li>
          
          {/* En móvil, mostramos el botón de acción dentro del menú para fácil acceso */}
          <li className="mobile-cta">
             <a 
              href="https://wa.me/584124620795" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-talk-mobile"
            >
              Hablemos Ahora →
            </a>
          </li>
        </ul>

        {/* BOTÓN DE ACCIÓN (Solo visible en Escritorio) */}
        <div className="nav-action desktop-only">
          <a 
            href="https://wa.me/584124620795" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-talk"
          >
            Hablemos <span className="arrow">→</span>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;