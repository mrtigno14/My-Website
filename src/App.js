import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faWrench } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';


function App() { 
  const [activeRole, setActiveRole] = useState('IT Intern');

  const handleRoleChange = (role) => {
    setActiveRole(role);
  };

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
          My journey in web development began during the second semester of my third year in college, when our professor tasked us with creating an eCommerce website as our final project. This experience taught me how to design and develop a website from scratch, including database integration. However, prior to that, I had no particular interest in web development, as my initial plan was to pursue game and application development. But, this experience introduced me to web development, and I realized it was a field I wanted to pursue further. <br /><br />
          The skills and knowledge I gained during that finals project, along with the insights from an Arbitrum bootcamp, made me realize that web development might be my true calling. Now, I am fully committed to this path, passionate about building and bringing ideas to life. I learned a new passion and am excited to see where it takes me.<br /><br />
          If you're looking to elevate your online presence with creativity and precision, I'm here to make it happen. Let's collaborate and turn your concepts into a reality that stands out!
          </div>




        </div>
      </div>


      <div id="experience" className="experience-container">
      <div className="content3"> 

      <div className="experience"> 
        EXPERIENCE
        </div>

        <div className="seemyjourney">
          SEE MY JOURNEY
          </div>

          <div className="experience-container2">
          {activeRole === 'IT Intern' && (
          <div className="experience-content">
            <h2>IT Intern (Service Desk / End user Computing Lead)</h2>
            <b>Phoenix Petroleum Philippines</b>
            <br></br>
            <p>July 2024 - September 2024</p>
            <br></br>
            <b>Responsibilities and Duties:</b>
            <br></br>
            <p>• haha</p>
            <p>• haha</p>
            <p>• haha</p>
            <p>• haha</p>
          </div>
        )}
        
        {activeRole === 'Freelance Technician' && (
          <div className="experience-content">
            <h2>Freelance Technician</h2>
            <b>Self-Employed</b>
            <br></br>
            <p>2020 - Present</p>
            <br></br>
            <b>Responsibilities and Duties:</b>
            <br></br>
            <p>• haha</p>
            <p>• haha</p>

          </div>
        )}

          </div>

          <div className="experience-button-group">
        <button onClick={() => handleRoleChange('IT Intern')}>
        <FontAwesomeIcon icon={faLaptopCode} />IT Intern</button><br></br>
        <button onClick={() => handleRoleChange('Freelance Technician')}>
        <FontAwesomeIcon icon={faWrench} />Freelance Technician</button>
          </div>

        </div>
        </div>


        <div id="projects" className="projects-container">
        <div className="content4">
        <div className="experience"> 
        PROJECTS
        </div>
        <div className="seemyjourney">
        HERE ARE SOME OF MY COOL PROJECTS
        </div>
        <div className="projects-container2">
        
        <div className="projects-content">
        <div className="projects-image">
          <img src="/KoyukiNft.png" alt="KoyukiNft" />
        </div>
          <br></br>
          <h4><b>Nihahaha Coin Minting Site</b></h4>
        <div className="projects-content2">
        <br></br>
          The Nihahaha-Coin Minting Platform was developed as a project requirement for the Arbitrum Developer's bootcamp certification. 
          It serves as a user-friendly solution for minting and staking an ERC-20 token named Nihahaha-Coin, offering participants an accessible pathway to cryptocurrency creation and staking within the Arbitrum ecosystem.
        </div>


        </div>
        </div>

        <div className="projects-container3">
        

        </div>

        <div className="projects-container4">


        </div>
       




        </div>
        </div>




    </div>
  );
}

export default App;
