import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Pool Kids App",
      category: "Landing Page / Reserva",
      description: "Plataforma de presentación para servicio de alquiler de piscinas privadas. Optimización de carga de imágenes y diseño UX enfocado en conversión rápida.",
      tech: ["React", "Vite", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      url: "https://poolkids-demo.vercel.app" 
    },
    {
      title: "JereGamePlus Store",
      category: "E-commerce / Digital",
      description: "Plataforma completa para venta de productos digitales y videojuegos. Desplegada en Firebase con gestión de dominio personalizado y alta disponibilidad.",
      tech: ["React", "Firebase", "Cloud Functions", "Tailwind"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
      url: "https://jeregameplus.com" 
    },
    {
      /* --- PROYECTO 3: JBK STUDIO (En Desarrollo) --- */
      title: "JBK Studio",
      category: "Agencia / En Desarrollo 🚧",
      description: "Plataforma corporativa para agencia de marketing. Arquitectura diseñada para captación de leads y portafolio de alto impacto.",
      tech: ["React", "Framer Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      url: "#"
    },
    {
      /* --- PROYECTO 4: NATIVE (En Desarrollo) --- */
      title: "Native Store",
      category: "Catálogo / En Desarrollo 🚧",
      description: "Sistema de catálogo interactivo para marca de accesorios. Integración directa con API de WhatsApp para pedidos sin fricción.",
      tech: ["React", "WhatsApp API", "Google Sheets CMS"],
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
      url: "#"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <span className="projects-tag">PORTAFOLIO SELECCIONADO</span>
          <h2 className="projects-title">Código en <span className="outline-text">Acción</span>.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card"
              // Desactivar clic si está en desarrollo (#)
              style={project.url === "#" ? { cursor: "default", pointerEvents: "none" } : {}}
            >
              <div className="project-image-box">
                <img src={project.image} alt={project.title} />
                
                {/* Solo mostrar botón si tiene URL real */}
                {project.url !== "#" && (
                  <div className="overlay">
                    <span className="view-btn">
                      Ver Proyecto <ExternalLink size={18} />
                    </span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                
                <h3>
                  {project.title} 
                  {project.url !== "#" && <ArrowUpRight size={20} className="arrow-icon" />}
                </h3>
                
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;