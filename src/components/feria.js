import React, { useState } from 'react';
import { Carousel, Image, Modal } from 'antd';
import image1 from '../img/feria/1.jpg';
import image2 from '../img/feria/2.jpg';
import image3 from '../img/feria/3.jpg';
import sritaImage from '../img/feria/srita.png';
import './feria.css'; // Importar archivo CSS para la animación

const Feria = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
  <div className="feria-container" >
    <div className="button-container" onClick={showModal}>
      <div>
        <p>
        Feria titular de <br/> Concepción Las Minas  
        </p>
        
      </div>
    <img src={sritaImage} alt="Srta" className="feria-image" />
  </div>


      <Modal
        title="Feria CLM 2024"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Carousel afterChange={onChange} fade="true">
          <div>
            <Image src={image1} />
          </div>
          <div>
            <Image src={image2} />
          </div>
          <div>
            <Image src={image3} />
          </div>
        </Carousel>
      </Modal>
    </div>
  );
};

export default Feria;
