"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["All", "Photography", "Social Media", "Branding", "Ads"];
const projects = [
  { id: 1, title: "Restaurant Brand Shoot", client: "Local Food Brand", category: "Photography", description: "Full food photography and brand content shoot for a premium restaurant launch.", result: "3× increase in Instagram engagement", tags: ["Food Photography", "Content"] },
  { id: 2, title: "Social Media Growth Campaign", client: "Retail Fashion Brand", category: "Social Media", description: "Complete social media overhaul — strategy, content, and community management.", result: "0 to 10K followers in 90 days", tags: ["Instagram", "Facebook"] },
  { id: 3, title: "Brand Identity Redesign", client: "F&B Startup", category: "Branding", description: "Logo, color system, typography, and full brand guidelines from scratch.", result: "Brand recognition up 60%", tags: ["Logo", "Brand Guidelines"] },
  { id: 4, title: "Meta Ads — Lead Generation", client: "Real Estate Agency", category: "Ads", description: "Full Meta ads campaign targeting local property buyers with retargeting funnel.", result: "৳50K spend → ৳4.2L revenue", tags: ["Meta Ads", "Lead Gen"] },
  { id: 5, title: "Product Launch Content", client: "Beauty Brand", category: "Photography", description: "Professional product photography and short-form video content for launch campaign.", result: "Sold out in first 2 weeks", tags: ["Product Photography", "Video"] },
  { id: 6, title: "Full Digital Presence", client: "Cafe Chain", category: "Social Media", description: "Social media, photography, ads, and website — complete digital transformation.", result: "200% increase in footfall", tags: ["Full Service", "Ads"] },
];

export default function Portfolio() {
  useScrollReveal();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" style={{
      padding: "80px 32px",
      background: "#0D0B08",
      borderTop: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Our Work</span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "28px",
          }}>
            Results We Are{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Proud Of</span>
          </h2>
          <div style={{ display: "inline-flex", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: "7px 18px", fontSize: "11px", letterSpacing: "0.1em",
                textTransform: "uppercase", fontWeight: 600, borderRadius: "5px",
                border: active === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
                background: active === cat ? "linear-gradient(135deg,#C9A84C,#E8C97A)" : "transparent",
                color: active === cat ? "#0D0B08" : "#4A4640",
                cursor: "pointer", transition: "all 0.25s",
              }}>{cat}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
          {filtered.map((project, i) => (
            <div key={project.id}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} glow-card`}
              style={{
                background: "#100E0B",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <div style={{
                height: "150px",
                background: "linear-gradient(135deg, #151210, #0D0B08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `radial-gradient(circle at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 60%)`,
                }} />
                <span style={{ fontSize: "10px", color: "#2A2820", letterSpacing: "0.16em", textTransform: "uppercase", position: "relative" }}>
                  {project.category}
                </span>
                <div style={{
                  position: "absolute", top: "12px", right: "12px",
                  fontSize: "9.5px", color: "#3A3630",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "3px 9px", borderRadius: "4px", letterSpacing: "0.1em", textTransform: "uppercase",
                }}>{project.category}</div>
              </div>

              <div style={{ padding: "24px 28px" }}>
                <p style={{ fontSize: "10px", color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "6px", fontWeight: 600 }}>
                  {project.client}
                </p>
                <h3 style={{ fontSize: "1rem", color: "#D4CEC4", fontWeight: 600, marginBottom: "8px", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#4A4640", lineHeight: 1.7, marginBottom: "14px" }}>
                  {project.description}
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: "7px",
                  padding: "8px 12px",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "6px", marginBottom: "14px",
                }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "#8A7840", fontWeight: 500 }}>{project.result}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: "10px", color: "#3A3630",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "3px 8px", borderRadius: "3px",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "44px" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "13px 32px",
            background: "linear-gradient(135deg,#C9A84C,#E8C97A)",
            color: "#0D0B08", fontSize: "11.5px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", borderRadius: "6px",
            boxShadow: "0 8px 28px rgba(201,168,76,0.25)",
            transition: "all 0.3s",
          }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(201,168,76,0.4)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(201,168,76,0.25)"}
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
