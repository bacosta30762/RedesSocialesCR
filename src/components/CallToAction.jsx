import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const CallToAction = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>Leyes de Costa Rica</h3>
            <p>
              En Costa Rica, existen leyes como la Ley de Protección de Datos Personales (Ley N°8968) y la Ley contra Delitos Informáticos (Ley N°9048) 
              que protegen a las poblaciones vulnerables en el entorno digital. Estas serán detalladas a continuación, destacando su importancia en la privacidad 
              y seguridad online.
            </p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#services">Ver Leyes</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;