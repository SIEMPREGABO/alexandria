import React, { useState } from 'react';
import '../css/SS.css';

const SS = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  const planes = [
    {
      nombre: "I'm Online",
      descripcion: "Presencia básica en internet para comenzar",
      precio: "$6,000",
      destacado: ["2 páginas web estáticas", "Diseño web incluido", "Contacto y ubicación Google Maps", "Menú digital (restaurantes)", "Optimización SEO básica"],
      idealPara: "Negocios pequeños que necesitan comenzar con presencia online"
    },
    {
      nombre: "MySite",
      descripcion: "Sitio web más completo con herramientas automatizadas",
      precio: "$9,000",
      destacado: ["Hasta 6 páginas web estáticas", "Herramientas automatizadas", "Integración con redes sociales", "Chatbot o agenda", "2 páginas dinámicas"],
      idealPara: "Negocios en crecimiento que necesitan más funcionalidades"
    },
    {
      nombre: "MyWeb",
      descripcion: "Sitio web dinámico con sistema de gestión",
      precio: "$15,000",
      destacado: ["Hasta 12 páginas web dinámicas", "Sistema de gestión de contenido (CRUD)", "Chatbot WhatsApp", "Reportes mensuales", "Diseño personalizado"],
      idealPara: "Negocios establecidos que requieren administrar contenido"
    },
    {
      nombre: "ProSystem",
      descripcion: "Sistema completo a medida para tu negocio",
      precio: "Cotización personalizada",
      destacado: ["Sistema de gestión completo", "Punto de venta online", "IA & Machine Learning", "Base de datos escalable", "Reportes adaptables"],
      idealPara: "Empresas que necesitan soluciones tecnológicas avanzadas"
    }
  ];

  return (
    <div className="consultoria-planes">
      <header className="planes-header">
        <h1>Planes para tu Negocio</h1>
        <p className="subtitle">Elige la mejor opción para tu empresa. Puedes cambiar de plan en cualquier momento.</p>
      </header>

      <div className="presentacion-paquetes">
        <div className="presentacion-content">
          <h2 className="presentacion-slogan">
            Tu negocio visible 24/7, alcanzando clientes mientras duermes
          </h2>
          <p className="presentacion-descripcion">
            En el mundo digital de hoy, tener presencia en internet no es un lujo, es una necesidad. 
            Con nuestros paquetes, tu negocio estará disponible las 24 horas del día, los 7 días de la semana, 
            conectando con clientes potenciales en cualquier momento y desde cualquier lugar. 
            Mientras tu competencia cierra sus puertas, tu negocio sigue generando oportunidades.
          </p>
        </div>
      </div>

      <div className="planes-container">
        {planes.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-header">
              <h3>{plan.nombre}</h3>
              <p className="plan-desc">{plan.descripcion}</p>
            </div>
            
            <div className="plan-precio">
              <span className="precio">{plan.precio}</span>
              {plan.precio !== "Cotización personalizada" && <span className="desde">Desde</span>}
            </div>
            
            <div className="plan-destacado">
              <h4>Incluye:</h4>
              <ul>
                {plan.destacado.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="plan-ideal">
              <p><strong>Ideal para:</strong> {plan.idealPara}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="informacion-importante">
        <div className="info-card">
          <h3>⚠️ Importante saber</h3>
          <p><strong>Certificados SSL y Hosting:</strong> Estos servicios van por cuenta del cliente. Te asesoramos en la elección del mejor proveedor según tus necesidades.</p>
          <p><strong>Mantenimiento mensual:</strong> Todos los planes incluyen mantenimiento mensual con costo adicional que varía según el plan seleccionado.</p>
          <p><strong>Personalización:</strong> Los planes pueden ajustarse según las necesidades específicas de tu negocio.</p>
        </div>
      </div>

      <div className="contacto-form">
        <h2>¿Listo para comenzar?</h2>
        <p>Cuéntanos sobre tu negocio y te ayudaremos a elegir el plan perfecto.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+52 123 456 7890"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="negocio">Nombre del negocio *</label>
              <input
                type="text"
                id="negocio"
                name="negocio"
                value={formData.negocio}
                onChange={handleChange}
                required
                placeholder="¿Cómo se llama tu empresa?"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="mensaje">Cuéntanos sobre tu negocio *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="6"
              placeholder="¿A qué se dedica tu negocio? ¿Qué necesidades tienes? ¿Qué esperas lograr con tu presencia online? Cuéntanos todo lo que consideres importante..."
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Solicitar cotización
          </button>
        </form>
      </div>
    </div>
  );
};

export default SS;
