import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

import leftbannerbg from '../../assets/clubsbanner.png';
import rightclubbannerbg from '../../assets/pagesbannerbg.png';
import webeventbannerbg from '../../assets/website.png';
import facultycall from '../../assets/facultyinfocall.png';

import { GrAdd } from "react-icons/gr";
import './Clubs.css'

const Clubs = () => {
  return (
    <>
      <div className="clubpage">
        <Navbar/>
        <div className="clubbannerpage">
          <div className="clubbanner">
            <div className="leftclubbanner">
              <img className="leftbannerbg" src={leftbannerbg} alt="images"/>
            </div>
            <div className="rightclubbanner">
              <img className="rightclubbannerbg" src={rightclubbannerbg} alt="images"/>
              <div className="rightbannerheader">
                <h1 className="heading">Clubs</h1>
                <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className="addbannercards">
                <button className="icon" href={"/"}><GrAdd/></button>
              </div>
            </div>
          </div>

          <div className="clubbannercards">

            <div className="clubbannercard">
              <div className="clubbannercardpara">
                <h3 className="heading">Lorem Ipsum</h3>
                <p className="clubbannerpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
              <div className="clubbannercardetails">
                <div className="clubbannercardglobe">
                  <img className="icon" src={webeventbannerbg} alt="images"/>
                  <p className="clubname">Lorem Ipsum</p>
                </div>
                <div className="clubbannercardcall">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="clubnum">+91 1234567891</p>
                </div>
              </div>
            </div>

            <div className="eventbannercard">
              <div className="eventbannercardpara">
                <h3 className="heading">Lorem Ipsum</h3>
                <p className="eventbannerpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
              <div className="eventbannercardetails">
                <div className="eventbannercardglobe">
                  <img className="icon" src={webeventbannerbg} alt="images"/>
                  <p className="eventname">Lorem Ipsum</p>
                </div>
                <div className="eventbannercardcall">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="eventnum">+91 1234567891</p>
                </div>
              </div>
            </div>

            <div className="eventbannercard">
              <div className="eventbannercardpara">
                <h3 className="heading">Lorem Ipsum</h3>
                <p className="eventbannerpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
              <div className="eventbannercardetails">
                <div className="eventbannercardglobe">
                  <img className="icon" src={webeventbannerbg} alt="images"/>
                  <p className="eventname">Lorem Ipsum</p>
                </div>
                <div className="eventbannercardcall">
                  <img className="icon" src={facultycall} alt="images"/>
                  <p className="eventnum">+91 1234567891</p>
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

export default Clubs
