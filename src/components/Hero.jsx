import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import './Hero.css';

// Importa tus animaciones
import devAnim from '../assets/developer.json';
import storeAnim from '../assets/ecommerce.json';
import appAnim from '../assets/mobile_app.json';

const scenes = [
  {
    badge: "Ingeniería de Software",
    titleLine1: "Desarrollo",
    titleLine2: "Real.",
    titleLine3: "Sin Filtros.",
    description: "Soy Kelvin, el desarrollador detrás de Rawkode. Software de alto rendimiento, sin intermediarios y con código seguro.",
    color: "#E50914",
    animation: devAnim
  },
  {
    badge: "E-commerce & Ventas",
    titleLine1: "Tu Negocio",
    titleLine2: "24/7.",
    titleLine3: "Escalable.",
    description: "Tiendas online que sí venden. Integración con WhatsApp, pasarelas de pago y catálogos ultra rápidos.",
    color: "#3b82f6",
    animation: storeAnim
  },
  {
    badge: "Aplicaciones Nativas",
    titleLine1: "Apps que",
    titleLine2: "Vuelan.",
    titleLine3: "iOS & Android.",
    description: "Lleva tu idea al bolsillo de tus clientes. Desarrollo móvil fluido y potente. No es una web disfrazada.",
    color: "#10b981",
    animation: appAnim
  }
];

// --- COMPONENTE INTELIGENTE PARA LA ANIMACIÓN ---
// Este componente recibe "isActive" y obliga a Lottie a obedecer
const LottieLayer = ({ animationData, isActive }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (isActive) {
      // Si es mi turno, fuerzo el PLAY
      lottieRef.current?.play();
    } else {
      // Si ya no es mi turno, fuerzo PAUSA (ahorra memoria)
      lottieRef.current?.pause();
    }
  }, [isActive]);

  return (
    <Lottie 
      lottieRef={lottieRef} // Conectamos el control remoto
      animationData={animationData} 
      loop={true} 
      autoplay={isActive} // Inicialización
      style={{ width: '100%', height: '100%' }}
    />
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % scenes.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  const currentScene = scenes[index];

  return (
    <section className="hero-split-container">
      <div className="texture-overlay"></div>

      {/* --- IZQUIERDA --- */}
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
            <div className="trust-badge">
              <span className="status-dot" style={{ backgroundColor: currentScene.color, boxShadow: `0 0 10px ${currentScene.color}` }}></span> 
              {currentScene.badge}
            </div>
            
            <h1 className="hero-title-human">
              {currentScene.titleLine1} <span style={{ color: currentScene.color }}>{currentScene.titleLine2}</span>
              <br /> {currentScene.titleLine3}
            </h1>
            
            <p className="hero-description-human">
              {currentScene.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div className="cta-group" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button className="cta-button-solid" onClick={scrollToCalculator}>
            COTIZAR AHORA
          </button>
          
          <div className="scene-indicators">
            {scenes.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                className={`indicator-dot ${i === index ? 'active' : ''}`}
                style={i === index ? { backgroundColor: currentScene.color } : {}}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- DERECHA --- */}
      <div className="hero-image-side">
        <div className="lottie-stack-container">
          
          {scenes.map((scene, i) => (
            <div 
              key={i}
              className="lottie-layer"
              style={{ 
                opacity: index === i ? 1 : 0, 
                zIndex: index === i ? 10 : 0,
                pointerEvents: 'none'
              }}
            >
              {/* Usamos el nuevo componente inteligente */}
              <LottieLayer 
                animationData={scene.animation} 
                isActive={index === i}
              />
            </div>
          ))}

          <div className="glow-effect" style={{ background: `radial-gradient(circle, ${currentScene.color}40 0%, rgba(0, 0, 0, 0) 70%)` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;