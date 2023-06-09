import React from 'react'
import './Footer.css'
import {FaLinkedin, FaGithub, FaMailBulk, FaSearch, FaPhone, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearch size={20} style={{color: "#ffffff", marginRight: '2rem'}}/>
            <div>
              <p>India</p>
              <p>Tamil Nadu, Chennai</p>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color: "#ffffff", marginRight: '2rem'}} />+91 96772 04279</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color: "#ffffff", marginRight: '2rem'}} />mohamedarafath205@gmail.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>Social Media</h4>
          <p>Hi there! If you're interested in connecting with me on social media, I'd be thrilled to have you join me on my various platforms.
          <br /> <br /> No matter which platform you choose to connect with me on, I'm excited to get to know you and share my experiences with you. Thanks for considering connecting with me on social media!</p>
          <div className='social'>
            <a href='https://www.instagram.com/mohamedarafath205/'><FaInstagram size={30} style={{marginRight: '1rem'}} /></a>
            <a href='https://github.com/MohamedArafath205'><FaGithub size={30} style={{color: "#ffffff", marginRight: '1rem'}} /></a>
            <a href='https://www.linkedin.com/in/mohdarafath/'><FaLinkedin size={30} style={{color: "#ffffff", marginRight: '1rem'}} /></a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='bottom'>
          <p>&copy; 2023 Mohamed Arafath. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
