"use client";

import { useState } from "react";

const services = [
  {
    category: "Creative",
    number: "01",
    title: "Photography & Cinematography",
    description: "Professional food photography, product shoots, brand films, and commercial content. We make your business look world-class.",
    tags: ["Food Photography", "Product Shoots", "Brand Films", "Reels"],
  },
  {
    category: "Creative",
    number: "02",
    title: "Content Planning & Creative Direction",
    description: "We build a full content system — calendars, scripts, shot lists, and creative briefs — so every post has purpose behind it.",
    tags: ["Content Calendar", "Scripts", "Creative Briefs", "Shot Lists"],
  },
  {
    category: "Creative",
    number: "03",
    title: "Brand Identity Development",
    description: "Logo design, color palettes, typography systems, and brand guidelines that make your business instantly recognizable.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"],
  },
  {
    category: "Marketing",
    number: "04",
    title: "Social Media Management",
    description: "Full management of your Facebook and Instagram — content creation, scheduling, community management, and monthly reports.",
    tags: ["Facebook", "Instagram", "Community Mgmt", "Reporting"],
  },
  {
    category: "Marketing",
    number: "05",
    title: "Paid Advertising — Meta Ads",
    description: "Data-driven Meta ad campaigns that bring real customers to your door. We handle strategy, creative, targeting, and optimization.",
    tags: ["Meta Ads", "Campaign Strategy", "Ad Creative", "Optimization"],
  },
  {
    category: "Marketing",
    number: "06",
    title: "Marketing & Branding Strategy",
    description: "Your dedicated marketing team. We audit your current presence, build a growth roadmap, and execute it month after month.",
    tags: ["Brand Audit", "Growth Roadmap", "Competitor Analysis", "Retainer"],
  },
  {
    category: "Growth",
    number: "07",
    title: "Website Design & Development",
    description: "Fast, modern, mobile-first websites that convert visitors into customers. Built on Next.js with SEO best practices built in.",
    tags: ["Next.js", "Mobile-First", "SEO", "Landing Pages"],
  },
];

const categories = ["All", "Creative", "Marketing", "Growth"];

export default function Services() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" style={{ padding: "120px 40px", background: "#080808" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header — centered */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            marginBottom: "20px",
          }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              What We Do
            </span>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "20px",
          }}>
            Services Built for{" "}
            <span style={{ color: "#BFA050", fontStyle: "italic" }}>Real Growth</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5A5650", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.75 }}>
            Every service is designed around one goal — growing your business with real, measurable results.
          </p>

          {/* Filter tabs */}
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

        {/* Services grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "12px",
          overflow: "hidden",
        }}>
          {filtered.map((service, i) => (
            <div
              key={i}
              style={{
                background: "#080808",
                padding: "40px",
                transition: "background 0.3s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0C0C0C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#080808";
              }}
            >
              {/* Number + category */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "13px",
                  color: "rgba(191,160,80,0.35)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}>
                  {service.number}
                </span>
                <span style={{
                  fontSize: "10px",
                  color: "#3A3830",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}>
                  {service.category}
                </span>
              </div>

              <h3 style={{
                fontSize: "1.0625rem",
                color: "#E8E4DC",
                fontWeight: 600,
                marginBottom: "12px",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: "14.5px",
                color: "#5A5650",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}>
                {service.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10.5px",
                      color: "#4A4840",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <p style={{ fontSize: "14.5px", color: "#4A4840", marginBottom: "20px" }}>
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              border: "1px solid rgba(191,160,80,0.4)",
              color: "#BFA050",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#BFA050";
              (e.currentTarget as HTMLElement).style.color = "#080808";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#BFA050";
            }}
          >
            Get a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
