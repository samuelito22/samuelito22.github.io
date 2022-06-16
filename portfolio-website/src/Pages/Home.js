import React from 'react'
import Navbar from '../Components/Navbar';
import './Home.css';
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='container'>
        <Navbar/>      
        <div className='containerImage'>
          <div className='containerContent'>
            <h1 style={{"fontWeight":"bold", "fontSize":"xxx-large", "color":"var(--warning)"}}>Hey there!</h1>
            <p style={{"fontSize":"x-large"}}>My name is <span style={{"fontSize":"115%"}}>Samuel Edorodion</span> and I am a front-end developer</p>
            <div style={{"paddingTop":"7px"}}><p style={{"display":"inline-block","fontSize":"large"}}>Feel free to look at my Work</p>
            <div className='btn-warning' style={{"display":"inline-block", "marginLeft":"10px"}}><Link style={{"textDecoration":"none"}} to='/Work'>Explore</Link></div></div>
          </div>
        </div>
      </div>
    </>
  )
}
