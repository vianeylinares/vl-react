import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='branding-socials'>
            <div className='branding'>
                <h1>Vianey Linares</h1>
                <span>Software Developer</span>
            </div>
        </div>
        
        <nav className='navigation'>
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
