/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import pages from '../utils/pages';

  function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
     <header style={{ position: 'relative' }}>
             <img src='Mainpicture.jpg' alt='Main'
         style={{ position: 'absolute', top:0, left: 0, width:windowWidth > 768 ? '16%':'14%', zIndex: 1 , borderRadius : '7%' , marginLeft:windowWidth > 768 ? '750px': '630px' , marginTop:windowWidth > 768 ? '100px':'80px'}}
       />
       <div style={{ backgroundColor: '#495E57', color: 'white', textAlign: 'center', padding: '20px' }}>
         <h1>Little Lemon</h1>
         <h2 style={{marginRight:windowWidth >768? '370px':'300px',marginTop:windowWidth > 768? '-40px':'-15px'}}>Chicago</h2>
         <p style={{ marginRight: windowWidth > 768 ? '270px' : '260px', fontSize: windowWidth > 768 ? '1rem' : '13px' }}>We are a family-owned</p>
         <p style={{ marginRight: windowWidth > 768 ? '270px' : '245px', fontSize: windowWidth > 768 ? '1rem' : '13px' }}>mediterreanean resturant</p>
         <p style={{ marginRight: windowWidth > 768 ? '270px' : '220px', fontSize: windowWidth > 768 ? '1rem' : '13px' }}>Focused on traditional recipies</p>
       </div>
       <Link to={pages.get('bookingPage').path} className="custom-button" style={{ marginRight:windowWidth > 768? '350px': '270px' , textDecoration: 'none'}}>
          Reserve A Table
        </Link>
        
     </header>
   );
 }

 export default Header;

