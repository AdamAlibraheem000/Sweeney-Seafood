import React, { useState } from "react";
import logo from "../imgs/logoCrop.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {

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
      <div className={`display-mobile ${hamburger}`}>
        <ul className="nav">
          <div className="nav-item">
            <Link to='/'
            >
              <div className="brand-grid middle-man">
                <img className="logo" src={logo} alt="sweeneyLogo"></img>
                <div className="brand-mark">
                  <div className="brand-title">Sweeney’s Seafood</div>
                  <div className="brand-subTitle">Bar & Grill</div>
                </div>
              </div>
            </Link>
          </div>
        </ul>
      </div>

      {/* ----------------- Large Navbar > 820px  START ------------------------ */}
      <div className="full-nav">
        <ul className="nav-2">
          <li className="nav-item">
            <Link to='/features'
            >
              Features
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/menu'
            >
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/bar'
            >
              Bar
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/about'
            >
               Hours/Info
            </Link>
          </li>   
          <li className="nav-item">
            <a
              href="https://www.facebook.com/sweeneysseafood/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/sweeneysbarngrill/"
              target="_blank"
              rel="noopener noreferrer"
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
          <div
            className="d-flex align-center"
            style={{
              justifyContent: "end",
              marginRight: "5%",
              marginTop: "3%",
            }}
          >
            <div
              onClick={mobileMenu}
              className={`hamburger ${hamburger} float-right`}
            >
              <span className={`bar ${hamburger}`}></span>
              <span className={`bar ${hamburger}`}></span>
              <span className={`bar ${hamburger}`}></span>
            </div>
          </div>
          <li>
            <Link to='/features'
              onClick={() => {
                mobileMenu();
              }}
            >
              Features
            </Link>
            
          </li>
          <li>
            <Link
              to="/menu"
              onClick={() => {
                mobileMenu();
              }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/bar"
              onClick={() => {
                mobileMenu();
              }}
            >
              Bar
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                mobileMenu();
              }}
            >
              Hours/Info
            </Link>
          </li>
          
          <div
            style={{
              marginRight: "3vw",
              justifyContent: "space-evenly",
              fontSize: "4rem",
            }}
            className="nav-item d-flex"
          >
            <a
              style={{ marginRight: "3vw" }} 
              href="https://www.facebook.com/sweeneysseafood/" 
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <FaFacebookF />
            </a>
            
            <a href="https://www.instagram.com/sweeneysbarngrill/"
            target="_blank"
            rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </ul>
      </nav>
      {/* ---------------------- Mobile Navbar --------- 820px --------------  */}
    </div>
  );
}

export default NavTabs;
