import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 className="logo">
            <Link to={"/"}  style={{'color': '#2D3D0F'}}>Students Helper</Link>
          </h3>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <Link to={"/"} className="navbar-link">Home</Link>
            </li>
            <li class="navbar-link navbar__dropdown">Miscellaneous
              <i class="material-icons">keyboard_arrow_down</i>
              <ul class="dropdown">
                <li class="dropdown-item">
                  <Link to={"/faculty"} className="navbar-link">Faculty</Link>
                </li>
                <li class="dropdown-item">
                  <Link to={"/"} className="navbar-link">Events</Link>
                </li>
                <li class="dropdown-item">
                  <Link to={"/"} className="navbar-link">Notes</Link>
                </li>
                <li class="dropdown-item">
                  <Link to={"/"} className="navbar-link">Clubs</Link>
                </li>
                <li class="dropdown-item">
                  <Link to={"/"} className="navbar-link">Canteen</Link>
                </li>
                <li class="dropdown-item">
                  <Link to={"/"} className="navbar-link">Campus</Link>
                </li>
              </ul>
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
