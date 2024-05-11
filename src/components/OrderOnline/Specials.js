import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Specials({ imageUrl, title, description , price }) {
  return (
    <div className="card" id="Specials">
      <div>
      <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title} <span>{price}</span></h3>
       
        <p className="card-description">{description}</p>
        <div className="delivery-container">
          <span>Order a delivery</span>
          <FontAwesomeIcon icon={faMotorcycle} className="motorcycle-icon" />
        </div>
        {/* <div className="Order-button"> */}
        <button type="button" id="button" class="btn btn-primary Order-button">
           Order Online
          </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Specials;