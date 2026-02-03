import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="legal-container">
      <Link to="/" className="back-link">← Volver al Inicio</Link>

      <div className="legal-header">
        <h1>Términos de Servicio</h1>
        <p>Reglas claras para resultados profesionales.</p>
      </div>

      <div className="legal-content">
        <h2>1. Aceptación</h2>
        <p>Al contratar los servicios de RAWKODE, usted acepta estos términos. Nos reservamos el derecho de rechazar proyectos que violen leyes locales o éticas internacionales.</p>

        <h2>2. Pagos y Facturación</h2>
        <ul>
          <li>Se requiere un <strong>50% de anticipo</strong> para iniciar cualquier desarrollo.</li>
          <li>El 50% restante se abona contra entrega del proyecto funcional, antes de la transferencia final de credenciales y código fuente.</li>
          {/* He mantenido tus cambios de Zinli/Binance/EUR aquí 👇 */}
          <li>Aceptamos pagos en Divisas (Efectivo/Zinli/Binance) y Bolívares a la tasa del día (BCV/EUR según acuerdo).</li>
        </ul>

        <h2>3. Tiempos de Entrega</h2>
        <p>Los tiempos estipulados en la cotización son estimados basados en la cooperación del cliente. Retrasos en la entrega de material (logos, textos) por parte del cliente extenderán la fecha de entrega final.</p>

        <h2>4. Propiedad Intelectual</h2>
        <p>A diferencia de otras agencias, en RAWKODE creemos en la propiedad total. Una vez finalizado el pago:</p>
        <ul>
          <li>El cliente es dueño del 100% del código fuente.</li>
          <li>El cliente posee todos los derechos sobre el diseño y la base de datos.</li>
          <li>RAWKODE se reserva el derecho de mostrar el proyecto en su portafolio (salvo acuerdo de confidencialidad previo).</li>
        </ul>

        <h2>5. Garantía y Soporte</h2>
        <p>Ofrecemos <strong>30 días de garantía</strong> post-lanzamiento para corregir cualquier "bug" o error de programación imputable a nuestro trabajo. Cambios de diseño o nuevas funcionalidades fuera de la cotización original se cobrarán por separado.</p>

        {/* 👇 AQUÍ ESTÁ LA NUEVA SECCIÓN DE MANTENIMIENTO */}
        <h2>6. Mantenimiento Opcional</h2>
        <p>Para garantizar la operatividad continua a largo plazo, ofrecemos un servicio de <strong>verificación de funcionamiento y mantenimiento</strong> por una cuota mensual.</p>
        <ul>
          <li>Este servicio es <strong>estrictamente opcional</strong>.</li>
          <li>Incluye monitoreo de actividad (uptime) y actualizaciones de seguridad menores.</li>
          <li>Si el cliente decide no contratar este servicio, RAWKODE no se hace responsable por caídas del servidor, vencimiento de dominios o fallos técnicos que ocurran después del periodo de garantía inicial (30 días).</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;