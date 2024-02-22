import React from 'react';
import './App.css'; // Import the CSS file we will create next

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <h3>Sign in to Continue</h3>
      <label>Email</label>
      <input type="email" />
      <label>Password</label>
      <input type="password" />
      <button id="Login">Log In</button>
      <div className="social-media-login">
        <button>SCM</button>
        <button>SCM</button>
        <button>SCM</button>
        <button>SCM</button>
      </div>
    </div>
  );
};

export default Login;