import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import StocksPage from './pages/StocksPage';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stocks" element={<StocksPage />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
