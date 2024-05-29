import React from 'react';
import './Styles/Chicago.css'; 

function About() {
  return (
    <div className="about-container" id="About">
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
