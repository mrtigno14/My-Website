import React from 'react';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <div className="image-container">
          <img src="/profilepic.jpg" alt="Profile" />
        </div>
        <div className="text-content">
          <div className="name-header">
            Marc Russel Tigno
          </div>
          <div className="title">
            Computer Engineer
          </div>
          <div className="little-about">
            Hiii
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
