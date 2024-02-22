import React from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import PasscodeVerification from './PassocdeVerification';
function App() {
  return (
    <div>
      {/* Other components */}
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <PasscodeVerification />
    </div>
  );
}

export default App;
