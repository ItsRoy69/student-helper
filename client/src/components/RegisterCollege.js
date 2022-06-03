import React, { useState } from 'react';

import { RegisterStudent } from './RegisterStudent';
import { RegisterTeacher } from './RegisterTeacher';
import { RegisterShop } from './RegisterShop';

import "../styles/RegisterCollege.css";

export const RegisterCollege = () => {
    
    const [modal, setModal] = useState(false);
    const [faculty, setFaculty] = useState(false);
    const [shop, setShop] = useState(false);
    
    return (
      <div className='backdrop'>
        <div className='registercardbody'>
          <div className='headregisterard'>
            <h1>Get Access</h1>
            <div className='registercardpara'>
              <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            </div>    
          </div>            
          <div className='registeryear'>
            <h4>Occupation</h4>
            <div className="buttons">                
              <div className="button" onClick={()=>setFaculty(true)}>
                <h1>Faculty</h1>
              </div>
              {faculty && <RegisterTeacher setFaculty={setFaculty} />}
              <div className="button" onClick={()=>setShop(true)}>
                <h1>Shopkeeper</h1>
              </div>
              {shop && <RegisterShop setShop={setShop} />}
              <div className="button" onClick={()=>setModal(true)}>
                <h1>Student</h1>
              </div>
              {modal && <RegisterStudent setModal={setModal} />}
            </div>
          </div> 
        </div>
      </div>
  )
}
