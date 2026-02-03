import React from 'react';
/* Importamos BookOpen para el catálogo */
import { Monitor, Smartphone, BookOpen, Code2 } from 'lucide-react'; 
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Ingeniería Web",
      description: "No son simples páginas. Son aplicaciones web progresivas (PWA) construidas con React y Vite para cargar en milisegundos.",
      tags: ["React", "SPA", "SEO"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Apps Nativas",
      description: "Lleva tu negocio al bolsillo de tus clientes. Desarrollo para iOS y Android con una experiencia de usuario fluida y nativa.",
      tags: ["iOS", "Android", "React Native"]
    },
    {
      /* CAMBIO AQUÍ: CATÁLOGOS EN LUGAR DE E-COMMERCE */
      icon: <BookOpen size={32} />,
      title: "Catálogos Digitales",
      description: "Olvídate de las tiendas online complejas. Creamos catálogos interactivos donde tus clientes eligen y te envían el pedido directo a WhatsApp.",
      tags: ["WhatsApp API", "QR Access", "Sin Comisiones"]
    },
    
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* CABECERA */}
        <div className="section-header">
          <span className="section-tag">CAPACIDADES TÉCNICAS</span>
          <h2 className="section-title">Construimos <span className="red-text">Activos Digitales</span>.</h2>
          <p className="section-subtitle">
            Dejamos las plantillas genéricas para los aficionados. 
            Nosotros programamos soluciones a medida que realmente resuelven problemas de negocio.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              
              <div className="card-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* STACK TECNOLÓGICO */}
        <div className="tech-stack">
          <p className="stack-label">POWERED BY:</p>
          <div className="stack-logos">
            <span>REACT</span>
            <span className="separator">/</span>
            <span>VITE</span>
            <span className="separator">/</span>
            <span>NODE.JS</span>
            <span className="separator">/</span>
            <span>FIREBASE</span>
            <span className="separator">/</span>
            <span>TAILWIND</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;