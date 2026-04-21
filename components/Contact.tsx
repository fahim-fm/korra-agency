"use client";

import { useState, useEffect } from "react";

// ─── SOCIAL MEDIA ICONS ───────────────────────────────────────────────────────
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
  </svg>
);
const LiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YtIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#13110E"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const socials = [
  { label: "Facebook", href: "https://facebook.com/", icon: <FbIcon /> },
  { label: "Instagram", href: "https://instagram.com/", icon: <IgIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: <LiIcon /> },
  { label: "YouTube", href: "https://youtube.com/", icon: <YtIcon /> },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false); setSubmitted(true);
  };

  useEffect(() => {
    const els = document.querySelectorAll("#contact .reveal:not(.visible)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#13110E",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#EDE8DF",
    fontSize: "14px",
    padding: "12px 14px",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "var(--font-dmsans), sans-serif",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "10.5px", color: "#4A4438",
    letterSpacing: "0.14em", textTransform: "uppercase",
    fontWeight: 500, display: "block", marginBottom: "7px",
  };

  return (
    <>
      <section id="contact" style={{
        padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
        background: "#15130F",
        borderTop: "1px solid rgba(212,168,58,0.07)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "52px" }} className="contact-grid">

            {/* Left */}
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
                <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>Get In Touch</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
                color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "16px",
              }}>
                Let's Grow<br />
                <span className="gold-shimmer">Your Business</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#6A6458", lineHeight: 1.8, marginBottom: "36px", maxWidth: "420px" }}>
                Book a free 30-minute strategy session. We will look at your current digital presence, find the biggest opportunities, and show you exactly how Korra can help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "32px" }}>
                 {[
                   { label: "Email", value: "korramarketinagenciy@gmail.com" },
                   { label: "WhatsApp", value: "+880 199-1791582, +880 173-4685391" },
                   { label: "Location", value: "Planet SR Shopping Mall, Khandirpar, Cumilla" },
                   { label: "Working Hours", value: "Sunday – Thursday, 9AM – 7PM" },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: "10px", color: "#A89968", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3px" }}>{item.label}</p>
                    <p style={{ fontSize: "14.5px", color: "#8A8070" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div>
                <p style={{ fontSize: "10px", color: "#A89968", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "12px" }}>Follow Us</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      title={s.label}
                      style={{
                        display: "flex", alignItems: "center", gap: "7px",
                        padding: "8px 14px",
                        border: "1px solid rgba(255,255,255,0.09)",
                        color: "#5A5448",
                        fontSize: "12px",
                        fontWeight: 500,
                        textDecoration: "none",
                        borderRadius: "8px",
                        transition: "all 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.35)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(212,168,58,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#5A5448";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal reveal-delay-2" style={{
              background: "linear-gradient(160deg, #1A1713, #15130F)",
              border: "1px solid rgba(212,168,58,0.14)",
              borderRadius: "18px",
              padding: "clamp(28px,4vw,44px)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "180px", height: "180px",
                background: "radial-gradient(circle at top right, rgba(212,168,58,0.07) 0%, transparent 65%)",
                pointerEvents: "none",
              }} />

              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 0", position: "relative" }}>
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "50%",
                    border: "1px solid rgba(212,168,58,0.45)",
                    background: "rgba(212,168,58,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
                  }}>
                    <span style={{ color: "#D4A83A", fontSize: "22px" }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.4rem", color: "#EDE8DF", marginBottom: "10px" }}>Message Sent!</h3>
                  <p style={{ fontSize: "14px", color: "#6A6458", lineHeight: 1.75, maxWidth: "280px" }}>
                    Thank you! We will get back to you within 24 hours with your free strategy session details.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{
                    marginTop: "24px", padding: "9px 22px",
                    border: "1px solid rgba(255,255,255,0.1)", background: "transparent",
                    color: "#5A5448", fontSize: "12px", letterSpacing: "0.08em",
                    cursor: "pointer", borderRadius: "7px", transition: "all 0.25s",
                  }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px", position: "relative" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-2col">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="Your name" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        placeholder="you@email.com" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-2col">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+880 1XXX" style={inputStyle}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Service You Need</label>
                      <select name="service" value={formData.service} onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
                        <option value="">Pick a service</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="photography">Photography & Video</option>
                        <option value="meta-ads">Facebook & Instagram Ads</option>
                        <option value="branding">Brand Identity</option>
                        <option value="website">Website Design</option>
                        <option value="full-service">Everything (Full Package)</option>
                        <option value="other">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Monthly Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}>
                      <option value="">Choose your budget range</option>
                      <option value="under-15k">Under ৳15,000</option>
                      <option value="15k-35k">৳15,000 – ৳35,000</option>
                      <option value="35k-75k">৳35,000 – ৳75,000</option>
                      <option value="above-75k">Above ৳75,000</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Tell Us About Your Business *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={4}
                      placeholder="What does your business do? What are your goals?"
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,168,58,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                  <button type="submit" disabled={loading} style={{
                    padding: "15px",
                    background: loading ? "#8A7040" : "linear-gradient(135deg,#D4A83A,#F0C84A)",
                    color: "#13110E", fontWeight: 700, fontSize: "12.5px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    border: "none", borderRadius: "9px",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 6px 24px rgba(212,168,58,0.28)",
                    transition: "all 0.3s",
                  }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 32px rgba(212,168,58,0.45)"; }}
                    onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(212,168,58,0.28)"; }}
                  >
                    {loading ? "Sending your message..." : "Send Message"}
                  </button>
                  <p style={{ fontSize: "11.5px", color: "#af863a", textAlign: "center" }}>
                    We reply within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F0D0A", borderTop: "1px solid rgba(212,168,58,0.07)", padding: "52px clamp(20px,5vw,40px) 36px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", marginBottom: "36px" }} className="footer-grid">

            <div>
              {/* Logo */}
              <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0, marginBottom: "14px" }}>
                <img src="/kora.png" alt="Korra" style={{ height: "50px", width: "auto" }} />
              </a>
              <p style={{ fontSize: "13.5px", color: "#4A4438", lineHeight: 1.8, maxWidth: "300px", marginBottom: "16px" }}>
                Full-service digital marketing helping local businesses grow in the digital space.
              </p>
              {/* Footer social icons */}
              <div style={{ display: "flex", gap: "7px" }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    title={s.label}
                    style={{
                      width: "32px", height: "32px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "7px",
                      color: "#A89968",
                      textDecoration: "none",
                      transition: "all 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.3)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(212,168,58,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#A89968";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {[
              { title: "Services", items: [["Social Media Management","#services"],["Photography & Video","#services"],["Facebook & Instagram Ads","#services"],["Brand Identity","#services"],["Website Design","#services"]] },
              { title: "Company", items: [["Our Work","#portfolio"],["Meet the Team","#team"],["How We Work","#approach"],["Pricing","#pricing"],["Contact Us","#contact"]] },
            ].map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: "10.5px", color: "#FFFFFF", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px", fontWeight: 500 }}>{col.title}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.items.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} style={{ color: "#A89968", fontSize: "13.5px", textDecoration: "none", transition: "color 0.25s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8A8070")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#A89968")}
                      >{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            paddingTop: "22px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px",
          }}>
            <p style={{ color: "#1E1C18", fontSize: "12px" }}>© {new Date().getFullYear()} Korra Marketing Agency. All rights reserved.</p>
            <div style={{ display: "flex", gap: "18px" }}>
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" style={{ color: "#1E1C18", fontSize: "12px", textDecoration: "none", transition: "color 0.25s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A89968")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1E1C18")}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
       <a href="https://wa.me/8801991791582" target="_blank" rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 200,
          width: "50px", height: "50px",
          background: "#25D366", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
          transition: "transform 0.3s, box-shadow 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
        }}
      ><WhatsAppIcon /></a>

      <style>{`
        @media (min-width: 960px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
        }
        @media (min-width: 480px) { .form-2col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 479px) { .form-2col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
