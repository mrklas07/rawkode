import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-container">
      <Link to="/" className="back-link">← Volver al Inicio</Link>
      
      <div className="legal-header">
        <h1>Política de Privacidad</h1>
        <p>Última actualización: Febrero 2026</p>
      </div>

      <div className="legal-content">
        <p>En <strong>RAWKODE</strong>, valoramos la privacidad tanto como el código limpio. Esta política explica cómo manejamos la información de nuestros clientes.</p>

        <h2>1. Información que Recopilamos</h2>
        <p>Solo recopilamos la información estrictamente necesaria para iniciar una relación comercial:</p>
        <ul>
          <li>Datos de contacto (Nombre, WhatsApp, Correo Electrónico) proporcionados voluntariamente.</li>
          <li>Detalles técnicos sobre su proyecto o idea de negocio.</li>
        </ul>

        <h2>2. Uso de la Información</h2>
        <p>Sus datos se utilizan exclusivamente para:</p>
        <ul>
          <li>Elaborar presupuestos y propuestas técnicas (Cotizador).</li>
          <li>Comunicación directa durante el desarrollo del proyecto.</li>
          <li>Facturación y contratos legales.</li>
        </ul>
        <p><strong>Jamás vendemos, alquilamos ni compartimos sus datos con terceros</strong> para fines publicitarios.</p>

        <h2>3. Confidencialidad del Proyecto</h2>
        <p>Entendemos que su idea es su activo más valioso. Firmamos acuerdos de confidencialidad (NDA) si el cliente lo requiere antes de iniciar el desarrollo. Todo código, estrategia y dato sensible compartido durante el desarrollo se trata como secreto comercial.</p>

        <h2>4. Seguridad</h2>
        <p>Implementamos estándares de seguridad industrial para proteger nuestros repositorios y bases de datos. Sin embargo, recuerde que ninguna transmisión por Internet es 100% segura.</p>

        <h2>5. Contacto</h2>
        <p>Para cualquier duda sobre sus datos, escríbanos directamente a nuestro canal oficial de WhatsApp.</p>
      </div>
    </div>
  );
};

export default Privacy;