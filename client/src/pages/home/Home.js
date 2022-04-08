import React from 'react'
import Navbar from '../../components/navbar/Navbar.js';
import greenbg from '../../assets/greenbg.jpg';
import boy_girlpic from '../../assets/bannerbg.jpg';

const Home = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar/>
        <div className="banner">
          <div className="rightbanner">
            <div className="rightbannerhead">
              <h1 className="header">Students Helper</h1>
            </div>
            <div className="rightbannerpara">
              <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="leftbanner">
            <div className="bannerimage">
              <img className="bannerbg" src={greenbg} />
              <img className="bannerbg" src={boy_girlpic} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
