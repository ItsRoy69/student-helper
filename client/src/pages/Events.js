import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import leftbannerbg from '../assets/eventbannerlogo.png';
import righteventbannerbg from '../assets/pagesbannerbg.png';
import webeventbannerbg from '../assets/website.png';
import facultycall from '../assets/facultyinfocall.png';
import { GrAdd } from "react-icons/gr";

import '../styles/Events.css'

const Events = () => {
  return (
    <>
      <div className="eventpage">
        <Navbar/>
        <div className="eventbanner">
          <div className="lefteventbanner">
            <img className="leftbannerbg" src={leftbannerbg} alt="images"/>
          </div>
          <div className="righteventbanner">
            <img className="righteventbannerbg" src={righteventbannerbg} alt="images"/>
            <div className="rightbannerheader">
              <h1 className="heading">Events</h1>
              <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="addbannercards">
              <button className="icon" href={"/"}><GrAdd/></button>
            </div>
          </div>
        </div>

        <div className="eventbannercards">

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
        <Footer/>
      </div>
    </>
  )
}

export default Events
