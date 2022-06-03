import React from 'react';

import bannerpic from '../assets/registerteacher.png';

import "../styles/RegisterTeacher.css";

export const RegisterTeacher = ({ setModal }) => {

    return (
      <div className='backdrop-teacher'>
        <div className='teachercardbody'>
          <div className='leftcard'>
            <h1>Teacher</h1>
            <div className='leftcardpara'>
              <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
          <img className="leftpic" src={bannerpic} alt="images"/>            
        </div>
        <div className='registerteachercard'>
          <div className='registerteachercardside'>
            <div className='registername'>
              <h4>Name</h4>
              <input className='naming' name="name" placeholder='Enter your name' type="text" />
            </div>
            <div className='registercollege'>
              <h4>College</h4>
              <input className='naming' name="college" placeholder='Enter your College name' type="text" />
            </div>
            <div className='registermail'>
              <h4>Mail ID</h4>
              <input className='naming' name="mail" placeholder='Enter your Mail ID' type="text" />
            </div>
            <div className='registerpassword'>
              <h4>Password</h4>
              <input className='naming' name="password" placeholder='Enter your Password' type="text" />
            </div>           
          <div className="buttons">
            <div className="signinbutton">
              <h1>Sign In</h1>
            </div>
            <div className="accessbutton">
              <h1>Request Access</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}
