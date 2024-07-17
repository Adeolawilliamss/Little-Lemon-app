import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonial/Testimonials';
import About from '../Chicago/Chicago'
import Footer from '../Footer/Footer';


const HomePage = () => {
  const sections = [
         { Component: Nav, direction: 'left' },
         { Component: Header, direction: 'right' },
         { Component: Specials, direction: 'left' },
         { Component: Testimonials, direction: 'right' },
         { Component: About, direction: 'left' },
         { Component: Footer, direction: 'right' },
       ];

       const variants = {
        hiddenLeft: { opacity: 0, x: -100 },
        hiddenRight: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };

 return (
    <div>
      {sections.map(({ Component, direction }, index) => (
        <SectionWrapper key={index} direction={direction} variants={variants}>
          <Component />
        </SectionWrapper>
      ))}
    </div>
  );
};

const SectionWrapper = ({ children, direction, variants }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
      animate={inView ? 'visible' : direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default HomePage;