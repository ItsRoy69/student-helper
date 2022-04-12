import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

import notesbg from '../../assets/notesbannerbg.png';

import './Notes.css';

const Notes = () => {
  return (
    <>
      <div className="notespage">
        <Navbar/>
        <div className="notesbanner">
          <div className="notesbannerbg">
            <img className="notesbg" src={notesbg} alt="images"/>
            <div className="bannerheader">
              <h1 className="heading">Notes</h1>
              <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <div className="notesmidbanner">
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Notes
