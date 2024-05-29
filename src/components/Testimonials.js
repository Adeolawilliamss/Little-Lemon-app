import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Styles/Testimonials.css';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: 'customer1.jpg',
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Antony Clifton',
    image: 'customer2.jpg',
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Tamika Jackson',
    image:'customer3.jpg',
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: 'Brandon Ming',
    image: 'customer4.jpg',
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

function Testimonials() {
  return (
    <div className="testimonial-container" id="CustomerSay">
      <h2 className="testimonial-header">What people say about us! &#128525;</h2>
      <div className="testimonial">
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;