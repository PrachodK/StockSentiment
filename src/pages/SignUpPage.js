import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", { username, password });
      alert("Signup successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Error signing up");
    }
  };

  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Sign Up</h2>
        <p>Join us and explore the power of AI-driven trading!</p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "10px", width: "100%" }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "10px", width: "100%" }}
          />
          <button type="submit" className="btn btn-green" style={{ width: "100%", padding: "10px" }}>
            Sign Up
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-red" style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
