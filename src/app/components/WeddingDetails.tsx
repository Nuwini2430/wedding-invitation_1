"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const details = [
  {
    icon: Calendar,
    title: "Date",
    lines: ["Wednesday", "21 October 2026"],
  },
  {
    icon: Clock,
    title: "Time",
    lines: ["5:00 PM", "to", "11:30 PM"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["River Bank Hotel"],
  },
  {
    icon: Phone,
    title: "Contact",
    lines: ["071 905 02 10"],
  },
];

export default function WeddingDetails() {
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
      id="details"
      ref={ref}
      style={{
        background: "#F5E6E0",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <svg
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          opacity: 0.15,
          transform: "rotate(180deg)",
        }}
        fill="none"
      >
        <path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60"
          stroke="#C9826B"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div
        style={{
          maxWidth: "1100px",
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
          <span className="section-tag">Wedding Details</span>
          <h2 className="section-title">Event Information</h2>

          <div className="divider" style={{ marginTop: "1.5rem" }}>
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="details-grid">
          {details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className={`card reveal ${visible ? "visible" : ""} reveal-delay-${idx + 1}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1.25rem",
                  background: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gold top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "2px",
                    background: "linear-gradient(to right, transparent, #C9A96E, transparent)",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(201,130,107,0.2)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="#C9826B" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#C9826B",
                  }}
                >
                  {detail.title}
                </span>

                {/* Lines */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {detail.lines.map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily:
                          i === 0 && detail.lines.length > 1
                            ? "'Cormorant Garamond', serif"
                            : i === 0 ? "'Cormorant Garamond', serif" : "'Montserrat', sans-serif",
                        fontSize:
                          line === "to" ? "0.8rem" : i === 0 ? "1.3rem" : "1.1rem",
                        fontWeight: i === 0 ? 600 : 400,
                        color: line === "to" ? "#9a9a9a" : "#2C2C2C",
                        lineHeight: 1.4,
                        fontStyle: line === "to" ? "italic" : "normal",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
