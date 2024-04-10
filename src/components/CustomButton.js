import React from 'react';
// import BookingForm from '../BookingForm';

function CustomButton({ text, onClick, style }) {
  const buttonStyle = {
    width: '130px',
    height: '40px',
    backgroundColor: '#F4CE14',
    borderRadius: '5%',
    border: 'none', // Remove default border
    cursor: 'pointer', // Add cursor pointer on hover
    ...style, // Merge custom styles with default styles
  };



  const textStyle = {
    color: 'black',
    fontStyle: 'bold', // Example font size
  };

   // Media query for smaller screens
   const mediaQueryStyle = {
    '@media(max-width: 767px)': {
      width: '80px', // Adjust width for smaller screens
      height: '20px',
      ...style,
    },
  };

return (
  <button style={{ ...buttonStyle, ...mediaQueryStyle }} onClick={onClick}>
    <span style={textStyle}>{text}</span>
  </button>
);
}

export default CustomButton;
