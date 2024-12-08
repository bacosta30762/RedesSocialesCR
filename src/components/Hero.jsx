import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'animate.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div id="hero-carousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
        <Carousel fade>
          <Carousel.Item>
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Impacto de las redes sociales en las poblaciones vulnerables de Costa Rica
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Este proyecto busca analizar las principales problemáticas asociadas a las redes sociales en Costa Rica desde un enfoque ético y legal,
                 priorizando el impacto en poblaciones vulnerables. Los resultados podrían orientar políticas públicas, promover campañas educativas y 
                 empoderar a los usuarios frente a los riesgos de las redes sociales.
              </p>
              <button className="btn-get-started animate__animated animate__fadeInUp scrollto"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                Leer más
              </button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">Protección Legal</h2>
              <p className="animate__animated animate__fadeInUp">
                En Costa Rica, el impacto de las redes sociales en las poblaciones vulnerables es un tema de creciente preocupación, 
                ya que estas plataformas pueden exponer a grupos como menores de edad, personas con discapacidad y comunidades marginadas 
                a riesgos como el ciberacoso y la desinformación.
              </p>
              <button className="btn-get-started animate__animated animate__fadeInUp scrollto"
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                Leer más
              </button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">Problemática en Costa Rica</h2>
              <p className="animate__animated animate__fadeInUp">
                En Costa Rica, el ciberbullying afecta gravemente a las poblaciones vulnerables, con consecuencias extremas como el suicidio, 
                lo que subraya la necesidad de programas educativos que fomenten una navegación segura.
                 Además, el discurso de odio y la desinformación en redes sociales afectan a grupos como mujeres, minorías étnicas y la comunidad LGTBIQ+, 
                 mientras que la falta de regulación en plataformas como Facebook y Twitter expone a las víctimas a riesgos adicionales.
              </p>
              <button className="btn-get-started animate__animated animate__fadeInUp scrollto">
                Leer más
              </button>
            </div>
          </Carousel.Item>
        </Carousel>

        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
      </div>

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;
