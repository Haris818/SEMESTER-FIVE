import React, { useEffect, useState } from "react";

function Services() {
  const services = [
    {
      title: "Free Shipping",
      desc: "Enjoy free worldwide shipping on all orders with no hidden charges.",
      icon: "🚚",
      color: "#e3f2fd",
    },
    {
      title: "2-Year Warranty",
      desc: "All our watches come with a 2-year international warranty.",
      icon: "⏱️",
      color: "#fff3e0",
    },
    {
      title: "Watch Repair",
      desc: "Professional repair and maintenance service for your luxury watches.",
      icon: "🛠️",
      color: "#e8f5e9",
    },
    {
      title: "Customization",
      desc: "Get your watch personalized with custom straps and engravings.",
      icon: "🎨",
      color: "#f3e5f5",
    },
  ];

  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  useEffect(() => {
    // Animate cards one by one with a small delay
    services.forEach((_, idx) => {
      setTimeout(() => {
        setAnimatedIndexes((prev) => [...prev, idx]);
      }, idx * 200); // 200ms stagger delay per card
    });
  }, []);

  return (
    <div
      style={{
<<<<<<< HEAD
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "10px",
          color: "#222",
          letterSpacing: "1px",
        }}
      >
        Our Services
      </h1>
      <p
        style={{
          marginBottom: "50px",
          fontSize: "1.1rem",
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto 50px",
          lineHeight: "1.6",
        }}
      >
        We are committed to giving you the best shopping experience and premium
        after-sale services.
=======
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#181818",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "2.8rem" }}>Our Services</h1>
      <p
        style={{
          marginBottom: "40px",
          fontSize: "1.1rem",
          color: "#aaa",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        We are committed to giving you the best shopping experience and after-sale
        services.
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
      </p>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
<<<<<<< HEAD
          gridTemplateColumns: "repeat(2, 1fr)",
=======
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
<<<<<<< HEAD
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              padding: "35px 25px",
              borderRadius: "18px",
              background: service.color,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #ffcc80, #ffb74d)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              e.currentTarget.style.background = service.color;
              e.currentTarget.style.color = "#000";
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "15px",
                transition: "transform 0.3s ease",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.4rem",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              {service.title}
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              {service.desc}
            </p>
          </div>
        ))}
=======
        {services.map((service, index) => {
          const isAnimated = animatedIndexes.includes(index);
          return (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                background: "#222",
                padding: "30px 20px",
                boxShadow: isAnimated
                  ? "0 8px 24px rgba(255, 152, 0, 0.8)"
                  : "0 4px 12px rgba(255, 152, 0, 0.4)",
                cursor: "default",
                transition: "transform 0.4s ease, box-shadow 0.4s ease, opacity 0.6s ease",
                transform: isAnimated ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                opacity: isAnimated ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 36px rgba(255, 152, 0, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isAnimated ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)";
                e.currentTarget.style.boxShadow = isAnimated
                  ? "0 8px 24px rgba(255, 152, 0, 0.8)"
                  : "0 4px 12px rgba(255, 152, 0, 0.4)";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{service.title}</h3>
              <p style={{ color: "#ccc", fontSize: "1rem" }}>{service.desc}</p>
            </div>
          );
        })}
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
      </div>

      {/* CTA Section */}
      <div
        style={{
          marginTop: "70px",
          background: "#111",
          color: "white",
          borderRadius: "20px",
          padding: "50px 20px",
          maxWidth: "950px",
          marginInline: "auto",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
          Premium Care. Premium Service.
        </h2>
        <p
          style={{
            color: "#ccc",
            fontSize: "1.1rem",
            marginBottom: "25px",
            maxWidth: "600px",
            marginInline: "auto",
            lineHeight: "1.6",
          }}
        >
          Whether it's delivery, warranty, or repair — we ensure every customer
          gets the attention they deserve.
        </p>
        <button
          style={{
            background: "#ff9800",
            color: "white",
            border: "none",
            padding: "12px 28px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#e68900")}
          onMouseLeave={(e) => (e.target.style.background = "#ff9800")}
        >
          Learn More
        </button>
      </div>

      {/* Responsive design */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Services;
