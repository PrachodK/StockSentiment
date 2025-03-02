import { useEffect, useState } from "react";

function StockList() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/stocks")
            .then(res => res.json())
            .then(data => setStocks(data))
            .catch(err => console.error("Error fetching stocks:", err));
    }, []);

    return (
        <div>
            <h2>Stock List</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                <thead>
                    <tr style={{ background: "#f4f4f4", textAlign: "left" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.length > 0 ? (
                        stocks.map(stock => (
                            <tr key={stock.id} style={{ borderBottom: "1px solid #ddd" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stock.id}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stock.name}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>${parseFloat(stock.price).toFixed(2)}</td>
                                </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center", padding: "10px" }}>Loading stocks...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default StockList;
