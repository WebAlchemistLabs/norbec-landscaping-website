import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Lawn Mowing",
      image: "/mowing.jpg",
      desc: "Keep your lawn neat, healthy, and consistently sharp.",
    },
    {
      title: "Garden Care",
      image: "/garden.png",
      desc: "Seasonal garden maintenance for clean, vibrant beds.",
    },
    {
      title: "Spring Clean Up",
      image: "/cleanup.png",
      desc: "A full refresh to get your property ready for the season.",
    },
    {
      title: "Pressure Washing",
      image: "/pressure.png",
      desc: "Patios, driveways, and walkways — safely restored.",
    },
    {
      title: "Custom Garden",
      image: "/custom.png",
      desc: "Personalized garden designs that match your home’s style.",
    },
    {
      title: "Mulch & Soil",
      image: "/mulch.png",
      desc: "Premium mulch & soil installs for healthier plant growth.",
    },
    {
      title: "Sod Install",
      image: "/sod.png",
      desc: "Professional sod installation for an instant green lawn.",
    },
    {
      title: "Landscape Install",
      image: "/landscape.png",
      desc: "Hard + soft landscaping installs done the right way.",
    },
    {
      title: "Tree & Shrub Care",
      image: "/tree.png",
      desc: "Pruning and care that promotes long-term plant health.",
    },
    {
      title: "Outdoor Lighting",
      image: "/lighting.png",
      desc: "Boost curb appeal with clean, modern outdoor lighting.",
    },
    {
      title: "Patio & Walkways",
      image: "/patio.png",
      desc: "Beautiful stone work for patios, paths, and walkways.",
    },
    {
      title: "Fencing",
      image: "/fence.png",
      desc: "Durable fencing options built for privacy and style.",
    },
  ];

  const sectionStyle = {
    padding: "96px 20px 110px",
    background:
      "radial-gradient(circle at top center, rgba(216,180,254,0.16), transparent 20%), linear-gradient(180deg, #ffffff 0%, #f6f2f8 55%, #ffffff 100%)",
  };

  const containerStyle = {
    maxWidth: "1240px",
    margin: "0 auto",
  };

  const heroStyle = {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "24px",
    alignItems: "stretch",
    marginBottom: "44px",
  };

  const heroLeftStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "30px",
    padding: "40px 34px",
    background:
      "linear-gradient(135deg, rgba(27,16,32,0.98), rgba(59,33,64,0.95), rgba(75,44,69,0.92))",
    color: "#fff",
    boxShadow: "0 24px 56px rgba(27,16,32,0.18)",
  };

  const heroGlowStyle = {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 10% 15%, rgba(216,180,254,0.2), transparent 28%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 24%)",
    pointerEvents: "none",
  };

  const heroRightStyle = {
    borderRadius: "30px",
    padding: "28px",
    background: "rgba(255,255,255,0.92)",
    border: "1px solid rgba(25,20,30,0.08)",
    boxShadow: "0 18px 38px rgba(25,20,30,0.08)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  };

  const statCardStyle = {
    borderRadius: "20px",
    padding: "18px 16px",
    background: "linear-gradient(180deg, #ffffff, #faf7fc)",
    border: "1px solid rgba(25,20,30,0.06)",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.95)",
    border: "1px solid rgba(25,20,30,0.08)",
    borderRadius: "26px",
    overflow: "hidden",
    boxShadow: "0 14px 34px rgba(31,20,36,0.08)",
  };

  const ctaStyle = {
    marginTop: "54px",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "22px",
    alignItems: "center",
    borderRadius: "28px",
    padding: "30px",
    background: "linear-gradient(135deg, #fff, #f6f0f9)",
    border: "1px solid rgba(25,20,30,0.08)",
    boxShadow: "0 18px 38px rgba(31,20,36,0.08)",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={heroStyle} className="services-hero-grid">
          <div style={heroLeftStyle}>
            <div style={heroGlowStyle} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "0.84rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  fontWeight: "800",
                  color: "#e9d5ff",
                }}
              >
                NorBec Landscaping Services
              </p>

              <h1
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                  lineHeight: "1.04",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                }}
              >
                Clean Lines.
                <br />
                Strong Curb Appeal.
                <br />
                Better Outdoor Living.
              </h1>

              <p
                style={{
                  margin: "0 0 22px",
                  maxWidth: "58ch",
                  color: "rgba(255,255,255,0.84)",
                  lineHeight: "1.8",
                  fontSize: "1.03rem",
                }}
              >
                We offer landscaping services that keep your property neat,
                attractive, and professionally maintained from regular upkeep
                to larger outdoor upgrades.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {["Residential Focus", "Professional Finish", "Reliable Service"].map(
                  (item) => (
                    <span
                      key={item}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 14px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "#fff",
                        fontWeight: "800",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div style={heroRightStyle}>
            {[
              { number: "12", label: "Core services" },
              { number: "Fast", label: "Quote scheduling" },
              { number: "Clean", label: "Visual results" },
              { number: "Local", label: "Residential support" },
            ].map((item) => (
              <div key={item.label} style={statCardStyle}>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#2d1b2a",
                    fontSize: "1.6rem",
                    fontWeight: "900",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.number}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "#6b6170",
                    lineHeight: "1.6",
                    fontWeight: "700",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}

            <div
              style={{
                gridColumn: "1 / -1",
                borderRadius: "22px",
                padding: "20px 18px",
                background: "linear-gradient(135deg, #f9f3fc, #ffffff)",
                border: "1px solid rgba(25,20,30,0.06)",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#3b2140",
                  fontWeight: "900",
                  fontSize: "1rem",
                }}
              >
                Best for homeowners who want:
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#6a6270",
                  lineHeight: "1.7",
                }}
              >
                dependable yard care, polished outdoor presentation, and a
                cleaner, more valuable-looking property.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginBottom: "34px",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#b48ad9",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.84rem",
            }}
          >
            Service Catalog
          </p>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              color: "#2d1b2a",
              fontWeight: "900",
              letterSpacing: "-0.02em",
            }}
          >
            Explore What We Offer
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "700px",
              color: "#6c6470",
              lineHeight: "1.75",
              fontSize: "1.02rem",
            }}
          >
            Browse our landscaping services and choose the support that best
            fits your outdoor space, property goals, and maintenance needs.
          </p>
        </div>

        <div style={gridStyle}>
          {services.map((s) => (
            <article key={s.title} style={cardStyle}>
              <div
                style={{
                  padding: "14px",
                }}
              >
                <img
                  src={s.image}
                  alt={`${s.title} service`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "210px",
                    objectFit: "cover",
                    borderRadius: "18px",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "6px 18px 22px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "4px",
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #2d1b2a, #d8b4fe)",
                    marginBottom: "14px",
                  }}
                />

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: "1.2rem",
                    color: "#2d1b2a",
                    fontWeight: "900",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#645c68",
                    lineHeight: "1.7",
                    fontSize: "0.97rem",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div style={ctaStyle} className="services-cta-grid">
          <div>
            <p
              style={{
                margin: "0 0 8px",
                color: "#b48ad9",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.84rem",
              }}
            >
              Next Step
            </p>

            <h3
              style={{
                margin: "0 0 10px",
                color: "#2d1b2a",
                fontSize: "clamp(1.6rem, 2.5vw, 2.3rem)",
                fontWeight: "900",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to upgrade your outdoor space?
            </h3>

            <p
              style={{
                margin: 0,
                color: "#6a6270",
                lineHeight: "1.75",
                maxWidth: "620px",
              }}
            >
              Book a consultation online or call directly to get started with a
              quote and service recommendations.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="tel:123456789"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #2d1b2a, #4b2c45)",
                color: "#fff",
                fontWeight: "900",
                boxShadow: "0 14px 30px rgba(45,27,42,0.18)",
              }}
            >
              Call Now
            </a>

            <Link
              to="/booking"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 22px",
                borderRadius: "16px",
                background: "#ffffff",
                color: "#2d1b2a",
                fontWeight: "900",
                border: "1px solid rgba(25,20,30,0.08)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .services-hero-grid {
              grid-template-columns: 1fr !important;
            }

            .services-cta-grid {
              grid-template-columns: 1fr !important;
            }

            .services-cta-grid div:last-child {
              justify-content: flex-start !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}