import React from 'react'
// import Navbar from '../components/Navbar'
import ResumeHero from '../components/ResumeHero'
import Developement from '../components/Resumepage'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'

const Resume = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      <ResumeHero heading="RESUME" text="My Resume" />
      <Developement />
      <Footer />
    </div>
  )
}

export default Resume