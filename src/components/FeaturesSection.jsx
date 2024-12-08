import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Tab, Nav } from 'react-bootstrap';
import legalImage from '../assets/img/legal.jpg';
import legalImage2 from '../assets/img/legalUE.jpg';

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS para las animaciones
  }, []);

  return (
    <section id="features" className="features section">
      <div className="container">
        <Tab.Container defaultActiveKey="features-tab-1">
          <Nav variant="tabs" className="row d-flex" data-aos="fade-up" data-aos-delay="100">
            <Nav.Item className="col-6">
              <Nav.Link eventKey="features-tab-1">
                <i className="bi bi-journal"></i>
                <h4 className="d-none d-lg-block">Leyes de Costa Rica</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-6">
              <Nav.Link eventKey="features-tab-2">
                <i className="bi bi-book"></i>
                <h4 className="d-none d-lg-block">Leyes y Marcos Internacionales</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <Tab.Pane eventKey="features-tab-1">
              <div className="row">
                <div className="col-lg-6">
                  <h3>Leyes de Costa Rica</h3>
                  <p className="fst-italic">
                     Leyes que buscan proteger a las personas, especialmente a las poblaciones vulnerables, en el entorno digital,
                      asegurando su privacidad y seguridad en el uso de las redes sociales.
                  </p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> Ley de Delitos Informáticos (Ley N°9048)</li>
                    <li><i className="bi bi-check2-all"></i> Código Penal de Costa Rica</li>
                    <li><i className="bi bi-check2-all"></i> Ley de Protección de la Persona frente al tratamiento de sus Datos Personales (Ley N°8968)</li>
                  </ul>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={legalImage} alt="" className="img-fluid" />
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="features-tab-2">
              <div className="row">
                <div className="col-lg-6">
                  <h3>Leyes y Marcos Internacionales</h3>
                  <p>A nivel internacional, diversos marcos y leyes ofrecen lineamientos para proteger los derechos digitales 
                    y garantizar la seguridad de las poblaciones vulnerables en el entorno digital.</p>
                  <ul>
                    <li><i className="bi bi-check2-all"></i> Convenio de Budapest (2001): Es el primer tratado internacional sobre delitos informáticos, 
                    que establece medidas para combatir el cibercrimen, incluyendo el ciberacoso.</li>
                    <li><i className="bi bi-check2-all"></i> Reglamento General de Protección de Datos de la UE (GDPR): 
                    Es un marco europeo, que sirve como referencia para la protección de datos personales.</li>
                    <li><i className="bi bi-check2-all"></i> Ley Modelo de la ONU sobre Delitos Informáticos (2002): 
                    Ofrece lineamientos para legislar sobre delitos cibernéticos, incluyendo la explotación de vulnerabilidades en redes sociales.</li>
                    <li><i className="bi bi-check2-all"></i> Código de Conducta de la UE contra la Desinformación (2018): 
                    Este código involucra a plataformas como Facebook y Twitter para prevenir la propagación de contenido falso.</li>
                    <li><i className="bi bi-check2-all"></i> Declaración Universal de los Derechos Humanos, Artículo 19: 
                    Este artículo protege la libertad de expresión, pero también establece que esta debe ejercerse con responsabilidad</li>
                    <li><i className="bi bi-check2-all"></i> Declaración de Praga sobre la Gobernanza de Internet (2019):  Fomenta la inclusión digital y el 
                    acceso igualitario a tecnologías de información y comunicación.</li>
                    <li><i className="bi bi-check2-all"></i> Agenda 2030 para el Desarrollo Sostenible, Objetivo 9: Este objetivo promueve el acceso equitativo
                     a la tecnología y la innovación, buscando reducir la brecha digital. </li>
                    <li><i className="bi bi-check2-all"></i> Directrices de la OCDE sobre Protección de Menores en Entornos Digitales (2021):  
                    Ofrecen recomendaciones para garantizar que los niños estén seguros en internet, incluyendo redes sociales. </li>
                  </ul>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={legalImage2} alt="" className="img-fluid" />
                </div>
              </div>
            </Tab.Pane>

            {/* Aquí seguirían los demás panes para features-tab-3 y features-tab-4 */}
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default FeaturesSection;
