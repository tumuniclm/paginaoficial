import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons'; // Asegúrate de importar el icono que deseas utilizar
import { faFacebook, faTiktok, faInstagram, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Importa tus estilos CSS para el footer aquí si es necesario

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container ">

          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contáctanos</h5>
              <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />Calle principal, en frente del parque central</p>
              <p className="mb-2"><FontAwesomeIcon icon={faWhatsapp} className="me-2" /> +502 4790 2524 </p>
              <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="me-3" />tumuniclm@gmail.com</p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.facebook.com/tumuniclm"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.twitter.com"><FontAwesomeIcon icon={faTiktok} /></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.linkedin.com"><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.youtube.com/@tuMuniCLM"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
            <hr></hr>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Horarios</h5>
              <p className="mb-1">Lunes - Viernes</p>
              <h6 className="text-light">08:00 am - 04:00 pm</h6>
              <p className="mb-1">Sábado y Domingo</p>
              <h6 className="text-light">Cerrado</h6>
            </div>
            <hr></hr>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Novedades</h5>
              <p>Ingresa tu correo electrónico para recibir las más recientes noticias.</p>
              <div className="position-relative w-100">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Tú Correo" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Enviar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
     
    </>
  );
};

export default Footer;
