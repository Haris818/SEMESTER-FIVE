import React from "react";

function Footer() {
  return (
    <footer style={{
      background: "#121212",
      color: "#aaa",
      textAlign: "center",
      padding: "20px",
      borderTop: "1px solid #333"
    }}>
      <p>&copy; {new Date().getFullYear()} Premium Watches. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
