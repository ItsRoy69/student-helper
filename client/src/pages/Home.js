import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import {Register} from './register/Register.js';
import RegisterCard from './register/RegisterCard.js';

import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

import bannerbg from '../assets/bannerbg.png';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import about4 from '../assets/about4.png';
import about5 from '../assets/about5.png';
import about6 from '../assets/about6.png';
import join from '../assets/join.png';
import team from '../assets/team.png';
import teammember from '../assets/teammember.png';

import '../styles/Home.css'

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
      <>
        <Navbar/>
        <div className="banner section__padding" id="home">
          <div className="banner-content">          
            <h1>Students Helper</h1> 
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> 
          </div>
          <div className="banner-image">
            <img src={bannerbg} alt="bannerimg" />
          </div>
        </div>

        <div className="about">
          <div className="about-content">
            <div className="about-head">
              <h2>About</h2>
            </div>
            <div className="about-para">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className='about-body'>
            <div className="about-boxes"> 

              <a href={"/faculty"}>
                <div className="box">
                  <div className="boxpic">
                    <img className="bannerbg" src={about1} alt="images"/>
                  </div>
                  <div className="boxbio">
                    <h3>Faculty</h3>
                  </div>
                </div>
              </a>                
              <a href={"/events"}>
                <div className="box">                    
                  <div className="boxpic">
                    <img className="bannerbg" src={about2} alt="images"/>
                  </div>
                  <div className="boxbio">
                    <h3>Events</h3>
                  </div>
                </div>
              </a>                
              <a href={"/notes"}>
                <div className="box">                    
                    <div className="boxpic">
                      <img className="bannerbg" src={about3} alt="images"/>
                    </div>
                    <div className="boxbio">
                      <h3>Notes</h3>
                    </div>                    
                </div>
              </a>                
            </div> 

            <div className="about-boxes">

              <a href={"/clubs"}>
                <div className="box">                  
                  <div className="boxpic">
                    <img className="bannerbg" src={about4} alt="images"/>
                  </div>
                  <div className="boxbio">
                    <h3>Clubs</h3>
                  </div>                  
                </div>
              </a>
              <a href={"/canteen"}>
                <div className="box">                  
                  <div className="boxpic">
                    <img className="bannerbg" src={about5} alt="images"/>
                  </div>
                  <div className="boxbio">
                    <h3>Canteen</h3>
                  </div>                  
                </div>
              </a>
              <a href={"/campus"}>
                <div className="box">                    
                    <div className="boxpic">
                      <img className="bannerbg" src={about6} alt="images"/>
                    </div>
                    <div className="boxbio">
                      <h3>Campus</h3>
                    </div>                  
                </div>
              </a>

            </div> 
          </div>

          <div className="joinbanner">
            <div className="joinbannerpic">
              <img className="joinbg" src={join} alt="images"/>
            </div>
            <div className="joinbannerdetails">
              <h3>Join Us!</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="joinbutton">
                <RegisterCard setModal={setModal} />
                {modal && <Register setModal={setModal} />}
              </div>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="teamdetails">
            <div className="teamdetailshead">
              <h3>Meet Our Team</h3>
              <p>Our team consists of creative and technical developers who push innovation to create an impactful solution! </p>
            </div>
          </div>
          <div className="teampic">
            <img src={team} alt="images"/>
          </div>
        </div>

        <h2 className="team_header">Meet our team</h2>
        <div className="teamcards_parent">

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="teamdetailcardinfo">
            <div className="teamdetailaboutpic">
              <img className="bannerbg" src={teammember} alt="images" />
            </div>
            <div className="teamdetailcard">
              <div className="teamdetailabout">
                <h4>Anjushree Sen</h4>
                <p>Web Developer</p>
                <div className="values-list">
                  <button className="icon" href={"/"}>
                    <GrFacebookOption />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaLinkedinIn />
                  </button>
                  <button className="icon" href={"/"}>
                    <FaTwitter />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>        
        <Footer/>
    </>
  )
}

export default Home
