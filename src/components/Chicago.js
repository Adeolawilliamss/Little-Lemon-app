import React, { useState, useEffect } from 'react';
import './Chicago.css'; 

function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Conditionally set the marginLeft style based on window width
  const marginLeftStyle = windowWidth > 768 ? '200px' : '400px';

  return (
    <div style={{ marginLeft: marginLeftStyle }} className="about-container" id="About">
      <div className="left-section">
        <h1 className="main-heading">Little Lemon</h1>
        <h2 className="sub-heading">Chicago</h2>
        <p className="description">
          Little Lemon Chicago is the best restaurant you can ever visit which will take care of all your daily needs.
        </p>
      </div>

      <div style={{ position: 'relative', width: '30%', marginRight: '250px' }}>
        <img style={{ position: 'absolute', top: '-10px', left: '25%', width: '100%' }} src="Imageontop.jpg" alt="About" />
        <img style={{ width: '100%' }} src="ImageBellow.jpg" alt="Background" />
      </div>
    </div>
  );
}

export default About;

