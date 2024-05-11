const pages = new Map();
pages.set('homePage', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true }); 
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('bookingPage', { name: 'Reservations', path: '/bookingPage', anchorable: true });
pages.set('confirmedBooking', { name: 'Confirmed Booking', path: '/confirmed-booking', anchorable: false });
pages.set('orderOnline', { name: 'Order Online', path: '/order-online', anchorable: true });
pages.set('cartPage', { name: 'Cart', path: '/cart', anchorable: true }); // Add the cart page here
// pages.set('login', { name: 'Login', path: '/login', anchorable: true });

export default pages;