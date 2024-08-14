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
      <div className="content2">
        <div className="aboutme">
        ABOUT ME
        </div>
        <div className="learnmore">
          LEARN MORE ABOUT ME
          </div>
          <div className="aboutme-content">
          Hey there! My name is Marc Russel Tigno, an aspiring Full-Stack Developer. I'm currently residing in the streets of Taguig City, Philippines. I'm also a Bachelor of Science in Computer Engineering graduate from Adamson University.<br /><br />
          My journey in web development began when I was introduced to blockchain development by The BLOKC, where they conducted a bootcamp where they taught us how to deploy our own smart contracts in the Arbitrum Network. However, prior to that, I hated web development. My first plan was to get into game and application development. But I never thought that I would be here now, falling in love with web development and web design. <br /><br />
          The knowledge that I learned during the bootcamp helped me see a new light in web development and I thought to myself that this might be my calling. Now here I am! I am an aspiring Full-Stack Developer, that loves to build things and make ideas turn into the real deal. I learned a new passion and am excited to see where it takes me.
          So, if you're ready to take your online presence to the next level, I'm here to make it happen. Let's team up and bring your wildest web dreams to life!
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
