import React from 'react';
import './App.css'; // Import the CSS file we will create next

const TravelSearch = () => {
  return (
    <div className="home-container">
      <h1>Hello, User!</h1>
      <img src="logo.png" alt="Logo" className="logo" />
      <form>
        <label>From:</label>
        <input type="text" placeholder='Enter starting location'/>
        <label>To:</label>
        <input type="text" placeholder='Enter destination'/>
        <label>Mode of Travel:</label>
        <select>
          <option value="car">Car</option>
          <option value="train">Train</option>
          <option value="plane">Plane</option>
          <option value="bus">Bus</option>
        </select>
        <button id="Login" type="submit">Search</button>
      </form>
    </div>
  );
};

export default TravelSearch;