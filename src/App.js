import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faPhp, faJsSquare } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';


function App() { 
  const [activeRole, setActiveRole] = useState('IT Intern');
  const [visibleSections, setVisibleSections] = useState([]);
  const [showImage, setShowImage] = useState('/pnxlogo.png');
  const [currentEcommerceImageIndex, setCurrentEcommerceImageIndex] = useState(0);
  const [currentDatabaseImageIndex, setCurrentDatabaseImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // State for form submission


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

  // EmailJS email sending function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jz2jora', 'template_dsci81f', e.target, 'Rxwl5I6wVQW3Gvqy6')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true); // Show form success message
      }, (error) => {
        console.log(error.text);
      });
  };
  

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
            My name is Marc Russel Tigno, a Computer Engineering graduate from Adamson University. <br></br>
            I specialize in PC assembly and troubleshooting, alongside creating innovative software and websites.<br></br>
            I am constantly improving my skills in JavaScript, C#, and Python to stay with the latest trends in technology.<br></br>
            Additionally, I focus on building experiences with every project I undertake.
          </div>

          <div className="singleCol social-media-icons">
            <a href="https://github.com/mrtigno14">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/marc-russel-tigno-a7b34423a">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className="mynumber">
          Message/Call: +63 995 558 7475
          </div>

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
        
        {/* Tech Stack Section */}
        <div className="tech-stack">
              <center><h5><b>Tech Stack</b></h5></center>
              <div className="tech-icons">
                <div className="tech-icon">
                  <img src="/typescript.svg" alt="Solidity" style={{ width: '30px', height: '30px' }} />&nbsp;TypeScript
                </div>
                <div className="tech-icon">
                  <img src="/solidity.svg" alt="Solidity" style={{ width: '30px', height: '30px' }} />&nbsp;Solidity
                </div>
                
              </div><div className="tech-icons">             
                <div className="tech-icon">
                  <FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS
                </div>
                <div className="tech-icon">
                  <FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript
                </div>
              </div>
              
        </div>

        {/* Demo and Source Buttons */}
        <div className="button-group">
          <a href="https://arbitrum-certificate.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="demo-button">Demo</button>
          </a>
          <a href="https://github.com/mrtigno14/Nihahaha-Coin" target="_blank" rel="noopener noreferrer">
            <button className="source-button">Source</button>
          </a>
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
        
          The Database Admin application is a windows executable platform for desktop only.
          It allows administrators of the vending machine (thesis prototype) to modify medicine details, manage suggestion data, adjust coin change amounts, monitor sales, and receive notifications about medicine stock and coin change status, indicating if they are empty or low.
          
          
        </div>

        
        {/* Tech Stack Section */}
        <div className="tech-stack">
              <center><h5><b>Tech Stack</b></h5></center>
              <div className="tech-icons">
                <div className="tech-icon">
                <img src="/csharp.svg" alt="C#" style={{ width: '30px', height: '30px' }} />&nbsp;C Sharp
                </div>
                
                </div>
                
              
              
        </div>
        
        {/* Demo and Source Buttons */}
        <div className="button-group">
          <a href="https://github.com/mrtigno14/Database-Admin/releases" target="_blank" rel="noopener noreferrer">
            <button className="demo-button">Demo</button>
          </a>
          <a href="https://github.com/mrtigno14/Database-Admin" target="_blank" rel="noopener noreferrer">
            <button className="source-button">Source</button>
          </a>
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
        
        This eCommerce website is designed for a client's vape products business, featuring a product display and an integrated inventory management system. 
        Users can easily browse products, utilize an add-to-cart function, and proceed through a checkout process, with orders securely stored in a MySQL database. 
        
          
          
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack">
              <center><h5><b>Tech Stack</b></h5></center>
              <div className="tech-icons">
                <div className="tech-icon">
                  <FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS
                </div>
                <div className="tech-icon">
                  <FontAwesomeIcon icon={faPhp} />&nbsp;PHP
                </div>
              </div>
        </div>

        {/* Demo and Source Buttons */}
        <div className="button-group">
          <a href="http://relxnovelty-sdl.infinityfreeapp.com/" target="_blank" rel="noopener noreferrer">
            <button className="demo-button">Demo</button>
          </a>
          <a href="https://github.com/mrtigno14/E-commerce-Website" target="_blank" rel="noopener noreferrer">
            <button className="source-button">Source</button>
          </a>
        </div>
        
        </div>

        </div>
       
       <div className="moreprojectstocome">
        MORE PROJECTS TO COME!!!
      </div>



        </div>
        </div>








        <div id="contact" className={`contact-container fade-in ${visibleSections.includes('contact') ? 'visible' : ''}`}>
        <div className="content5">
        <div className="experience">
        CONTACT ME
        </div>
        <div className="seemyjourney">
         AND LET'S GET TO WORK
        </div>
          <div className="contact-content">
        {formSubmitted ? (
          <div>Thank you for your message! I'll get back to you soon.</div>
        ) : (
          <form onSubmit={sendEmail}>
            <div className="form-row">
            <div className="form-group">
              
              <input type="text" name="from_name" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              
              <input type="email" name="from_email" className="form-control" placeholder="Enter your email" required />
            </div>
            </div>


            
            <div className="form-group">
              
              <textarea name="message" className="form-control" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <input type="hidden" name="to_name" value="Marc Russel Tigno" />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </div>
          



      
        </div>
        </div>




        <div className="bot-navbar-container">
          <div className="nav-left">
          Copyright © 2024. All rights are reserved
          </div>

          <div className="social-media-icons">
            <a href="https://github.com/mrtigno14">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/marc-russel-tigno-a7b34423a">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>




    </div>
  );
}

export default App;
