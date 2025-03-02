import React, { useState, useEffect } from "react";
import axios from "axios";

export const MyStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/stocks")
      .then(res => res.json())
      .then(data => setStocks(data));

    if (user && token) {
      fetch("http://localhost:5000/api/favorites", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => res.json())
      .then(data => setFavorites(data.map(fav => fav.id)));
    }
  }, []);

  const toggleFavorite = async (stockId) => {
    if (!user) {
      alert("Please log in to favorite stocks");
      return;
    }

    const isFavorited = favorites.includes(stockId);
    const url = isFavorited ? "/api/favorite" : "/api/favorite";
    const method = isFavorited ? "DELETE" : "POST";

    await fetch(`http://localhost:5000${url}`, {
      method,
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ stockId }),
    });

    setFavorites(isFavorited ? favorites.filter(id => id !== stockId) : [...favorites, stockId]);
  };

  return (
    <div>
      <h2>My Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            {stock.name} (${stock.price})
            <button onClick={() => toggleFavorite(stock.id)}>
              {favorites.includes(stock.id) ? "★ Unfavorite" : "☆ Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
