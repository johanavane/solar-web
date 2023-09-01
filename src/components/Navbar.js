import React from "react";
import "../styles/Navbar.scss";
import logo from "../images/sun-energy.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-flex-box nav-links">
        <img
          src={logo}
          className="sun-energy"
          alt="half sun half lightning bolt"
        />
        <a href="#benefits">Benefits</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="tel:408-413-8096" className="phone-num">
          (408)413-8096
        </a>
      </div>
    </div>
  );
}

export default Navbar;
