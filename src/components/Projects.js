import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

const projects = () => {
  return (
    <div className='projects'>
      <div className='card-container'>
        <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p className='prj1'>Jarvis</p>
            <p>- 3 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='contact' className='btn'>View</Link>
        </div>
        <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p className='prj1'>Jarvis</p>
            <p>- 3 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='contact' className='btn'>View</Link>
        </div>
        <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p className='prj1'>Jarvis</p>
            <p>- 3 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='contact' className='btn'>View</Link>
        </div>
        <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p className='prj1'>Jarvis</p>
            <p>- 3 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to='contact' className='btn'>View</Link>
        </div>
      </div>
    </div>
  )
}

export default projects
