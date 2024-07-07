import React, {useState} from 'react'
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-logo">Mtigno14</div>
        <div className="navbar-right">
        <ul className="navbar-links">
        
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Experience</a></li>
          <li><a href="#contact">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
       
          <DarkModeToggle />
        
        </div>
    </nav>
    </>
  )
}

export default Navbar