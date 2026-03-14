// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const iconWrap = {
    width: "42px",
    height: "42px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.14)",
    overflow: "hidden",
    transition: "transform 0.18s ease, background 0.18s ease",
  };

  const imgStyle = {
    width: "26px",
    height: "26px",
    objectFit: "cover",
    borderRadius: "999px",
    display: "block",
  };

  const iconLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "18px",
          padding: "22px 0",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontWeight: "900", color: "#fff", fontSize: "1rem" }}>
            NorBec Landscaping
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--accent-500)" }}>
            Loyal 2 Your Soil
          </div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            fontWeight: "800",
          }}
        >
          <Link to="/" style={{ color: "rgba(255,255,255,0.85)" }}>
            Home
          </Link>
          <Link to="/services" style={{ color: "rgba(255,255,255,0.85)" }}>
            Services
          </Link>
          <Link to="/booking" style={{ color: "rgba(255,255,255,0.85)" }}>
            Booking
          </Link>
          <Link to="/contact" style={{ color: "rgba(255,255,255,0.85)" }}>
            Contact
          </Link>
        </nav>

        {/* Action + Social Icons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Call */}
          <a
            href="tel:14165551234"
            style={iconLinkStyle}
            aria-label="Call NorBec Landscaping"
            title="Call Now"
          >
            <span style={iconWrap}>📞</span>
          </a>

          {/* Booking / mail */}
          <Link
            to="/booking"
            style={iconLinkStyle}
            aria-label="Go to booking page"
            title="Book Now"
          >
            <span style={iconWrap}>✉️</span>
          </Link>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            aria-label="Facebook"
            title="Facebook"
          >
            <span style={iconWrap}>
              <img src="/images/social/FB.png" alt="Facebook" style={imgStyle} />
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            aria-label="Instagram"
            title="Instagram"
          >
            <span style={iconWrap}>
              <img src="/images/social/IG.png" alt="Instagram" style={imgStyle} />
            </span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            aria-label="TikTok"
            title="TikTok"
          >
            <span style={iconWrap}>
              <img src="/images/social/Tic.png" alt="TikTok" style={imgStyle} />
            </span>
          </a>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          textAlign: "center",
          padding: "10px 0",
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        © {year} NorBec Landscaping — Built by <strong>Web Alchemist</strong>
      </div>
    </footer>
  );
}