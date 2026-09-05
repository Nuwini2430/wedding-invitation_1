"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, XCircle, Send } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  guests: string;
  attendance: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  guests?: string;
  attendance?: string;
}

// ============================================================
// Connect to your backend here.
// Replace the submitRSVP function body with your API call.
// ============================================================
async function submitRSVP(data: FormData): Promise<{ success: boolean }> {
  // Example: return fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(data), headers: {'Content-Type': 'application/json'} }).then(r => r.json())
  console.log("RSVP submitted:", data);
  await new Promise((r) => setTimeout(r, 1200));
  return { success: true };
}
// ============================================================

export default function RSVP() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    guests: "",
    attendance: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your full name.";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number.";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Please enter a valid phone number.";
    if (!form.guests) newErrors.guests = "Please select number of guests.";
    if (!form.attendance) newErrors.attendance = "Please select your attendance.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitRSVP(form);
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
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
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,130,107,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-tag">Join Us</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            RSVP
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              color: "#5a5a5a",
              fontStyle: "italic",
            }}
          >
            We would be delighted to celebrate this special day with you.
          </p>

          <div className="divider" style={{ marginTop: "1.5rem" }}>
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>
        </div>

        {submitted ? (
          /* Success state */
          <div
            className={`reveal ${visible ? "visible" : ""}`}
            style={{
              background: "white",
              borderRadius: "2rem",
              padding: "4rem 2rem",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(201,130,107,0.12)",
              border: "1px solid rgba(201,130,107,0.12)",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F5E6E0, #EDD5CB)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <CheckCircle size={40} color="#C9826B" strokeWidth={1.5} />
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 600,
                color: "#2C2C2C",
                marginBottom: "1rem",
              }}
            >
              Thank You!
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                color: "#5a5a5a",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              Your RSVP has been received.
              <br />
              We look forward to celebrating with you!
            </p>
            <div
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "2rem",
                color: "#C9826B",
                marginTop: "1.5rem",
              }}
            >
              Ravindu & Minuri ♡
            </div>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}
            style={{
              background: "white",
              borderRadius: "2rem",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 20px 60px rgba(201,130,107,0.12)",
              border: "1px solid rgba(201,130,107,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
            noValidate
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "2px",
                background: "linear-gradient(to right, transparent, #C9826B, transparent)",
              }}
            />

            <div
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {/* Name */}
              <div>
                <label htmlFor="rsvp-name" className="form-label">
                  Full Name <span style={{ color: "#C9826B" }}>*</span>
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`form-input${errors.name ? " error" : ""}`}
                />
                {errors.name && (
                  <p className="form-error">
                    <XCircle size={12} style={{ display: "inline", marginRight: "4px" }} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="rsvp-phone" className="form-label">
                  Phone Number <span style={{ color: "#C9826B" }}>*</span>
                </label>
                <input
                  id="rsvp-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 071 234 5678"
                  className={`form-input${errors.phone ? " error" : ""}`}
                />
                {errors.phone && (
                  <p className="form-error">
                    <XCircle size={12} style={{ display: "inline", marginRight: "4px" }} />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Guests + Attendance row */}
              <div className="rsvp-row">
                {/* Number of guests */}
                <div>
                  <label htmlFor="rsvp-guests" className="form-label">
                    Number of Guests <span style={{ color: "#C9826B" }}>*</span>
                  </label>
                  <select
                    id="rsvp-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`form-input${errors.guests ? " error" : ""}`}
                  >
                    <option value="">Select...</option>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="form-error">
                      <XCircle size={12} style={{ display: "inline", marginRight: "4px" }} />
                      {errors.guests}
                    </p>
                  )}
                </div>

                {/* Attendance */}
                <div>
                  <label className="form-label">
                    Attendance <span style={{ color: "#C9826B" }}>*</span>
                  </label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {[
                      { value: "yes", label: "Yes, I will attend" },
                      { value: "no", label: "Sorry, I can't attend" },
                    ].map(({ value, label }) => (
                      <label
                        key={value}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          cursor: "pointer",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.85rem",
                          color: "#2C2C2C",
                          padding: "0.6rem 0.8rem",
                          borderRadius: "0.4rem",
                          border: `1.5px solid ${form.attendance === value ? "#C9826B" : "#EDD5CB"}`,
                          transition: "all 0.2s ease",
                          background: form.attendance === value ? "rgba(201,130,107,0.06)" : "transparent",
                        }}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value={value}
                          checked={form.attendance === value}
                          onChange={handleChange}
                          style={{ accentColor: "#C9826B" }}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                  {errors.attendance && (
                    <p className="form-error">
                      <XCircle size={12} style={{ display: "inline", marginRight: "4px" }} />
                      {errors.attendance}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="rsvp-message" className="form-label">
                  Message (Optional)
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave a warm message for the couple..."
                  rows={4}
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: submitting ? 0.75 : 1,
                  cursor: submitting ? "not-allowed" : "pointer",
                  fontSize: "0.8rem",
                  padding: "1rem",
                }}
              >
                {submitting ? (
                  <>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderTopColor: "white",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Confirm RSVP
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .rsvp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          .rsvp-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
