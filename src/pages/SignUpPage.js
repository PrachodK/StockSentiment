import React from 'react';

function SignUpPage() {
  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Sign Up</h2>
        <p>Join us and explore the power of AI-driven trading!</p>
        <div>
          <button className="btn btn-green">Sign Up with Email</button>
          <button className="btn btn-red">Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
