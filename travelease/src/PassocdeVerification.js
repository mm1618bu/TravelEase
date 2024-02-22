import React from 'react';
import './App.css'; // Import the CSS file we will create next

const PasscodeVerification = () => {
  return (
    <div className="login-container">
      <h1>Verify Your Email</h1>
      <h3>Please Enter the four digit Verification code sent to your email.</h3>
      <div className="passcode-inputs">
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
      </div>
      <a href='#login'>Resend Code</a>
      <button id="Login">Verify Passcode</button>
    </div>
  );
};

export default PasscodeVerification;