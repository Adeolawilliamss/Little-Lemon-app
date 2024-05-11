import React, { useState } from 'react';
import Specials from './Specials';
import './Menu.css';

const Menu = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Data for tabs
  const tabs = [
    { title: 'Salads', items: [
      <Specials imageUrl="greek salad.jpg" title="Greek Salad" price="$5.99" description="The Famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons" />,
      <Specials imageUrl="bruchetta.jpg" title="Bruchetta" price="$12.99" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil" />
    ]},
    { title: 'Main Dishes', items: [
      <Specials imageUrl="lemon dessert.jpg" title="Lemon Dessert" price="$4.99" description="Indulge in our refreshing Lemon Dessert, a delightful treat bursting with citrusy flavor." />,
      <Specials imageUrl="MenuPictures/cauliflower tacos.jpeg" title="Cauliflower Tacos" price="$4.99" description="Experience a burst of flavor with our Cauliflower Tacos, a tantalizing twist on the classic Mexican dish." />,
      <Specials imageUrl="MenuPictures/crepes.jpeg" title="Crepe" price="$4.99" description="Indulge in the delicate and delightful taste of our Crepes, a classic French delicacy reimagined with a touch of elegance and flair." />
    ]},
    { title: 'Foreign', items: [
      <Specials imageUrl="MenuPictures/Egusi.jpeg" title="Egusi" price="$4.99" description="Our Egusi soup is a traditional Nigerian dish made with ground melon seeds, cooked with assorted meats, fish, and vegetables." />,
      <Specials imageUrl="MenuPictures/Elote.jpeg" title="Elote" price="$4.99" description="Savor the authentic flavors of Mexico with our Elote, a tantalizing street food delight that's bursting with bold and savory flavors." />,
      <Specials imageUrl="MenuPictures/Flamache.jpeg" title="Flamache" price="$4.99" description="Flamache offers a fiery twist on the classic French dish, Flambé." />,
      <Specials imageUrl="MenuPictures/Koshari.jpeg" title="Koshari" price="$4.99" description="Koshari is an iconic Egyptian dish that tantalizes taste buds with its vibrant blend of flavors and textures." />,
      <Specials imageUrl="MenuPictures/Ribolita.jpeg" title="Ribolita" price="$4.99" description="Ribollita is a Tuscan classic that embodies the heartiness and warmth of Italian comfort food." />,
      <Specials imageUrl="MenuPictures/salad pasta.jpeg" title="Salad Pasta" price="$4.99" description="Salad pasta, also known as pasta salad, is a versatile dish that combines the best of both worlds: the heartiness of pasta and the freshness of salad ingredients." />,
      <Specials imageUrl="MenuPictures/Shakshuka.jpeg" title="Shakshuka" price="$4.99" description="Shakshuka is a flavorful and hearty North African and Middle Eastern dish consisting of poached eggs in a spicy tomato and pepper sauce." />,
      <Specials imageUrl="MenuPictures/Tamiya.jpeg" title="Tamiya" price="$4.99" description="Tamiya, also known as falafel, is a popular Middle Eastern dish made from ground chickpeas or fava beans, herbs, and spices." />,
      <Specials imageUrl="MenuPictures/Yaki Udon.jpeg" title="Yaki Udon" price="$4.99" description="Yaki udon is a popular Japanese stir-fried noodle dish made with thick, chewy udon noodles, assorted vegetables, and often some protein such as meat, seafood, or tofu." />
    ]}
  ];

  // Function to handle tab selection
  const selectTab = (index) => {
    setActiveTab(index);
  };

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
            {tab.items.map((special, idx) => (
              <div className="menu-card" key={idx}>
                {special}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;