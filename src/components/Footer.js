import React, { useState, useEffect } from "react";
import './Footer.css';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  // console.log('Window Width:', windowWidth);

  return (
    <footer id="Footer">
    <div className="footer-container">
      <div className="left-sectionn">
      <div>
            <img style={{width:windowWidth > 768? '60%':'30%'}} src="Mario and Adrian b.jpg" alt="closing footer" />
        </div>
      </div>

         <div className="right-sectionn">
         <div className="first-section">
         <ul>
         <h1>Doormat Navigation</h1>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/bookings">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        </ul>
      </div>

         <div className="second-section">
         <ul>
          <h1>Contact</h1>
        <li><a href="/terms">Address</a></li>
        <li><a href="/privacy">Phone Number</a></li>
        <li><a href="/contact">E-mail</a></li>
        </ul>
      </div>
     
       <div className="third-section">
       <ul>
          <h1>Social Media Links</h1>
        <li><a href="/terms">Address</a></li>
        <li><a href="/privacy">Phone Number</a></li>
        <li><a href="/contact">Email</a></li>
       </ul>
      </div>
         </div>
        

      </div>
      </footer>
  );
};

export default Footer;