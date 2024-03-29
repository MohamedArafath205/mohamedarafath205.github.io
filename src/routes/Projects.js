import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/heroimage'
import Project from '../components/Projects'
import Navbar2 from '../components/Navbar2'

const Projects = () => {
  return (
    <div>
      <Navbar2 />
      <HeroImage heading='PROJECTS' text='Check out my projects' />
      <Project />
      <Footer />
    </div>
  )
}

export default Projects
