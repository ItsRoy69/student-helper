import React from 'react';

import bannerpic from '../../assets/register.png';

import "./Register.css";

export const Register = ({ setModal }) => {

    return (
      <div className='backdrop-con' onClick={() => setModal(false)}>
        <div className='cardbody'>
          <div className='leftcard'>
            <h1>Check Now</h1>
            <div className='leftcardpara'>
              <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
          <img className="leftpic" src={bannerpic} alt="images"/>            
        </div>
        <div className='rightcard'>
          <div className='rightcardside'>
            <div className='rightname'>
              <h4>Name</h4>
              <input className='naming' name="name" placeholder='Enter your name' type="text" />
            </div>
            <div className='rightcollege'>
              <h4>College</h4>
              <input className='naming' name="college" placeholder='Enter your College name' type="text" />
            </div>
            <div className='rightyear'>
              <h4>Year</h4>
              <div className="yearbuttons">
                <div className="yearbutton">
                  <h1>First</h1>
                </div>
                <div className="yearbutton">
                  <h1>Second</h1>
                </div>
                <div className="yearbutton">
                  <h1>Third</h1>
                </div>
                <div className="yearbutton">
                  <h1>Fourth</h1>
                </div>
              </div>
            </div>
            <div className='rightmail'>
              <h4>Mail ID</h4>
              <input className='naming' name="mail" placeholder='Enter your Mail ID' type="text" />
            </div>
            <div className='rightpassword' style={{'padding-bottom':'20px'}}>
              <h4>Password</h4>
              <input className='naming' name="password" placeholder='Enter your Password' type="text" />
            </div>
          
          <div className="buttons">
            <div className="signinbutton">
              <h1>Sign In</h1>
            </div>
            <div className="signupbutton">
              <h1>Sign Up</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}
