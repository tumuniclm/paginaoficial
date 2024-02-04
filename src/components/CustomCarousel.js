import { Image } from 'antd';

import Carousel from 'react-bootstrap/Carousel';
import image1 from '../img/carousel-1.jpg';
import image2 from '../img/carousel-2.jpg';
import image3 from '../img/carousel-1.jpg';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image
         
          src={image2}
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        
      </Carousel.Item>

    </Carousel>
  );
}

export default CustomCarousel;