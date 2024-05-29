import React, { useState, useEffect } from "react";
import { useLocation , Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import './Styles/Nav.css';
import pages from "../utils/pages";

function Nav() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  // useEffect to update active link when pathname changes
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="LittleLemonLogo.png" alt="Little Lemon Logo"/>
          </Link>
        </div>
        <ul>
          {Array.from(pages.values())
             .filter(page => page.anchorable && page.name !== 'Home')
            .map((page, index) => (
              <li key={index}>
                <Link to={page.path} className={activeLink === page.path ? "active-link" : ""}>
                  {page.name === "Cart" ? (
                    <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                  ) : (
                    page.name
                  )}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
