import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/scout3.png";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setShowDropdown(false);
    navigate("/");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center h-16">
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src={logo} alt="Scout Logo" className="h-12 w-12 object-contain cursor-pointer" />
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/mystocks" className="hover:text-gray-400">My Stocks</Link>
        <Link to="/stocklookup" className="hover:text-gray-400">Stock Lookup</Link>
      </div>

      <div>
        {user ? (
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              className="hover:text-gray-400 focus:outline-none"
            >
              {user.username} ▼
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                <button 
                  onClick={handleLogout} 
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/signup" className="hover:text-gray-400">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
