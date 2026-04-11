"use client";

import { useState } from "react";

const categories = ["All", "Photography", "Social Media", "Branding", "Ads"];

const projects = [
  {
    id: 1, title: "Restaurant Brand Shoot", client: "Local Food Brand",
    category: "Photography", description: "Full food photography and brand content shoot for a premium restaurant launch.",
    result: "3× increase in Instagram engagement", tags: ["Food Photography", "Content Creation"],
  },
  {
    id: 2, title: "Social Media Growth Campaign", client: "Retail Fashion Brand",
    category: "Social Media", description: "Complete social media overhaul — strategy, content, and community management.",
    result: "0 to 10K followers in 90 days", tags: ["Instagram", "Facebook", "Content"],
  },
  {
    id: 3, title: "Brand Identity Redesign", client: "F&B Startup",
    category: "Branding", description: "Logo, color system, typography, and full brand guidelines from scratch.",
    result: "Brand recognition up 60%", tags: ["Logo", "Brand Guidelines", "Identity"],
  },
  {
    id: 4, title: "Meta Ads — Lead Generation", client: "Real Estate Agency",
    category: "Ads", description: "Full Meta ads campaign targeting local property buyers with retargeting funnel.",
    result: "৳50K ad spend → ৳4.2L revenue", tags: ["Meta Ads", "Lead Gen", "Retargeting"],
  },
  {
    id: 5, title: "Product Launch Content", client: "Beauty Brand",
    category: "Photography", description: "Professional product photography and short-form video content for launch campaign.",
    result: "Sold out in first 2 weeks", tags: ["Product Photography", "Video", "Launch"],
  },
  {
    id: 6, title: "Full Digital Presence", client: "Cafe Chain",
    category: "Social Media", description: "Social media, photography, ads, and website — complete digital transformation.",
    result: "200% increase in footfall", tags: ["Full Service", "Photography", "Ads"],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" style={{ padding: "120px 40px", background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Our Work</span>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "36px",
          }}>
            Results We Are{" "}
            <span style={{ color: "#BFA050", fontStyle: "italic" }}>Proud Of</span>
          </h2>

          {/* Filter */}
          <div style={{ display: "inline-flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 20px",
                  fontSize: "11.5px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  borderRadius: "5px",
                  border: active === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
                  background: active === cat ? "#BFA050" : "transparent",
                  color: active === cat ? "#080808" : "#5A5650",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
          className="portfolio-grid"
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#0C0C0C",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                overflow: "hidden",
                transition: "border-color 0.3s, background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.25)";
                (e.currentTarget as HTMLElement).style.background = "#0F0F0F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "#0C0C0C";
              }}
            >
              {/* Placeholder image area */}
              <div style={{
                height: "160px",
                background: "#0A0A0A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                position: "relative",
              }}>
                <span style={{ fontSize: "11px", color: "#2A2820", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {project.category}
                </span>
                <div style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  fontSize: "10px",
                  color: "#3A3830",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {project.category}
                </div>
              </div>

              <div style={{ padding: "28px 32px" }}>
                <p style={{ fontSize: "10.5px", color: "#BFA050", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "8px", fontWeight: 500 }}>
                  {project.client}
                </p>
                <h3 style={{ fontSize: "1.0625rem", color: "#E8E4DC", fontWeight: 600, marginBottom: "10px", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "13.5px", color: "#4A4840", lineHeight: 1.7, marginBottom: "18px" }}>
                  {project.description}
                </p>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  background: "rgba(191,160,80,0.05)",
                  border: "1px solid rgba(191,160,80,0.12)",
                  borderRadius: "6px",
                  marginBottom: "16px",
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#BFA050", flexShrink: 0 }} />
                  <span style={{ fontSize: "12.5px", color: "#9A8A50", fontWeight: 500 }}>{project.result}</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontSize: "10.5px",
                      color: "#3A3830",
                      border: "1px solid rgba(255,255,255,0.05)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      letterSpacing: "0.06em",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 36px",
              background: "#BFA050",
              color: "#080808",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#D4B55E"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#BFA050"}
          >
            Start Your Project →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
