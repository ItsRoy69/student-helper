import React from 'react';

import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import FAQList from "./Faq.js";
import bannerpic from '../../assets/contactbanner.png';
import contactpic from '../../assets/register.png';

import './Contact.css'

const Contact = ({ setModal }) => {
  return (
    <>
      <div className="contactpage">
        <Navbar/>
        <div className='contacthead'>
          <div className='contactbanner'>
            <div className='leftcontactbanner'>
              <h1>Contact Us</h1>
              <div className='leftcontactbannerpara'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className='rightbanner'>
              <img className="bannerpic" src={bannerpic} alt="images"/>
            </div>
          </div>
        </div>
        <div className='contactbody'>
          <div className='contactbodybanner'>
            <div className='leftcontactbodybanner'>
              <img className="bannerpic" src={contactpic} alt="images"/>
            </div>
            <div className='rightcontactbanner'>
              <div className='rightbodycardname'>
                <h4>Name</h4>
                <input className='naming' name="name" placeholder='Enter your name' type="text" />
              </div>
              <div className='rightcardmail'>
                <h4>Mail ID</h4>
                <input className='naming' name="mail" placeholder='Enter your Mail ID' type="text" />
              </div>
              <div className='rightcardissue' style={{'padding-bottom':'20px'}}>
                <h4>Issue</h4>
                <textarea className='namingissue' rows="10" name="message" placeholder='Enter your Issue' type="text" />
              </div>
            </div>
            <div className='submitbutton'>
              <div onClick={() => window.location = 'mailto:jyotirmoyroy649@gmail.com'}>
                <h1>Submit</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='contactbottom'>
          <div className='contactfaq'>
            <h3>FAQs</h3>
          </div>
          <div>
            <FAQList              
              items={[
                { title: "This is question 1", body: "This is answer 1" },
                { title: "This is question 2", body: "This is answer 2" },
                { title: "This is question 3", body: "This is answer 3" },
                { title: "This is question 4", body: "This is answer 4" }
              ]}
            />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Contact
