const pages = new Map();
pages.set('homePage', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/about', anchorable: true }); 
pages.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pages.set('bookingPage', { name: 'Reservations', path: '/bookingPage', anchorable: true });
pages.set('confirmedBooking', { name: 'Confirmed Booking', path: '/confirmedBooking', anchorable: false });
pages.set('orderOnline', { name: 'Order Online', path: '/orderOnline', anchorable: true });
pages.set('cart', { name: 'Cart', path: '/cart', anchorable: true });


export default pages;