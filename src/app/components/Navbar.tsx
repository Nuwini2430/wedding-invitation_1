"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Details", href: "#details" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(250, 247, 242, 0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#2C2C2C",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            R <span style={{ color: "#C9826B", fontFamily: "'Great Vibes', cursive", fontSize: "1.6rem" }}>&</span> M
          </button>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#2C2C2C",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: "0.25rem 0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#C9826B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#2C2C2C")
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2C2C2C",
              display: "none",
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "rgba(250, 247, 242, 0.98)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-20px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="mobile-menu"
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#2C2C2C",
          }}
        >
          <X size={28} />
        </button>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.6rem",
            color: "#C9826B",
            marginBottom: "1rem",
          }}
        >
          Ravindu & Minuri
        </div>

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2rem",
              fontWeight: 500,
              color: "#2C2C2C",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#C9826B")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#2C2C2C")
            }
          >
            {link.label}
          </button>
        ))}

        <div
          style={{
            marginTop: "1.5rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#C9826B",
            textTransform: "uppercase",
          }}
        >
          21 October 2026
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
