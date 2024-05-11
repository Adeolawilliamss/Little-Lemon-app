
import React, { useState } from "react";

function BookingForm({ onClose, availableTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle form submission error
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map(time => <option key={time}>{time}</option>);

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required min={currentDate} aria-label="Select A Date" />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={formData.time} onChange={handleChange} aria-label="Select A Time">
          {options}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} aria-label="Select The Number Of Guests" />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} aria-label="Select the occasion">
        <option value="">----</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button className="button-primary" type="submit" aria-label="Make a reservation">Make a reservation</button>
      </form>
    </div>
  );
}

export default BookingForm;