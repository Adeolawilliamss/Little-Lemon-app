import React from "react";
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="Footer">
      <div className='container md:mx-auto px-4 py-8'>
      <div className="logo__content">
        <div className="img__container">
          <img src="Meta-header.png" alt="closing footer" />
        </div>
        <h1>Little Lemon</h1>
      </div>
      <hr />
      <div className="footer__content">
        <div className="subscribe">
          <h1>Subscribe to our newsletter</h1>
          <div className="input-container">
            <input type='email' placeholder='Enter your Email' />
            <FaArrowRight className="arrow" />
          </div>
          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>
        <div className="footer__text">
          <div className="footer__heading">
            <h3>Service</h3>
            <div>
              <p>Online Order</p>
              <p>Pre-Reservation</p>
              <p>24/7 services</p>
              <p>Foodie Place</p>
              <p>SuperChef</p>
            </div>
          </div>
          <div className="footer__heading">
            <h3>Contact</h3>
            <div>
              <p>Address</p>
              <p>Phone Number</p>
              <p>E-mail</p>
            </div>
          </div>
          <div className="footer__heading">
            <h3>Social Media Links</h3>
            <div>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Pinterest</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;

