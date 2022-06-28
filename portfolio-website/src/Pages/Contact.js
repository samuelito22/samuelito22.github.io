import React from 'react'
import './Contact.css'
import Navbar from '../Components/Navbar';
import Form from '../Components/form';

export default function Contact() {
  return (
    <div className='container'>
      <Navbar/>
      <div className='Divider'>
        <div className='ContactContent'>
            <h1>Contact Me</h1>
            <p>Send me a message by filling this form</p>
            <p style={{"paddingTop":"15px"}}>Otherwise, you can still contact me with the following contact details:</p>
            <u>
              <li>Email: sedorodion@hotmail.com</li>
              <li>Phone: 07404925161</li>
            </u>
        </div>
        <Form/>
      </div>
    </div>
  )
}
