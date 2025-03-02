import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2ver2Words.png"; 

function Header() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setDropdownOpen(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
      <Link to="/">
         <img src={logo} alt="Scout Logo" style={{ height: "40px" }} />
      </Link>
      </div>
      <nav style={styles.nav}>
        <Link
          to="/"
          style={{ ...styles.navLink, ...(hoveredLink === "home" ? styles.navLinkHover : {}) }}
          onMouseEnter={() => setHoveredLink("home")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </Link>
        <Link
          to="/stocks"
          style={{ ...styles.navLink, ...(hoveredLink === "stocks" ? styles.navLinkHover : {}) }}
          onMouseEnter={() => setHoveredLink("stocks")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Stocks
        </Link>
        {!user ? (
          <>
            <Link
              to="/login"
              style={{ ...styles.navLink, ...(hoveredLink === "login" ? styles.navLinkHover : {}) }}
              onMouseEnter={() => setHoveredLink("login")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{ ...styles.navLink, ...(hoveredLink === "signup" ? styles.navLinkHover : {}) }}
              onMouseEnter={() => setHoveredLink("signup")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div style={styles.userDropdown}>
            <button
              style={styles.userBtn}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.username} ▼
            </button>
            {dropdownOpen && (
              <div style={styles.dropdownContent}>
                <button style={styles.dropdownItem} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

// **Inline Styles**
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "2px solid #ddd",
  },
  headerLeft: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logo: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  navLinkHover: {
    color: "#007bff",
  },
  userDropdown: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  userBtn: {
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownContent: {
    position: "absolute",
    right: 0,
    backgroundColor: "white",
    minWidth: "100px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    zIndex: 1,
  },
  dropdownItem: {
    width: "100%",
    padding: "10px",
    textAlign: "left",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Header;
