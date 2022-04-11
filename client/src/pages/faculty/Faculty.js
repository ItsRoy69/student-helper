import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

import facultybannerbg from '../../assets/pagesbannerbg.png';
import facultybannerlogo from '../../assets/facultybannerlogo.png';
import facultydp from '../../assets/facultydp.png';
import facultyid from '../../assets/facultyinfoid.png';
import facultysub from '../../assets/facultyinfosub.png';
import facultycall from '../../assets/facultyinfocall.png';

import './Faculty.css'

const Faculty = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <div className="bannerhead">
          <div className="bannerheading">
            <div className="leftbannerhead">
              <img className="facultybannerbg" src={facultybannerbg} alt="images"/>
              <div className="leftbannerheader">
                <h1 className="heading">Faculty</h1>
                <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="rightbannerhead">
              <img className="facultybannerlogo" src={facultybannerlogo} alt="images"/>
            </div>
          </div>
        </div>

        <div className="facultybody">

          <div className="facultybodycard">
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

          <div className="facultybodycard">
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


          <div className="facultybodycard">
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


          <div className="facultybodycard">
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


          <div className="facultybodycard">
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
        <Footer/>
      </div>
    </>
  )
}

export default Faculty
