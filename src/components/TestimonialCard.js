import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import './TestimonialCard.css';

const TestimonialCard = ({ customer }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (customer.rating[i] === 1) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else if (customer.rating[i] === 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} />);
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <div className="rating">{renderStars()}</div>
      <p>"{customer.says}"</p>
    </div>
  );
};

export default TestimonialCard;