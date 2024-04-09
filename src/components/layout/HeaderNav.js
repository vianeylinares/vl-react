import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const HeaderNav = () => {

    const mainMenuActivation = () => {

        let mainMenu = document.getElementById("main-menu");

        if(mainMenu.style.display === "block"){
            mainMenu.style.display = "none";
        } else {
            mainMenu.style.display = "block";
        }

    }

    const closeMenu = () => {

        let mobileMenu = document.getElementById("mobile-menu");
        let mobileMenuStyle = window.getComputedStyle(mobileMenu);

        if(mobileMenuStyle.display === 'block'){
            document.querySelector("#main-menu").style.display = 'none';
        }

    }

    window.onresize = () => {

        let mobileMenu = document.getElementById("mobile-menu");
        let mobileMenuStyle = window.getComputedStyle(mobileMenu);

        if(mobileMenuStyle.display === 'none'){
            document.querySelector("#main-menu").style.display = 'block';
        }
        if(mobileMenuStyle.display === 'block'){
            document.querySelector("#main-menu").style.display = 'none';
        }

    }

  return (
    <header className='header'>
        <div className='branding-socials'>
            <div className='branding'>
                <h1>Vianey Linares</h1>
                <span>Full Stack WordPress Developer</span>
            </div>
            <div id="mobile-menu" className="icon" onClick={mainMenuActivation}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
        
        <nav id='main-menu' className='navigation'>
            <ul>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/work" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
