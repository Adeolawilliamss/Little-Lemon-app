import React, { useEffect, useRef } from "react"; 
import './Nav.css';


  function Nav() {
  const headerRef = useRef(null); 
 
 useEffect(() => { 
   let prevScrollPos = window.scrollY; 
 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const headerElement = headerRef.current; 
     if (!headerElement) { 
       return; 
     } 
     if (prevScrollPos > currentScrollPos) { 
       headerElement.style.transform = "translateY(0)"; 
     } else { 
       headerElement.style.transform = "translateY(-200px)"; 
     } 
     prevScrollPos = currentScrollPos; 
   } 
   window.addEventListener('scroll', handleScroll)
  }, []); 
  
  const handleClick = (anchor) => (event) => {
    event.preventDefault(); // Prevent default behavior of anchor link
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    return(
        <nav>
        <ul>
        <li><img href="Home" src='LittleLemonLogo.png' alt='Little Lemon Logo' onClick={handleClick("Home")} /></li>
        <li href="Home" onClick={handleClick("Home")}>Homepage</li>
        
        <li>
         <a href="#Specials" onClick={handleClick("Specials")}>Specials</a>
         </li>

        <li>
          <a href="#About" onClick={handleClick("About")}>About</a>
        </li>

        <li>
          <a href="#CustomerSay" onClick={handleClick("CustomerSay")}>CustomersSay</a>
        </li>

        <li>
          <a href="#BookingForm" onClick={handleClick("BookingForm")}>BookingForm</a>
        </li>

        <li>
          <a href="#Footer" onClick={handleClick("Footer")}>Footer</a>
        </li>

      </ul>
    </nav>
    )
}

export default Nav;