import React, { useState } from "react";
import logo from "../imgs/logoCrop.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  // const [navMenu, setNavMenu] = useState('inactive');
  const [hamburger, setHamburger] = useState("inactive");

  const mobileMenu = () => {
    if (hamburger === "active") {
      setHamburger("inactive");
    } else {
      setHamburger("active");
    }
  };

  return (
    <div className="nav-grid">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <div className="brand-grid">
                <img className="logo" src={logo} alt="sweeneyLogo"></img>
                <div>
                  <div className="brand-title">Sweeney’s Seafood</div>
                  <div className="brand-subTitle">Bar & Grill</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="full-nav">
        <ul className="nav-2">
          <li className="nav-item">
            <a
              href="#Feature"
              onClick={() => handlePageChange("Feature")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Feature" ? "nav-link active" : "nav-link"
              }
            >
              Features
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#menu"
              onClick={() => handlePageChange("Menu")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Menu" ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Bar"
              onClick={() => handlePageChange("Bar")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === "Bar" ? "nav-link active" : "nav-link"}
            >
              Bar
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#reviews"
              onClick={() => handlePageChange("Reviews")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Reviews" ? "nav-link active" : "nav-link"
              }
            >
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.facebook.com/sweeneysseafood/" target="_blank">
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/sweeneysbarngrill/"
              target="_blank"
            >
              <FaInstagram></FaInstagram>
            </a>
          </li>
        </ul>
      </div>

          <nav className="navbar mobile" onClick={mobileMenu}>
            <div className={`hamburger ${hamburger}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul
              className={`sidebar-menu slide-${hamburger}`}
              style={{ color: "#fff", marginRight: 'auto', marginLeft: 'auto'}}
            >
              <li>
                <a
                  href="#Feature"
                  onClick={() => handlePageChange("Feature")}  
                >
                  Features
                </a>
              </li>
              <li>
              <a
                href="#menu"
                onClick={() => handlePageChange("Menu")}
              >
                Menu
              </a>
              </li>
              <li>
                <a
                  href="#Bar"
                  onClick={() => handlePageChange("Bar")}
                  className={
                    currentPage === "Bar" ? "nav-link active" : "nav-link"
                  }
                >
                  Bar
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={() => handlePageChange("Reviews")}
                  className={
                    currentPage === "Reviews" ? "nav-link active" : "nav-link"
                  }
                >
                  Reviews
                </a>
              </li>
            </ul>
          </nav>     
      </div>
  );
}

export default NavTabs;
