import React from 'react';
import './App.css'; // Import the CSS file we will create next

const HomePage = () => {
  return (
    <div className="home-container">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="circle-logos">
        <img src="circle-logo1.png" alt="Circle Logo 1" className="circle-logo" />
        <img src="circle-logo2.png" alt="Circle Logo 2" className="circle-logo" />
        <img src="circle-logo3.png" alt="Circle Logo 3" className="circle-logo" />
      </div>
      <p>Popular Destinations</p>
      <input type="text" placeholder="Search..." className="search-box" />
      <img src="wide-image.png" alt="Wide Image" className="wide-image" />
    </div>
  );
};

export default HomePage;