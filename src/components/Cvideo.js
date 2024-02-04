import React from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const Cvideo = () => {
  return (
    <FadeInOnScroll offset={300}>
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '16px' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          title="Embedded Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PLjeSD4bN-o?si=MtehpBJ8lrsmpPG9&vq=hd1080&controls=0&modestbranding=1"
          frameBorder="0"
          allowFullScreen
          style={{ position: 'absolute', top: '0', left: '0', borderRadius:'1em' }}
        />
      </div>
    </div>
    </FadeInOnScroll>
  );
};

export default Cvideo;
