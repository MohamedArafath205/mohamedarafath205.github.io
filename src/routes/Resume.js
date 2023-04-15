import React from 'react'
import Navbar from '../components/Navbar'
import ResumeHero from '../components/ResumeHero'
import Developement from '../components/Resumepage'
import Footer from '../components/Footer'

const Resume = () => {
  return (
    <div>
      <Navbar />
      <ResumeHero heading="RESUME" text="My Resume" />
      <Developement />
      <Footer />
    </div>
  )
}

export default Resume