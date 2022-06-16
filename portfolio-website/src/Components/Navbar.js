import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import { FaBoxOpen } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbarContainer'>
            <div className='navbarLogo'><Link to="/"><FaBoxOpen id='logoIcon'/>Port<span>folio</span></Link></div>
            <ul className='navItems'>
                <li>
                    <Link to='/' className='navLinks'>Home</Link>
                </li>
                <li>
                    <Link to='/About' className='navLinks'>About</Link>
                </li>
                <li>
                    <Link to='/Skills' className='navLinks'>Skills</Link>
                </li>
                <li>
                    <Link to='/Education' className='navLinks'>Education</Link>
                </li>
                <li>
                    <Link to='/Work' className='navLinks'>Work</Link>
                </li>
                <li>
                    <Link to='/Experience' className='navLinks'>Experience</Link>
                </li>
                <li>
                    <Link to='/Contact' className='navLinks'>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
