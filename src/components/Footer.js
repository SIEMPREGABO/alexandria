import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">Boss Babe Lab</div>
            <p>Especialistas en branding y marketing digital para mujeres empresarias que buscan dejar huella en el mundo digital.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#services">Branding & Marca</a></li>
              <li><a href="#services">Redes Sociales</a></li>
              <li><a href="#services">Publicidad</a></li>
              <li><a href="#services">Diseño</a></li>
              <li><a href="#services">Consultoría</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contacto</h4>
            <ul>
              <li><i className="fas fa-envelope"></i> hola@bossbablab.com</li>
              <li><i className="fas fa-phone"></i> +52 55 1234 5678</li>
              <li><i className="fas fa-map-marker-alt"></i> Ciudad de México</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 Boss Babe Lab Publicist Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
