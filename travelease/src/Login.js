import React from 'react';
import travel1 from './images/travel1.png';
import './App.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Login = () => {
  return (
    <div className="login-major">
      <div className="login-container">
        <h1>Login</h1>
        <h3>Sign in to Continue</h3>
        <label>Email</label>
        <input type="email" required/>
        <label>Password</label>
        <input type="password" required/>
        <button id="Login">Log In</button>
        <div className="social-media-login">
          <FaFacebook size={40} />
          <AiFillGoogleCircle size={40} />
          <AiFillLinkedin size={40} />
          <AiOutlineTwitter size={40} />
        </div>
      </div>
      <div className='imagelogin'>
        <img src={travel1} alt="Travel" />
      </div>
    </div>
  );
};

export default Login;