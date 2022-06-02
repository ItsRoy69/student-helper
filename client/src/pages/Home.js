import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import {Register} from './register/Register.js';
import RegisterCard from './register/RegisterCard.js';


import { Link } from "react-router-dom";
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
      <div className="landingpage">
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

        <div className="midbanner">
          <div className="midbannerhead">
            <div className="bannerhead">
              <h2 className="bannerheader">About</h2>
            </div>
            <div className="midbannerpara">
              <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="midbannerbody">
            <div className="midbannerboxbody">
              <Link to={"/faculty"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about1} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Faculty</h3>
                </div>
              </Link>
            </div>
            <div className="midbannerboxbody">
              <Link to={"/events"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about2} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Events</h3>
                </div>
              </Link>
            </div>
            <div className="midbannerboxbody">
              <Link to={"/notes"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about3} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Notes</h3>
                </div>
              </Link>
            </div>
            <div className="midbannerboxbody">
              <Link to={"/clubs"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about4} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Clubs</h3>
                </div>
              </Link>
            </div>
            <div className="midbannerboxbody">
              <Link to={"/canteen"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about5} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Canteen</h3>
                </div>
              </Link>
            </div>
            <div className="midbannerboxbody">
              <Link to={"/campus"}>
                <div className="midbannerboxpic">
                  <img className="bannerbg" src={about6} alt="images"/>
                </div>
                <div className="midbannerboxbio">
                  <h3 className="midbannerboxabout">Campus</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="joimidbanner">
          <div className="joimidbannerpic">
            <img className="joinbg" src={join} alt="images"/>
          </div>
          <div className="joimidbannerpicdetails">
            <div className="joimidbannerpicdetailshead">
              <h3>Join Us!</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <div className="joimidbannerbutton">
                <RegisterCard setModal={setModal} />
                {modal && <Register setModal={setModal} />}
              </div>
            </div>
          </div>
        </div>
        <div className="teammidbanner">
          <div className="teammidbannerpicdetails">
            <div className="teammidbannerpicdetailshead">
              <h3>Meet Our Team</h3>
              <p>Our team consists of creative and technical developers who push innovation to create an impactful solution! </p>
            </div>
          </div>
          <div className="teammidbannerpic">
            <img className="teammidbanner" src={team} alt="images"/>
          </div>
        </div>

        <div className="teamcards">
          <div className="teampiccards">

            <div className="teamdetailcardinfo">
              <div className="teamdetailaboutpic">
                <img className="bannerbg" src={teammember} alt="images"/>
              </div>
              <div className="teamdetailcard">
                <div className="teamdetailabout">
                  <h4>Sayak Sengupta</h4>
                  <p>Web Developer</p>
                  <div className='values-list' >
                    <button className="icon" href={"/"}><GrFacebookOption/></button>
                    <button className="icon" href={"/"}><FaLinkedinIn/></button>
                    <button className="icon" href={"/"}><FaTwitter/></button>
                  </div>
                </div>
              </div>
            </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Parna Chowdhury</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Tamal Das</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="teamdetailcardinfo">
                <div className="teamdetailaboutpic">
                  <img className="bannerbg" src={teammember} alt="images"/>
                </div>
                <div className="teamdetailcard">
                  <div className="teamdetailabout">
                    <h4>Parna Chowdhury</h4>
                    <p>Web Developer</p>
                    <div className='values-list' >
                      <button className="icon" href={"/"}><GrFacebookOption/></button>
                      <button className="icon" href={"/"}><FaLinkedinIn/></button>
                      <button className="icon" href={"/"}><FaTwitter/></button>
                    </div>
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

export default Home
