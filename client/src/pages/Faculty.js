import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import facultybannerbg from '../assets/pagesbannerbg.png';
import facultybannerlogo from '../assets/facultybannerlogo.png';
import facultydp from '../assets/facultydp.png';
import facultyid from '../assets/facultyinfoid.png';
import facultysub from '../assets/facultyinfosub.png';
import facultycall from '../assets/facultyinfocall.png';

import '../styles/Faculty.css';

const Faculty = () => {
  return (
    <>
      <div className="facultypage">
        <Navbar/>
        <div className="facultybanner section__padding" id="home">
          <img className="facultybannerbg" src={facultybannerbg} alt="images"/>
          <div className="facultybanner-content">
            <h1>Faculty</h1> 
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> 
          </div>
          <div className="facultybanner-image">
            <img src={facultybannerlogo} alt="bannerimg" />
          </div>
        </div>

        <div className="facultybody">
          <div className="facultybodycard">
            <div className="facultybodydetails">
              <div className="facultybodydp">
                <img className="facultydp" src={facultydp} alt="images"/>
              </div>
              <div className="facultybodyinfo">
                <div className="facultybodyinfom">
                  <img className="icon" src={facultyid} alt="images"/>
                  <p className="facultyname">Lorem Ipsum</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultysub} alt="images"/>
                  <p className="facultysubject">Lorem</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="facultynum">+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>

          <div className="facultybodycard">
            <div className="facultybodydetails">
              <div className="facultybodydp">
                <img className="facultydp" src={facultydp} alt="images"/>
              </div>
              <div className="facultybodyinfo">
                <div className="facultybodyinfom">
                  <img className="icon" src={facultyid} alt="images"/>
                  <p className="facultyname">Lorem Ipsum</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultysub} alt="images"/>
                  <p className="facultysubject">Lorem</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="facultynum">+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>

          <div className="facultybodycard">
            <div className="facultybodydetails">
              <div className="facultybodydp">
                <img className="facultydp" src={facultydp} alt="images"/>
              </div>
              <div className="facultybodyinfo">
                <div className="facultybodyinfom">
                  <img className="icon" src={facultyid} alt="images"/>
                  <p className="facultyname">Lorem Ipsum</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultysub} alt="images"/>
                  <p className="facultysubject">Lorem</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="facultynum">+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>

          <div className="facultybodycard">
            <div className="facultybodydetails">
              <div className="facultybodydp">
                <img className="facultydp" src={facultydp} alt="images"/>
              </div>
              <div className="facultybodyinfo">
                <div className="facultybodyinfom">
                  <img className="icon" src={facultyid} alt="images"/>
                  <p className="facultyname">Lorem Ipsum</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultysub} alt="images"/>
                  <p className="facultysubject">Lorem</p>
                </div>
                <div className="facultybodyinfom">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="facultynum">+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>         

        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Faculty
