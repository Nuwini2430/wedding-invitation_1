"use client";

import { useState, useEffect, useRef } from "react";

// Wedding date: 21 October 2026
const WEDDING_DATE = new Date("2026-10-21T17:00:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [weddingDay, setWeddingDay] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calc = () => {
      const now = Date.now();
      const diff = WEDDING_DATE - now;
      if (diff <= 0) {
        setWeddingDay(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #2C2C2C 0%, #3d3430 50%, #2C2C2C 100%)",
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 25% 50%, rgba(201,130,107,0.08) 0%, transparent 50%), 
                            radial-gradient(circle at 75% 50%, rgba(201,169,110,0.06) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      {/* Botanical accent top */}
      <svg
        viewBox="0 0 800 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          opacity: 0.15,
        }}
        fill="none"
      >
        <path d="M0 60 Q100 20 200 50 Q300 80 400 40 Q500 10 600 50 Q700 80 800 40" stroke="#C9826B" strokeWidth="1" />
        <path d="M0 80 Q150 40 300 70 Q450 100 600 60 Q700 40 800 70" stroke="#C9826B" strokeWidth="0.5" />
      </svg>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Tag */}
        <span
          className={`reveal ${visible ? "visible" : ""} reveal-delay-1`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C9826B",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          Counting Down
        </span>

        <h2
          className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#FAF7F2",
            marginBottom: "3rem",
          }}
        >
          Until We Celebrate Together
        </h2>

        {weddingDay ? (
          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#C9826B",
              fontStyle: "italic",
            }}
          >
            Today is the day! ❤️
          </div>
        ) : (
          <div
            className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(1rem, 3vw, 2.5rem)",
              flexWrap: "wrap",
            }}
          >
            {units.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {/* Number box */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(201,130,107,0.3)",
                    borderRadius: "1rem",
                    padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.25rem, 3.5vw, 2rem)",
                    minWidth: "clamp(70px, 15vw, 110px)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    key={value}
                    className="countdown-num"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(2.5rem, 6vw, 4rem)",
                      fontWeight: 600,
                      color: "#FAF7F2",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {pad(value)}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C9A96E",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Date reminder */}
        <p
          className={`reveal ${visible ? "visible" : ""} reveal-delay-4`}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "rgba(250,247,242,0.5)",
            marginTop: "3rem",
            fontStyle: "italic",
          }}
        >
          Wednesday, 21 October 2026 · River Bank Hotel
        </p>
      </div>
    </section>
  );
}
