"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #FAF7F2 0%, #F5E6E0 50%, #FAF7F2 100%)",
        padding: "7rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Botanical background decorations */}
      <svg
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
        fill="none"
      >
        {/* Left botanical */}
        <path d="M50 350 Q80 280 120 220 Q160 160 130 100 Q110 70 90 80" stroke="#C9826B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M110 220 Q70 200 50 170 Q30 145 60 130" stroke="#C9826B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M120 260 Q80 240 60 210" stroke="#C9826B" strokeWidth="1" strokeLinecap="round"/>
        <path d="M100 180 Q140 160 145 130 Q148 110 130 100" stroke="#C9826B" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="50" cy="130" r="5" fill="#C9826B"/>
        <circle cx="145" cy="130" r="4" fill="#C9826B"/>
        <path d="M85 155 Q65 140 70 118 Q75 100 90 108" stroke="#C9826B" strokeWidth="1" strokeLinecap="round"/>

        {/* Right botanical */}
        <path d="M1150 350 Q1120 280 1080 220 Q1040 160 1070 100 Q1090 70 1110 80" stroke="#C9826B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M1090 220 Q1130 200 1150 170 Q1170 145 1140 130" stroke="#C9826B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M1080 260 Q1120 240 1140 210" stroke="#C9826B" strokeWidth="1" strokeLinecap="round"/>
        <path d="M1100 180 Q1060 160 1055 130 Q1052 110 1070 100" stroke="#C9826B" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="1150" cy="130" r="5" fill="#C9826B"/>
        <circle cx="1055" cy="130" r="4" fill="#C9826B"/>

        {/* Bottom wave */}
        <path d="M0 380 Q150 340 300 370 Q450 400 600 360 Q750 320 900 370 Q1050 410 1200 380" stroke="#C9826B" strokeWidth="1"/>
      </svg>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Opening quote mark */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "8rem",
            color: "#C9826B",
            opacity: 0.15,
            lineHeight: 0.7,
            marginBottom: "-1rem",
            userSelect: "none",
          }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote
          className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#2C2C2C",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}
          >
            Two hearts, one journey,
            <br />
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.4em",
                fontStyle: "normal",
                color: "#C9826B",
                fontWeight: 400,
              }}
            >
              a lifetime of love.
            </span>
          </p>
        </blockquote>

        {/* Divider */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "2.5rem 0",
          }}
        >
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
          <span style={{ color: "#C9A96E", fontSize: "0.8rem" }}>♦</span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
        </div>

        {/* Couple names */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              color: "#9a9a9a",
              fontStyle: "italic",
              letterSpacing: "0.05em",
            }}
          >
            — Ravindu Dilshan & Minuri Laknadi
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.65rem",
              color: "#C9826B",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginTop: "0.5rem",
            }}
          >
            21 October 2026
          </p>
        </div>
      </div>
    </section>
  );
}
