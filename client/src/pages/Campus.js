import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import campusbannerbg from '../assets/pagesbannerbg.png';
import campusbannerlogo from '../assets/campusbanner.png';

import '../styles/Campus.css';

const Campus = ({ setModal }) => {
  return (
    <>
      <div className="campuspage">
        <Navbar/>
        <div className="bannerhead">
          <div className="bannerheading">
            <div className="leftbannerhead">
              <img className="campusbannerbg" src={campusbannerbg} alt="images"/>
              <div className="leftbannerheader">
                <h1 className="heading">Campus</h1>
                <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="rightbannerhead">
              <img className="campusbannerlogo" src={campusbannerlogo} alt="images"/>
            </div>
          </div>
        </div>
        <div className="midbanner">
          <div className="midbannerbox">
            <div className="midbannersmallbox">
            <iframe className="routeMap" src="https://www.google.com/maps/embed?pb=!1m44!1m12!1m3!1d58941.620306277015!2d88.430956800856!3d22.5846653829944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m29!3e0!4m5!1s0x3a0277073391c415%3A0xd3e7ca57151ca868!2zS2FyaWdhcmkgQmhhd2FuLCBOZXcgVG93biBSb2FkLCBvcHBvc2l0ZSDgpofgpongpqjgpr_gppPgpq_gprzgpr7gprDgp43gprLgp43gpqEg4Ka44Ka_4Kaf4Ka_LCBBY3Rpb24gQXJlYSBJSUksIE5ld3Rvd24sIEtvbGthdGEsIFdlc3QgQmVuZ2Fs!3m2!1d22.5595067!2d88.4917712!4m5!1s0x3a02751173a989e1%3A0x9084ccb1a419c302!2sNEWTOWN%20BUS%20STAND%20SUBBA%2C%20Action%20Area%201A%2C%20Newtown%2C%20New%20Town%2C%20West%20Bengal!3m2!1d22.5813638!2d88.4529364!4m5!1s0x3a0275107bc3b5cb%3A0xed1e492c5a300d82!2sAL%20Block(Newtown)%2C%20Action%20Area%20I%2C%20Newtown%2C%20New%20Town%2C%20West%20Bengal!3m2!1d22.577436199999998!2d88.4518957!4m3!3m2!1d22.5801034!2d88.4627771!4m5!1s0x3a0277073391c415%3A0xd3e7ca57151ca868!2zS2FyaWdhcmkgQmhhd2FuLCBOZXcgVG93biBSb2FkLCBvcHBvc2l0ZSDgpofgpongpqjgpr_gppPgpq_gprzgpr7gprDgp43gprLgp43gpqEg4Ka44Ka_4Kaf4Ka_LCBBY3Rpb24gQXJlYSBJSUksIE5ld3Rvd24sIEtvbGthdGEsIFdlc3QgQmVuZ2Fs!3m2!1d22.5595067!2d88.4917712!5e0!3m2!1sen!2sin!4v1645947453331!5m2!1sen!2sin" ></iframe>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>

  )
}

export default Campus
