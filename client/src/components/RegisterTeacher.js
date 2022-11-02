import React from 'react';

import bannerpic from '../assets/registerteacher.png';

import "../styles/RegisterTeacher.css";

export const RegisterTeacher = ({ setModal }) => {

    return (
      <div className='backdrop-teacher'>
        <div className='teachercardbody'>
          <div className='leftcard'>
            <h1>Request Access As Teacher</h1>
            <div className='leftcardpara'>
              <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
          <img className="leftpic" src={bannerpic} alt="images"/>            
        </div>
        <div className='registerteachercard'>
            <div className='rightname'>
              <h4>Name</h4>
              <input className='naming' name="name" placeholder='Enter your name' type="text" />
            </div>
            <div className='rightcollege'>
              <h4>College</h4>
              <input className='naming' name="college" list="browsers" placeholder='Enter your College name' type="text" />
              <datalist id="browsers">
                <option value="Jadavpur University" />
                <option value="IEM Kolkata" />
                <option value="UEM Kolkata" />
                <option value="Heritage Institute of Technology, Kolkata" />
                <option value="MAKAUT" />
                <option value="Narula Institute of Technology, Kolkata" />
                <option value="Amity University, Kolkata" />
                <option value="Techno India Salt Lake" />
                <option value="Adamas University" />
                <option value="Sister Nivedita University" />
                <option value="Brainware University, Kolkata" />
                <option value="Bengal Institute of Technology, Kolkata" />
                <option value="JISCE" />
                <option value="RCC Institute of Information Technology, Kolkata" />
                <option value="Budge Budge Institute of Technology, Kolkata" />
                <option value="MCKV Institute of Engineering Howrah, Kolkata" />
              </datalist>  
            </div>
            <div className='rightdept'>
              <h4>Department</h4>
              <input className='naming' name="department" placeholder='Enter your Department name' type="text" />
            </div>
            <div className='rightemail'>
              <h4>Mail ID</h4>
              <input className='naming' name="mail" placeholder='Enter your Mail ID' type="text" />
            </div>
            <div className='rightpassword'>
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

  )
}
