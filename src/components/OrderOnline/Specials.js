import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import './Specials.css';

function Specials({ items }) { // Removed addToCart from props
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const itemToAdd = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: parseFloat(item.price.replace('$', '')), // Convert price to number
      description: item.description
    };
    dispatch(addToCart(itemToAdd));
    toast.success('Item Added Successfully');
  };

  return (
    <div className="menu-container">
      <div className="specials-slider">
        {items.map((item, idx) => (
          <div className="specials-card" key={idx}>
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
        ))}
      </div>
    </div>
  );
}

export default Specials;
