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
        <label for="start">Start Date:</label>
        <input type="date" id="start" name="trip-start" value="2021-07-22" min="2021-01-01" max="2021-12-31"/>
        <label for="end">End Date:</label>
        <input type="date" id="end" name="trip-end" value="2021-07-22" min="2021-01-01" max="2021-12-31"/>
        <label for="adults">Number of Adults:</label>
        <input type="number" id="adults" name="adults" min="0"/>
        <label for="children">Number of Children:</label>
        <input type="number" id="children" name="children" min="0"/>
        <label for="infants">Number of Infants:</label>
        <input type="number" id="infants" name="infants" min="0"/>
        <label>Cabin Class:</label>
        <select id="cabin-class" name="cabin-class">
          <option value="economy">Economy</option>
          <option value="premiumEconomy">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first">First</option>
        </select>
        <label>Hotel Room Type:</label>
        <select id="room-type" name="room-type">
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
        <button id="Login" type="submit">Search</button>
      </form>
    </div>
  );
};

export default TravelSearch;