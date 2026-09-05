"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function OurStory() {
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
      id="our-story"
      ref={ref}
      style={{
        background: "#FAF7F2",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(201,130,107,0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          left: "-80px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(201,130,107,0.08)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="story-grid">
          {/* Image side */}
          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
              }}
            >
              {/* Main image */}
              <div
                style={{
                  borderRadius: "2rem 5rem 2rem 5rem",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  position: "relative",
                  boxShadow: "0 20px 60px rgba(201,130,107,0.2), 0 8px 24px rgba(0,0,0,0.08)",
                  border: "2px solid rgba(201,169,110,0.2)",
                  background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
                }}
              >
                <Image
                  src="/images/story.jpg"
                  alt="Our Love Story"
                  fill
                  sizes="(max-width: 768px) 300px, 360px"
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Placeholder */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: -1,
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "3rem",
                      color: "#C9826B",
                      opacity: 0.4,
                    }}
                  >
                    Our Story
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  background: "white",
                  borderRadius: "1rem",
                  padding: "1rem 1.5rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(201,130,107,0.15)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "1.8rem",
                    color: "#C9826B",
                    lineHeight: 1,
                  }}
                >
                  Forever
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    color: "#5a5a5a",
                    marginTop: "0.25rem",
                  }}
                >
                  & ALWAYS
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C9826B",
              }}
            >
              Our Story
            </span>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 500,
                color: "#2C2C2C",
                lineHeight: 1.2,
              }}
            >
              Two Hearts,
              <br />
              <em style={{ fontStyle: "italic", color: "#C9826B" }}>One Beautiful Journey</em>
            </h2>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  height: "1px",
                  width: "50px",
                  background: "linear-gradient(to right, #C9826B, transparent)",
                }}
              />
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#C9826B",
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Story text — keep editable */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.25rem",
                lineHeight: 1.8,
                color: "#5a5a5a",
                fontStyle: "italic",
                borderLeft: "2px solid rgba(201,130,107,0.3)",
                paddingLeft: "1.5rem",
              }}
            >
              &ldquo;Two hearts, one beautiful journey.
              We are delighted to celebrate this special moment surrounded
              by the people we love.&rdquo;
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#5a5a5a",
              }}
            >
              With hearts full of joy and gratitude, we invite you to join us
              as we begin this wonderful new chapter together. Your presence
              will make our celebration truly complete.
            </p>

            {/* Decorative hearts */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginTop: "0.5rem",
              }}
            >
              {["❤", "❤", "❤"].map((h, i) => (
                <span
                  key={i}
                  style={{
                    color: "#C9826B",
                    opacity: 0.3 + i * 0.25,
                    fontSize: "0.8rem",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
}
