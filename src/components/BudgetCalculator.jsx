import React, { useState } from 'react';
import './BudgetCalculator.css'; // Ahora crearemos este archivo

const BudgetCalculator = () => {
  // 1. Estados para guardar las elecciones del usuario
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    service: null,
    design: null,
    urgency: null
  });

  // 2. Datos de configuración (Aquí tú ajustas tus precios base)
  // Precios en USD (referenciales)
  const services = [
    { id: 'landing', label: 'Landing Page (One Page)', basePrice: 300 },
    { id: 'web', label: 'Sitio Corporativo (Multi-page)', basePrice: 500 },
    { id: 'webapp', label: 'App / IOS & Android', basePrice: 600 },
    { id: 'ecommerce', label: 'Catalogo Digital', basePrice: 270 },
  ];

  const designOptions = [
    { id: 'yes', label: 'Ya tengo el diseño (Figma/Adobe)', multiplier: 1.0 },
    { id: 'no', label: 'No tengo diseño, necesito ayuda', multiplier: 1.2 }, 
  ];

  const urgencyOptions = [
    { id: 'normal', label: 'Tiempo Normal (Estándar)', multiplier: 1.0 },
    { id: 'fast', label: 'Lo necesito para Ayer (Urgente)', multiplier: 1.3}, 
  ];

  // 3. Funciones de control
  const handleSelect = (category, item) => {
    setSelection({ ...selection, [category]: item });
    // Avanzar automáticamente al siguiente paso (opcional)
    if (step < 3) setStep(step + 1);
  };

  const calculateTotal = () => {
    if (!selection.service || !selection.design || !selection.urgency) return 0;
    
    let total = selection.service.basePrice;
    total = total * selection.design.multiplier;
    total = total * selection.urgency.multiplier;
    
    return Math.round(total);
  };

  // 4. Generador de Link de WhatsApp
  const generateWhatsAppLink = () => {
    const total = calculateTotal();
    const phone = "584124620795"; // PON AQUÍ TU NÚMERO REAL
    const text = `Hola Rawkode ⚡. Hice la cotización en la web:
    \n- Proyecto: ${selection.service?.label}
    \n- Diseño: ${selection.design?.label}
    \n- Urgencia: ${selection.urgency?.label}
    \n\nEstimado aprox: $${total}. ¿Podemos agendar una reunión?`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h2>COTIZADOR RAWKODE <span className="blink">_</span></h2>
        <p>Calcula tu inversión en tiempo real.</p>
      </div>

      {/* Barra de Progreso Simple */}
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className="line"></div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className="line"></div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <div className="calculator-body">
        {/* PASO 1: TIPO DE SERVICIO */}
        {step === 1 && (
          <div className="step-content">
            <h3>¿Qué vamos a construir?</h3>
            <div className="options-grid">
              {services.map(opt => (
                <button 
                  key={opt.id} 
                  className={`option-btn ${selection.service?.id === opt.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('service', opt)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PASO 2: DISEÑO */}
        {step === 2 && (
          <div className="step-content">
            <h3>¿Tienes el diseño listo?</h3>
            <div className="options-grid">
              {designOptions.map(opt => (
                <button 
                  key={opt.id} 
                  className={`option-btn ${selection.design?.id === opt.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('design', opt)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="nav-btns">
              <button className="back-btn" onClick={() => setStep(1)}>Atrás</button>
            </div>
          </div>
        )}

        {/* PASO 3: URGENCIA */}
        {step === 3 && (
          <div className="step-content">
            <h3>¿Para cuándo lo necesitas?</h3>
            <div className="options-grid">
              {urgencyOptions.map(opt => (
                <button 
                  key={opt.id} 
                  className={`option-btn ${selection.urgency?.id === opt.id ? 'selected' : ''}`}
                  onClick={() => handleSelect('urgency', opt)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="nav-btns">
              <button className="back-btn" onClick={() => setStep(2)}>Atrás</button>
            </div>
          </div>
        )}

        {/* RESULTADO FINAL */}
        {selection.service && selection.design && selection.urgency && (
          <div className="result-box">
            <div className="price-display">
              <span>Estimado:</span>
              <span className="amount">${calculateTotal()} USD*</span>
            </div>
            <p className="disclaimer">*El precio final puede variar según requerimientos específicos.</p>
            
            <a 
              href={generateWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              🚀 INICIAR PROYECTO
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetCalculator;