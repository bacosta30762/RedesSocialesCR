import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS para las animaciones
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Acerca de</h2>
        <p>Leyes y Marcos legales</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              Afortunadamente, existen diversas leyes nacionales para luchar contra esta problemática que 
              buscan salvaguardar la privacidad y seguridad en línea. 
              Además, Costa Rica puede beneficiarse de marcos internacionales.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley 8968)</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Ley contra el Cibercrimen (Ley 9048).</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Marcos internacionales como la Convención sobre los Derechos del Niño y el Reglamento General de Protección de Datos (GDPR) de la Unión Europea</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              A continuación se muestran las principales leyes y marcos legales que protegen a las poblaciones vulnerables en el contexto digital. 
              Estas regulaciones, tanto nacionales como internacionales, son fundamentales para garantizar la seguridad y la privacidad de los usuarios en las redes sociales.
            </p>
            <a href="#features" className="read-more"><span>Informarse más</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
