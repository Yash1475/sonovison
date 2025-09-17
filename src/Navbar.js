// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">Sonography</div> */}
      <Link to="/home" className="navbar-logo">Sonography</Link>
      <ul className="navbar-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/signup">SignUp</a></li>
        <li><a href="/signin">SignIn</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
