import React from "react";

const topStocks = [
  { symbol: "AAPL", price: "$175.32", change: "+1.45%" },
  { symbol: "TSLA", price: "$217.61", change: "-2.10%" },
  { symbol: "AMZN", price: "$132.50", change: "+0.67%" },
  { symbol: "GOOGL", price: "$2850.23", change: "-1.22%" },
  { symbol: "MSFT", price: "$352.15", change: "+0.88%" },
  { symbol: "NFLX", price: "$410.52", change: "-0.78%" },
  { symbol: "NVDA", price: "$998.42", change: "+2.56%" },
  { symbol: "META", price: "$311.24", change: "-1.12%" },
  { symbol: "AMD", price: "$136.48", change: "+1.98%" },
  { symbol: "SPY", price: "$450.72", change: "+0.45%" },
];

export const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-gray-800">Stock Sentiment Analysis</h1>
      <p className="text-gray-500 mt-2">Analyze market sentiment based on real-time data.</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700">Top 10 Stocks</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Change</th>
              </tr>
            </thead>
            <tbody>
              {topStocks.map((stock, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3">{stock.symbol}</td>
                  <td className="p-3">{stock.price}</td>
                  <td className={`p-3 ${stock.change.includes("+") ? "text-green-500" : "text-red-500"}`}>
                    {stock.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
