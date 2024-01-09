import React from 'react'
import './Resumepage.css'
import resume from '../assets/images/Resume.jpg'
import download from '../assets/images/MohamedResume.pdf'
import {message} from 'antd';

const Resume = () => {
  function downloadFile() {
    message.info('Thanks for downloading', 10);
  }
  return (
    <div className='hero'>
      <div className='content'>
        <img className="img" src={resume} alt='resume' />
        <a href={download} className='btn' onClick={downloadFile} download="Mohamed Arafath's Resume">Download</a>
      </div>
    </div>
  )
}

export default Resume
