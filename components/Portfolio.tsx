"use client";

import { useState, useEffect } from "react";

// ─── IMAGE SETUP ──────────────────────────────────────────────────────────────
// Place your project images in /public/portfolio/ folder.
// Name them: project-1.jpg, project-2.jpg ... project-6.jpg
// If an image is missing, the card shows a placeholder gradient.
// ─────────────────────────────────────────────────────────────────────────────

const CATS = ["All", "Photography", "Social Media", "Branding", "Ads"] as const;

const projects = [
  {
    id: 1,
    image: "/portfolio/project-1.jpg",   // ← replace with your image
    title: "Restaurant Brand Shoot",
    client: "Local Food Brand",
    category: "Photography",
    description: "Full food photography and brand content shoot for a premium restaurant launch.",
    result: "3× increase in Instagram engagement",
    tags: ["Food Photography", "Content"],
  },
  {
    id: 2,
    image: "/portfolio/project-2.jpg",
    title: "Social Media Growth Campaign",
    client: "Retail Fashion Brand",
    category: "Social Media",
    description: "Complete social media overhaul — strategy, content, and community management.",
    result: "0 to 10K followers in 90 days",
    tags: ["Instagram", "Facebook"],
  },
  {
    id: 3,
    image: "/portfolio/project-3.jpg",
    title: "Brand Identity Redesign",
    client: "F&B Startup",
    category: "Branding",
    description: "Logo, color system, typography, and full brand guidelines from scratch.",
    result: "Brand recognition up 60%",
    tags: ["Logo", "Brand Guidelines"],
  },
  {
    id: 4,
    image: "/portfolio/project-4.jpg",
    title: "Meta Ads — Lead Generation",
    client: "Real Estate Agency",
    category: "Ads",
    description: "Full Meta ads campaign targeting local property buyers with retargeting funnel.",
    result: "৳50K spend → ৳4.2L revenue",
    tags: ["Meta Ads", "Lead Gen"],
  },
  {
    id: 5,
    image: "/portfolio/project-5.jpg",
    title: "Product Launch Content",
    client: "Beauty Brand",
    category: "Photography",
    description: "Professional product photography and short-form video content for launch campaign.",
    result: "Sold out in first 2 weeks",
    tags: ["Product Photography", "Video"],
  },
  {
    id: 6,
    image: "/portfolio/project-6.jpg",
    title: "Full Digital Presence",
    client: "Cafe Chain",
    category: "Social Media",
    description: "Social media, photography, ads, and website — complete digital transformation.",
    result: "200% increase in footfall",
    tags: ["Full Service", "Ads"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 65);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className="card-hover"
      style={{
        background: "#1A1713",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "14px",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.4s ease ${index * 0.06}s, transform 0.4s ease ${index * 0.06}s, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Image / placeholder */}
      <div style={{
        height: "clamp(140px,16vw,180px)",
        background: "linear-gradient(135deg, #1E1B17, #13110E)",
        position: "relative",
        overflow: "hidden",
      }}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          /* Placeholder when image not found */
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(135deg, #1E1B17, #13110E)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle at 55% 40%, rgba(212,168,58,0.07) 0%, transparent 55%)",
            }} />
            <span style={{ fontSize: "11px", color: "#A89968", letterSpacing: "0.16em", textTransform: "uppercase", position: "relative" }}>
              {project.category}
            </span>
          </div>
        )}
        {/* Overlay gradient on image */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(19,17,14,0.7) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        {/* Category badge */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          fontSize: "9.5px", color: "#D4A83A",
          background: "rgba(13,11,8,0.8)",
          border: "1px solid rgba(212,168,58,0.25)",
          padding: "3px 9px", borderRadius: "5px", letterSpacing: "0.1em", textTransform: "uppercase",
          backdropFilter: "blur(4px)",
        }}>{project.category}</div>
      </div>

      <div style={{ padding: "22px 24px 24px" }}>
        <p style={{ fontSize: "10px", color: "#D4A83A", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "5px", fontWeight: 600 }}>
          {project.client}
        </p>
        <h3 style={{ fontSize: "1.025rem", color: "#DDD8CE", fontWeight: 600, marginBottom: "8px", lineHeight: 1.35 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "13.5px", color: "#5A5448", lineHeight: 1.72, marginBottom: "14px" }}>
          {project.description}
        </p>

        {/* Result badge */}
        <div style={{
          display: "flex", alignItems: "center", gap: "7px",
          padding: "7px 12px",
          background: "rgba(212,168,58,0.07)",
          border: "1px solid rgba(212,168,58,0.15)",
          borderRadius: "6px", marginBottom: "14px",
        }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#D4A83A", flexShrink: 0 }} />
          <span style={{ fontSize: "12.5px", color: "#9A8A50", fontWeight: 500 }}>{project.result}</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "10px", color: "#4A4438",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "3px 8px", borderRadius: "4px",
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<typeof CATS[number]>("All");
  const [filterKey, setFilterKey] = useState(0);

  const handleFilter = (cat: typeof CATS[number]) => {
    setActive(cat);
    setFilterKey((k) => k + 1);
  };

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const els = document.querySelectorAll("#portfolio .reveal:not(.visible)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" style={{
      padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
      background: "#15130F",
      borderTop: "1px solid rgba(212,168,58,0.07)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>Our Work</span>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "28px",
          }}>
            Results We Are{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Proud Of</span>
          </h2>

          {/* Filter */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}>
            {CATS.map((cat) => (
              <button key={cat} onClick={() => handleFilter(cat)} style={{
                padding: "7px 20px", fontSize: "11.5px", letterSpacing: "0.08em",
                textTransform: "uppercase", fontWeight: 600, borderRadius: "7px",
                border: active === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
                background: active === cat ? "linear-gradient(135deg,#D4A83A,#F0C84A)" : "transparent",
                color: active === cat ? "#13110E" : "#6A6458",
                cursor: "pointer", transition: "all 0.22s", outline: "none",
              }}
                onMouseEnter={(e) => { if (active !== cat) { (e.currentTarget as HTMLElement).style.color = "#D4A83A"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.35)"; } }}
                onMouseLeave={(e) => { if (active !== cat) { (e.currentTarget as HTMLElement).style.color = "#6A6458"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; } }}
              >{cat}</button>
            ))}
          </div>
        </div>

        {/* Grid — key re-mounts cards on filter */}
        <div key={filterKey} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(clamp(260px,30vw,340px), 1fr))",
          gap: "12px",
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id + "-" + filterKey} project={project} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "13px 32px",
            background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
            color: "#13110E", fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            textDecoration: "none", borderRadius: "7px",
            boxShadow: "0 8px 28px rgba(212,168,58,0.28)",
            transition: "all 0.3s",
          }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(212,168,58,0.45)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(212,168,58,0.28)"}
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
