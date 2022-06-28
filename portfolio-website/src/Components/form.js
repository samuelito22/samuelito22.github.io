import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'

export default function ContactUs(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8t117p', 'template_rwk8ufl', form.current, 'arfiu07edXP7ZSs4G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input className='inputBox' placeholder='Name...' type="text" name="name" />
      <input className='inputBox' placeholder='Email...' type="email" name="email" />
      <textarea className='inputBox' id="messageBox" placeholder='Message...' name="message" />
      <input className='btn-warning-fillIn' style={{"color":"white", "marginTop":"3px", "border":"transparent"}} type="submit" value="Submit" />
    </form>
  );
};