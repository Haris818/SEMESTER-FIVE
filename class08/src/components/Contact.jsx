import React, { useEffect, useState } from "react";

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      style={{
        padding: "60px 20px",
<<<<<<< HEAD
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          padding: "40px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "2.2rem",
            color: "#222",
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#555",
            fontSize: "1.05rem",
          }}
        >
          Have questions about our watches or services? We'd love to hear from you.
        </p>

        {/* Main Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Contact Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully!");
=======
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#eee",
        minHeight: "100vh",
        backgroundColor: "#121212",
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "15px",
          fontSize: "2.8rem",
          fontWeight: "700",
          color: "#ffa500",
          textShadow: "0 0 8px #ffa500",
        }}
      >
        Contact Us
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "50px",
          color: "#bbb",
          fontSize: "1.1rem",
        }}
      >
        Have questions about our watches or services? Get in touch with us!
      </p>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Contact Form */}
        <form
          style={{
            flex: "1",
            minWidth: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "30px",
            borderRadius: "18px",
            backgroundColor: "#1e1e1e",
            boxShadow: "0 0 20px rgba(255, 165, 0, 0.6)",
            fontSize: "1rem",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >
          {["Your Name", "Your Email"].map((placeholder, i) => (
            <input
              key={i}
              type={i === 1 ? "email" : "text"}
              placeholder={placeholder}
              required
              style={{
                padding: "14px 16px",
                borderRadius: "10px",
                border: "2px solid transparent",
                backgroundColor: "#121212",
                color: "#eee",
                fontSize: "1rem",
                transition: "border 0.3s ease, box-shadow 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.border = "2px solid #ffa500";
                e.currentTarget.style.boxShadow = "0 0 10px #ffa500";
              }}
              onBlur={(e) => {
                e.currentTarget.style.border = "2px solid transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          ))}

          <textarea
            placeholder="Your Message"
            required
            rows="5"
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "2px solid transparent",
              backgroundColor: "#121212",
              color: "#eee",
              fontSize: "1rem",
              resize: "vertical",
              transition: "border 0.3s ease, box-shadow 0.3s ease",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.border = "2px solid #ffa500";
              e.currentTarget.style.boxShadow = "0 0 10px #ffa500";
            }}
            onBlur={(e) => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "14px",
              backgroundColor: "#ffa500",
              color: "#121212",
              fontWeight: "700",
              fontSize: "1.1rem",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 15px #ffa500",
              transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#cc8400";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 25px #cc8400";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffa500";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px #ffa500";
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #ff9800")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #ff9800")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
            <textarea
              placeholder="Your Message"
              required
              rows="5"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
                resize: "none",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #ff9800")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: "14px",
                background: "linear-gradient(135deg, #ff9800, #f57c00)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Send Message
            </button>
          </form>

<<<<<<< HEAD
          {/* Contact Info */}
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#222" }}>Get in Touch</h2>
            <p style={{ marginBottom: "10px" }}>📍 Main Market, Lahore, Pakistan</p>
            <p style={{ marginBottom: "10px" }}>📞 +92 300 1234567</p>
            <p style={{ marginBottom: "20px" }}>📧 support@premiumwatches.com</p>

            <h3 style={{ marginBottom: "10px", color: "#333" }}>Working Hours</h3>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
=======
        {/* Contact Info */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            padding: "30px",
            borderRadius: "18px",
            backgroundColor: "#1e1e1e",
            boxShadow: "0 0 20px rgba(255, 165, 0, 0.6)",
            fontSize: "1.1rem",
            color: "#eee",
            lineHeight: "1.7",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#ffa500",
              fontWeight: "700",
              letterSpacing: "0.4px",
              textShadow: "0 0 10px #ffa500",
            }}
          >
            Get in Touch
          </h2>
          <p>
            <span role="img" aria-label="address" style={{ marginRight: "10px" }}>
              📍
            </span>
            Premium Watches Store, Main Market, Lahore, Pakistan
          </p>
          <p>
            <span role="img" aria-label="phone" style={{ marginRight: "10px" }}>
              📞
            </span>
            +92 300 1234567
          </p>
          <p>
            <span role="img" aria-label="email" style={{ marginRight: "10px" }}>
              📧
            </span>
            support@premiumwatches.com
          </p>

          <h3
            style={{
              marginTop: "30px",
              marginBottom: "12px",
              fontSize: "1.5rem",
              color: "#ffa500",
              fontWeight: "700",
              letterSpacing: "0.3px",
              textShadow: "0 0 8px #ffa500",
            }}
          >
            Working Hours
          </h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
        </div>
      </div>
    </div>
  );
}

export default Contact;
