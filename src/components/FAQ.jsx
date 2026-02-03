import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  // Datos de las preguntas (Estratégicas para vender)
  const questions = [
    {
      question: "¿Trabajan con plantillas de WordPress?",
      answer: "No. En Rawkode hacemos Ingeniería de Software real. Desarrollamos tu proyecto desde cero usando código moderno (React, Node.js, Astro.) para garantizar velocidad, seguridad y escalabilidad que ninguna plantilla puede ofrecer."
    },
    {
      question: "¿El código fuente es mío al terminar?",
      answer: "Absolutamente. Creemos en la propiedad total. Una vez finalizado el pago del proyecto, te entregamos el repositorio completo y todos los accesos. No te atamos con contratos de alquiler."
    },
    {
      question: "¿Cuánto tiempo tarda un desarrollo?",
      answer: "Depende de la complejidad. Una Landing Page profesional toma entre 3-5 días. Un catálogo interactivo o App web puede tomar de 2 a 4 semanas. En la cotización te daremos un cronograma exacto."
    },
    {
      question: "¿Qué necesito para empezar?",
      answer: "Solo tu idea y el contenido básico (logo, textos). Nosotros nos encargamos de la estructura, el diseño de interfaz y la programación. Si no tienes hosting o dominio, te asesoramos para comprarlos a tu nombre."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <div className="faq-header">
          <span className="faq-tag">DUDAS COMUNES</span>
          <h2 className="faq-title">Preguntas <span className="red-text">Frecuentes</span>.</h2>
        </div>

        <div className="faq-grid">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <div className="icon-wrapper">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;