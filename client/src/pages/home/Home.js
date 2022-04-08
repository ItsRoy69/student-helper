import React from 'react'
import Navbar from '../../components/navbar/Navbar.js';
import bannerbg from '../../assets/bannerbg.png';
import './Home.css'

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
            <img className="bannerbg" src={bannerbg} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
