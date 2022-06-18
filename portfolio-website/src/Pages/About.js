import React from 'react'
import './About.css'
import SamuelPicture from '../pictures/About/SamuelPicture.jpeg'

export default function About() {
  return (
    <div className='Divider'>
      <div style={{"backgroundColor":"var(--dark)"}}>
        <div className='Container'>
          <h1>About Me</h1>
        </div>
      </div>
      <div style={{"backgroundColor":"var(--warning)"}}><img src={SamuelPicture}/></div>
    </div>
  )
}
