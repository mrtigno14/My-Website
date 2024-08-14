import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navbar from './components/Navbar';


function App() { 
  return  (
    <div className="App">
      
      <div id="home" className="home-container">
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



      <div id="about" className=" about-container">
      <div className="content2">
        <div className="aboutme">
        ABOUT ME
        </div>
        <div className="learnmore">
          LEARN MORE ABOUT ME
          </div>
          <div className="aboutme-content">
          Hello! I'm Marc Russel Tigno, an aspiring Full-Stack Developer based in Taguig City, Philippines. I'm also a Bachelor of Science in Computer Engineering graduate from Adamson University.<br /><br />
          My journey in web development began when I was tasked to create an ecommerce website for a client's business by our professor, wherein this is the finals project during the second semester of my third year college which involved designing and developing a website from scratch, complete with database integration. However, prior to that, I had no particular interest in web development, as my initial plan was to pursue game and application development. But, this experience opened my eyes to the world of web development, and I quickly fell in love with it. <br /><br />
          The skills and knowledge I gained during that finals project, along with the insights from an Arbitrum bootcamp, made me realize that web development might be my true calling. Now, I am fully committed to this path, passionate about building and bringing ideas to life. I learned a new passion and am excited to see where it takes me.<br /><br />
          If you're looking to elevate your online presence with creativity and precision, I'm here to make it happen. Let's collaborate and turn your concepts into a reality that stands out!
          </div>




        </div>
      </div>


      <div id="experience" className="experience-container">
        ASD
        </div>

    </div>
  );
}

export default App;
