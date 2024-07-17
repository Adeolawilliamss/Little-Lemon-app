import React from 'react';
import './Chicago.css'; 

function About() {
  return (
    <div className="py-4 mt-2 border-b-4 min-h-full">
       <div className="container mx-auto">
       <div className='chicago flex flex-col md:flex-row gap-11'>
        <div>
        <h1 className="main-heading">Little Lemon</h1>
         <h2 className="sub-heading">Chicago</h2>
         <p className="description">
           Little Lemon Chicago is the best restaurant you can ever visit which will take care of all your daily needs.
         </p>
        </div>
        <div>
        <div className=''>
         <img className='w-[10rem] h-[8rem] md:h-44 md:w-[15rem]' src="Imageontop.jpg" alt="About" />
         <img className='z-11 ml-11 mt-[-5rem] w-[10rem] h-[8rem] md:h-44 md:w-[15rem]' src="ImageBellow.jpg" alt="Background" />
       </div>
        </div>
       </div>
       </div>
    </div>
  );
}

export default About;