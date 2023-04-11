import React from 'react'
import globe from '../assets/videos/video-2.mp4'
import './Resumepage.css'

const Resume = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={globe} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Coming Soon!!</h1>
        </div>
    </div>
  )
}

export default Resume
