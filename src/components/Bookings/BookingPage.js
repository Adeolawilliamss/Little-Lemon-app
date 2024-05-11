import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";
import './index.css';


export default function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchAvailableTimes(new Date());
  }, []);

  const fetchAvailableTimes = (date) => {
    const times = fetchAPI(date);
    setAvailableTimes(times);
  };

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate(pages.get('confirmedBooking').path);
    }
  };

  return (
    <div className="booking-page">
      <h1>Booking Page</h1>
      <BookingForm
        onClose={() => {}}
        availableTimes={availableTimes}
        submitForm={submitForm}
      />
    </div>
  );
}
