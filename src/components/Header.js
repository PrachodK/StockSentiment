import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          LePrachod
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <button className="dashboard-btn">Dashboard</button>
    </header>
  );
}

export default Header;
