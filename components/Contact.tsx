"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#080808",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#E8E4DC",
    fontSize: "14.5px",
    padding: "13px 16px",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "var(--font-dmsans), sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    color: "#4A4840",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 500,
    display: "block",
    marginBottom: "8px",
  };

  return (
    <>
      <section id="contact" style={{ padding: "120px 40px", background: "#080808" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "72px" }} className="contact-grid">

            {/* Left — info */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
                <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
                  Get In Touch
                </span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: "#E8E4DC",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "20px",
              }}>
                Let us Grow
                <br />
                <span style={{ color: "#BFA050", fontStyle: "italic" }}>Your Business</span>
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "#5A5650", lineHeight: 1.8, marginBottom: "52px", maxWidth: "480px" }}>
                Book a free 30-minute strategy call. We will audit your current digital presence,
                identify growth opportunities, and show you exactly how Korra can help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
                {[
                  { label: "Email", value: "hello@korraagency.com" },
                  { label: "WhatsApp", value: "+880 1XXX-XXXXXX" },
                  { label: "Location", value: "Dhaka, Bangladesh" },
                  { label: "Working Hours", value: "Sun – Thu, 9AM – 7PM" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{ fontSize: "11px", color: "#3A3830", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: "15px", color: "#8A8680" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p style={{ fontSize: "11px", color: "#3A3830", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>
                  Follow Us
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{
                        padding: "8px 16px",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#4A4840",
                        fontSize: "12px",
                        letterSpacing: "0.05em",
                        textDecoration: "none",
                        borderRadius: "6px",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.35)";
                        (e.currentTarget as HTMLElement).style.color = "#BFA050";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLElement).style.color = "#4A4840";
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{
              background: "#0C0C0C",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "48px",
            }}>
              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "48px 0" }}>
                  <div style={{
                    width: "60px", height: "60px",
                    borderRadius: "50%",
                    border: "1px solid rgba(191,160,80,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "24px",
                  }}>
                    <span style={{ color: "#BFA050", fontSize: "22px" }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", color: "#E8E4DC", marginBottom: "12px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "14.5px", color: "#5A5650", lineHeight: 1.75, maxWidth: "300px" }}>
                    Thank you for reaching out. We will get back to you within 24 hours with your free audit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      marginTop: "28px",
                      padding: "10px 24px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "transparent",
                      color: "#5A5650",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      borderRadius: "6px",
                      transition: "all 0.3s",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-cols">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="Your name" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        placeholder="your@email.com" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-cols">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>
                        <option value="">Select a service</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="photography">Photography & Cinematography</option>
                        <option value="meta-ads">Meta Ads</option>
                        <option value="branding">Brand Identity</option>
                        <option value="website">Website Design</option>
                        <option value="full-service">Full-Service Package</option>
                        <option value="other">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Monthly Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>
                      <option value="">Select budget range</option>
                      <option value="under-15k">Under ৳15,000</option>
                      <option value="15k-35k">৳15,000 – ৳35,000</option>
                      <option value="35k-75k">৳35,000 – ৳75,000</option>
                      <option value="above-75k">Above ৳75,000</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us About Your Business *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange}
                      rows={4} placeholder="What does your business do? What are your goals?"
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(191,160,80,0.45)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "16px",
                      background: "#BFA050",
                      color: "#080808",
                      fontWeight: 700,
                      fontSize: "12.5px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "none",
                      borderRadius: "8px",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.7 : 1,
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#D4B55E"; }}
                    onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#BFA050"; }}
                  >
                    {loading ? "Sending..." : "Get My Free Audit →"}
                  </button>

                  <p style={{ fontSize: "12px", color: "#2A2820", textAlign: "center" }}>
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "72px 40px 48px",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", marginBottom: "56px" }} className="footer-grid">
            <div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
                <div style={{ width: "38px", height: "38px", background: "#BFA050", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                  <span style={{ color: "#080808", fontWeight: 800, fontSize: "18px", fontFamily: "var(--font-playfair), serif" }}>K</span>
                </div>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ color: "#E8E4DC", fontSize: "16px", fontWeight: 700, letterSpacing: "0.04em" }}>Korra</div>
                  <div style={{ color: "#BFA050", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>Marketing Agency</div>
                </div>
              </a>
              <p style={{ fontSize: "14.5px", color: "#4A4840", lineHeight: 1.8, maxWidth: "360px", marginBottom: "20px" }}>
                Full-service digital marketing and content creation agency helping local businesses grow in the digital space.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#BFA050" }} />
                <span style={{ fontSize: "12.5px", color: "#3A3830" }}>Currently accepting new clients</span>
              </div>
            </div>

            <div>
              <p style={{ fontSize: "11px", color: "#3A3830", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px", fontWeight: 500 }}>Services</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Social Media Management", "Photography & Film", "Meta Ads", "Brand Identity", "Content Strategy", "Web Design"].map((item) => (
                  <li key={item}>
                    <a href="#services" style={{ color: "#3A3830", fontSize: "13.5px", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#7A7670")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3830")}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p style={{ fontSize: "11px", color: "#3A3830", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "20px", fontWeight: 500 }}>Company</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Our Work", href: "#portfolio" },
                  { label: "How We Work", href: "#approach" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Capture Crown", href: "#sister-brands" },
                  { label: "Talukder Photography", href: "#sister-brands" },
                  { label: "Contact Us", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} style={{ color: "#3A3830", fontSize: "13.5px", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#7A7670")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3830")}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}>
            <p style={{ color: "#2A2820", fontSize: "12.5px" }}>
              © {new Date().getFullYear()} Korra Marketing Agency. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" style={{ color: "#2A2820", fontSize: "12.5px", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#4A4840")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2820")}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 50,
          width: "52px",
          height: "52px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
          transition: "transform 0.3s, box-shadow 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.25)";
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
        }
        @media (min-width: 480px) {
          .form-cols { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
