import React, { useState, useEffect } from "react";

export const StockLookup = () => {
  const [query, setQuery] = useState("");
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((err) => console.error("Error fetching stocks:", err));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredStocks([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      setFilteredStocks(
        stocks.filter(
          (stock) =>
            stock.name.toLowerCase().includes(lowerCaseQuery) ||
            stock.symbol.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  }, [query, stocks]);

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-gray-800">Stock Lookup</h1>
      <input
        type="text"
        placeholder="Search stock symbol..."
        className="mt-4 p-2 border border-gray-300 rounded-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <table className="mt-4 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border border-gray-300">Symbol</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {filteredStocks.length > 0 ? (
              filteredStocks.map((stock) => (
                <tr key={stock.id} className="border-t border-gray-300">
                  <td className="p-2 border border-gray-300">{stock.symbol}</td>
                  <td className="p-2 border border-gray-300">{stock.name}</td>
                  <td className="p-2 border border-gray-300">
                    ${parseFloat(stock.price).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};
