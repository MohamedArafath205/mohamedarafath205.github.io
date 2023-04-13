import React from 'react'
import Navbar from '../components/Navbar'
import Aboutushero from '../components/aboutushero'
import Footer from '../components/Footer'
import Aboutme from '../components/About'

const About = () => {
  return (
    <div >
      <Navbar />
      <Aboutushero heading="ABOUT"/>
      <Aboutme />
      <Footer />
    </div>
  )
}

export default About
