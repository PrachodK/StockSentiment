import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">📈 StockSentiment</Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/mystocks" className="hover:text-gray-400">My Stocks</Link>
        <Link to="/stocklookup" className="hover:text-gray-400">Stock Lookup</Link>
      </div>
    </nav>
  );
};
