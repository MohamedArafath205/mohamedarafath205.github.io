import React from 'react';
import './About.css'
import Image1 from '../assets/images/image2.jpg';
import Image2 from '../assets/images/image3.jpeg';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>About Myself</h1>
        <p>Hello, I am Mohamed Arafath. I am currently pursuing my Bachelor of Technology in Computer Science with Specialization in Artificial Intelligence and Machine Learning at SRMIST Ramapuram. I am also a <b><i>Content Team Member</i></b> in <b>Google Developer Students Club</b>. I am an Machine Learning Enthusiast and I also created many projects related to Machine Learning. Please do visit my projects page for more details.</p>
        <div className='spacing'>
          <Link to="/projects" className="btn">Projects</Link>
        </div>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={Image2} className='img' alt='' />
          </div>
          <div className='image-stack bottom'>
            <img src={Image1} className='img' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
