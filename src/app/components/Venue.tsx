"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

// ============================================================
// TODO: Replace MAPS_URL with the exact Google Maps link
// ============================================================
const MAPS_URL = "https://maps.google.com/?q=River+Bank+Hotel";
// ============================================================

export default function Venue() {
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
        background: "#FAF7F2",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(201,130,107,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(201,130,107,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Tag */}
        <span
          className={`reveal ${visible ? "visible" : ""} section-tag`}
        >
          Location
        </span>

        {/* Heading */}
        <h2
          className={`reveal ${visible ? "visible" : ""} reveal-delay-1 section-title`}
          style={{ marginBottom: "1.5rem" }}
        >
          Celebrate With Us
        </h2>

        {/* Divider */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-2 divider`}
        >
          <div className="divider-line" />
          <div className="divider-diamond" />
          <div className="divider-line" />
        </div>

        {/* Venue card */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
          style={{
            background: "white",
            borderRadius: "2rem",
            padding: "3rem 2rem",
            boxShadow: "0 20px 60px rgba(201,130,107,0.12), 0 4px 16px rgba(0,0,0,0.04)",
            border: "1px solid rgba(201,130,107,0.12)",
            marginTop: "2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "3px",
              background: "linear-gradient(to right, transparent, #C9826B, transparent)",
            }}
          />

          {/* Venue icon */}
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              border: "2px solid rgba(201,130,107,0.15)",
              boxShadow: "0 4px 16px rgba(201,130,107,0.2)",
            }}
          >
            <MapPin size={28} color="#C9826B" strokeWidth={1.5} />
          </div>

          {/* Venue name */}
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 600,
              color: "#2C2C2C",
              marginBottom: "0.75rem",
            }}
          >
            River Bank Hotel
          </h3>

          {/* Date */}
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#C9826B",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Wednesday, 21 October 2026
          </p>

          {/* Time */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              color: "#5a5a5a",
              fontStyle: "italic",
              marginBottom: "2.5rem",
            }}
          >
            5:00 PM – 11:30 PM
          </p>

          {/* CTA */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <MapPin size={16} />
            View Location
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Invitation note */}
        <p
          className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "#9a9a9a",
            fontStyle: "italic",
            marginTop: "2.5rem",
          }}
        >
          We look forward to celebrating with you
        </p>
      </div>
    </section>
  );
}
