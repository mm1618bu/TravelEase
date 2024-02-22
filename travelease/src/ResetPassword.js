import React from 'react';
import './App.css'; // Import the CSS file we will create next

const ResetPassword = () => {
  return (
    <div className="login-container">
      <h1>Create New Password</h1>
      <label>Password</label>
      <input type="password"/>
      <label>Confirm Password</label>
      <input type="password"/>
      <button id="Login">Save Password</button>
    </div>
  );
};

export default ResetPassword;