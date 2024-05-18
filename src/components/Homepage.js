import React, { useState, useEffect} from 'react';
import Testimonials from './Testimonials';
import About from './Chicago';
import { Link } from 'react-router-dom';
import pages from '../utils/pages';
import Header from './Header';
import Specials from './OrderOnline/Specials';
import './OrderOnline/Specials.css'
import { FaSearch } from 'react-icons/fa';

const specialsData = [
  { id: 'greek-salad', imageUrl: "greek salad.jpg", title: "Greek Salad", price: "$5.99", description: "The Famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons" },
  { id: 'egusi', imageUrl: "MenuPictures/Egusi.jpeg", title: "Egusi", price: "$4.99", description: "Our Egusi soup is a traditional Nigerian dish made with ground melon seeds, cooked with assorted meats, fish, and vegetables."},
  { id: 'koshari', imageUrl: "MenuPictures/Koshari.jpeg", title: "Koshari", price: "$4.99", description: "Koshari is an iconic Egyptian dish that tantalizes taste buds with its vibrant blend of flavors and textures." },
  { id: 'ribolita', imageUrl: "MenuPictures/Ribolita.jpeg", title: "Ribolita", price: "$4.99", description: "Ribollita is a Tuscan classic that embodies the heartiness and warmth of Italian comfort food." },
  { id: 'shakshuka', imageUrl: "MenuPictures/Shakshuka.jpeg", title: "Shakshuka", price: "$4.99", description: "Shakshuka is a flavorful and hearty North African and Middle Eastern dish consisting of poached eggs in a spicy tomato and pepper sauce." },
  // Add more specials as needed
];

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);

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

  const handleAddToCart = (item) => {
    // Implement add to cart functionality
    console.log(`Added to cart: ${item.title}`);
  };

  return (
    <div className="container"> 
      <Header />
      <div className="row">
        <h2 style={{ marginRight: windowWidth > 768 ? '400px' : '1000px', marginTop: windowWidth > 768 ? '100px' : '200px' }}>This Week's Specials:</h2>

       <form className="search">
          <Link to={pages.get('menu').path} className="explore__btn">Explore food</Link>
          <span className="search__icon"><FaSearch /></span>
          <input type='search' placeholder="search" />
        </form>

        <div className='menu-container'>
          <Specials items={specialsData} addToCart={handleAddToCart} />
        </div>
      </div>
      <Testimonials />
      <About />
    </div>
  );
}

export default HomePage;




