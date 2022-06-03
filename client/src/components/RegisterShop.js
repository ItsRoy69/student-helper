import React from 'react';

import bannerpic from '../assets/registershop.png';

import "../styles/RegisterShop.css";

export const RegisterShop = ({ setModal }) => {

    return (
      <div className='backdrop-shop'>
        <div className='shopcardbody'>
          <div className='leftcard'>
            <h1>Request Access As Shopkeeper</h1>
            <div className='leftcardpara'>
              <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>
          <img className="leftpic" src={bannerpic} alt="images"/>            
        </div>
        <div className='registershopcard'>
          <div className='registershopcardside'>
            <div className='shopaname'>
              <h4>Name</h4>
              <input className='naming' name="name" placeholder='Enter your name' type="text" />
            </div>
            <div className='shopacollege'>
              <h4>College</h4>
              <input className='naming' name="college" placeholder='Enter your College name' type="text" />
            </div>
            <div className='shopashop'>
              <h4>Shop Name</h4>
              <input className='naming' name="shop" placeholder='Enter your Shop name' type="text" />
            </div>
            <div className='shopaemail'>
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
    </div>

  )
}
