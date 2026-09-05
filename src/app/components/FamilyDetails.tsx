"use client";

import { useEffect, useRef, useState } from "react";

export default function FamilyDetails() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #F5E6E0 0%, #FAF7F2 50%, #F5E6E0 100%)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Botanical decorations */}
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
        fill="none"
      >
        <path d="M0 100 Q100 40 200 80 Q300 120 400 60 Q500 20 600 70 Q700 120 800 60 Q900 20 1000 80 Q1100 140 1200 80" stroke="#C9826B" strokeWidth="1"/>
        <circle cx="200" cy="80" r="3" fill="#C9826B" opacity="0.4"/>
        <circle cx="600" cy="70" r="3" fill="#C9826B" opacity="0.4"/>
        <circle cx="1000" cy="80" r="3" fill="#C9826B" opacity="0.4"/>
      </svg>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-tag">The Families</span>
          <h2 className="section-title">With Joy, We Invite You</h2>
          <div className="divider" style={{ marginTop: "1.5rem" }}>
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>

          {/* Invitation text */}
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{
              marginTop: "2.5rem",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              borderRadius: "1.5rem",
              padding: "2rem 2.5rem",
              border: "1px solid rgba(201,130,107,0.15)",
              maxWidth: "680px",
              margin: "2.5rem auto",
              boxShadow: "0 8px 30px rgba(201,130,107,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                color: "#5a5a5a",
                fontStyle: "italic",
                lineHeight: 1.9,
                textAlign: "center",
              }}
            >
              Request the honor of your presence
              <br />
              <span
                style={{
                  color: "#C9826B",
                  fontSize: "1.5em",
                  fontFamily: "'Great Vibes', cursive",
                  fontStyle: "normal",
                }}
              >
                ………………………
              </span>
              <br />
              <em>You / Both of You / Your Family</em>
              <br />
              To be part of the joy at our homecoming
            </p>
          </div>
        </div>

        {/* Family cards */}
        <div className="family-grid">
          {/* Groom's family */}
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{
              background: "white",
              borderRadius: "2rem",
              padding: "2.5rem 2rem",
              textAlign: "center",
              boxShadow: "0 12px 40px rgba(201,130,107,0.1)",
              border: "1px solid rgba(201,130,107,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(to right, transparent, #C9826B, transparent)",
              }}
            />

            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9826B",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Groom
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 600,
                color: "#2C2C2C",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              Ravindu Dilshan
            </h3>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ height: "1px", flex: 1, maxWidth: "60px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
              <span style={{ fontSize: "0.7rem", color: "#C9A96E" }}>♦</span>
              <div style={{ height: "1px", flex: 1, maxWidth: "60px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
            </div>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a9a9a",
                marginBottom: "0.5rem",
              }}
            >
              Son of
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                color: "#5a5a5a",
                fontStyle: "italic",
              }}
            >
              Mr. & Mrs. I.D. Chaminda
            </p>
          </div>

          {/* Center "&" */}
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "1px",
                height: "60px",
                background: "linear-gradient(to bottom, transparent, #C9826B)",
              }}
            />
            <div
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                color: "#C9826B",
                lineHeight: 1,
              }}
            >
              &
            </div>
            <div
              style={{
                width: "1px",
                height: "60px",
                background: "linear-gradient(to top, transparent, #C9826B)",
              }}
            />
          </div>

          {/* Bride's family */}
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
            style={{
              background: "white",
              borderRadius: "2rem",
              padding: "2.5rem 2rem",
              textAlign: "center",
              boxShadow: "0 12px 40px rgba(201,130,107,0.1)",
              border: "1px solid rgba(201,130,107,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(to right, transparent, #C9826B, transparent)",
              }}
            />

            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9826B",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Bride
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 600,
                color: "#2C2C2C",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              Minuri Laknadi
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ height: "1px", flex: 1, maxWidth: "60px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
              <span style={{ fontSize: "0.7rem", color: "#C9A96E" }}>♦</span>
              <div style={{ height: "1px", flex: 1, maxWidth: "60px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
            </div>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#9a9a9a",
                marginBottom: "0.5rem",
              }}
            >
              Daughter of
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                color: "#5a5a5a",
                fontStyle: "italic",
              }}
            >
              Mr. & Mrs. P. Sunil
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .family-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .family-grid {
            grid-template-columns: 1fr;
          }
          .family-grid > div:nth-child(2) {
            flex-direction: row !important;
          }
          .family-grid > div:nth-child(2) > div:first-child,
          .family-grid > div:nth-child(2) > div:last-child {
            width: 60px !important;
            height: 1px !important;
            background: linear-gradient(to right, transparent, #C9826B, transparent) !important;
          }
        }
      `}</style>
    </section>
  );
}
