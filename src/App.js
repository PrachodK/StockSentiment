import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { MyStocks } from "./pages/MyStocks";
import { StockLookup } from "./pages/StockLookup";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mystocks" element={<MyStocks />} />
                <Route path="/stocklookup" element={<StockLookup />} />
            </Routes>
        </Router>
    );
}

export default App;
