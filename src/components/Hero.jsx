import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import './Hero.css';

// --- NUEVO: IMPORTAR TUS 3 ANIMACIONES ---
// Asegúrate de tener estos 3 archivos en tu carpeta src/assets/
import devAnim from '../assets/developer.json';      // Para la escena 1
import storeAnim from '../assets/ecommerce.json';    // Para la escena 2 (descárgala)
import appAnim from '../assets/mobile_app.json';    // Para la escena 3 (descárgala)


// --- DEFINIMOS LAS ESCENAS (Ahora incluyen la animación) ---
const scenes = [
  {
    badge: "Ingeniería de Software en Venezuela",
    titleLine1: "Desarrollo",
    titleLine2: "Real.",
    titleLine3: "Sin Filtros.",
    description: "Soy Kelvin, el desarrollador detrás de Rawkode. Ayudo a negocios a construir software de alto rendimiento. Sin intermediarios y con la seguridad de un código bien hecho.",
    color: "#E50914",
    animation: devAnim // NUEVO: Asignamos la animación 1
  },
  {
    badge: "E-commerce & Ventas",
    titleLine1: "Tu Negocio",
    titleLine2: "24/7.",
    titleLine3: "Sin Límites.",
    description: "Creamos tiendas online que sí venden. Integración con WhatsApp, pasarelas de pago y catálogos ultra rápidos. Deja de perder clientes por una web lenta.",
    color: "#3b82f6",
    animation: storeAnim // NUEVO: Asignamos la animación 2
  },
  {
    badge: "Aplicaciones Nativas",
    titleLine1: "Apps que",
    titleLine2: "Vuelan.",
    titleLine3: "iOS & Android.",
    description: "Lleva tu idea al bolsillo de tus clientes. Desarrollo de aplicaciones móviles fluidas, potentes y escalables. No es una web disfrazada, es potencia real.",
    color: "#10b981",
    animation: appAnim // NUEVO: Asignamos la animación 3
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Temporizador para cambiar de escena cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % scenes.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Variantes para el texto (deslizamiento)
  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  // NUEVO: Variantes para la animación Lottie (suave fade in/out)
  const lottieVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: "easeIn" } }
  };

  const currentScene = scenes[index];

  return (
    <section className="hero-split-container">
      <div className="texture-overlay"></div>

      {/* --- IZQUIERDA (TEXTO CAMBIANTE) --- */}
      <div className="hero-text-side">
        <AnimatePresence mode='wait'>
          <motion.div
            key={index} 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
            className="scene-content"
          >
            {/* BADGE */}
            <div className="trust-badge">
              <span className="status-dot" style={{ backgroundColor: currentScene.color, boxShadow: `0 0 10px ${currentScene.color}` }}></span> 
              {currentScene.badge}
            </div>
            
            {/* TÍTULO */}
            <h1 className="hero-title-human">
              {currentScene.titleLine1} <span style={{ color: currentScene.color }}>{currentScene.titleLine2}</span>
              <br /> {currentScene.titleLine3}
            </h1>
            
            {/* DESCRIPCIÓN */}
            <p className="hero-description-human">
              {currentScene.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* BOTÓN E INDICADORES (Fijos) */}
        <motion.div 
          className="cta-group"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <button className="cta-button-solid" onClick={scrollToCalculator}>
            COTIZAR AHORA
          </button>
          
          <div className="scene-indicators">
            {scenes.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                className={`indicator-dot ${i === index ? 'active' : ''}`}
                style={i === index ? { backgroundColor: currentScene.color, borderColor: currentScene.color, boxShadow: `0 0 10px ${currentScene.color}80` } : {}}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- DERECHA (ANIMACIÓN LOTTIE CAMBIANTE) --- */}
      <div className="hero-image-side">
        <div className="lottie-container">
          
          {/* NUEVO: AnimatePresence para la transición de Lottie */}
          <AnimatePresence mode='wait'>
             <motion.div
               key={index} // La clave es el índice, al cambiar, se dispara la transición
               variants={lottieVariants}
               initial="initial"
               animate="animate"
               exit="exit"
               className="lottie-motion-wrapper" // Clase auxiliar para CSS
             >
                {/* Lottie recibe dinámicamente el archivo de la escena actual */}
                <Lottie 
                  animationData={currentScene.animation} 
                  loop={true} 
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
             </motion.div>
          </AnimatePresence>

          <div className="glow-effect" style={{ background: `radial-gradient(circle, ${currentScene.color}50 0%, rgba(0, 0, 0, 0) 70%)` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;