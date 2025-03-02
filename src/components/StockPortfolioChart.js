// src/components/StockPortfolioChart.js
import React from 'react';
// First, import and register the Chart.js components you need
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StockPortfolioChart() {
  // Example data for two lines: "Green Stocks" and "Red Stocks"
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Green Stocks',
        data: [120, 125, 123, 130, 135],
        borderColor: 'rgba(40, 167, 69, 1)',   // Solid green line
        backgroundColor: 'rgba(40, 167, 69, 0.2)', // Translucent green fill
        tension: 0.3,  // Makes the line a bit curved
      },
      {
        label: 'Red Stocks',
        data: [80, 82, 78, 90, 88],
        borderColor: 'rgba(220, 53, 69, 1)',   // Solid red line
        backgroundColor: 'rgba(220, 53, 69, 0.2)', // Translucent red fill
        tension: 0.3,
      },
    ],
  };

  // Chart.js configuration options
  const options = {
    responsive: true,
    maintainAspectRatio: false,  // So it can expand in a container
    plugins: {
      title: {
        display: true,
        text: 'Stock Portfolio Performance',
        font: { size: 18 }
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
        beginAtZero: false, // Because stock prices usually don’t start at zero
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      {/* The <Line> component from react-chartjs-2 */}
      <Line data={data} options={options} />
    </div>
  );
}

export default StockPortfolioChart;
