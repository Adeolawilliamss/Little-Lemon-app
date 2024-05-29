import React from 'react';
import Testimonials from './Testimonials';
import About from './Chicago';
import { Link } from 'react-router-dom';
import pages from '../utils/pages';
import Header from './Header';
import Specials from './OrderOnline/Specials';
import './Styles/Homepage.css';
import { FaSearch } from 'react-icons/fa';

function HomePage() {
  const specialsData = [
    { id: 'crepe', imageUrl: "MenuPictures/crepes.jpeg", title: "Crepe", price: "$4.99", description: "Indulge in the delicate and delightful taste of our Crepes, a classic French delicacy reimagined with a touch of elegance and flair." },
    { id: 'egusi', imageUrl: "MenuPictures/Egusi.jpeg", title: "Egusi", price: "$4.99", description: "Our Egusi soup is a traditional Nigerian dish made with ground melon seeds, cooked with assorted meats, fish, and vegetables." },
    { id: 'koshari', imageUrl: "MenuPictures/Koshari.jpeg", title: "Koshari", price: "$4.99", description: "Koshari is an iconic Egyptian dish that tantalizes taste buds with its vibrant blend of flavors and textures." },
    { id: 'ribolita', imageUrl: "MenuPictures/Ribolita.jpeg", title: "Ribolita", price: "$4.99", description: "Ribollita is a Tuscan classic that embodies the heartiness and warmth of Italian comfort food." },
    { id: 'shakshuka', imageUrl: "MenuPictures/Shakshuka.jpeg", title: "Shakshuka", price: "$4.99", description: "Shakshuka is a flavorful and hearty North African and Middle Eastern dish consisting of poached eggs in a spicy tomato and pepper sauce." },
  ];

  return (
    <div className="container">
      <Header />
        <h2 className='h2'>This Week's Specials:</h2>
        <form className="search">
          <Link to={pages.get('menu').path} className="explore__btn">Explore food</Link>
          <span className="search__icon"><FaSearch /></span>
          <input type='search' placeholder="search" />
        </form>
        <div className='menu-container'>
          <Specials items={specialsData} />
      </div>
      <Testimonials />
      <About />
    </div>
  );
}

export default HomePage;

