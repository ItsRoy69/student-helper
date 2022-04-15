import React from 'react';

import bannerpic from '../../assets/register.png';

import "./Register.css";

export const Register = ({ setModal }) => {

    return (
    <div className='backdrop-con' onClick={() => setModal(false)}>
      <div onClick={(e) => { e.stopPropagation() }}>
        <div className='cardbody'>
          <div className='cardbanner'>
            <div className='leftcardbanner'>
              <h1>Check Now</h1>
              <div className='leftcardbannerpara'>
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
              </div>
            </div>
            <img className="leftbannerpic" src={bannerpic} alt="images"/>
            <div className='rightcardbanner'>
              <div className='rightcard'>
                <div className='rightcardname'>
                  <h4>Name</h4>
                  <input className='naming' name="name" placeholder='Enter your name' type="text" />
                </div>
                <div className='rightcardcollege'>
                  <h4>College</h4>
                  <input className='naming' name="college" placeholder='Enter your College name' type="text" />
                </div>
                <div className='rightcardyear'>
                  <h4>Year</h4>
                  <div className="yearbuttons">
                    <div className="yearbutton">
                      <div onClick={()=>setModal(true)}>
                        <h1>First</h1>
                      </div>
                    </div>
                    <div className="yearbutton" style={{'width':'62px'}}>
                      <div onClick={()=>setModal(true)}>
                        <h1>Second</h1>
                      </div>
                    </div>
                    <div className="yearbutton">
                      <div onClick={()=>setModal(true)}>
                        <h1>Third</h1>
                      </div>
                    </div>
                    <div className="yearbutton" style={{'width':'62px'}}>
                      <div onClick={()=>setModal(true)}>
                        <h1>Fourth</h1>
                      </div>
                    </div>
                  </div>
                  <div className='rightcardmail'>
                    <h4>Mail ID</h4>
                    <input className='naming' name="mail" placeholder='Enter your Mail ID' type="text" />
                  </div>
                  <div className='rightcardpassword' style={{'padding-bottom':'20px'}}>
                    <h4>Password</h4>
                    <input className='naming' name="password" placeholder='Enter your Password' type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className='rightbuttons'>
              <div className="signinbutton">
                <div onClick={()=>setModal(true)}>
                  <h1>Sign In</h1>
                </div>
              </div>
              <div className="signupbutton">
                <div onClick={()=>setModal(true)}>
                  <h1>Sign Up</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
