import React from 'react'
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="logo">Students Helper</h3>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <Link to={"/"} className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-link">Miscellaneous</Link>
            </li>
            <li className="contact-link">
              <Link to={"/contact"} className="navbar-link" style={{ 'color': '#F4FAEB'}}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar
