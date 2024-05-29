import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Menu.css';
import '../Styles/Toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();

  const selectTab = (index) => {
    setActiveTab(index);
  };

  const handleAddToCart = (item) => {
    const itemToAdd = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      price: parseFloat(item.price.replace('$', '')), // Convert price to number
      description: item.description
    };
    dispatch(addToCart(itemToAdd));
    // toast.success('Item Added Successfully');
    toast.success(<div className="toast-message">Item Added Successfully</div>);
  };

  const tabs = [
    { title: 'Salads', items: [
      { id: 'greek-salad', imageUrl: "greek salad.jpg", title: "Greek Salad", price: "$5.99", description: "The Famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons" },
      { id: 'bruchetta', imageUrl: "bruchetta.jpg", title: "Bruchetta", price: "$12.99", description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" }
    ]},
    { title: 'Main Dishes', items: [
      { id: 'lemon-dessert', imageUrl: "lemon dessert.jpg", title: "Lemon Dessert", price: "$4.99", description: "Indulge in our refreshing Lemon Dessert, a delightful treat bursting with citrusy flavor." },
      { id: 'cauliflower-tacos', imageUrl: "MenuPictures/Cauliflower tacos2.jpg", title: "Cauliflower Tacos", price: "$4.99", description: "Experience a burst of flavor with our Cauliflower Tacos, a tantalizing twist on the classic Mexican dish." },
      { id: 'crepe', imageUrl: "MenuPictures/crepes.jpeg", title: "Crepe", price: "$4.99", description: "Indulge in the delicate and delightful taste of our Crepes, a classic French delicacy reimagined with a touch of elegance and flair." }
    ]},
    { title: 'Foreign', items: [
      { id: 'egusi', imageUrl: "MenuPictures/Egusi.jpeg", title: "Egusi", price: "$4.99", description: "Our Egusi soup is a traditional Nigerian dish made with ground melon seeds, cooked with assorted meats, fish, and vegetables." },
      { id: 'elote', imageUrl: "MenuPictures/Elote.jpeg", title: "Elote", price: "$4.99", description: "Savor the authentic flavors of Mexico with our Elote, a tantalizing street food delight that's bursting with bold and savory flavors." },
      { id: 'flamache', imageUrl: "MenuPictures/Flamache.jpeg", title: "Flamache", price: "$4.99", description: "Flamache offers a fiery twist on the classic French dish, Flambé." },
      { id: 'koshari', imageUrl: "MenuPictures/Koshari.jpeg", title: "Koshari", price: "$4.99", description: "Koshari is an iconic Egyptian dish that tantalizes taste buds with its vibrant blend of flavors and textures." },
      { id: 'ribolita', imageUrl: "MenuPictures/Ribolita.jpeg", title: "Ribolita", price: "$4.99", description: "Ribollita is a Tuscan classic that embodies the heartiness and warmth of Italian comfort food." },
      { id: 'salad-pasta', imageUrl: "MenuPictures/salad pasta.jpeg", title: "Salad Pasta", price: "$4.99", description: "Salad pasta, also known as pasta salad, is a versatile dish that combines the best of both worlds: the heartiness of pasta and the freshness of salad ingredients." },
      { id: 'shakshuka', imageUrl: "MenuPictures/Shakshuka.jpeg", title: "Shakshuka", price: "$4.99", description: "Shakshuka is a flavorful and hearty North African and Middle Eastern dish consisting of poached eggs in a spicy tomato and pepper sauce." },
      { id: 'tamiya', imageUrl: "MenuPictures/Tamiya.jpeg", title: "Tamiya", price: "$4.99", description: "Tamiya, also known as falafel, is a popular Middle Eastern dish made from ground chickpeas or fava beans, herbs, and spices." },
      { id: 'yaki-udon', imageUrl: "MenuPictures/Yaki Udon.jpeg", title: "Yaki Udon", price: "$4.99", description: "Yaki udon is a popular Japanese stir-fried noodle dish made with thick, chewy udon noodles, assorted vegetables, and often some protein such as meat, seafood, or tofu." }
    ]}
  ];

return (
      <div className="menu-container">
        <ul className="tabs">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={`tab-button ${index === activeTab ? 'active' : ''}`}
                onClick={() => selectTab(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={index === activeTab ? 'visible' : 'hidden'}
            >
              {tab.items.map((item, idx) => (
                <div className="menu-card" key={idx}>
                  <div className="card-content">
                  <div className="special-item">
                    <img src={item.imageUrl} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p className='price'>{item.price}</p>
                    <button type="button" id="button" class="btn btn-primary Order-button" onClick={() => handleAddToCart(item)}>
                      Add to Cart <FontAwesomeIcon icon={faMotorcycle} />
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Menu;





 