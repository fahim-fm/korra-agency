"use client";

import { useState, useRef, useEffect } from "react";

// ─── KEY FIX: Cards do NOT use the .reveal class so filtering works instantly.
// The section header uses .reveal for the entrance, but card items animate
// with a simple CSS transition on mount instead of IntersectionObserver.

const services = [
  { number: "01", category: "Creative", title: "Photography & Cinematography", description: "Professional food photography, product shoots, brand films, and commercial content that makes your business look world-class.", tags: ["Food Photography", "Product Shoots", "Brand Films", "Reels"] },
  { number: "02", category: "Creative", title: "Content Planning & Creative Direction", description: "We build a full content system — calendars, scripts, shot lists, and creative briefs — so every post has purpose and strategy.", tags: ["Content Calendar", "Scripts", "Creative Briefs", "Shot Lists"] },
  { number: "03", category: "Creative", title: "Brand Identity Development", description: "Logo design, color palettes, typography systems, and brand guidelines that make your business instantly recognizable and memorable.", tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"] },
  { number: "04", category: "Marketing", title: "Social Media Management", description: "Full management of your Facebook and Instagram — content creation, scheduling, community management, and monthly performance reports.", tags: ["Facebook", "Instagram", "Community", "Reporting"] },
  { number: "05", category: "Marketing", title: "Paid Advertising — Meta Ads", description: "Data-driven Meta ad campaigns that bring real customers to your door. We handle strategy, creative, targeting, and optimization.", tags: ["Meta Ads", "Campaign Strategy", "Ad Creative", "Optimization"] },
  { number: "06", category: "Marketing", title: "Marketing & Branding Strategy", description: "Your dedicated marketing team. We audit your current presence, build a growth roadmap, and execute it month after month.", tags: ["Brand Audit", "Growth Roadmap", "Competitor Analysis", "Retainer"] },
  { number: "07", category: "Growth", title: "Website Design & Development", description: "Fast, modern, mobile-first websites that convert visitors into customers. Built with Next.js and SEO best practices.", tags: ["Next.js", "Mobile-First", "SEO", "Landing Pages"] },
];

const CATS = ["All", "Creative", "Marketing", "Growth"] as const;

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stagger fade-in on mount/filter-change
    const t = setTimeout(() => setMounted(true), index * 60);
    return () => clearTimeout(t);
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      className="card-hover"
      style={{
        background: "#1A1713",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "14px",
        padding: "28px 28px 24px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Mouse spotlight */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `radial-gradient(280px circle at ${mouse.x}% ${mouse.y}%, rgba(212,168,58,0.07) 0%, transparent 65%)`,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px" }}>
          <span style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "1.9rem",
            color: "rgba(212,168,58,0.35)",
            fontWeight: 700, lineHeight: 1,
          }}>{service.number}</span>
          <span style={{
            fontSize: "9.5px", color: "#5A5448",
            letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
            padding: "3px 9px",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "100px",
          }}>{service.category}</span>
        </div>

        <h3 style={{ fontSize: "1.025rem", color: "#DDD8CE", fontWeight: 600, marginBottom: "10px", lineHeight: 1.4 }}>
          {service.title}
        </h3>
        <p style={{ fontSize: "13.5px", color: "#6A6458", lineHeight: 1.75, marginBottom: "18px" }}>
          {service.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {service.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "10px", color: "#5A5448",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "3px 9px", borderRadius: "5px",
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState<typeof CATS[number]>("All");

  // Re-mount cards when filter changes so stagger animation re-fires
  const [filterKey, setFilterKey] = useState(0);

  const handleFilter = (cat: typeof CATS[number]) => {
    setActive(cat);
    setFilterKey((k) => k + 1);
  };

  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  // Scroll-reveal just for section header
  useEffect(() => {
    const els = document.querySelectorAll("#services .reveal:not(.visible)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" style={{
      padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
      background: "#13110E",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>What We Do</span>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>
            Our{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Services</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6A6458", maxWidth: "420px", margin: "0 auto 28px", lineHeight: 1.75 }}>
            Every service is designed around one goal measurable growth for your business.
          </p>

          {/* Filter buttons */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={{
                  padding: "7px 20px",
                  fontSize: "11.5px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
                  borderRadius: "7px",
                  border: active === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                  background: active === cat ? "linear-gradient(135deg,#D4A83A,#F0C84A)" : "transparent",
                  color: active === cat ? "#13110E" : "#6A6458",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (active !== cat) {
                    (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.35)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== cat) {
                    (e.currentTarget as HTMLElement).style.color = "#6A6458";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid — key forces re-mount on filter */}
        <div
          key={filterKey}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(clamp(260px,30vw,320px), 1fr))",
            gap: "12px",
          }}
        >
          {filtered.map((service, i) => (
            <ServiceCard key={service.number + filterKey} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "12px 28px",
            border: "1px solid rgba(212,168,58,0.45)",
            color: "#D4A83A", fontSize: "12px", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", borderRadius: "7px",
            transition: "all 0.3s",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#D4A83A,#F0C84A)";
              (e.currentTarget as HTMLElement).style.color = "#13110E";
              (e.currentTarget as HTMLElement).style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#D4A83A";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.45)";
            }}
          >
            Not sure which service? Talk to us →
          </a>
        </div>
      </div>
    </section>
  );
}
