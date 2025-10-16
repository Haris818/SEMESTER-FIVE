import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
<<<<<<< HEAD
  const categories = [
    {
      name: "Luxury Watches",
      img: "https://i5.walmartimages.com/seo/Poedagar-Men-Watch-Luxury-Business-Quartz-Watches-Stainless-Stain-Strap-Sport-Chronograph-Men-39-s-Wristwatch-Waterproof-Luminous-Quartz-Wristwatches_7b31bf36-11cf-4c68-8dfd-e630bc9a93f6.284ee349d31df69a9da1c2d294e2aade.jpeg",
    },
    {
      name: "Smart Watches",
      img: "https://media.wired.com/photos/68ccac118d273e101d2e0944/1:1/w_800,h_800,c_limit/Our%20Favorite%20Smartwatches%20Do%20Much%20More%20Than%20Just%20Tell%20Time.png",
    },
    {
      name: "Sports Watches",
      img: "https://5.imimg.com/data5/ECOM/Default/2023/6/317010777/WS/BS/EF/9422220/sport-watch-dual-time-waterproof-male-military-shock-resisitant-analog-automatic-watches-1-500x500.jpg",
    },
    {
      name: "Leather Watches",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DMD7oobdqzGtRnOmYSW1ikSs_tA3k3os3w&s",
    },
  ];

  const featured = [
    {
      name: "Classic Leather Watch",
      price: "$199",
      rating: "★★★★☆",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      name: "Luxury Steel Watch",
      price: "$299",
      rating: "★★★★★",
      img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    {
      name: "Sport Digital Watch",
      price: "$149",
      rating: "★★★★☆",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
      name: "Smart Fitness Tracker",
      price: "$99",
      rating: "★★★☆☆",
      img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
  ];

  const trending = [
    {
      name: "Titan Chrono Pro",
      price: "$349",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4XmuDW1aygQXPWlI8faIW6a7YrqQVCS_8Q&s",
    },
    {
      name: "Royal Gold Edition",
      price: "$499",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wWSaYvqBlTm7teG0ODqAK3ZPtdUYmb1C6A&s",
    },
    {
      name: "Omega SpeedX",
      price: "$459",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQac9OJa-YmetXgv7U43QtyjQjfsvud-LNSCg&s",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Khan",
      feedback:
        "Absolutely love my new watch! The design, quality, and packaging were all top-notch.",
    },
    {
      name: "Ali Ahmed",
      feedback:
        "Fast delivery and premium build quality. Will definitely shop again!",
    },
    {
      name: "Ayesha Noor",
      feedback:
        "The leather collection is stunning. Perfect for gifting and personal use!",
    },
  ];
=======
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // trigger animations after mount
    setLoaded(true);
  }, []);

  // Common fade-slide animation styles
  const fadeSlide = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d

  return (
    <div
      style={{
<<<<<<< HEAD
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#222",
=======
        backgroundColor: "#181818",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflowX: "hidden",
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1523275335684-37898b6baf30')",
          backgroundSize: "cover",
          backgroundPosition: "center",
<<<<<<< HEAD
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
            Timeless Luxury for Modern You
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "25px", color: "#ddd" }}>
            Discover premium watches crafted for every occasion — style,
            performance, and innovation combined.
=======
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "50px 40px",
            borderRadius: "16px",
            maxWidth: "600px",
            ...fadeSlide(0.3),
          }}
        >
          <h1
            style={{
              fontSize: "3.8rem",
              marginBottom: "20px",
              fontWeight: "900",
              letterSpacing: "2px",
              textShadow: "0 0 10px #ff9800",
            }}
          >
            Premium Watches
          </h1>
          <p
            style={{
              fontSize: "1.4rem",
              marginBottom: "35px",
              lineHeight: "1.7",
              color: "#ddd",
            }}
          >
            Discover timeless elegance with our hand-picked collection of luxury watches.
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
          </p>
          <Link
            to="/shop"
            style={{
<<<<<<< HEAD
              background: "#ff9900",
              padding: "14px 28px",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "600",
              textDecoration: "none",
              transition: "all 0.3s",
=======
              padding: "14px 32px",
              background: "#ff9800",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0 6px 12px rgba(255, 152, 0, 0.7)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 152, 0, 0.9)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(255, 152, 0, 0.7)";
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
            }}
            onMouseOver={(e) => (e.target.style.background = "#e68900")}
            onMouseOut={(e) => (e.target.style.background = "#ff9900")}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Shop by Category
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h4 style={{ marginBottom: "10px" }}>{cat.name}</h4>
                <Link
                  to="/shop"
                  style={{
                    color: "#007185",
                    fontWeight: "600",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                  }}
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Product */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px 40px",
          backgroundColor: "#fef6ed",
        }}
      >
        <div style={{ flex: "1 1 45%", padding: "20px" }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "20px" }}>
            Our Exclusive Product
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "25px" }}>
            Meet the <b>Royal ChronoX</b> — crafted for those who seek power and
            prestige. Featuring a sapphire glass body, dual precision movement,
            and stainless-steel casing.
          </p>
          <p style={{ color: "#666", marginBottom: "30px" }}>
            Designed for elegance and endurance. Perfect for both business and
            adventure.
          </p>
          <button
            style={{
              background: "#ff9900",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#e68900")}
            onMouseOut={(e) => (e.target.style.background = "#ff9900")}
          >
            Learn More
          </button>
        </div>
        <div style={{ flex: "1 1 45%", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
            alt="Exclusive Watch"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* Featured Products */}
<<<<<<< HEAD
      <section style={{ padding: "60px 40px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Featured Products
=======
      <section style={{ padding: "70px 40px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#ff9800",
            fontWeight: "700",
            ...fadeSlide(0.4),
          }}
        >
          Featured Watches
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
        </h2>
        <div
          style={{
            display: "grid",
<<<<<<< HEAD
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "30px",
          }}
        >
          {featured.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h4>{item.name}</h4>
                <p style={{ color: "#ff9900", fontWeight: "bold" }}>
                  {item.price}
                </p>
                <p style={{ color: "#777", fontSize: "0.9rem" }}>
                  {item.rating}
                </p>
                <button
                  style={{
                    background: "#ffd814",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px",
                    width: "100%",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.background = "#f7ca00")}
                  onMouseOut={(e) => (e.target.style.background = "#ffd814")}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section style={{ padding: "60px 40px", backgroundColor: "#fef6ed" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Trending Now
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {trending.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                textAlign: "center",
                paddingBottom: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />
              <h4 style={{ margin: "10px 0" }}>{item.name}</h4>
              <p style={{ color: "#ff9900", fontWeight: "bold" }}>
                {item.price}
              </p>
              <button
                style={{
                  background: "#ff9900",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#e68900")}
                onMouseOut={(e) => (e.target.style.background = "#ff9900")}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 40px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          What Our Customers Say
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "#fafafa",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                fontStyle: "italic",
              }}
            >
              <p style={{ color: "#444" }}>“{t.feedback}”</p>
              <h4
                style={{
                  marginTop: "15px",
                  color: "#007185",
                  fontStyle: "normal",
                }}
              >
                — {t.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          backgroundColor: "#232f3e",
          color: "#fff",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h2>Stay Updated</h2>
        <p style={{ color: "#ddd", marginBottom: "25px" }}>
          Get the latest product launches and offers delivered to your inbox.
        </p>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px",
              width: "260px",
              borderRadius: "8px",
              border: "none",
              marginRight: "10px",
            }}
          />
          <button
            style={{
              background: "#ff9900",
              border: "none",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
=======
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              title: "Classic Leather Watch",
              price: "$199",
              img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            },
            {
              title: "Luxury Steel Watch",
              price: "$299",
              img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
            },
            {
              title: "Sport Digital Watch",
              price: "$149",
              img: "https://jackmasonbrand.com/cdn/shop/articles/A22A1281_1200x.jpg?v=1597178612",
            },
          ].map((product, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                cursor: "pointer",
                transform: loaded ? "scale(1)" : "scale(0.95)",
                opacity: loaded ? 1 : 0,
                transition: `transform 0.4s ease ${0.5 + index * 0.15}s, opacity 0.4s ease ${0.5 + index * 0.15}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(255, 152, 0, 0.7)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.5)";
              }}
            >
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  marginBottom: "18px",
                  objectFit: "cover",
                  height: "200px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
              />
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "12px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#ffb347",
                  fontWeight: "700",
                }}
              >
                {product.price}
              </p>
            </div>
          ))}
>>>>>>> 1f85ff1c2021db6e66b2a31b53cb23adabebfe5d
        </div>
      </section>

      {/* New Arrivals */}
      <section
        style={{
          padding: "70px 40px",
          textAlign: "center",
          backgroundColor: "#121212",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#ff9800",
            fontWeight: "700",
            ...fadeSlide(0.6),
          }}
        >
          New Arrivals
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              title: "Elegant Gold Watch",
              price: "$399",
              img: "https://m.media-amazon.com/images/I/616jllf33ZL._UY1000_.jpg",
            },
            {
              title: "Minimal Black Watch",
              price: "$249",
              img: "https://harshaystore.pk/cdn/shop/files/81k_Py9-d4L._AC_SL1500_900x.jpg?v=1737639723",
            },
            {
              title: "Modern White Watch",
              price: "$279",
              img: "https://img.drz.lazcdn.com/static/pk/p/5750d97298aa729668fe74f063576e82.jpg_720x720q80.jpg",
            },
          ].map((product, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                cursor: "pointer",
                transform: loaded ? "scale(1)" : "scale(0.95)",
                opacity: loaded ? 1 : 0,
                transition: `transform 0.4s ease ${0.7 + index * 0.15}s, opacity 0.4s ease ${0.7 + index * 0.15}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(255, 152, 0, 0.7)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.5)";
              }}
            >
              <img
                src={product.img}
                alt={product.title}
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  marginBottom: "18px",
                  objectFit: "cover",
                  height: "200px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
              />
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "12px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#ffb347",
                  fontWeight: "700",
                }}
              >
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "70px 40px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#ff9800",
            fontWeight: "700",
            ...fadeSlide(0.8),
          }}
        >
          Why Choose Us
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: "⏱️",
              title: "High Quality",
              description: "We offer only premium materials and craftsmanship.",
            },
            {
              icon: "🚚",
              title: "Fast Shipping",
              description: "Get your orders delivered swiftly and securely.",
            },
            {
              icon: "💬",
              title: "Excellent Support",
              description: "Our team is here to help you anytime.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                maxWidth: "270px",
                backgroundColor: "#222",
                padding: "35px 25px",
                borderRadius: "16px",
                color: "#eee",
                boxShadow: loaded
                  ? `0 12px 24px rgba(255, 152, 0, 0.${6 + index * 2})`
                  : "none",
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: `opacity 0.6s ease ${
                  0.9 + index * 0.15
                }s, transform 0.6s ease ${0.9 + index * 0.15}s`,
              }}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  marginBottom: "18px",
                  color: "#ff9800",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  marginBottom: "18px",
                  fontWeight: "700",
                  fontSize: "1.4rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#ccc" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section
        style={{
          padding: "70px 40px",
          backgroundColor: "#121212",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#fff",
            fontWeight: "700",
            ...fadeSlide(1),
          }}
        >
          Customer Reviews
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "45px",
            flexWrap: "wrap",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              name: "Alice M.",
              review: "Absolutely love my new watch! Stylish and reliable.",
              rating: 5,
            },
            {
              name: "John D.",
              review: "Great customer service and fast delivery.",
              rating: 4,
            },
            {
              name: "Emma K.",
              review: "Quality exceeds expectations. Highly recommend.",
              rating: 5,
            },
          ].map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                padding: "30px",
                borderRadius: "16px",
                maxWidth: "320px",
                color: "#ddd",
                boxShadow: loaded
                  ? "0 8px 20px rgba(255, 152, 0, 0.4)"
                  : "none",
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: `opacity 0.6s ease ${1.1 + index * 0.15}s, transform 0.6s ease ${
                  1.1 + index * 0.15
                }s`,
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "20px",
                  fontSize: "1.1rem",
                  lineHeight: "1.5",
                }}
              >
                "{review.review}"
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "15px",
                  fontSize: "1.1rem",
                }}
              >
                — {review.name}
              </p>
              <p style={{ color: "#ff9800", fontSize: "1.2rem" }}>
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "#121212",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #333",
          borderBottom: "1px solid #333",
          ...fadeSlide(1.2),
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "25px",
            color: "#ff9800",
            fontWeight: "700",
          }}
        >
          Join Our Newsletter
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#aaa" }}>
          Be the first to know about new arrivals and exclusive deals.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "14px 18px",
            borderRadius: "8px",
            border: "none",
            marginRight: "15px",
            width: "280px",
            maxWidth: "85%",
            fontSize: "1rem",
            outline: "none",
            transition: "box-shadow 0.3s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = "0 0 10px #ff9800";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <button
          style={{
            padding: "14px 28px",
            background: "#ff9800",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 6px 12px rgba(255, 152, 0, 0.7)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 152, 0, 0.9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(255, 152, 0, 0.7)";
          }}
        >
          Subscribe
        </button>
      </section>
    </div>
  );
}

export default Home;
