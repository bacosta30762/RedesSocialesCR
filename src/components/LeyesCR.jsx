import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializar AOS
  }, []);

  // Lista de servicios para facilitar la renderización dinámica
  const services = [
    {
      id: 1,
      title: 'Código Penal de Costa Rica',
      description: 'Sanciona las afirmaciones que afecten la reputación de una persona. Si ocurre en redes sociales, puede agravarse (multas o prisión).',
      icon: 'bi bi-chat-text',
      color: '#0dcaf0',
      delay: 100,
    },
    {
      id: 2,
      title: 'Código Penal de Costa Rica',
      description: 'Sanciona conductas de acoso sexual, incluyendo entornos digitales (25 a 35 días de multa).',
      icon: 'bi bi-credit-card-2-front',
      color: '#fd7e14',
      delay: 200,
    },
    {
      id: 3,
      title: 'Ley de Protección de Datos (Ley N°8968)',
      description: 'Artículo 2: Sanciona las afirmaciones que afecten la reputación de una persona. Si ocurre en redes sociales, puede agravarse. Desde los  desde los ₡2,251,000 hasta los ₡13,506,000. ',
      icon: 'bi bi-cash-stack',
      color: '#20c997',
      delay: 300,
    },
    {
      id: 4,
      title: 'Ley de Delitos Informáticos (Ley N°9048)',
      description: 'Artículo 196 bis: Penaliza el acceso no autorizado a sistemas informáticos (3 a 6 años). ',
      icon: 'bi bi-globe',
      color: '#6610f2',
      delay: 500,
    },
    {
      id: 5,
      title: 'Ley de Delitos Informáticos (Ley N°9048)',
      description: 'Artículo 230 bis: Penaliza la publicación o distribución de imágenes, video o audios de carácter íntimo sin consentimiento (5 a 10 años).',
      icon: 'bi bi-clock',
      color: '#f3268c',
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Costa Rica</h2>
        <p>Leyes</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item position-relative">
                <div className="icon" style={{ color: service.color }}>
                  <i className={service.icon}></i>
                </div>
                {/* Eliminamos el href, pero mantenemos la apariencia con stretched-link */}
                <div className="stretched-link">
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

