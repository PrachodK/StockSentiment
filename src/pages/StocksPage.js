// src/pages/StocksPage.js
import React from 'react';
import StockPortfolioChart from '../components/StockPortfolioChart';

function StocksPage() {
  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Stocks Overview</h2>
        <p>Real-time market data and insights powered by Atoma Luna.</p>
        
        {/* Our new chart! */}
        <StockPortfolioChart />

      </div>
    </div>
  );
}

export default StocksPage;
