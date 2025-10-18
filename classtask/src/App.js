import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaHome, FaStore } from "react-icons/fa";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import "./App.css"; // Add this line

function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <FaStore className="logo-icon" />
        <h2>MyStore</h2>
      </div>
      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active-link" : ""}
        >
          <FaShoppingCart /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} onRemove={handleRemoveFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
