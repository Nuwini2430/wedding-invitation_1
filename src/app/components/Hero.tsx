"use client";

import Image from "next/image";

// SVG Botanical decorations
const BotanicalLeft = () => (
  <svg
    viewBox="0 0 200 400"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
    fill="none"
  >
    <path d="M100 380 Q80 300 60 240 Q40 180 80 140 Q100 120 100 100" stroke="#C9826B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M100 280 Q60 260 40 230 Q20 200 50 180" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <path d="M90 320 Q50 310 30 290 Q10 270 40 250" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M95 240 Q130 220 140 190 Q150 160 130 150" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <circle cx="50" cy="178" r="4" fill="#C9826B" opacity="0.3"/>
    <circle cx="30" cy="248" r="3" fill="#C9826B" opacity="0.25"/>
    <circle cx="140" cy="148" r="4" fill="#C9826B" opacity="0.3"/>
    <path d="M85 180 Q70 165 75 145 Q80 130 95 135" stroke="#C9826B" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
    <path d="M60 230 Q45 215 55 198 Q65 185 78 192" stroke="#C9826B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

const BotanicalRight = () => (
  <svg
    viewBox="0 0 200 400"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
    fill="none"
  >
    <path d="M100 380 Q120 300 140 240 Q160 180 120 140 Q100 120 100 100" stroke="#C9826B" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M100 280 Q140 260 160 230 Q180 200 150 180" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <path d="M110 320 Q150 310 170 290 Q190 270 160 250" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M105 240 Q70 220 60 190 Q50 160 70 150" stroke="#C9826B" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <circle cx="150" cy="178" r="4" fill="#C9826B" opacity="0.3"/>
    <circle cx="170" cy="248" r="3" fill="#C9826B" opacity="0.25"/>
    <circle cx="60" cy="148" r="4" fill="#C9826B" opacity="0.3"/>
    <path d="M115 180 Q130 165 125 145 Q120 130 105 135" stroke="#C9826B" strokeWidth="0.8" strokeLinecap="round" opacity="0.3"/>
    <path d="M140 230 Q155 215 145 198 Q135 185 122 192" stroke="#C9826B" strokeWidth="0.8" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #FAF7F2 0%, #F5E6E0 50%, #FAF7F2 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(201,130,107,0.06) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 70%, rgba(201,130,107,0.06) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="hero-grid">
          {/* Left: Text content */}
          <div
            className="hero-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1.5rem",
            }}
          >
            {/* Pre-heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                animation: "fadeInUp 0.8s ease 0.1s both",
              }}
            >
              <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, #C9826B)" }} />
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
                Wedding Invitation
              </span>
              <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, #C9826B)" }} />
            </div>

            {/* Couple names */}
            <div style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                  fontWeight: 600,
                  color: "#2C2C2C",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                Ravindu
              </h1>
              <div
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  color: "#C9826B",
                  lineHeight: 1.3,
                  margin: "0.25rem 0",
                }}
              >
                &
              </div>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                  fontWeight: 600,
                  color: "#2C2C2C",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                Minuri
              </h1>
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                animation: "fadeInUp 0.8s ease 0.3s both",
              }}
            >
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#C9A96E",
                  transform: "rotate(45deg)",
                }}
              />
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
            </div>

            {/* Date */}
            <div style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#C9826B",
                }}
              >
                21 October 2026
              </p>
            </div>

            {/* Venue & Time */}
            <div
              style={{
                animation: "fadeInUp 0.8s ease 0.5s both",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(201,130,107,0.2)",
                borderRadius: "50px",
                padding: "0.6rem 1.5rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "#5a5a5a",
                  letterSpacing: "0.08em",
                }}
              >
                River Bank Hotel &nbsp;|&nbsp; 5:00 PM – 11:30 PM
              </p>
            </div>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                animation: "fadeInUp 0.8s ease 0.6s both",
              }}
            >
              <button
                onClick={() => scrollToSection("#rsvp")}
                className="btn-primary"
              >
                RSVP Now
              </button>
              <button
                onClick={() => scrollToSection("#details")}
                className="btn-outline"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Right: Couple photo */}
          <div
            className="hero-image-container"
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {/* Botanical left decoration */}
            <div
              className="botanical-left"
              style={{
                position: "absolute",
                left: "-30px",
                top: "10%",
                width: "100px",
                height: "300px",
                opacity: 0.7,
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <BotanicalLeft />
            </div>

            {/* Botanical right decoration */}
            <div
              className="botanical-right"
              style={{
                position: "absolute",
                right: "-30px",
                top: "10%",
                width: "100px",
                height: "300px",
                opacity: 0.7,
                animation: "float 5s ease-in-out 1s infinite",
              }}
            >
              <BotanicalRight />
            </div>

            {/* Gold ring accent */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "520px",
                borderRadius: "60% 40% 60% 40% / 50% 60% 40% 50%",
                border: "1px solid rgba(201,169,110,0.25)",
                animation: "float 6s ease-in-out 0.5s infinite",
              }}
            />

            {/* Main photo frame */}
            <div
              style={{
                position: "relative",
                width: "340px",
                height: "450px",
                borderRadius: "50% 40% 55% 45% / 45% 55% 45% 55%",
                overflow: "hidden",
                border: "3px solid rgba(201,169,110,0.3)",
                boxShadow:
                  "0 30px 60px rgba(201,130,107,0.2), 0 10px 30px rgba(0,0,0,0.1), inset 0 0 0 6px rgba(255,255,255,0.5)",
                animation: "scaleIn 1s ease 0.3s both",
                background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
              }}
            >
              <Image
                src="/images/couple.jpg"
                alt="Ravindu Dilshan and Minuri Laknadi"
                fill
                sizes="(max-width: 768px) 300px, 340px"
                style={{ objectFit: "cover" }}
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Placeholder shown when no image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
                  zIndex: -1,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "3rem",
                    color: "#C9826B",
                    opacity: 0.5,
                  }}
                >
                  R & M
                </div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    color: "#C9826B",
                    opacity: 0.6,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Couple Photo
                </p>
              </div>
            </div>

            {/* Small decorative ring */}
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                right: "30px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1px solid rgba(201,130,107,0.3)",
                background: "rgba(255,255,255,0.5)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(201,130,107,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "1.5rem",
                  color: "#C9826B",
                }}
              >
                ♡
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "fadeIn 1s ease 1s both",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "#C9826B",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #C9826B, transparent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 80vh;
        }
        
        .hero-text {
          order: 1;
        }
        
        .hero-image-container {
          order: 2;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-image-container {
            order: 1;
          }
          .hero-text {
            order: 2;
          }
          .botanical-left, .botanical-right {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-image-container > div:nth-child(4) {
            width: 260px !important;
            height: 340px !important;
          }
          .hero-image-container > div:nth-child(3) {
            width: 320px !important;
            height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}
