import React, { useState, useEffect} from 'react';
import CustomButton from './CustomButton';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './Chicago';
import BookingForm from './BookingForm';
import './Modal.css'; 

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

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

  const handleBookingButtonClick = () => {
   setIsBookingFormVisible(true); 
 };

 const handleClose = () => {
    setIsBookingFormVisible(false);
  };


  return (
    <div className="container">
      <div className="row">
        <h2 style={{ marginRight: windowWidth > 768 ? '400px' : '1000px', marginTop: windowWidth > 768 ? '100px' : '200px' }}>This Week's Specials</h2>
        <CustomButton text="Online Menu" style={{ marginLeft: '530px', marginTop:'-40px'}} onClick={handleBookingButtonClick} />
        <div className="specials-container">
          <Specials imageUrl="greek salad.jpg" title="Greek Salad" description="The Famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons" />
          <Specials imageUrl="bruchetta.jpg" title="Bruchetta" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" />
          <Specials imageUrl="lemon dessert.jpg" title="Lemon Dessert" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" />
        </div>
        <CustomersSay />
        <About />
      
        {isBookingFormVisible && (
  <div className="modal-container" onClick={handleClose}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <BookingForm onDateChange={handleClose} onClose={handleClose} />
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default HomePage;
