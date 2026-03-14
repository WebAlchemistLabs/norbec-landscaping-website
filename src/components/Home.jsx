import { Link } from "react-router-dom";

function Stars({ count = 5 }) {
  return (
    <div
      aria-label={`${count} out of 5 stars`}
      style={{
        display: "flex",
        gap: 4,
        alignItems: "center",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            color: "#d7a85a",
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ name, feedback }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 22,
        padding: 24,
        boxShadow: "0 12px 30px rgba(43, 22, 52, 0.08)",
        border: "1px solid rgba(88, 57, 95, 0.08)",
      }}
    >
      <Stars count={5} />

      <p
        style={{
          marginTop: 16,
          marginBottom: 18,
          color: "#5c4f61",
          lineHeight: 1.8,
          fontSize: 15,
        }}
      >
        “{feedback}”
      </p>

      <div
        style={{
          fontWeight: 800,
          color: "#3f2747",
          fontSize: 16,
        }}
      >
        {name}
      </div>

      <div
        style={{
          marginTop: 4,
          fontSize: 12,
          color: "#8a7f90",
        }}
      >
        Verified Client
      </div>
    </div>
  );
}

function ServiceCard({ title, icon }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 12px 28px rgba(43, 22, 52, 0.08)",
        border: "1px solid rgba(88, 57, 95, 0.08)",
      }}
    >
      <div style={{ height: 190, overflow: "hidden" }}>
        <img
          src={icon}
          alt={title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div style={{ padding: 20 }}>
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: 20,
            color: "#3f2747",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "#6e6273",
            lineHeight: 1.7,
            fontSize: 14.5,
          }}
        >
          Professional landscaping service with a clean finish and dependable
          results.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const services = [
    { title: "Lawn Mowing", icon: "/mowing.jpg" },
    { title: "Garden Care", icon: "/garden.png" },
    { title: "Spring Clean Up", icon: "/cleanup.png" },
    { title: "Pressure Washing", icon: "/pressure.png" },
    { title: "Custom Garden", icon: "/custom.png" },
    { title: "Mulch & Soil", icon: "/mulch.png" },
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      feedback:
        "NorBec Landscaping transformed my backyard into a beautiful, polished space. The team was professional and efficient.",
    },
    {
      name: "Mark R.",
      feedback:
        "Very reliable service and great attention to detail. My lawn and garden looked noticeably better right away.",
    },
    {
      name: "Emily W.",
      feedback:
        "Excellent communication, clean work, and strong results. I would definitely recommend NorBec to others.",
    },
  ];

  return (
    <div style={{ background: "#f4eff6" }}>
      {/* HERO */}
      <section
        style={{
          padding: "120px 20px",
          background:
            "linear-gradient(135deg, rgba(57, 30, 68, 0.42), rgba(99, 59, 105, 0.32)), url('/home.png') center/cover no-repeat",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "rgba(110,110,120,0.50)",
            backdropFilter: "blur(12px)",
            borderRadius: 28,
            padding: "60px 40px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 50px rgba(26, 10, 31, 0.18)",
          }}
        >
          <div
            style={{
              color: "#ffd8bf",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            NorBec Landscaping Services
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 5vw, 4.8rem)",
              lineHeight: 1.05,
              color: "#fffdfc",
              fontWeight: 900,
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
              margin: "24px auto 0",
              maxWidth: 760,
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            We offer landscaping services that keep your property neat,
            attractive, and professionally maintained — from regular upkeep to
            larger outdoor upgrades.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 30,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:123456789"
              style={{
                textDecoration: "none",
                background: "#ffffff",
                color: "#2d1d32",
                padding: "14px 22px",
                borderRadius: 14,
                fontWeight: 800,
                boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
              }}
            >
              Call Now
            </a>

            <Link
              to="/booking"
              style={{
                textDecoration: "none",
                background: "#4b2f56",
                color: "#fff",
                padding: "14px 22px",
                borderRadius: 14,
                fontWeight: 800,
                boxShadow: "0 10px 22px rgba(0,0,0,0.14)",
              }}
            >
              Book a Consultation
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 28,
            }}
          >
            {["Residential Focus", "Professional Finish", "Reliable Service"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 18px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#fff4ee",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <h2
              style={{
                margin: 0,
                color: "#3f2747",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.12,
              }}
            >
              Services built to upgrade the look of your property
            </h2>

            <p
              style={{
                margin: "14px auto 0",
                maxWidth: 720,
                color: "#6e6273",
                lineHeight: 1.8,
              }}
            >
              Show your most in-demand services first so visitors instantly know
              what you offer.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 22,
            }}
          >
            {services.slice(0, 5).map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                display: "inline-block",
                background: "#4b2f56",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: 14,
                fontWeight: 800,
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        style={{
          padding: "80px 20px 40px",
          background: "#eee6f0",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                color: "#3f2747",
              }}
            >
              What clients are saying
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {testimonials.map((item) => (
              <ReviewCard
                key={item.name}
                name={item.name}
                feedback={item.feedback}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}