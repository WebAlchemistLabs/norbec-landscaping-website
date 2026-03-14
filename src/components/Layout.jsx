// src/components/Layout.jsx
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = useMemo(
    () => [
      { to: "/", label: "Home", end: true },
      { to: "/services", label: "Services" },
      { to: "/booking", label: "Booking" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  // Route change: close menu + reset scroll
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="app-shell">
      {/* Header */}
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <div className="container header-inner">
          {/* Brand */}
          <NavLink to="/" className="brand" aria-label="Go to homepage">
            <img src="/images/logo.png" alt="NorBec Logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">NorBec Landscaping</span>
              <span className="brand-tag">Loyal 2 Your Soil</span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="nav nav--desktop" aria-label="Primary navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "is-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <HeaderCTA />
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menu-icon" aria-hidden="true">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <div className="mobile-menu-panel" role="dialog" aria-modal="true">
            <div className="mobile-menu-head">
              <span className="mobile-menu-title">Menu</span>
              <button
                type="button"
                className="menu-close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="nav nav--mobile" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `mobile-link ${isActive ? "is-active" : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mobile-actions">
                <a className="btn btn--primary" href="tel:4378604105">
                  Call Now
                </a>
              </div>
            </nav>
          </div>

          {/* Click outside closes */}
          <button
            className="mobile-menu-backdrop"
            aria-label="Close menu backdrop"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </header>

      {/* Page content */}
      <main className="site-main">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/** Desktop CTA group */
function HeaderCTA() {
  return (
    <div className="nav-cta">
      <a className="btn btn--primary" href="tel:4378604105">
        Call Now
      </a>
    </div>
  );
}