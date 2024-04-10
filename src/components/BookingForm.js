import React, { useState } from 'react';

function BookingForm({ onClose, navigateToConfirmation }) {

  // Define initial state object
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const availableTimesArray= [
    '10:00 AM',
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM',
    '8:00 PM'
  ];

  // Handler function to update state when form fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose(); // Close the form after submission
    navigateToConfirmation();
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close Form">X</button> {/* Close button */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} aria-label="Select A Date" required/>

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" name="time" value={formData.time} onChange={handleChange} aria-label="Select A Time">
            {availableTimesArray.map((availableTime, index) => (
              <option key={index}>{availableTime}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} aria-label="Select The Number Of Guests" />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} aria-label="Select the occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          <input type="submit" value="Make a reservation" aria-label="Submit Form"/>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;