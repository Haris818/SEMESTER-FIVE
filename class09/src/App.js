import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React useNavigate Example 🚀</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
        <Link to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
