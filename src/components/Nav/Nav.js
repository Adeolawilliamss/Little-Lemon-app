import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import './Nav.css';
import pages from "../../utils/pages";

function Nav() {
  return (
    <nav id="nav" className="py-4 border-b-4 min-w-full h-88">
      <div className="container mx-auto px-4">
      <div className="nav-container flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="logo">
          <Link to="/">
            <img src="LittleLemonLogo.png" alt="Little Lemon Logo" className="logo-img"/>
          </Link>
        </div>
        <div className="under-links">
        <ul className="flex flex-col md:flex-row gap-5">
        <Link to={pages.get('about').path}><li className="list">About</li></Link>
        <Link to={pages.get('menu').path}><li className="list">Menu</li></Link>
        <Link to={pages.get('bookingPage').path}><li className="list">Reservations</li></Link>
        <Link to={pages.get('underConstruction').path}><li className="list">Order Online</li></Link>
        <Link to={pages.get('underConstruction').path}><li className="list"><FontAwesomeIcon icon={faCartShopping} /></li></Link>
        </ul>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
