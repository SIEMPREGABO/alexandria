import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  const [hoveredItem, setHoveredItem] = useState(null);

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
    <div className='container-custom'>
      <div className="home-container">
        {/* Lado izquierdo - Mensaje de bienvenida */}
        <div className="home-left-side">
          {/* Mensaje de bienvenida */}
          <div className={`home-welcome-message ${hoveredItem ? 'hidden' : ''}`}>
            <h1 className="home-welcome-title">
              Bienvenido a <br />
              <span className="home-welcome-title-gradient">
                Boss Babel Lab
              </span>
            </h1>
            <p className="home-welcome-description">
              Especialistas en branding y marketing digital para empresarios que buscan dejar huella en el mundo digital.
            </p>
            {/* <button style={{
              background: 'var(--button)',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              border: 'none',
              fontWeight: '600',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'var(--transition)',
              boxShadow: '0 10px 20px var(--button-hover)'
            }}>
              Conoce más
            </button> */}
          </div>

          {/* Slide de imágenes */}
          {hoveredItem && (
            <div className="home-image-slide visible">
              {/* <div style={{
                textAlign: 'center',
                padding: '40px'
              }}>
                <h2 style={{
                  fontSize: '36px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  marginBottom: '20px'
                }}>
                  {hoveredItem}
                </h2>
                <div style={{
                  width: '300px',
                  height: '200px',
                  backgroundColor: 'var(--accent)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--dark)'
                }}>
                  Imagen de {hoveredItem}
                </div>
              </div> */}

              <img
                src={hoveredItem === 'Marketing' ? '/marketing.png' : '/sistemas.png'}
                alt={hoveredItem}
              />
            </div>
          )}



        </div>

        {/* Lado derecho - Menú */}
        <div className="home-right-side">
          <ul className="home-menu-list">
            <li>


              <Link
                to="/sm"
                className={`home-menu-link ${hoveredItem === 'Marketing' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem('Marketing')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Marketing
              </Link>
            </li>

            <li>

              <Link
                className={`home-menu-link ${hoveredItem === 'Sistemas' ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem('Sistemas')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Sistemas
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
