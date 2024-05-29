import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../Styles/Specials.css';

function Specials({ items }) {

  const dispatch = useDispatch();
  const [sliderRef, setSliderRef] = useState(null);

  const handleAddToCart = (item) => {
    const itemToAdd = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: parseFloat(item.price.replace('$', '')),
      description: item.description
    };
    dispatch(addToCart(itemToAdd));
    toast.success('Item Added Successfully');
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="menu-container">
      <div className="specials-heading">
        <div className="arrows">
          <span onClick={() => sliderRef?.slickPrev()}><FaArrowLeft /></span>
          <span onClick={() => sliderRef?.slickNext()}><FaArrowRight /></span>
        </div>
      </div>
      <div className="specials-slider">
        <Slider ref={setSliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="specials-card-container">
              <div className="specials-card">
                <div>
                  <img src={item.imageUrl} alt={item.title} className="specials-card-image" />
                </div>
                <div className="specials-card-content">
                  <h3 className="specials-card-title">{item.title}</h3>
                  <span className='price'>{item.price}</span>
                  <p className="specials-card-description">{item.description}</p>
                  <div className="delivery-container">
                    <span>Order a delivery </span>
                  </div>
                  <div className="Order-button-container">
                    <button type="button" id="button" className="btn btn-primary Order-button" onClick={() => handleAddToCart(item)}>
                      Add to Cart <FontAwesomeIcon icon={faMotorcycle} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Specials;
