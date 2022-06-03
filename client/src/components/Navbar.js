import React, { useState } from "react";
import "../styles/Navbar.css";
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

const Navbar = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

  return (
    <>
      <navbar className="navbar__middle">
          <div className="container">
            <div className="row">
              <div className="navbar__middle__logo">
                <a href="/">
                    <h1>Students Helper</h1>
                </a>
              </div>

              <div className="navbar__middle__menus">
                <nav className="main-nav " >

                  {isResponsiveclose === true ? <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                  </> : <> 
                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                  </>}

                  <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                      <a exact activeClassName='is-active' onClick={toggleClass} href="/"> Home </a> 
                    </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <a href="#"> Miscellaneous <FiChevronDown /> </a>
                      <ul className={boxClassSubMenu.join(' ')} > 
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/faculty"> Faculty </a> </li>
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/events"> Events </a> </li>
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/notes"> Notes </a> </li>
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/clubs"> Clubs </a> </li>
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/canteen"> Canteen </a> </li>
                        <li><a onClick={toggleClass} activeClassName='is-active' href="/campus"> Campus </a> </li>
                      </ul>
                    </li>
                    <li className="menu-item " ><a onClick={toggleClass} activeClassName='is-active' href="/contact"> Contact </a> </li>
                  </ul>
                </nav>     
              </div>       
            </div>
          </div>
        </navbar>
    </>
  );
};

export default Navbar
