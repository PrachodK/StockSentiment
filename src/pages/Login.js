import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({ username }));
      window.dispatchEvent(new Event("storage"));
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center-container">
      <div className="card" style={{ textAlign: "center", padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <h2>Login</h2>
        <p>Welcome back! Please sign in to continue.</p>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-red" style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
