import React from 'react';
import './App.css'; // Import the CSS file we will create next

const UserRegistration = () => {
  return (
    <div className="login-container">
      <h1>Create a new account</h1>
      <p>Already Registered? <a href='null'>Click Here</a></p>
      <label>Full Name</label>
      <input type="text" placeholder='Enter full name'/>
      <label>Email</label>
      <input type="email" placeholder='Enter email'/>
      <label>Password</label>
      <input type="password" placeholder='Enter password'/>
      <label>Confirm Password</label>
      <input type="password" placeholder='Confirm password'/>
      <label>Date of Birth</label>
      <input type="password" placeholder='Confirm password'/>
      <button id="Login">Register</button>
    </div>
  );
};

export default UserRegistration;