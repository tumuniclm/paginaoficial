// RedesSocialesContacto.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './RedesSocialesContacto.css';

const RedesSocialesContacto = () => {
  return (
    <div className="redes-sociales-contacto">
      <div className="mitad-azul">
        <div className="cuadro-inclinado"></div>
        <div className="siguenos">
        
          <a href='https://www.facebook.com/tumuniclm'>
          <FontAwesomeIcon icon={faFacebook} className="icono" />
          </a>
          <a>
          <FontAwesomeIcon icon={faTiktok} className="icono"/>
          </a>
          <a>
          <FontAwesomeIcon icon={faInstagram} className="icono"/>
          </a>
          <a>
          <FontAwesomeIcon icon={faYoutube} className="icono"/>
          </a>
          @TuMuniCLM
        </div>
      </div>
      <a a href="https://wa.me/+50247902524"  className="mitad-verde">
        <div className="contactanos">
          Contáctanos
             <FontAwesomeIcon icon={faWhatsapp} className="icono"/>
        </div>
      </a>
    </div>
  );
};

export default RedesSocialesContacto;
