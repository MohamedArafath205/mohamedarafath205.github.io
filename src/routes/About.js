import React from 'react'
import Aboutushero from '../components/aboutushero'
import Footer from '../components/Footer'
import Aboutme from '../components/About'
import Navbar2 from '../components/Navbar2'

const About = () => {
  return (
    <div >
      <Navbar2 />
      <Aboutushero heading="ABOUT"/>
      <Aboutme />
      <Footer />
    </div>
  )
}

export default About
