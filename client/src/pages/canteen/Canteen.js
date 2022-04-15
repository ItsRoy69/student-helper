import React from 'react';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

import canteenbannerbg from '../../assets/pagesbannerbg.png';
import canteenbannerlogo from '../../assets/canteenbanner.png';

import { GrAdd } from "react-icons/gr";
import './Canteen.css'

const Canteen = () => {
  return (
    <>
      <div className="canteenpage">
        <Navbar/>
        <div className="bannerhead">
          <div className="bannerheading">
            <div className="leftbannerhead">
              <img className="canteenbannerbg" src={canteenbannerbg} alt="images"/>
              <div className="leftbannerheader">
                <h1 className="heading">Canteen</h1>
                <p className="headingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="rightbannerhead">
              <img className="canteenbannerlogo" src={canteenbannerlogo} alt="images"/>
              <div className="addbannercards">
                <button className="icon" href={"/"}><GrAdd/></button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>



    </>
  )
}

export default Canteen
