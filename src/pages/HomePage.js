import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="center-container">
      {/* Hero / Intro Card */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Stock smarter with AI sentimental analysis</h1>
        <p>
          <h4>Data-driven AI sentimental analysis for the S&P 500 companies.</h4> 
        </p>
        <div style={{ margin: '1.5rem 0' }}>
          <Link to="/signup" className="btn btn-green">
            Sign Up Now
          </Link>
          <Link to="/login" className="btn btn-red">
            Login
          </Link>
        </div>
      </div>

      {/* Partner Logos Card (Horizontal Scroll) */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h3>Data-driven insights from</h3>
        <div className="partner-logos-scroll">
          <div className="partner-logo">CNET</div>
          <div className="partner-logo">Yahoo! Finance</div>
          <div className="partner-logo">Business Insider</div>
          <div className="partner-logo">Bloomberg</div>
          <div className="partner-logo">And more companies!</div>
        </div>
      </div>

      {/* Tool in Action (Example Visualization) */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>How Our Tool Helps You Win</h2>
        <p>
          We allow users to log in, track their favorite stocks, and analyze sentiment data. Users can create accounts, log in securely, and have their stock preferences persist across sessions. The app integrates with a MySQL database to store user data and favorites, and it provides a seamless user experience with a React-based frontend.
        </p>
      </div>
    </div>
  );
}

// CSS styles
const styles = `
  .custom-button {
    padding: 10px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
  }

  .custom-button:hover {
    background-color: #0056b3;
  }

  .btn {
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    display: inline-block;
  }

  .btn-green {
    background-color: #28a745;
    color: white;
  }

  .btn-green:hover {
    background-color: #218838;
  }

  .btn-red {
    background-color: #dc3545;
    color: white;
  }

  .btn-red:hover {
    background-color: #c82333;
  }
`;

// Inject CSS into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HomePage;
