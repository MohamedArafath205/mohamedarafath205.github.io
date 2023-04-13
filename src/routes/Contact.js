import React from 'react'
import Navbar from '../components/Navbar'
import Contacthero from '../components/Contacthero'
import Contactform from '../components/Contactform'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Contacthero heading="CONTACT ME"/>
      <Contactform />
      <Footer />
    </div>
  )
}

export default Contact
