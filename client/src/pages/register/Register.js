import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';

import "./Register.css";

export const Register = ({ setModal }) => {

    return (
    <div className='backdrop-con' onClick={() => setModal(false)}>
      <div onClick={(e) => { e.stopPropagation() }}>
        <div className='card-body'>
          <div className='card-banner'>
            <div className='left_card_banner'>
              <h1>Check Now</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='right-card-banner'>
              <div className='right-card'>
                <div className='right-card-name'>
                  <h4>Name</h4>
                  <input name="name" placeholder='Enter your name' type="text" />
                </div>
                <div className='right-card-college'>
                  <h4>College</h4>
                  <input name="college" placeholder='Enter your College name' type="text" />
                </div>
                <div className='right-card-year'>
                  <h4>Year</h4>
                  <div className="yearbannerbutton">
                    <div onClick={()=>setModal(true)}>
                      <h2>First</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
