import React, { useState, useEffect } from "react";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ConfirmedBooking.css';
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import '../../utils/LoadingSpinner/Spinner.css';

const ConfirmedBooking = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log('Loading complete');
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon
        icon={faCircleCheck}
        size="3x"
        className="fa-bounce"
        style={{
          '--fa-bounce-land-scale-x': 1.2,
          '--fa-bounce-land-scale-y': 0.8,
          '--fa-bounce-rebound': '5px'
        }}
      />
      <h2>Your reservation has been confirmed!</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;



  
