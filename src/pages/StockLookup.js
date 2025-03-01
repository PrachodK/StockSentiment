import React, { useState } from "react";

export const StockLookup = () => {
  const [query, setQuery] = useState("");

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
      <p className="mt-4 text-gray-600">Search results will appear here.</p>
    </div>
  );
};
