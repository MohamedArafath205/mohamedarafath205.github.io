import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'

const Navbar2 = () => {
  return (
    <nav className='navbar'>
    <Link to='/'><h1 className='nav-heading'>Mohamed Arafath</h1></Link>
    <ul className='navmenu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/projects'> Projects</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar2
