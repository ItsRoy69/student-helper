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
            <li class="nav-item dropdown home">
                <p className="navbar-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Donors</p>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/medssupply">Meds Suppliers</a></li>
                    <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/ambulanceprovider">Ambulance Providers</a></li>
                    <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/plasma">Plasma Donors</a></li>
                    <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/oxygensupply">Oxygen Suppliers</a></li>
                    <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/hospitalbeds">Hospital Beds</a></li>
                </ul>
            </li>
            <li>
              <Link to={"/contact"} className="navbar-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar
