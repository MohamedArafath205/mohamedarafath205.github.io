import React from 'react'
import Contacthero from '../components/Contacthero'
import Contactform from '../components/Contactform'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'

const Contact = () => {
  return (
    <div>
      <Navbar2 />
      <Contacthero heading="CONTACT ME"/>
      <Contactform />
      <Footer />
    </div>
  )
}

export default Contact
