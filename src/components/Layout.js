import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/confirmed-Booking' && location.pathname !== '/'; // Exclude home page

  return (
    <>
      {showHeaderFooter && <Nav />} 
      <main>{children}</main>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
