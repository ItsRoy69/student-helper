import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';

import facultybannerbg from '../../assets/facultybannerbg.png';
import facultybannerlogo from '../../assets/facultybannerlogo.png';

const Faculty = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <div className="bannerhead">
          <div className="leftbannerhead">
            <img className="facultybannerbg" src={facultybannerbg} alt="images"/>
            <div className="leftbannerheader">
              <h1 className="heading">Faculty</h1>
            </div>
          </div>
          <div className="rightbannerhead">
            <img className="facultybannerlogo" src={facultybannerlogo} alt="images"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faculty
