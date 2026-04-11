"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { number: "01", category: "Creative", title: "Photography & Cinematography", description: "Professional food photography, product shoots, brand films, and commercial content. We make your business look world-class.", tags: ["Food Photography", "Product Shoots", "Brand Films", "Reels"] },
  { number: "02", category: "Creative", title: "Content Planning & Creative Direction", description: "We build a full content system — calendars, scripts, shot lists, and creative briefs — so every post has purpose behind it.", tags: ["Content Calendar", "Scripts", "Creative Briefs", "Shot Lists"] },
  { number: "03", category: "Creative", title: "Brand Identity Development", description: "Logo design, color palettes, typography systems, and brand guidelines that make your business instantly recognizable.", tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"] },
  { number: "04", category: "Marketing", title: "Social Media Management", description: "Full management of your Facebook and Instagram — content creation, scheduling, community management, and monthly reports.", tags: ["Facebook", "Instagram", "Community Mgmt", "Reporting"] },
  { number: "05", category: "Marketing", title: "Paid Advertising — Meta Ads", description: "Data-driven Meta ad campaigns that bring real customers. We handle strategy, creative, targeting, and optimization.", tags: ["Meta Ads", "Campaign Strategy", "Ad Creative", "Optimization"] },
  { number: "06", category: "Marketing", title: "Marketing & Branding Strategy", description: "Your dedicated marketing team. We audit your presence, build a growth roadmap, and execute it month after month.", tags: ["Brand Audit", "Growth Roadmap", "Competitor Analysis", "Retainer"] },
  { number: "07", category: "Growth", title: "Website Design & Development", description: "Fast, modern, mobile-first websites that convert visitors into customers. Built on Next.js with SEO best practices.", tags: ["Next.js", "Mobile-First", "SEO", "Landing Pages"] },
];

const categories = ["All", "Creative", "Marketing", "Growth"];

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`reveal reveal-delay-${delay} glow-card`}
      style={{
        background: "#100E0B",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        padding: "32px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mouse spotlight */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(300px circle at ${mouse.x}% ${mouse.y}%, rgba(201,168,76,0.05) 0%, transparent 60%)`,
        transition: "background 0.1s",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <span style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "2rem",
          background: "linear-gradient(135deg, rgba(201,168,76,0.4), rgba(201,168,76,0.15))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 700, lineHeight: 1,
        }}>{service.number}</span>
        <span style={{
          fontSize: "9.5px", color: "#3A3630",
          letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500,
        }}>{service.category}</span>
      </div>

      <h3 style={{
        fontSize: "1rem", color: "#D4CEC4", fontWeight: 600,
        marginBottom: "10px", lineHeight: 1.4, letterSpacing: "-0.01em",
      }}>
        {service.title}
      </h3>

      <p style={{ fontSize: "13.5px", color: "#5A5650", lineHeight: 1.72, marginBottom: "20px" }}>
        {service.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {service.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "10px", color: "#4A4640",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "3px 9px", borderRadius: "4px", letterSpacing: "0.06em",
          }}>{tag}</span>
        ))}
      </div>

      {/* Bottom gold line on hover - handled by glow-card */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        opacity: 0, transition: "opacity 0.35s",
      }} className="card-bottom-line" />
    </div>
  );
}

export default function Services() {
  useScrollReveal();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" style={{ padding: "80px 32px", background: "#0D0B08" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>What We Do</span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "14px",
          }}>
            Services Built for{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Real Growth</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#5A5650", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.72 }}>
            Every service is designed around one goal — growing your business with measurable results.
          </p>

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

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "12px",
        }}>
          {filtered.map((service, i) => (
            <ServiceCard key={service.number} service={service} delay={Math.min(i % 3 + 1, 4) as 1|2|3|4} />
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "13px 30px",
            border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C",
            fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", borderRadius: "6px", transition: "all 0.3s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#C9A84C,#E8C97A)";
              (e.currentTarget as HTMLElement).style.color = "#0D0B08";
              (e.currentTarget as HTMLElement).style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#C9A84C";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
            }}
          >
            Get a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
