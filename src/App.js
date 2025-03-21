import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import StocksPage from './pages/StocksPage';

function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/stocks" element={<StocksPage />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;