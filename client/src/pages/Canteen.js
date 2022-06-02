import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import canteenbannerbg from '../assets/pagesbannerbg.png';
import canteenbannerlogo from '../assets/canteenbanner.png';

import { GrAdd } from "react-icons/gr";
import '../styles/Canteen.css'

const Canteen = ({ setModal }) => {
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
        <div className="canteenbody">
          <div className="canteentable">
            <div className="canteentablehead">
              <h1 className="headingfood">Food</h1>
              <h1 className="headingprice">Prices</h1>
            </div>
            <div className="canteentablebody">
              <div className="canteentableinnerbody">
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div><div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
                <div className="canteentablebodycontents">
                  <h1 className="tablefood">Lorem Ipsum</h1>
                  <h1 className="tableprice">Rs.</h1>
                </div>
              </div>
              <div className="addbutton">
                <div onClick={()=>setModal(true)}>
                  <h1>Buy</h1>
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

export default Canteen
