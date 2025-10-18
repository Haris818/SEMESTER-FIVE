import React from "react";
import "../App.css";

function CartPage({ cart, onRemove }) {
  return (
    <div className="cart-container">
      <h2 style={{ color: "#00ffb3", textAlign: "center" }}>Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Your cart is empty 😔</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img src={item.image} alt={item.title} />
              <span>{item.title.substring(0, 30)}...</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <strong>${item.price}</strong>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
