import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../../utils/pages';
import './Header.css';

function Header() {
  return (
    <div className="bg-green py-4 mt-2 border-b-4 h-[23rem]">
    <div className="container mx-auto px-2.5">
      <div className='header flex md:gap-[20rem]'>
          <div className='header-texts mt-4 ml-5 md:ml-44'>
            <h1 className='text-yellow mt-10'>Little Lemon</h1>
            <h2 className='text-white'>Chicago</h2>
            <p className='text-white mt-3'>We are a Family-owned <br />mediterreanean <br /> resturant focused on traditional recipies.</p>
            <Link to={pages.get('bookingPage').path}>
            <button type='button' className="buy-btn mt-3">Reserve a Table</button></Link>
          </div>
          <div className='header-image group mt-10 md:mt-11'>
            <img src='Mainpicture.jpg' alt='Main'
            className="header-img h-[20rem] rounded-md object-contain transition-transform duration-200 transform group-hover:scale-110" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;