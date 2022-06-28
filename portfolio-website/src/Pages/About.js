import React from 'react'
import './About.css'
import SamuelPicture from '../pictures/About/SamuelPicture.jpeg'
import Navbar from '../Components/Navbar';

export default function About() {
  return (
    <div className='container'>
      <Navbar/>
      <div className='wrapper'>
        <div className='about-container'>
          <div className='image-container'>
            <img src={SamuelPicture} alt=""/>
          </div>
          <div className='text-container'>
            <h1>Hello!<br/>I'm Samuel Edorodion</h1>
            <p>I am a creative front-end developer striving for progression and adventure.
              As a front-end developer I deal with html, css and javascript which makes me strongly proficient in using React JS.
              I am also able to code with Node JS and use databases with beginner-level knowledge on mySQL.
            </p>
            <div className='btn-warning-fillIn'><a style={{"textDecoration":"none"}} href='/Work'>Work</a></div>
          </div>
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  )
}
