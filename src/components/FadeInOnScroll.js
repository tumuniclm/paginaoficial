import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const FadeInOnScroll = ({ children, offset = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div className={`fade-in-on-scroll ${visible ? 'visible' : ''}`}>
      <div className="fade-in-from-bottom">{children}</div>
    </div>
  );
};

export default FadeInOnScroll;
