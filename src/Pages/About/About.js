import React from 'react';
import './About.css';
import { FaCar, FaHeadphonesAlt, FaWallet, FaServicestack } from 'react-icons/fa'; 

const About = () => {
    return (
        <div className="bg-green py-4 mt-2 border-b-4 h-[23rem]">
            <div className="container mx-auto px-2.5">
            <div className="about">
            <h1 className='text-white text-2xl'>About Us</h1> 
            <p className="about__sub text-white">
                We are more than multiple services.
                Food is one of the basic necessities of life. 
                We are more than multiple services which serve the best foods and drinks.
                We provide the best and healthiest foods with great taste.
            </p>
            
            <div className="about__cards">
                <h1 className='text-white'>Our Story</h1>
                    <div className="story__img">
                        <img src="MenuPictures/About Header.jpg" className="aboutStoryImg" alt="Our Story" />
                    </div>
                    <div className="story__cards">
                        <p>
                            Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes.
                            Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor 
                            donec donec, primis arcu penatibus nascetur.
                        </p>
                    </div>
            </div>
            
            <div className="about__cards">
                <h1>Our Mission</h1>
                    <div className="story__img">
                        <img src="MenuPictures/About.jpg" className="aboutStoryImg" alt="Our Mission" />
                    </div>
                    <div className="story__cards">
                        <p>
                            Justo. Nunc. Montes ligula est nunc molestie feugiat rutrum risus ultricies eros, penatibus elit senectus montes.
                            Sagittis enim quam.Penatibus posuere faucibus praesent cras laoreet nascetur sem neque. Faucibus. Sollicitudin interdum eros, per tempor 
                            donec donec, primis arcu penatibus nascetur.
                        </p>
                    </div>
            </div>
            <hr />

            <h1>Why Choose Us?</h1>
            
            <div className="about__container">
                <figure>
                    <img src="MenuPictures/About Header.jpg" alt="" className="about__img" />
                </figure>
                <div className="about__details">
                    <h1>We are more than multiple services.</h1>
                    <p>
                        Food is one of the basic necessities of life. 
                        We are more than multiple services which serve the best foods and drinks.
                        We provide the best and healthiest foods with great taste.
                    </p>
                    <div className="about__icons">
                        <span className="icon__details">
                            <FaCar />
                            <p>Fast Delivery</p>
                        </span>
                        <span className="icon__details">
                            <FaHeadphonesAlt />
                            <p>Online support</p>
                        </span>
                        <span className="icon__details">
                            <FaWallet />
                            <p>Cool prices</p>
                        </span>
                        <span className="icon__details">
                            <FaServicestack />
                            <p>Clean Kitchen</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default About;


