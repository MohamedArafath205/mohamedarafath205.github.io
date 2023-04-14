import React, {useRef} from 'react'
import './Contactform.css'
import emailjs from '@emailjs/browser';
import {message} from 'antd';

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8h25h74', 'template_q7gtsej', form.current, 'E9fA1fnRY8sWvlsBG')
      .then((result) => {
          console.log(result.text);
          message.success('Email sent');
      }, (error) => {
          console.log(error.text);
          message.error('Email not sent');
      });
      form.current.reset();
  };
  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name="user_name" required></input>
        <label>Email</label>
        <input type='email' name="user_email" required></input>
        <label>Subject</label>
        <input type='text' name="subject" required></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message" name='message'/>
        <button className='btn' value="send">Submit</button>
      </form>
    </div>
  )
}

export default Contactform
