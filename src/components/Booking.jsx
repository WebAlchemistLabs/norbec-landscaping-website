import { InlineWidget } from "react-calendly";

export default function Booking() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 20px",
        background: "#f4f1f6",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <h1
            style={{
              fontSize: "2.8rem",
              marginBottom: "20px",
              color: "#2D1B2A",
              fontWeight: "800",
            }}
          >
            Book Your Landscaping Estimate
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              marginBottom: "30px",
              color: "#555",
            }}
          >
            Schedule a free consultation and we’ll review your property,
            discuss your landscaping ideas, and provide a professional estimate.
          </p>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <p style={{ marginBottom: "10px", fontWeight: "600", color: "#2D1B2A" }}>
              ✔ Free estimate
            </p>
            <p style={{ marginBottom: "10px", fontWeight: "600", color: "#2D1B2A" }}>
              ✔ Professional landscaping consultation
            </p>
            <p style={{ fontWeight: "600", color: "#2D1B2A" }}>
              ✔ Flexible scheduling
            </p>
          </div>
        </div>

        {/* CALENDLY CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <InlineWidget
            url="https://calendly.com/webalchemistlabs/norbec-landscaping-estimate"
            styles={{ height: "750px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}