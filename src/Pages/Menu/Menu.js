import React, { useState } from 'react';
import { tabs } from './../../components/Data';
import './Menu.css';

const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-4 mt-2 border-b-4 min-h-full">
      <div className="container mx-auto px-4">
          <ul className="tabs flex flex-wrap justify-center mb-4">
            {tabs.map((tab, index) => (
              <li key={index} className="mr-2">
                <button
                  className={`tab-button ${index === activeTab ? 'active' : ''}`}
                  onClick={() => selectTab(index)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={index === activeTab ? 'visible' : 'hidden'}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tab.items.map((item, index) => (
                    <div className="menu-card" key={index}>
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="menu-img h-64 object-contain"
                          />
                          <h3 className="card-title mt-4 text-xl font-bold">{item.title}</h3>
                          <p className="card-description mt-2">{item.description}</p>
                          <p className="price mt-4 text-lg font-bold text-orange-600">{item.price}</p>
                        </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
  );
};

export default Menu;