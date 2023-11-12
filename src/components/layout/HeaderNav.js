import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='branding-socials'>
            <div className='branding'>
                <h3>Vianey Linares</h3>
                <span>Software Developer</span>
            </div>
            <div className='socials'>
                Socials
            </div>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/work" className={({isActive}) => isActive ? "active" : ""}>Work</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
