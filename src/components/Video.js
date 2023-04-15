import React from 'react';
import {Link} from 'react-router-dom';
import './Video.css';
import globe from '../assets/videos/video-2.mp4';

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={globe} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Hey there,</h1>
        <p>I am Mohamed Arafath</p>
        <div>
          <Link to='/projects' className='btn'>Projects</Link>
          <Link to='/Resume' className='btn'>Resume</Link>
          <Link to='/contact' className='btn'>Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default Video
