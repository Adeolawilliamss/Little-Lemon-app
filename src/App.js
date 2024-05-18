import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/Homepage";
import BookingPage from './components/Bookings/BookingPage';
import ConfirmedBooking from './components/Bookings/ConfirmedBooking';
import pages from "./utils/pages";
import UnderConstruction from "./components/UnderConstruction/Index";
import Layout from "./components/Layout";
import CartPage from './components/OrderOnline/CartPage';
import About from './components/About';
import Menu from './components/OrderOnline/Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Layout>
      <Routes> 
        {pages.has('homePage') && <Route path={pages.get('homePage').path} element={<HomePage />} />}
        {pages.has('about') && <Route path={pages.get('about').path} element={<About />} />}
        {pages.has('menu') && <Route path={pages.get('menu').path} element={<Menu />} />}
        {pages.has('bookingPage') && <Route path={pages.get('bookingPage').path} element={<BookingPage />} />}
        {pages.has('confirmedBooking') && <Route path={pages.get('confirmedBooking').path} element={<ConfirmedBooking />} />}
        {pages.has('orderOnline') && <Route path={pages.get('orderOnline').path} element={<UnderConstruction />} />}
        {pages.has('login') && <Route path={pages.get('login').path} element={<UnderConstruction />} />}
        {pages.has('cartPage') && <Route path={pages.get('cartPage').path} element={<CartPage />} />}
      </Routes>
    </Layout>
    <ToastContainer />
    </>
  );
}

export default App;