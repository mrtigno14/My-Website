import React, { useState } from 'react';
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Mtigno14</div>
        <div className="navbar-right">
          <button className="toggle-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <DarkModeToggle />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
