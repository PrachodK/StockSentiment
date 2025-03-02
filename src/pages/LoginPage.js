import React from 'react';

function LoginPage() {
  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Login</h2>
        <p>Welcome back! Please sign in to continue.</p>
        <div>
          <button className="btn btn-green">Login with Email</button>
          <button className="btn btn-red">Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
