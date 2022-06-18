import React, { useState } from 'react'
import './Navbar.css'
import {Link, useLocation} from "react-router-dom";
import { FaBoxOpen } from 'react-icons/fa';

export default function Navbar() {
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
      }

    const [location, setLocation] = useState(usePathname);
    const setBorder = (id) => {
        console.log(id)
        if(location!='/'){
            document.getElementById(location).style.borderBottom = "3px transparent var(--warning)";
        }
        if(id != '/'){
            setLocation(id)
            document.getElementById(id).style.borderBottom = "3px solid var(--warning)";
        }
    }

    
    

  return (
    <nav className='navbar'>
        <div className='navbarContainer'>
            <div className='navbarLogo'><Link to="/" onClick={() => setBorder('/')}><FaBoxOpen id='logoIcon'/>Port<span>folio</span></Link></div>
            <ul className='navItems'>
                <li id='/About'>
                    <Link to='/About' className='navLinks' onClick={() => setBorder('/About')}>About</Link>
                </li>
                <li id='/Work'>
                    <Link to='/Work' className='navLinks' onClick={() => setBorder('/Work')}>Work</Link>
                </li>
                <li id='/Contact'>
                    <Link to='/Contact' className='navLinks' onClick={() => setBorder('/Contact')}>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
