import React from 'react';
import './App.css';
import { FaPlane, FaBus, FaTrain, FaHotel, FaCar } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="circle-logos">
  <div className="circle-logo">
    <FaPlane />
    <p>Plane</p>
  </div>
  <div className="circle-logo">
    <FaBus />
    <p>Bus</p>
  </div>
  <div className="circle-logo">
    <FaTrain />
    <p>Train</p>
  </div>
  <div className="circle-logo">
    <FaHotel />
    <p>Hotel</p>
  </div>
  <div className="circle-logo">
    <FaCar />
    <p>Car</p>
  </div>
</div>
      <p>Popular Destinations</p>
      <input type="text" placeholder="Search..." className="search-box" />
      <img src="wide-image.png" alt="Wide Image" className="wide-image" />
    </div>
  );
};

export default HomePage;