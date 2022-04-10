import React, { useState } from "react";
import logo from "../imgs/logoCrop.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange, mobileBlur, setMobileBlur }) {
  // const [navMenu, setNavMenu] = useState('inactive');
  const [hamburger, setHamburger] = useState("inactive");

  const mobileMenu = () => {
    if (hamburger === "active") {
      setHamburger("inactive");
      setMobileBlur("unblur");
    } else {
      setHamburger("active");
      setMobileBlur("blur");
    }
  };

  return (
    <div className="nav-grid">
      <div className={`display-mobile ${hamburger}`}>
        <ul className="nav">
          <div className="nav-item">
            <a
              href="#home"
              style={{ width: "" }}
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              <div className="brand-grid">
                <img className="logo" src={logo} alt="sweeneyLogo"></img>
                <div className="brand-mark">
                  <div className="brand-title">Sweeney’s Seafood</div>
                  <div className="brand-subTitle">Bar & Grill</div>
                </div>
              </div>
            </a>
          </div>
        </ul>
      </div>

      {/* ----------------- Large Navbar > 820px  START ------------------------ */}
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
            <a
              href="#login"
              onClick={() => handlePageChange("Login")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Login" ? "nav-link active" : "nav-link"
              }
            >
             Login 
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#signup"
              onClick={() => handlePageChange("Signup")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Signup" ? "nav-link active" : "nav-link"
              }
            >
              Signup 
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

      {/* ----------------- Large Navbar > 820px  END ------------------------ */}

      {/* ---------------------- Mobile Navbar --------- 820px --------------  */}
      <nav className="navbar mobile">
        <div onClick={mobileMenu}>
          <div className={`hamburger ${hamburger}`}>
            <span className={`bar ${hamburger}`}></span>
            <span className={`bar ${hamburger}`}></span>
            <span className={`bar ${hamburger}`}></span>
          </div>
        </div>

        <ul
          className={`sidebar-menu slide-${hamburger}`}
          style={{ color: "#fff", marginRight: "auto", marginLeft: "auto" }}
        >
          <div className="d-flex align-center space-around">
            <div className="d-flex">
              <div style={{marginRight: '3vw'}} className="nav-item">
                <a style={{marginRight: '3vw'}} href="https://www.facebook.com/sweeneysseafood/" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/sweeneysbarngrill/" target="_blank">
                  <FaInstagram />
                </a>
              </div>
              <div>
                <div className="brand-title">Sweeney’s Seafood</div>
                <div className="brand-subTitle float-right">Bar & Grill</div>
              </div>
            </div>
            <div onClick={mobileMenu} className={`hamburger ${hamburger} float-right`}>
              <span className={`bar ${hamburger}`}></span>
              <span className={`bar ${hamburger}`}></span>
              <span className={`bar ${hamburger}`}></span>
            </div>
          </div>
          <li></li>
          <li>
            <a href="#Feature" onClick={() => {
                handlePageChange("Feature")
                mobileMenu();
              }}>
              Features
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => {
              handlePageChange("Menu")
              mobileMenu();
              }}>
              Menu
            </a>
          </li>
          <li>
            <a href="#bar" onClick={() => {
              handlePageChange("Bar")
              mobileMenu();
              }}>
              Bar
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => {
              handlePageChange("About")
              mobileMenu();
              }}>
              About
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => {
              handlePageChange("Reviews")
              mobileMenu();
              }}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#login" onClick={() => {
              handlePageChange("Login")
              mobileMenu();
              }}>
               Login 
            </a>
          </li>
        </ul>
      </nav>
      {/* ---------------------- Mobile Navbar --------- 820px --------------  */}
    </div>
  );
}

export default NavTabs;
