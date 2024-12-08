import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProblematicaCR = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="problematica" className="portfolio-details section">
      <div className="container" data-aos="fade-up">
        

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>Problemática de las Redes Sociales en Costa Rica</h2>
              <p>
                En Costa Rica, el ciberbullying representa una grave amenaza, especialmente para las poblaciones vulnerables. 
                Según el Colegio de Criminología, este tipo de acoso puede llevar a consecuencias extremas, como el suicidio de algunas víctimas. 
                Esta problemática subraya la necesidad urgente de implementar programas educativos que enseñen a los usuarios, desde edades tempranas, 
                los riesgos del uso de redes sociales y promuevan prácticas seguras de navegación en línea.
              </p>
              <p>
                Otro desafío significativo es el discurso de odio y la discriminación en plataformas digitales. 
                Un informe de la ONU reveló la existencia de más de 548,000 conversaciones en redes sociales en Costa Rica que contenían mensajes de odio dirigidos 
                principalmente hacia mujeres, minorías étnicas y comunidades LGTBIQ+. 
                Este tipo de interacciones refuerza la exclusión y afecta gravemente el bienestar de estas poblaciones.
              </p>
              <p>
                Finalmente, la desinformación y la falta de regulación en redes sociales como Facebook, instagram y X han generado serios problemas, 
                incluida la vulneración de derechos fundamentales. En muchos casos, la difusión de información falsa ha expuesto a las víctimas a riesgos considerables, 
                evidenciando la necesidad de políticas más estrictas que regulen el contenido en estas plataformas.
              </p>
            </div>
          </div>
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Informe sobre Discursos de Odio y Discriminación en Redes Sociales Costa Rica 2021</h3>
              <ul>
                <li>
                  <a href="https://costarica.un.org/es/235989-primer-informe-sobre-discursos-de-odio-y-discriminaci%C3%B3n-en-redes-sociales-costa-rica-2021" 
                  className="btn-visit align-self-start"
                  target="_blank" 
                  rel="noopener noreferrer">
                    Visitar Sitio Web
                  </a>
                </li>
              </ul>
              <h3>Abordaje de la criminalidad en redes sociales</h3>
              <ul>
                <li>
                  <a href="https://www.criminologia.or.cr/wp-content/uploads/2018/01/Abordaje-de-la-criminalidad-PARA-PUBLICAR.pdf" 
                  className="btn-visit align-self-start"
                  target="_blank" 
                  rel="noopener noreferrer">
                    Visitar Sitio Web
                  </a>
                </li>
              </ul>
              <h3>Victimización delictiva</h3>
              <ul>
                <li>
                  <a href="https://www.undp.org/es/costa-rica/comunicados-de-prensa/victimizacion-delictiva-se-incrementa-traves-de-medios-electronicos" 
                  className="btn-visit align-self-start"
                  target="_blank" 
                  rel="noopener noreferrer">
                    Visitar Sitio Web
                  </a>
                </li>
              </ul>
              <h3>Ciberbullyng, Grooming Y Sexting</h3>
              <ul>
                <li>
                  <a href="https://ministeriopublico.poder-judicial.go.cr/index.php/medios-informativos/noticias-judiciales/2021/ciberbullying-grooming-y-sexting-identifiquelos-y-sepa-como-proteger-a-la-ninez" 
                  className="btn-visit align-self-start"
                  target="_blank" 
                  rel="noopener noreferrer">
                    Visitar Sitio Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematicaCR;
