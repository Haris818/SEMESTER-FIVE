import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/login"); // back to login page
  };

  return (
    <div>
      <h2>Welcome to the Dashboard 🎉</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "crimson",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
