"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
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

  const input: React.CSSProperties = {
    width: "100%",
    background: "#0D0B08",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#EDE8DF",
    fontSize: "14px",
    padding: "12px 15px",
    borderRadius: "7px",
    outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "var(--font-dmsans), sans-serif",
  };
  const label: React.CSSProperties = {
    fontSize: "10.5px", color: "#3A3630",
    letterSpacing: "0.14em", textTransform: "uppercase",
    fontWeight: 500, display: "block", marginBottom: "7px",
  };

  return (
    <>
      <section id="contact" style={{ padding: "80px 32px", background: "#0D0B08", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "56px" }} className="contact-grid">

            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
                <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Get In Touch</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "16px",
              }}>
                Let us Grow
                <br />
                <span style={{
                  fontStyle: "italic",
                  background: "linear-gradient(90deg,#C9A84C,#F0D080 40%,#C9A84C)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}>Your Business</span>
              </h2>
              <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, marginBottom: "40px", maxWidth: "440px" }}>
                Book a free 30-minute strategy call. We will audit your digital presence, identify growth opportunities, and show you exactly how Korra can help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
                {[
                  { label: "Email", value: "hello@korraagency.com" },
                  { label: "WhatsApp", value: "+880 1XXX-XXXXXX" },
                  { label: "Location", value: "Dhaka, Bangladesh" },
                  { label: "Working Hours", value: "Sun – Thu, 9AM – 7PM" },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: "10px", color: "#2A2820", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, marginBottom: "3px" }}>{item.label}</p>
                    <p style={{ fontSize: "14.5px", color: "#7A7470" }}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                  <a key={social} href="#" style={{
                    padding: "7px 14px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#3A3630", fontSize: "11.5px", letterSpacing: "0.05em",
                    textDecoration: "none", borderRadius: "5px", transition: "all 0.3s",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)";
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "#3A3630";
                    }}
                  >{social}</a>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2" style={{
              background: "linear-gradient(160deg, #151210, #0F0D0A)",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: "16px",
              padding: "40px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "200px", height: "200px",
                background: "radial-gradient(circle at top right, rgba(201,168,76,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.4)",
                    background: "rgba(201,168,76,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
                  }}>
                    <span style={{ color: "#C9A84C", fontSize: "20px" }}>✓</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.4rem", color: "#EDE8DF", marginBottom: "10px" }}>Message Sent!</h3>
                  <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.75, maxWidth: "280px" }}>
                    We will get back to you within 24 hours with your free audit.
                  </p>
                  <button onClick={() => setSubmitted(false)} style={{
                    marginTop: "24px", padding: "9px 22px",
                    border: "1px solid rgba(255,255,255,0.08)", background: "transparent",
                    color: "#4A4640", fontSize: "11.5px", letterSpacing: "0.08em",
                    cursor: "pointer", borderRadius: "6px", transition: "all 0.3s",
                  }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-cols">
                    <div>
                      <label style={label}>Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" style={input}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                    <div>
                      <label style={label}>Email *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" style={input}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-cols">
                    <div>
                      <label style={label}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+880 1XXX" style={input}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                    <div>
                      <label style={label}>Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange} style={{ ...input, appearance: "none" }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
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
                    <label style={label}>Monthly Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} style={{ ...input, appearance: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>
                      <option value="">Select budget range</option>
                      <option value="under-15k">Under ৳15,000</option>
                      <option value="15k-35k">৳15,000 – ৳35,000</option>
                      <option value="35k-75k">৳35,000 – ৳75,000</option>
                      <option value="above-75k">Above ৳75,000</option>
                    </select>
                  </div>
                  <div>
                    <label style={label}>Tell Us About Your Business *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={4}
                      placeholder="What does your business do? What are your goals?"
                      style={{ ...input, resize: "none" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                  </div>
                  <button type="submit" disabled={loading} style={{
                    padding: "15px",
                    background: "linear-gradient(135deg,#C9A84C,#E8C97A)",
                    color: "#0D0B08", fontWeight: 700, fontSize: "12px",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    border: "none", borderRadius: "8px",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    boxShadow: "0 6px 24px rgba(201,168,76,0.25)",
                    transition: "all 0.3s",
                  }}>{loading ? "Sending..." : "Get My Free Audit →"}</button>
                  <p style={{ fontSize: "11.5px", color: "#2A2820", textAlign: "center" }}>We respond within 24 hours. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0A0808", borderTop: "1px solid rgba(201,168,76,0.07)", padding: "56px 32px 36px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px", marginBottom: "40px" }} className="footer-grid">
            <div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "11px", textDecoration: "none", marginBottom: "16px" }}>
                <div style={{
                  width: "36px", height: "36px",
                  background: "linear-gradient(135deg,#C9A84C,#E8C97A)",
                  display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "7px",
                }}>
                  <span style={{ color: "#0D0B08", fontWeight: 800, fontSize: "17px", fontFamily: "var(--font-playfair),serif" }}>K</span>
                </div>
                <div style={{ lineHeight: 1.2 }}>
                  <div style={{ color: "#EDE8DF", fontSize: "15px", fontWeight: 700, letterSpacing: "0.04em" }}>Korra</div>
                  <div style={{ color: "#C9A84C", fontSize: "8.5px", letterSpacing: "0.22em", textTransform: "uppercase" }}>Marketing Agency</div>
                </div>
              </a>
              <p style={{ fontSize: "13.5px", color: "#3A3630", lineHeight: 1.8, maxWidth: "320px", marginBottom: "16px" }}>
                Full-service digital marketing and content creation helping local businesses grow in the digital space.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C" }} />
                <span style={{ fontSize: "11.5px", color: "#2A2820" }}>Currently accepting new clients</span>
              </div>
            </div>

            {[
              { title: "Services", items: [{ label: "Social Media Management", href: "#services" }, { label: "Photography & Film", href: "#services" }, { label: "Meta Ads", href: "#services" }, { label: "Brand Identity", href: "#services" }, { label: "Web Design", href: "#services" }] },
              { title: "Company", items: [{ label: "Our Work", href: "#portfolio" }, { label: "Our Team", href: "#team" }, { label: "How We Work", href: "#approach" }, { label: "Pricing", href: "#pricing" }, { label: "Contact Us", href: "#contact" }] },
            ].map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: "10.5px", color: "#2A2820", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>{col.title}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} style={{ color: "#2A2820", fontSize: "13px", textDecoration: "none", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#6A6460")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2820")}
                      >{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px",
          }}>
            <p style={{ color: "#1E1C18", fontSize: "12px" }}>© {new Date().getFullYear()} Korra Marketing Agency. All rights reserved.</p>
            <div style={{ display: "flex", gap: "20px" }}>
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" style={{ color: "#1E1C18", fontSize: "12px", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#3A3630")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1E1C18")}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{
        position: "fixed", bottom: "24px", right: "24px", zIndex: 50,
        width: "50px", height: "50px", background: "#25D366",
        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.3)", transition: "transform 0.3s, box-shadow 0.3s",
        textDecoration: "none",
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.45)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)";
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @media(min-width:960px){.contact-grid{grid-template-columns:1fr 1fr!important}.footer-grid{grid-template-columns:2fr 1fr 1fr!important}}
        @media(min-width:480px){.form-cols{grid-template-columns:1fr 1fr!important}}
      `}</style>
    </>
  );
}
