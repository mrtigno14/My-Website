import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLaptop, faScrewdriver, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faPhp, faJsSquare } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';


function App() { 
  const [activeRole, setActiveRole] = useState('IT Desktop Support');
  const [visibleSections, setVisibleSections] = useState([]);
  const [showImage, setShowImage] = useState('/bountyfresh.png');
  const [currentEcommerceImageIndex, setCurrentEcommerceImageIndex] = useState(0);
  const [currentDatabaseImageIndex, setCurrentDatabaseImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const experienceRef = useRef(null);


  const handleRoleChange = (role) => {
    setActiveRole(role);
    if (role === 'IT Intern') {
      setShowImage('/pnxlogo.png');
    } else if (role === 'Freelance Technician') {
      setShowImage('/freelancetech.png'); // Replace with the path to your second image
    } else if (role === 'IT Desktop Support') {
      setShowImage('/bountyfresh.png');
    }

    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
      .then(() => {
        setFormSubmitted(true);
        setFormError(false);
      }, (error) => {
        console.error('EmailJS error:', error);
        setFormError(true);
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
            With a background in web development and PC hardware, I'm now pursuing my true passion in game development.
            I'm currently learning Unity to build my first game, a horror title inspired by my lifelong love of gaming.
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




      </div>



      <div id="about" className={`about-container fade-in ${visibleSections.includes('about') ? 'visible' : ''}`}>
      <div className="content2">
        <div className="aboutme">
        ABOUT ME
        </div>

        <div className="learnmore">
          GET TO KNOW MY BACKGROUND
        </div>
          
        <div className="aboutme-content">
          Hello! I'm Marc Russel Tigno, a Computer Engineering graduate from Adamson University based in Taguig City, Philippines.<br /><br />
          Gaming has been a core part of who I am since childhood. I'd spend hours on my old laptop or lose track of time entirely at the local computer cafe, to the point where my mom would have to physically drag me out and give me a full sermon on the way home. Those are some of my favorite memories.<br /><br />
          My love for horror games goes back to watching PewDiePie's playthroughs. His reactions had a way of taking the edge off the scariest moments, making horror feel exciting rather than overwhelming. That balance of tension and entertainment stuck with me, and it's a big reason why my first game will be a horror title.<br /><br />
          I'm currently learning Unity and actively building that game. Alongside that, I have a background in web development and have built projects like an eCommerce site from scratch. I'm driven by a simple goal: to create experiences that stick with people the way games have always stuck with me.
        </div>

      </div>

      </div>


      <div id="experience" className={`experience-container fade-in ${visibleSections.includes('experience') ? 'visible' : ''}`}>
        <br></br>
        <div className="experience2"> 
          EXPERIENCE
        </div>
        <div className="seemyjourney">
          VIEW MY JOURNEY
        </div>
      <div className="content3"> 

     

          <div className="experience-container2" ref={experienceRef}>
          <div className="experience-image" style={{ display: showImage ? 'block' : 'none' }}>
            <img src={showImage} style={activeRole === 'IT Desktop Support' ? { width: '120px' } : undefined} alt={activeRole === 'IT Intern' ? 'Phoenix Petroleum logo' : activeRole === 'IT Desktop Support' ? 'Bounty Fresh Food logo' : 'Freelance Technician related image'} />
          </div>
          {activeRole === 'IT Desktop Support' && (

          <div className="experience-content">
            <div className="experience-content2">
            <h1><b>IT Desktop Support</b></h1>
            <b>Bounty Fresh Food, Inc.</b>
            <br></br>
            <p>June 2025 – October 2025</p>
            <br></br>
            </div>
            <p><b>Responsibilities and Duties:</b></p>
            <p>• Served as the primary IT contact, providing Level 1–2 hardware, software, and network support while resolving tickets through an in-house ticketing system and meeting SLA requirements.</p>
            <p>• Deployed, configured, and supported IT hardware including desktops, laptops, printers, and event support equipment ensuring proper functionality and readiness.</p>
            <p>• Managed IT asset inventory, including tracking deployed, spare, and borrowed units, warranties, and software licenses using an in-house asset management system.</p>
            <p>• Escalated and coordinated Tier 3 issues with cross-functional teams, handling Active Directory administration (user accounts, permissions, GPOs) and network troubleshooting (TCP/IP, DNS, VPN).</p>
            <p>• Provided technical support for executives and VIPs, including meeting room setup and on-site technical assistance for corporate events.</p>
            <p>• Assessed departmental IT needs and recommended hardware and peripherals to support business operations.</p>
          </div>

          )}

          {activeRole === 'IT Intern' && (
            
          <div className="experience-content">
            <div className="experience-content2">
            <h1><b>IT Intern</b></h1>
            <b>Phoenix Petroleum Philippines, Inc.</b>
            <br></br>
            <p>July 2024 - September 2024</p>
            <br></br>
            </div>
            <p><b>Responsibilities and Duties:</b></p>
            <p>• Respond to user requests for service, troubleshoot problems, and help develop solutions.</p>
            <p>• Support PC/Laptop/Printer hardware components, desktop operating system software, and application software.</p>
            <p>• Perform minor repairs to equipment and arrange for other servicing needs.</p>
            <p>• Provide backup technical support for network issues, including router, firewall, and wireless access points.</p>
          </div>
          

          
        )}
        
        {activeRole === 'Freelance Technician' && (
          <div className="experience-content">
            <div className="experience-content2">
            <h1><b>Freelance Technician</b></h1>
            <b>Self-Employed</b>
            <br></br>
            <p>2020 - Present</p>
            <br></br>
            </div>

            <b>Responsibilities and Duties:</b>
            <br></br>
            <p>• Experienced in assembling custom computers and configuring hardware components.</p>
            <p>• Proficient in diagnosing and troubleshooting a wide range of hardware issues and system failures.</p>

          </div>
        )}

          </div>

          <div className="experience-button-group">
        <button onClick={() => handleRoleChange('IT Desktop Support')}>
        <FontAwesomeIcon icon={faDesktop} />&nbsp;IT Desktop Support</button><br></br>
        <button onClick={() => handleRoleChange('IT Intern')}>
        <FontAwesomeIcon icon={faLaptop} />&nbsp;IT Intern</button><br></br>
        <button onClick={() => handleRoleChange('Freelance Technician')}>
        <FontAwesomeIcon icon={faScrewdriver} />&nbsp;Freelance Technician</button>
          </div>

        </div>
        </div>









        <div id="projects" className={`projects-container fade-in ${visibleSections.includes('projects') ? 'visible' : ''}`}>
        <br></br>
        <div className="experience"> 
        PROJECTS
        </div>
        <div className="seemyjourney">
        EXPLORE MY COOL CREATIONS
        </div>

        <div className="content4">

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
                  <span className="tech-icon-badge"><img src="/typescript.svg" alt="TypeScript" /></span>TypeScript
                </div>
                <div className="tech-icon">
                  <span className="tech-icon-badge"><img src="/solidity.svg" alt="Solidity" /></span>Solidity
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
                <span className="tech-icon-badge"><img src="/csharp.svg" alt="C#" /></span>C Sharp
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
                <button onClick={handleNextEcommerceImage} className="next-button">▶</button>
                  <img src={ecommerceImages[currentEcommerceImageIndex]} alt={`eCommerce ${currentEcommerceImageIndex + 1}`} />
                

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
        More projects coming soon.
        </div>
        </div>
        



        </div>








        <div id="contact" className="contact-container">
  <div className="content5">
    <div className="experience">
      CONTACT ME
    </div>
    <div className="seemyjourney">
      AND LET'S COLLABORATE
    </div>
    <div className="contact-content">
      {formSubmitted ? (
        <div>Thank you for your message! I'll get back to you soon.</div>
      ) : (
        <form onSubmit={sendEmail}>
          {formError && (
            <div style={{ color: 'red', marginBottom: '10px' }}>Something went wrong. Please try again.</div>
          )}
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
          Copyright © 2026. All rights are reserved
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
