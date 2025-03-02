import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="center-container">
      {/* Hero / Intro Card */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Smart trades start with smart AI</h1>
        <p>
          <strong>Introducing LePrachod Luna:</strong> Your gateway to comprehensive market
          intelligence and real-time financial insights.
        </p>
        <div style={{ margin: '1.5rem 0' }}>
          <Link to="/signup" className="btn btn-green">
            Sign Up Now
          </Link>
          <Link to="/login" className="btn btn-red">
            Login
          </Link>
        </div>
        <p>
          <strong>Try the demo:</strong> DeepSeek AI Challenges US Tech Dominance
        </p>
      </div>

      {/* Partner Logos Card (Horizontal Scroll) */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h3>Compatible with</h3>
        <div className="partner-logos-scroll">
          <div className="partner-logo">CNET</div>
          <div className="partner-logo">Yahoo! Finance</div>
          <div className="partner-logo">Business Insider</div>
          <div className="partner-logo">Bloomberg</div>
          <div className="partner-logo">CNET</div>
          {/* Add more logos if needed */}
        </div>
      </div>

      {/* Fun GIFs Section */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h3>Check out some fun GIFs</h3>
        <div className="gifs-container">
          {/* Example GIF boxes */}
          <div className="gif-box">
            <img
              src="https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif"
              alt="Funny cat"
            />
            <p>A random cat doing something silly.</p>
          </div>
          <div className="gif-box">
            <img
              src="https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif"
              alt="Funny dog"
            />
            <p>A dog that’s super excited!</p>
          </div>
          <div className="gif-box">
            <img
              src="https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif"
              alt="Party parrot"
            />
            <p>Everyone loves a dancing parrot.</p>
          </div>
          {/* Add more GIF boxes if desired */}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Pricing Plans</h2>
        <p>Choose the plan that fits your trading style and needs.</p>
        <div className="pricing-plans">
          {/* Plan 1: Free */}
          <div className="plan">
            <h3>Free</h3>
            <p className="plan-price">$0 <span>/ month</span></p>
            <ul>
              <li>Basic AI Insights</li>
              <li>Limited Market Data</li>
              <li>Community Support</li>
            </ul>
            <Link to="/signup" className="btn btn-outline">
              Get Started
            </Link>
          </div>
          {/* Plan 2: Pro */}
          <div className="plan">
            <h3>Pro</h3>
            <p className="plan-price">$29 <span>/ month</span></p>
            <ul>
              <li>Advanced AI Predictions</li>
              <li>Real-Time Market Feeds</li>
              <li>Priority Support</li>
            </ul>
            <Link to="/signup" className="btn btn-green">
              Upgrade Now
            </Link>
          </div>
          {/* Plan 3: Enterprise */}
          <div className="plan">
            <h3>Enterprise</h3>
            <p className="plan-price">$99 <span>/ month</span></p>
            <ul>
              <li>All Pro Features</li>
              <li>Dedicated Account Manager</li>
              <li>Premium AI Research Tools</li>
            </ul>
            <Link to="/signup" className="btn btn-red">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Tool in Action (Example Visualization) */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>How Our Tool Helps You Win</h2>
        <p>
          Experience AI-driven insights that optimize your trading strategies. See
          real-time signals, portfolio breakdowns, and profit/loss tracking.
        </p>
        <div className="tool-visual">
          {/* Example: you could embed a chart, screenshot, or an animation */}
          <img
            src="https://via.placeholder.com/700x300.png?text=Stock+Tool+Preview"
            alt="Tool Preview"
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
