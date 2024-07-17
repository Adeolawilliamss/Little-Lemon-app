import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { specialsData } from '../Data';
import './Specials.css';

function Specials() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-4 mt-2 border-b-4 min-h-full">
      <div className="container mx-auto">
        <div className='Specials'>
          <h2 className='h2'>This Week's Specials:</h2>
          <form className="search flex flex-col md:flex-row">
            <button className="explore__btn">Explore food</button>
            <span className="search__icon"><FaSearch /></span>
            <input type='search' placeholder="search" />
          </form>
          <div className="arrows flex">
            <span onClick={() => sliderRef?.slickPrev()}><FaArrowLeft /></span>
            <span onClick={() => sliderRef?.slickNext()}><FaArrowRight /></span>
          </div>
          <Slider ref={setSliderRef} {...settings} className='mt-11 border-rose-500'>
            {specialsData.map((item) => (
              <div key={item.id} className="special-item">
                <div className='group'>
                <img src={item.imageUrl} alt={item.title} className="special-image object-contain transition-transform duration-200 transform group-hover:scale-110" />
                </div>
                <h3 className="specials-title">{item.title}</h3>
                <span className='price'>{item.price}</span>
                <p className="specials-description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Specials;