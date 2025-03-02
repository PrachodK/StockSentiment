import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { MyStocks } from "./pages/MyStocks";
import { StockLookup } from "./pages/StockLookup";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/mystocks" element={<MyStocks />} />
        <Route path="/stocklookup" element={<StockLookup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
