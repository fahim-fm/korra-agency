"use client";

import { useState, useEffect } from "react";

const testimonials = [
  { name: "Rahim Uddin", role: "Owner, Spice Garden Restaurant", content: "Korra completely transformed how our restaurant looks online. The food photography alone doubled our Instagram engagement. We are getting new customers every week just from social media now.", initial: "R" },
  { name: "Tasnim Akter", role: "Founder, Bloom Fashion BD", content: "We went from 500 followers to over 12,000 in just three months. The content quality is incredible and the Meta ads campaign brought us real sales, not just likes.", initial: "T" },
  { name: "Farhan Hossain", role: "CEO, UrbanNest Properties", content: "The lead generation campaign they ran for us was exceptional. We spent ৳40,000 on ads and got back over ৳3 lakh in closed deals. The ROI speaks for itself.", initial: "F" },
  { name: "Nadia Islam", role: "Marketing Manager, Glowlab Skincare", content: "Professional, creative, and results-driven. Korra built our entire brand identity from scratch and it looks better than brands with 10x our budget.", initial: "N" },
  { name: "Sabbir Ahmed", role: "Owner, Cafe Noir Dhaka", content: "The photography from Capture Crown is stunning. Every photo made our food look absolutely amazing. People keep saying they came because of our Instagram.", initial: "S" },
];

export default function Testimonials() {
  
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % testimonials.length), 5500);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setActive(index); setAnimating(false); }, 280);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{
      padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
      background: "#15130F",
      borderTop: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Client Stories</span>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2,
          }}>
            What Our Clients{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Say</span>
          </h2>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div className="reveal" style={{
            background: "linear-gradient(160deg, #151210, #15130F)",
            border: "1px solid rgba(201,168,76,0.12)",
            borderRadius: "16px",
            padding: "48px 52px",
            marginBottom: "28px",
            position: "relative",
            overflow: "hidden",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(6px)" : "translateY(0)",
            transition: "opacity 0.28s, transform 0.28s",
          }}>
            {/* Glow corner */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: "200px", height: "200px",
              background: "radial-gradient(circle at top right, rgba(201,168,76,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "4.5rem",
              background: "linear-gradient(135deg, rgba(201,168,76,0.25), transparent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1, marginBottom: "12px",
              position: "absolute", top: "28px", left: "48px",
              userSelect: "none",
            }}>&ldquo;</div>

            <p style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.0625rem",
              color: "#C4BEB4",
              lineHeight: 1.85,
              fontStyle: "italic",
              marginBottom: "32px",
              paddingTop: "28px",
              position: "relative",
            }}>{t.content}</p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#D4A83A", fontFamily: "var(--font-playfair), serif", fontWeight: 700, fontSize: "15px" }}>{t.initial}</span>
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#EDE8DF", fontWeight: 600, marginBottom: "2px" }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: "#4A4438" }}>{t.role}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#D4A83A", fontSize: "13px" }}>★</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{
                  width: active === i ? "24px" : "5px",
                  height: "5px", borderRadius: "3px",
                  background: active === i ? "#D4A83A" : "rgba(255,255,255,0.1)",
                  border: "none", cursor: "pointer", transition: "all 0.35s", padding: 0,
                }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              {[{ label: "←", action: () => goTo((active - 1 + testimonials.length) % testimonials.length) }, { label: "→", action: () => goTo((active + 1) % testimonials.length) }].map((btn, i) => (
                <button key={i} onClick={btn.action} style={{
                  width: "38px", height: "38px", borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "transparent", color: "#5A5448", fontSize: "15px",
                  cursor: "pointer", transition: "all 0.3s",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)";
                    (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#4A4640";
                  }}
                >{btn.label}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px",
          background: "rgba(201,168,76,0.06)", borderRadius: "12px", overflow: "hidden",
          border: "1px solid rgba(201,168,76,0.07)", marginTop: "52px",
        }}>
          {[{ value: "50+", label: "Happy Clients", sub: "Local businesses transformed" }, { value: "4.9", label: "Average Rating", sub: "Across all projects" }, { value: "95%", label: "Client Retention", sub: "Come back for more" }].map((stat) => (
            <div key={stat.label} style={{
              textAlign: "center", padding: "32px 20px", background: "#13110E",
              transition: "background 0.3s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1C1915")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#13110E")}
            >
              <p style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "2rem",
                background: "linear-gradient(135deg, #D4A83A, #F0C84A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700, marginBottom: "6px", lineHeight: 1,
              }}>{stat.value}</p>
              <p style={{ fontSize: "13px", color: "#C4BEB4", fontWeight: 500, marginBottom: "2px" }}>{stat.label}</p>
              <p style={{ fontSize: "11.5px", color: "#A89968" }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
