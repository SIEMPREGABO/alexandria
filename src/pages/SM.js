import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function SM() {
  useEffect(() => {
    // Simple fade-in animation for sections
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='container-custom'>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Transforma tu marca en una <span>empresa poderosa</span></h1>
            <p>Somos tu estudio de publicidad especializado en branding, redes sociales y estrategias de marketing para mujeres empresarias que buscan destacar en el mercado digital.</p>
            <a href="#contact" className="cta-button">Impulsa tu marca hoy</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title fade-in">
              <h2>Nuestros Servicios</h2>
              <p >Ofrecemos soluciones integrales para llevar tu marca al siguiente nivel</p>
            </div>

            <div className="services-grid">
              {/* Branding Card */}
              <div className="service-card fade-in">
                <div className="service-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Branding & Marca</h3>
                <p>Desarrollamos una identidad sólida y coherente para tu negocio.</p>
                <ul>
                  <li>Branding y Rebranding</li>
                  <li>Identidad visual</li>
                  <li>Naming</li>
                  <li>Registro de marca (gestión)</li>
                </ul>
              </div>

              {/* Social Media Card */}
              <div className="service-card fade-in">
                <div className="service-icon">
                  <i className="fas fa-hashtag"></i>
                </div>
                <h3>Redes Sociales</h3>
                <p>Gestionamos y optimizamos tu presencia en redes sociales.</p>
                <ul>
                  <li>Gestión de Instagram/Facebook</li>
                  <li>Calendario de contenido</li>
                  <li>Copywriting y diseño de posts</li>
                  <li>Historias y Reels estratégicos</li>
                </ul>
              </div>

              {/* Advertising Card */}
              <div className="service-card fade-in">
                <div className="service-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3>Publicidad</h3>
                <p>Creamos campañas publicitarias efectivas para aumentar tu alcance.</p>
                <ul>
                  <li>Campañas Meta Ads</li>
                  <li>Estrategia de anuncios</li>
                  <li>Segmentación y optimización</li>
                  <li>Reportes de rendimiento</li>
                </ul>
              </div>

              {/* Design Card */}
              <div className="service-card fade-in">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Diseño</h3>
                <p>Diseños profesionales que comunican el valor de tu marca.</p>
                <ul>
                  <li>Flyers y menús</li>
                  <li>Papelería corporativa</li>
                  <li>Identidad para eventos</li>
                  <li>Presentaciones</li>
                </ul>
              </div>

              {/* Consulting Card */}
              <div className="service-card fade-in">
                <div className="service-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Consultoría</h3>
                <p>Te asesoramos para tomar las mejores decisiones estratégicas.</p>
                <ul>
                  <li>Asesoría de marca</li>
                  <li>Auditoría de redes</li>
                  <li>Estrategia de contenido</li>
                  <li>Lanzamientos de producto</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Registration Section */}
        <section id="branding" className="brand-registration-section">
          <div className="container">
            <div className="section-title fade-in">
              <h2>Gestión de Registro de Marca</h2>
              <p>Te acompañamos en todo el proceso de registro de tu marca ante el IMPI</p>
            </div>

            <div className="brand-registration fade-in">
              <h3>Simplificamos el proceso para ti</h3>
              <p>Nos encargamos de toda la gestión para que tú solo te enfoques en tu negocio.</p>

              <ul>
                <li>Acompañamiento personalizado</li>
                <li>Llenado correcto de formatos</li>
                <li>Asesoría de nombre y clase</li>
                <li>Gestión del proceso completo</li>
                <li>Canalizar con abogado si se requiere</li>
              </ul>

              <div className="price-tag">
                <p><strong>Inversión:</strong> <span className="price">$1,900 MXN</span> por la gestión</p>
                <p><small>*El pago al IMPI va aparte y depende de las clases a registrar</small></p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography & Video Section */}
        <section id="photography" className="photography-section">
          <div className="container">
            <div className="section-title fade-in">
              <h2>Fotografía y Video</h2>
              <p>Contamos con 3 paquetes diseñados para ajustarse a tu presupuesto y necesidades</p>
            </div>

            <div className="packages-grid">
              {/* Basic Package */}
              <div className="package-card fade-in">
                <h3>Paquete Básico</h3>
                <p>Perfecto para emprendedoras que comienzan</p>
                <ul className="features">
                  <li>10 fotos profesionales</li>
                  <li>1 video de presentación (30 seg)</li>
                  <li>Sesión de 1 hora</li>
                  <li>Edición básica</li>
                  <li>1 outfit</li>
                </ul>
                <a href="#contact" className="cta-button">Cotizar</a>
              </div>

              {/* Professional Package */}
              <div className="package-card fade-in">
                <h3>Paquete Profesional</h3>
                <p>Ideal para negocios en crecimiento</p>
                <ul className="features">
                  <li>25 fotos profesionales</li>
                  <li>3 videos para redes (30-60 seg)</li>
                  <li>Sesión de 2 horas</li>
                  <li>Edición avanzada</li>
                  <li>2 outfits + locación</li>
                </ul>
                <a href="#contact" className="cta-button">Cotizar</a>
              </div>

              {/* Premium Package */}
              <div className="package-card fade-in">
                <h3>Paquete Premium</h3>
                <p>Para marcas establecidas que buscan destacar</p>
                <ul className="features">
                  <li>50+ fotos profesionales</li>
                  <li>5 videos estratégicos</li>
                  <li>Sesión de 4 horas</li>
                  <li>Edición premium + retoque</li>
                  <li>3 outfits + múltiples locaciones</li>
                </ul>
                <a href="#contact" className="cta-button">Cotizar</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-title fade-in">
              <h2>Contáctanos</h2>
              <p>¿Lista para transformar tu marca? Cuéntanos sobre tu proyecto</p>
            </div>

            <div className="contact-form fade-in">
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Nombre completo</label>
                  <input type="text" id="name" placeholder='' className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de interés</label>
                  <select id="service" className="form-control" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="branding">Branding & Marca</option>
                    <option value="social">Redes Sociales</option>
                    <option value="ads">Publicidad</option>
                    <option value="design">Diseño</option>
                    <option value="consulting">Consultoría</option>
                    <option value="brand-registration">Registro de Marca</option>
                    <option value="photography">Fotografía & Video</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" className="form-control" rows="5" placeholder="Cuéntanos sobre tu proyecto, objetivos y presupuesto..." required></textarea>
                </div>

                <button type="submit" className="cta-button" style={{ width: '100%' }}>Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SM;
