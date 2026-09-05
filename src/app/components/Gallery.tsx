"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// ============================================================
// Gallery images – replace src paths with your actual photos
// Place your photos in public/images/gallery/
// ============================================================
const galleryImages = [
  { src: "/images/gallery/photo-1.jpg", alt: "Couple photo 1" },
  { src: "/images/gallery/photo-2.jpg", alt: "Couple photo 2" },
  { src: "/images/gallery/photo-3.jpg", alt: "Couple photo 3" },
  { src: "/images/gallery/photo-4.jpg", alt: "Couple photo 4" },
  { src: "/images/gallery/photo-5.jpg", alt: "Couple photo 5" },
  { src: "/images/gallery/photo-6.jpg", alt: "Couple photo 6" },
  { src: "/images/gallery/photo-7.jpg", alt: "Couple photo 7" },
  { src: "/images/gallery/photo-8.jpg", alt: "Couple photo 8" },
];
// ============================================================

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, closeLightbox, prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        style={{
          background: "#2C2C2C",
          padding: "6rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background subtle pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(201,130,107,0.06) 0%, transparent 40%),
                              radial-gradient(circle at 80% 80%, rgba(201,169,110,0.04) 0%, transparent 40%)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
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
            <span
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
              Our Moments
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#FAF7F2",
              }}
            >
              Photo Gallery
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
                marginTop: "1.5rem",
              }}
            >
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #C9826B)" }} />
              <div style={{ width: "6px", height: "6px", background: "#C9826B", transform: "rotate(45deg)" }} />
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #C9826B)" }} />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`gallery-item reveal ${visible ? "visible" : ""}`}
                style={{
                  transitionDelay: `${(idx % 4) * 0.1}s`,
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: idx % 3 === 0 ? "3/4" : "4/3",
                  background: "linear-gradient(135deg, #3d3430, #2C2C2C)",
                  display: "block",
                  width: "100%",
                }}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Placeholder pattern */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 0,
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "2rem",
                      color: "rgba(201,130,107,0.3)",
                    }}
                  >
                    R & M
                  </div>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(201,130,107,0.2)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Photo {idx + 1}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="gallery-hover">
                  <ZoomIn size={28} color="white" strokeWidth={1.5} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s ease",
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s ease",
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="lightbox-img"
              style={{ objectFit: "contain" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Placeholder when image fails */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "300px",
                minHeight: "200px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "0.5rem",
                flexDirection: "column",
                gap: "0.5rem",
                position: "absolute",
                inset: 0,
                zIndex: -1,
              }}
            >
              <div
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "3rem",
                  color: "rgba(201,130,107,0.5)",
                }}
              >
                R & M
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
                Photo {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s ease",
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
            }}
          >
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          align-items: start;
        }

        .gallery-item .gallery-hover {
          position: absolute;
          inset: 0;
          background: rgba(44, 44, 44, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .gallery-item:hover .gallery-hover {
          opacity: 1;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
