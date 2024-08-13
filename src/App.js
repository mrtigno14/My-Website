import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navbar from './components/Navbar';


function App() { 
  return  (
    <div className="App">
      
      <div className="home-container">
      <Navbar />
  
      <div className="content">

          <div className="blob"></div>
        <div className="text-content">
          <div className="name-header">
            Marc Russel Tigno
          </div>
          <div className="title">
            Computer Engineer
          </div>
          <div className="little-about">
            Hello World
          </div>
        </div>
        <div className="singleCol social-media-icons">
        <a href="https://github.com/mrtigno14">
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/marc-russel-tigno-a7b34423a">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        </div>
        
      </div>

      </div>



      <div className="about-container">

      </div>

    </div>
  );
}

export default App;
