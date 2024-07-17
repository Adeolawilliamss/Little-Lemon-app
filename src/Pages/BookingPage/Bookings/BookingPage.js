import React, { useState, useEffect } from "react";
import { fetchAPI } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";
import './index.css';

export default function BookingPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a time.';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'Please enter a valid number of guests.';
    if (!formData.occasion) newErrors.occasion = 'Please select an occasion.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate(pages.get('confirmedBooking').path);
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const [availableTimes, setAvailableTimes] = useState([]);
  
  useEffect(() => {
    fetchAvailableTimes(new Date());
  }, []);

  const fetchAvailableTimes = (date) => {
    const times = fetchAPI(date);
    setAvailableTimes(times);
  };

  const options = availableTimes.map(time => <option key={time}>{time}</option>);

  return (
    <div className="py-4 mt-2 border-b-4 min-h-full">
      <div className="container mx-auto">
        <div className="booking-page">
          <h1>Booking Page</h1>
          <div className="booking-form">
            <form className="mt-5" onSubmit={handleSubmit}>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required min={currentDate} aria-label="Select A Date" />
              {errors.date && <p className="error">{errors.date}</p>}

              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" name="time" value={formData.time} onChange={handleChange} aria-label="Select A Time">
                {options}
              </select>
              {errors.time && <p className="error">{errors.time}</p>}

              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="Input a number" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} aria-label="Select The Number Of Guests" />
              {errors.guests && <p className="error">{errors.guests}</p>}

              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} aria-label="Select the occasion">
                <option value="">----</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {errors.occasion && <p className="error">{errors.occasion}</p>}

              <button className="button-primary" type="submit" aria-label="Make a reservation">Make a reservation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

