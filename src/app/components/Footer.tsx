"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#2C2C2C",
        padding: "5rem 1.5rem 2.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(201,130,107,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top botanical accent */}
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
        fill="none"
      >
        <path d="M0 40 Q200 10 400 40 Q600 70 800 35 Q1000 10 1200 40" stroke="#C9826B" strokeWidth="1"/>
        <circle cx="400" cy="40" r="3" fill="#C9826B"/>
        <circle cx="800" cy="35" r="3" fill="#C9826B"/>
      </svg>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            background: "rgba(201,130,107,0.15)",
            border: "1px solid rgba(201,130,107,0.3)",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            margin: "0 auto 3rem",
            transition: "all 0.3s ease",
            color: "#C9826B",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,130,107,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,130,107,0.15)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        {/* Names */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#FAF7F2",
              lineHeight: 0.95,
            }}
          >
            Ravindu Dilshan
          </h2>
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#C9826B",
              margin: "0.25rem 0",
              lineHeight: 1.3,
            }}
          >
            &
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#FAF7F2",
              lineHeight: 0.95,
            }}
          >
            Minuri Laknadi
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "1.5rem 0",
          }}
        >
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #C9826B)" }} />
          <div style={{ width: "5px", height: "5px", background: "#C9826B", transform: "rotate(45deg)" }} />
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #C9826B)" }} />
        </div>

        {/* Date */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9826B",
            marginBottom: "2rem",
          }}
        >
          21 October 2026
        </p>

        {/* Thank you */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            color: "rgba(250,247,242,0.7)",
            fontStyle: "italic",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          &ldquo;Thank you for being part of our special day.&rdquo;
        </p>

        {/* Contact */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          <Phone size={14} color="#C9826B" strokeWidth={1.5} />
          <a
            href="tel:+94719050210"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(250,247,242,0.6)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#C9826B")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(250,247,242,0.6)")}
          >
            071 905 02 10
          </a>
        </div>

        {/* Bottom line */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(250,247,242,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            River Bank Hotel · Wednesday, 21 October 2026 · 5:00 PM – 11:30 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
