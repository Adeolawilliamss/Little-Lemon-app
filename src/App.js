import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import BookingPage from './Pages/BookingPage/Bookings/BookingPage';
import ConfirmedBooking from './Pages/ConfirmedBooking/ConfirmedBooking'
import pages from "./utils/pages";
import UnderConstruction from "./components/UnderConstruction/Index";
import Layout from "./components/Layout";
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
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
        {pages.has('orderOnline') && <Route path={pages.get('underConstruction').path} element={<UnderConstruction />} />}
        {pages.has('login') && <Route path={pages.get('underConstruction').path} element={<UnderConstruction />} />}
      </Routes>
    </Layout>
    <ToastContainer />

    </>
  );
}

export default App;