import React from 'react'
import './Home.css';
import CV from '../CV.pdf'
import {SiIndeed, SiGithub} from 'react-icons/si'
import {RiFilePaper2Fill} from 'react-icons/ri'
import Navbar from '../Components/Navbar';
export default function Home() {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <div className='containerImage'>
          <div className='containerContent'>
            <h1 style={{"fontWeight":"bold", "fontSize":"xxx-large", "color":"var(--warning)"}}>Hey there!</h1>
            <p style={{"fontSize":"x-large", "color":"var(--white)"}}>My name is <span style={{"fontSize":"115%"}}>Samuel Edorodion</span> and I am a front-end developer</p>
          <div style={{"paddingTop":"7px"}}>
            <div className='btn-warning' style={{"display":"inline-block", "marginLeft":"10px"}}><a style={{"textDecoration":"none"}} href='https://my.indeed.com/p/samuele-dkbk4tz' rel="noreferrer" target={"_blank"}><SiIndeed/></a></div>
            <div className='btn-warning' style={{"display":"inline-block", "marginLeft":"10px"}}><a style={{"textDecoration":"none"}} href={CV} download><RiFilePaper2Fill style={{"transform": "translate(-5px, 15%)"}}/>CV</a></div>
            <div className='btn-warning' style={{"display":"inline-block", "marginLeft":"10px"}}><a style={{"textDecoration":"none"}} href='https://github.com/samuelito22' rel="noreferrer" target={"_blank"}><SiGithub/></a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
