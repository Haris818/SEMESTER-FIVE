<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
=======
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      {/* Navbar */}
      <header
        style={{
          backgroundColor: "#232f3e",
          color: "white",
          padding: "12px 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              color: "#ff9900",
              fontSize: "1.5rem",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Watchify
          </Link>
        </div>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "6px",
            padding: "5px 10px",
            flex: "1 1 350px",
            margin: "10px 20px",
          }}
        >
          <input
            type="text"
            placeholder="Search for watches..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "8px",
              fontSize: "0.95rem",
            }}
          />
          <FaSearch color="#232f3e" />
        </div>

        {/* Navigation + Icons */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ff9900")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ff9900")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            About
          </Link>
          <Link
            to="/services"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ff9900")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Services
          </Link>
          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#ff9900")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Contact
          </Link>

          {/* Cart & Login */}
          <FaShoppingCart
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              color: "#ffd814",
            }}
          />
          <button
            style={{
              backgroundColor: "#ff9900",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "8px 15px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e68900")}
            onMouseOut={(e) => (e.target.style.background = "#ff9900")}
          >
            <FaUser /> Login
          </button>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#131a22",
          color: "#ddd",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Watchify | Designed with ❤️ by Haris
      </footer>
=======
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          {/* Example watch SVG logo with rotation animation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="40"
            height="40"
            fill="none"
            stroke="#ff9800"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={styles.logo}
            aria-label="Premium Watches Logo"
          >
            <circle cx="32" cy="32" r="28" />
            <circle cx="32" cy="32" r="22" />
            <line x1="32" y1="32" x2="32" y2="16" />
            <line x1="32" y1="32" x2="44" y2="32" />
          </svg>
          <span style={styles.logoText}>Premium Watches</span>
        </div>

        <NavLink to="/" style={styles.link} end>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/services" style={styles.link}>Services</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </nav>

      <div style={styles.pageContainer}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    padding: "15px 30px",
    backgroundColor: "#121212",
    borderBottom: "1px solid #333",
    flexWrap: "wrap",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginRight: "auto",
    cursor: "pointer",
    userSelect: "none",
  },
  logo: {
    animation: "spin 8s linear infinite",
  },
  logoText: {
    color: "#ff9800",
    fontWeight: "bold",
    fontSize: "1.4rem",
    letterSpacing: "1px",
    textShadow: "0 0 6px #ff9800",
  },
  link: ({ isActive }) => ({
    color: isActive ? "#ff9800" : "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "color 0.3s ease",
  }),
  pageContainer: {
    backgroundColor: "#181818",
    color: "#fff",
    minHeight: "calc(100vh - 100px)",
    padding: "20px",
  },
};

// Add keyframes to global CSS, you can do this by importing a CSS file or injecting via a style tag
// Here is the CSS you need to add globally:
//
// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

export default App;
