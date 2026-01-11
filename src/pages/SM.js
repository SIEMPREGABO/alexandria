import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from '.././themeManager';


function SM() {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

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
      <nav style={{
        padding: '20px',
        backgroundColor: 'var(--light)',
        color: 'var(--dark)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 10px var(--shadow-light)',
        transition: 'var(--transition)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '900',
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              <img src="/logo.png" alt="Boss Babe Lab Logo" style={{ height: '50px', width: '100px', verticalAlign: 'middle', marginRight: '10px' }} />
            </div>
          </Link>

          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0, alignItems: 'center' }}>
            <li>
              <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
            </li>
            <li>
              <Link to="/sm" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>SM</Link>
            </li>
            <li>
              <Link to="/ss" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>SS</Link>
            </li>
            <li>
              <Link to="/contrato" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Contrato</Link>
            </li>
            <li><button onClick={handleToggleTheme} style={{
              background: 'var(--button)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'var(--transition)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button></li>
          </ul>
        </div>
      </nav>
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
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-about">
              <div class="footer-logo">Boss Babe Lab</div>
              <p>Especialistas en branding y marketing digital para mujeres empresarias que buscan dejar huella en el mundo digital.</p>
              <div class="social-icons">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            <div class="footer-links">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#services">Branding & Marca</a></li>
                <li><a href="#services">Redes Sociales</a></li>
                <li><a href="#services">Publicidad</a></li>
                <li><a href="#services">Diseño</a></li>
                <li><a href="#services">Consultoría</a></li>
              </ul>
            </div>

            <div class="footer-links">
              <h4>Contacto</h4>
              <ul>
                <li><i class="fas fa-envelope"></i> hola@bossbablab.com</li>
                <li><i class="fas fa-phone"></i> +52 55 1234 5678</li>
                <li><i class="fas fa-map-marker-alt"></i> Ciudad de México</li>
              </ul>
            </div>
          </div>

          <div class="copyright">
            <p>&copy; 2023 Boss Babe Lab Publicist Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SM;
