import React from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import PasscodeVerification from './PassocdeVerification';
import UserRegistration from './UserRegistration';
import HomePage from './HomePage';
import TravelSearch from './TravelSearch';
function App() {
  return (
    <div>
      {/* Other components */}
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <PasscodeVerification />
      <UserRegistration />
      <HomePage />
      <TravelSearch />
    </div>
  );
}

export default App;
