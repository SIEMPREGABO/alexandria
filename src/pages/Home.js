import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'Poppins, sans-serif'
      }}>
        {/* Lado izquierdo - Mensaje de bienvenida */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          backgroundColor: 'var(--light)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Mensaje de bienvenida */}
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            opacity: hoveredItem ? 0 : 1,
            transition: 'opacity 0.5s ease',
            position: 'absolute',
            zIndex: hoveredItem ? 1 : 10
          }}>
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              marginBottom: '30px',
              color: 'var(--dark)',
              lineHeight: '1.1'
            }}>
              Bienvenido a <br />
              <span style={{
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Boss Babel Lab
              </span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'var(--gray)',
              lineHeight: '1.6',
              fontWeight: '700',
              marginBottom: '30px'
            }}>
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
            <div style={{
              position: 'absolute',
              right: hoveredItem ? '0' : '-100%',
              top: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'right 2s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
              backgroundColor: 'var(--light-low)',
              zIndex: 5
            }}>
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
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--dark)',
          color: 'white'
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
          }}>
            <li>


              <Link
                to="/sm"
                style={{
                  textDecoration: 'none',
                  fontSize: '48px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  marginBottom: '60px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredItem === 'Marketing' ? 'scale(1.1)' : 'scale(1)',
                  color: hoveredItem === 'Marketing' ? 'var(--primary)' : 'white'
                }}
                onMouseEnter={() => setHoveredItem('Marketing')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Marketing
              </Link>
            </li>

            <li>

              <Link
                style={{
                  fontSize: '48px',
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: hoveredItem === 'Sistemas' ? 'scale(1.1)' : 'scale(1)',
                  color: hoveredItem === 'Sistemas' ? 'var(--primary)' : 'white'
                }}
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
