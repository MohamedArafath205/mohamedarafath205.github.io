import React from 'react'
import './Resumepage.css'
import resume from '../assets/images/Resume(14-4-23).jpg'
import download from '../assets/images/Resume(14-4-23).pdf'

const Resume = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <img className="img" src={resume} alt='resume' />
        <a href={download} className='btn' download="Mohamed Arafath's Resume">Download</a>
      </div>
    </div>
  )
}

export default Resume
