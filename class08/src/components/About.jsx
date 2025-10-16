import React, { useEffect, useState } from "react";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#222" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
          }}
        ></div>
        <h1
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "2.8rem",
            fontWeight: "700",
            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
          }}
        >
          About Us
        </h1>
      </section>

      {/* About Content */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px",
          backgroundColor: "#fff",
          gap: "40px",
        }}
      >
        {/* Image */}
        <div style={{ flex: "1 1 400px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="About Premium Watches"
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "16px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Text */}
        <div style={{ flex: "1 1 450px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "15px", color: "#232f3e" }}>
            Welcome to Premium Watches
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444" }}>
            At <b>Premium Watches</b>, we believe a watch is more than just a
            timepiece — it’s a reflection of your style and personality.
            Our curated collection blends timeless design, modern technology,
            and exceptional craftsmanship to bring you watches that truly stand out.
          </p>

          <h3 style={{ marginTop: "25px", color: "#ff9900" }}>Our Mission</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            To make luxury accessible — delivering quality, elegance, and
            innovation at fair prices for watch lovers around the globe.
          </p>

          <h3 style={{ marginTop: "25px", color: "#ff9900" }}>Our Vision</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            We aim to become the most trusted online destination for
            timepieces — uniting tradition and technology with
            customer satisfaction at the heart of everything we do.
          </p>

          <button
            style={{
              marginTop: "30px",
              backgroundColor: "#ff9900",
              color: "#fff",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e68900")}
            onMouseOut={(e) => (e.target.style.background = "#ff9900")}
=======
    <div
      style={{
        padding: "60px 20px",
        background: "#121212",
        color: "#eee",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "60px",
          color: "#ff6f00",
          fontSize: "4.5rem",
          userSelect: "none",
          fontWeight: "900",
          fontFamily: "'Segoe UI Black', sans-serif",
          animation: "logo-glow 2.8s ease-in-out infinite",
          textShadow: "0 0 12px #ff6f00, 0 0 20px #ff6f00",
        }}
        aria-label="Premium Watches Logo"
      >
        ⌚️
      </div>

      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "3.6rem",
          fontWeight: "800",
          color: "#ff6f00",
          letterSpacing: "1.6px",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0) scale(1)" : "translateY(25px) scale(0.95)",
          transition: "opacity 1s ease, transform 1s ease",
          textShadow: "0 0 10px #ff6f00",
        }}
      >
        About Us
      </h1>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          maxWidth: "1000px",
          margin: "0 auto",
          gap: "60px",
          flexWrap: "wrap",
          backgroundColor: "#1f1f1f",
          borderRadius: "24px",
          boxShadow: "0 8px 40px rgba(255, 111, 0, 0.3)",
          padding: "50px",
        }}
      >
        {/* Image */}
        <img
          src="https://cdn.pixabay.com/photo/2023/04/28/17/04/wrist-watch-7957073_1280.jpg"
          alt="About Watches"
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "24px",
            objectFit: "cover",
            flexShrink: 0,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0) scale(1)" : "translateX(-40px) scale(0.9)",
            transition: "opacity 1.3s ease 0.3s, transform 1.3s ease 0.3s",
            boxShadow: "0 12px 30px rgba(255, 111, 0, 0.6)",
            border: "2px solid #ff6f00",
          }}
        />

        {/* Text */}
        <div
          style={{
            flex: 1,
            minWidth: "320px",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0) scale(1)" : "translateX(40px) scale(0.9)",
            transition: "opacity 1.3s ease 0.6s, transform 1.3s ease 0.6s",
          }}
        >
          <h2
            style={{
              marginBottom: "28px",
              fontSize: "2.6rem",
              color: "#ff6f00",
              fontWeight: "800",
              letterSpacing: "0.8px",
              textShadow: "0 0 8px #ff6f00",
            }}
          >
            Welcome to Premium Watches
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.85",
              marginBottom: "40px",
              color: "#d9d9d9",
              fontWeight: "500",
            }}
          >
            At <b>Premium Watches</b>, we believe a watch is more than just a timepiece.
            It’s a statement of style, personality, and elegance.
            Our collection brings you timeless designs, modern technology,
            and the finest craftsmanship from around the world.
          </p>

          <h3
            style={{
              marginTop: "35px",
              marginBottom: "20px",
              fontSize: "1.9rem",
              color: "#ff6f00",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textShadow: "0 0 6px #ff6f00",
            }}
          >
            Our Mission
          </h3>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#c4c4c4",
              marginBottom: "40px",
              fontWeight: "400",
            }}
          >
            To provide high-quality luxury and smart watches at affordable prices,
            so that everyone can enjoy the art of timekeeping.
          </p>

          <h3
            style={{
              marginBottom: "20px",
              fontSize: "1.9rem",
              color: "#ff6f00",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textShadow: "0 0 6px #ff6f00",
            }}
          >
            Our Vision
          </h3>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              color: "#c4c4c4",
              fontWeight: "400",
            }}
          >
            We aim to become the most trusted online destination for watch lovers,
            combining tradition with innovation and customer satisfaction.
          </p>

          {/* Call to Action button */}
          <button
            style={{
              marginTop: "50px",
              padding: "16px 48px",
              backgroundColor: "#ff6f00",
              border: "none",
              borderRadius: "16px",
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#121212",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
              userSelect: "none",
              outline: "none",
              boxShadow: "0 6px 24px rgba(255, 111, 0, 0.7)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e65a00";
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(230, 90, 0, 0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ff6f00";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(255, 111, 0, 0.7)";
            }}
            onClick={() => alert("Thanks for your interest!")}
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
          >
            Explore Our Collection
          </button>
        </div>
<<<<<<< HEAD
      </section>

      {/* Value Section */}
      <section
        style={{
          backgroundColor: "#f7f7f7",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#232f3e" }}>
          Why Choose Us
        </h2>
        <p style={{ maxWidth: "700px", margin: "0 auto", color: "#555", lineHeight: "1.7" }}>
          Because we blend heritage with innovation. Each timepiece is carefully
          designed and quality-tested to ensure you not only look great but
          also feel confident every second of the day.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
            marginTop: "40px",
          }}
        >
          {[
            { title: "100% Authentic", text: "All watches are verified and genuine." },
            { title: "Free Delivery", text: "Fast and secure delivery to your doorstep." },
            { title: "24/7 Support", text: "We’re always here to assist you." },
            { title: "Secure Payments", text: "Trusted checkout and encryption guaranteed." },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "25px 20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h4 style={{ color: "#ff9900", marginBottom: "10px" }}>{item.title}</h4>
              <p style={{ color: "#555", fontSize: "0.95rem" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
=======
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes logo-glow {
          0%, 100% {
            text-shadow: 0 0 12px #ff6f00, 0 0 20px #ff6f00;
            color: #ff6f00;
          }
          50% {
            text-shadow: 0 0 20px #ff9d33, 0 0 30px #ff9d33;
            color: #ff9d33;
          }
        }
      `}</style>
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
    </div>
  );
}

export default About;
