import React from 'react';
import './Card.css';

function Specials({ imageUrl, title, description }) {
  return (
    <div className="card" id="Specials">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Specials;
