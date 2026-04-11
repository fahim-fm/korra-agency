"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Owner, Spice Garden Restaurant",
    content: "Korra completely transformed how our restaurant looks online. The food photography alone doubled our Instagram engagement. We are getting new customers every week just from social media now.",
    initial: "R",
  },
  {
    name: "Tasnim Akter",
    role: "Founder, Bloom Fashion BD",
    content: "We went from 500 followers to over 12,000 in just three months. The content quality is incredible and the Meta ads campaign brought us real sales, not just likes.",
    initial: "T",
  },
  {
    name: "Farhan Hossain",
    role: "CEO, UrbanNest Properties",
    content: "The lead generation campaign they ran for us was exceptional. We spent ৳40,000 on ads and got back over ৳3 lakh in closed deals. The ROI speaks for itself.",
    initial: "F",
  },
  {
    name: "Nadia Islam",
    role: "Marketing Manager, Glowlab Skincare",
    content: "Professional, creative, and results-driven. Korra built our entire brand identity from scratch and it looks better than brands with 10x our budget.",
    initial: "N",
  },
  {
    name: "Sabbir Ahmed",
    role: "Owner, Cafe Noir Dhaka",
    content: "The photography from Capture Crown is stunning. Every photo made our food look absolutely amazing. People keep saying they came because of our Instagram.",
    initial: "S",
  },
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
    setTimeout(() => { setActive(index); setAnimating(false); }, 300);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: "120px 40px", background: "#080808" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              Client Stories
            </span>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            lineHeight: 1.2,
          }}>
            What Our Clients{" "}
            <span style={{ color: "#BFA050", fontStyle: "italic" }}>Say About Us</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              background: "#0C0C0C",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "52px 56px",
              marginBottom: "32px",
              position: "relative",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "5rem",
              color: "rgba(191,160,80,0.15)",
              lineHeight: 1,
              marginBottom: "16px",
              position: "absolute",
              top: "32px",
              left: "52px",
              userSelect: "none",
            }}>
              "
            </div>

            <p style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.125rem",
              color: "#C4BEB6",
              lineHeight: 1.85,
              fontStyle: "italic",
              marginBottom: "36px",
              paddingTop: "32px",
            }}>
              {t.content}
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  background: "rgba(191,160,80,0.1)",
                  border: "1px solid rgba(191,160,80,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#BFA050", fontFamily: "var(--font-playfair), serif", fontWeight: 700, fontSize: "16px" }}>
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: "14.5px", color: "#E8E4DC", fontWeight: 600, marginBottom: "2px" }}>{t.name}</p>
                  <p style={{ fontSize: "12.5px", color: "#4A4840" }}>{t.role}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "3px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#BFA050", fontSize: "14px" }}>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: active === i ? "28px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: active === i ? "#BFA050" : "rgba(255,255,255,0.12)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s",
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { dir: "prev", label: "←", action: () => goTo((active - 1 + testimonials.length) % testimonials.length) },
                { dir: "next", label: "→", action: () => goTo((active + 1) % testimonials.length) },
              ].map((btn) => (
                <button
                  key={btn.dir}
                  onClick={btn.action}
                  style={{
                    width: "40px", height: "40px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "transparent",
                    color: "#5A5650",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.35)";
                    (e.currentTarget as HTMLElement).style.color = "#BFA050";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#5A5650";
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "12px",
          overflow: "hidden",
          marginTop: "64px",
        }}>
          {[
            { value: "50+", label: "Happy Clients", sub: "Local businesses transformed" },
            { value: "4.9", label: "Average Rating", sub: "Across all projects" },
            { value: "95%", label: "Client Retention", sub: "Come back for more" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "40px 24px",
                background: "#0C0C0C",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0F0F0F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0C0C0C")}
            >
              <p style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "2.25rem",
                color: "#BFA050",
                fontWeight: 700,
                marginBottom: "8px",
                lineHeight: 1,
              }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "14px", color: "#C4BEB6", fontWeight: 500, marginBottom: "4px" }}>{stat.label}</p>
              <p style={{ fontSize: "12.5px", color: "#3A3830" }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
