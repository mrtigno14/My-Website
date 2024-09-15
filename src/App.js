import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faScrewdriver } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';


function App() { 
  const [activeRole, setActiveRole] = useState('IT Intern');
  const [visibleSections, setVisibleSections] = useState([]);
  const [showImage, setShowImage] = useState('/pnxlogo.png');
  const [currentEcommerceImageIndex, setCurrentEcommerceImageIndex] = useState(0);
  const [currentDatabaseImageIndex, setCurrentDatabaseImageIndex] = useState(0);


  const handleRoleChange = (role) => {
    setActiveRole(role);
    if (role === 'IT Intern') {
      setShowImage('/pnxlogo.png');
    } else if (role === 'Freelance Technician') {
      setShowImage('/freelancetech.png'); // Replace with the path to your second image
    }

  };

  const ecommerceImages = [
    '/eCommerce-LoginPage.png',
    '/eCommerce-AgeVerification.png',
    '/eCommerce-RegistrationForm.png',
    '/eCommerce-HomePage.png',
    '/eCommerce-ProductsPage.png',
    '/eCommerce-CheckoutPage.png',
    '/eCommerce-ShoppingCartPage.png',
    '/eCommerce-Admin.png',
    '/eCommerce-Admin-viewproducts.png',


  ];

  const handleNextEcommerceImage = () => {
    setCurrentEcommerceImageIndex((prevIndex) => 
      prevIndex === ecommerceImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevEcommerceImage = () => {
    setCurrentEcommerceImageIndex((prevIndex) => 
      prevIndex === 0 ? ecommerceImages.length - 1 : prevIndex - 1
    );
  };


  const databaseImages = [
    '/DatabaseAdmin-LoginForm.png',
    '/DatabaseAdmin-SelectionForm.png',
    '/DatabaseAdmin-MedicinesForm.png',
    '/DatabaseAdmin-SuggestionForm.png',
    '/DatabaseAdmin-ImageForm.png',
    '/DatabaseAdmin-SalesForm.png',
    '/DatabaseAdmin-CoinForm.png',

  ];

  const handleNextDatabaseImage = () => {
    setCurrentDatabaseImageIndex((prevIndex) =>
      prevIndex === databaseImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrevDatabaseImage = () => {
    setCurrentDatabaseImageIndex((prevIndex) =>
      prevIndex === 0 ? databaseImages.length - 1 : prevIndex - 1
    );
  };




  // Detects if sections are visible
  const handleScroll = () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisibleSections((prev) => [...new Set([...prev, section.id])]);
      }
    });
  };

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if elements are already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return  (
    <div className="App">
      <Navbar />
      <div id="home" className={`home-container fade-in ${visibleSections.includes('home') ? 'visible' : ''}`}>
      
  
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



      <div id="about" className={`about-container fade-in ${visibleSections.includes('about') ? 'visible' : ''}`}>
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


      <div id="experience" className={`experience-container fade-in ${visibleSections.includes('experience') ? 'visible' : ''}`}>
      
      <div className="content3"> 

      <div className="experience"> 
        EXPERIENCE
        </div>

        <div className="seemyjourney">
          SEE MY JOURNEY
          </div>

          <div className="experience-container2">
          <div className="experience-image" style={{ display: showImage ? 'block' : 'none' }}>
            <img src={showImage} alt={activeRole === 'IT Intern' ? 'Phoenix Petroleum logo' : 'Freelance Technician related image'} />
          </div>
          {activeRole === 'IT Intern' && (
          <div className="experience-content">
            <h2>IT Intern (Service Desk / End user Computing Lead)</h2>
            <b>Phoenix Petroleum Philippines</b>
            <br></br>
            <p>July 2024 - September 2024</p>
            <br></br>
            <p><b>Responsibilities and Duties:</b></p>
            <p>• Respond to user requests for service, troubleshoot problems, and help develop solutions.</p>
            <p>• Support PC/Laptop/Printer hardware components, desktop operating system software, and application software.</p>
            <p>• Perform minor repairs to equipment and arrange for other servicing needs.</p>
            <p>• Provide backup technical support for network issues, including router, firewall, and wireless access points.</p>
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
            <p>• Experienced in assembling custom computers and configuring hardware components.</p>
            <p>• Proficient in diagnosing and troubleshooting a wide range of hardware issues and system failures.</p>

          </div>
        )}

          </div>

          <div className="experience-button-group">
        <button onClick={() => handleRoleChange('IT Intern')}>
        <FontAwesomeIcon icon={faLaptop} />&nbsp;IT Intern</button><br></br>
        <button onClick={() => handleRoleChange('Freelance Technician')}>
        <FontAwesomeIcon icon={faScrewdriver} />&nbsp;Freelance Technician</button>
          </div>

        </div>
        </div>









        <div id="projects" className={`projects-container fade-in ${visibleSections.includes('projects') ? 'visible' : ''}`}>
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
          
        <div className="projects-content2">
        <center><h4><b>Nihahaha Coin Minting Site</b></h4></center>
        <br></br>
          The Nihahaha-Coin Minting Platform was developed as a project requirement for the Arbitrum Developer's bootcamp certification. 
          It serves as a user-friendly solution for minting and staking an ERC-20 token named Nihahaha-Coin, offering participants an accessible pathway to cryptocurrency creation and staking within the Arbitrum ecosystem.
        </div>


        </div>
        </div>

        <div className="projects-container3">
        <div className="projects-content">
        <div className="projects-image2">
        <button onClick={handlePrevDatabaseImage} className="prev-button2">◀</button>
          <img src={databaseImages[currentDatabaseImageIndex]} alt={`Database ${currentDatabaseImageIndex + 1}`} />
        <button onClick={handleNextDatabaseImage} className="next-button2">▶</button>

      <div className="image-indicators">
        {databaseImages.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentDatabaseImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentDatabaseImageIndex(index)}
          ></span>
        ))}
      </div>
        </div>
        
        <div className="projects-content3">
        <center><h4><b>Database Admin</b></h4></center>
        <br></br>
        
          The Nihahaha-Coin Minting Platform was developed as a project requirement for the Arbitrum Developer's bootcamp certification. 
          It serves as a user-friendly solution for minting and staking an ERC-20 token named Nihahaha-Coin, offering participants an accessible pathway to cryptocurrency creation and staking within the Arbitrum ecosystem.
        </div>


        </div>
          

        </div>

        <div className="projects-container4">
        <div className="projects-content">
        <div className="projects-image3">
                <button onClick={handlePrevEcommerceImage} className="prev-button">◀</button>
                  <img src={ecommerceImages[currentEcommerceImageIndex]} alt={`eCommerce ${currentEcommerceImageIndex + 1}`} />
                <button onClick={handleNextEcommerceImage} className="next-button">▶</button>

                <div className="image-indicators">
                  {ecommerceImages.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator-dot ${index === currentEcommerceImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentEcommerceImageIndex(index)} // This makes the dots clickable
                    ></span>
                  ))}
                </div>


        </div>
        
        

        <div className="projects-content4">
        <center><h4><b>eCommerce Website</b></h4></center>
        <br></br>
        
          My finals project during the second semester of my third year college.
          
        </div>


        </div>

        </div>
       
       <div className="moreprojectstocome">
        MORE PROJECTS TO COME!!!
      </div>



        </div>
        </div>








        <div id="contact" className={`contact-container fade-in ${visibleSections.includes('contact') ? 'visible' : ''}`}>
        
        </div>




    </div>
  );
}

export default App;
