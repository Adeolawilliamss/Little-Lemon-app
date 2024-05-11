import React, { useState, useEffect, useRef } from 'react';
import Specials from './OrderOnline/Specials';
import Testimonials from './Testimonials';
import About from './Chicago';
import { Link } from 'react-router-dom'; // Import Link
import pages from '../utils/pages';
import Header from './Header';

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <h2 style={{ marginRight: windowWidth > 768 ? '400px' : '1000px', marginTop: windowWidth > 768 ? '100px' : '200px' }}>This Week's Specials</h2>
        <Link to={pages.get('menu').path} className="custom-button" style={{ marginLeft: '530px', marginTop:'-40px' , textDecoration: 'none'}}>
          Online Menu
        </Link>
          <div className='delivery-container'>
            <Specials imageUrl="greek salad.jpg" title="Greek Salad" price="$5.99" description="The Famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons" />
            <Specials imageUrl="bruchetta.jpg" title="Bruchetta" price="$12.99" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" />
            <Specials imageUrl="lemon dessert.jpg" title="Lemon Dessert" price="$4.99" description="Indulge in our refreshing Lemon Dessert, a delightful treat bursting with citrusy flavor." />
          </div>
        </div>
        <Testimonials />
        <About />
      </div>
  );
}

export default HomePage;
