import React from 'react';
import './App.css'; // Import the CSS file we will create next

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <h1>Forgot Password</h1>
      <h3>Input email for authentication</h3>
      <label>Email</label>
      <input type="email" placeholder='john.doe@gmail.com'/>
      <button id="Login">Send Verification Code</button>
      <button id="Login">Return to Login</button>
    </div>
  );
};

export default ForgotPassword;