"use client";

import { useState, useEffect, useCallback } from "react";
import {
  CATEGORIES,
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LOGOS,
  PROJECTS,
} from "@/data/portfolio";

// ─── CATEGORY CARD (shown in the main grid) ───────────────────────────────────
function CategoryCard({
  cat,
  count,
  onClick,
  index,
}: {
  cat: string;
  count: number;
  onClick: () => void;
  index: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 80);
    return () => clearTimeout(t);
  }, [index]);



  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(160deg, #211D17, #1A1713)"
          : "#1A1713",
        border: hovered
          ? "1px solid rgba(212,168,58,0.4)"
          : "1px solid rgba(255,255,255,0.09)",
        borderRadius: "14px",
        padding: "clamp(24px,4vw,36px) clamp(20px,3vw,32px)",
        cursor: "pointer",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
        opacity: mounted ? 1 : 0,
        transform: mounted
          ? hovered ? "translateY(-4px)" : "translateY(0)"
          : "translateY(16px)",
        transition: `opacity 0.4s ease ${index * 0.07}s, transform 0.35s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? "0 12px 40px rgba(212,168,58,0.12)" : "none",
        width: "100%",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "radial-gradient(circle at 30% 40%, rgba(212,168,58,0.07) 0%, transparent 60%)"
            : "transparent",
          transition: "background 0.4s",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {/* Icon + count row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "rgba(212,168,58,0.1)",
              border: "1px solid rgba(212,168,58,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              overflow: "hidden",
            }}
          >
            <img
              src={CATEGORY_LOGOS[cat] ?? "/assets/photo.png"}
              alt={cat}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 12px",
              background: hovered
                ? "rgba(212,168,58,0.12)"
                : "rgba(212,168,58,0.06)",
              border: "1px solid rgba(212,168,58,0.18)",
              borderRadius: "100px",
              transition: "background 0.3s",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#D4A83A",
              }}
            >
              {count}
            </span>
            <span
              style={{
                fontSize: "9.5px",
                color: "#A89968",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              project{count !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: hovered ? "#EDE8DF" : "#C4BEB4",
              fontWeight: 700,
              marginBottom: "6px",
              transition: "color 0.25s",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            {cat}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#5A5448",
              lineHeight: 1.65,
            }}
          >
            {CATEGORY_DESCRIPTIONS[cat]}
          </p>
        </div>

        {/* Arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "4px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#D4A83A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              opacity: hovered ? 1 : 0.5,
              transition: "opacity 0.25s",
            }}
          >
            View Projects
          </span>
          <span
            style={{
              color: "#D4A83A",
              fontSize: "13px",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </div>
    </button>
  );
}



// ─── IMAGE PREVIEW MODAL ──────────────────────────────────────────────────────
function ImagePreviewModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,6,4,0.95)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Modal Content */}
      <div
        style={{
          position: "relative",
          zIndex: 501,
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          animation: "scaleIn 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-50px",
            right: 0,
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            color: "#8A8070",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            transition: "all 0.25s",
            zIndex: 502,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(212,168,58,0.4)";
            (e.currentTarget as HTMLElement).style.color = "#D4A83A";
            (e.currentTarget as HTMLElement).style.background =
              "rgba(212,168,58,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.color = "#8A8070";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          ✕
        </button>

        {/* Image Container */}
        <div
          style={{
            background: "#13110E",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(212,168,58,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "75vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Info Section */}
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#D4A83A",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            {project.client}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              color: "#EDE8DF",
              fontWeight: 700,
              marginBottom: "8px",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "#A89968",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

// ─── SMALL PROJECT CARD inside the gallery overlay ────────────────────────────
function GalleryCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), index * 60);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <>
      <div
        className="card-hover"
        onClick={() => setPreviewOpen(true)}
        style={{
          background: "#1A1713",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "12px",
          overflow: "hidden",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: `opacity 0.35s ease ${index * 0.05}s, transform 0.35s ease ${index * 0.05}s`,
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          height: "100%",
        }}
      >
        {/* Image - fixed size */}
        <div
          style={{
            width: "100%",
            height: "320px",
            background: "#13110E",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(212,168,58,0.06) 0%, transparent 60%)",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  color: "#A89968",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(19,17,14,0.7) 0%, transparent 55%)",
              pointerEvents: "none",
            }}
          />
        </div>

        <div style={{ padding: "12px 14px" }}>
          <p
            style={{
              fontSize: "9.5px",
              color: "#D4A83A",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "3px",
            }}
          >
            {project.client}
          </p>
          <h3
            style={{
              fontSize: "0.95rem",
              color: "#DDD8CE",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
        </div>
      </div>

      {previewOpen && (
        <ImagePreviewModal
          project={project}
          onClose={() => setPreviewOpen(false)}
        />
      )}
    </>
  );
}

// ─── GALLERY OVERLAY ──────────────────────────────────────────────────────────
function GalleryOverlay({
  cat,
  items,
  onClose,
}: {
  cat: string;
  items: typeof projects;
  onClose: () => void;
}) {
  // Trap body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        animation: "overlayIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,6,4,0.85)",
          backdropFilter: "blur(12px)",
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: "relative",
          marginTop: "auto",
          height: "88svh",
          background: "#15130F",
          borderTop: "1px solid rgba(212,168,58,0.18)",
          borderRadius: "20px 20px 0 0",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 -24px 80px rgba(0,0,0,0.6)",
          animation: "drawerUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #D4A83A, #F0C84A, #D4A83A, transparent)",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "clamp(18px,3vw,28px) clamp(20px,4vw,40px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <button
              onClick={onClose}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "#8A8070",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                transition: "all 0.25s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,168,58,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#D4A83A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#8A8070";
              }}
            >
              ←
            </button>
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#D4A83A",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Portfolio
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
                  color: "#EDE8DF",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {cat}
              </h3>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                padding: "6px 14px",
                background: "rgba(212,168,58,0.1)",
                border: "1px solid rgba(212,168,58,0.2)",
                borderRadius: "100px",
                fontSize: "12px",
                color: "#D4A83A",
                fontWeight: 600,
              }}
            >
              {items.length} project{items.length !== 1 ? "s" : ""}
            </div>
            <button
              onClick={onClose}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "transparent",
                color: "#8A8070",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,168,58,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#D4A83A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#8A8070";
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable grid */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "clamp(20px,3vw,32px) clamp(20px,4vw,40px)",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(212,168,58,0.2) transparent",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(240px,28vw,320px), 1fr))",
              gap: "14px",
            }}
          >
            {items.map((project, i) => (
              <GalleryCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Bottom CTA inside gallery */}
          <div
            style={{
              textAlign: "center",
              marginTop: "36px",
              paddingBottom: "8px",
            }}
          >
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 32px",
                background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
                color: "#13110E",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
                boxShadow: "0 8px 28px rgba(212,168,58,0.28)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 36px rgba(212,168,58,0.45)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 28px rgba(212,168,58,0.28)")
              }
            >
              Start a Similar Project →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes drawerUp {
          from { transform: translateY(40px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── MAIN PORTFOLIO SECTION ───────────────────────────────────────────────────
export default function Portfolio() {
  const [openCat, setOpenCat] = useState<string | null>(null);

  const categories = CATEGORIES.filter((c) => c !== "All");
  const allCount = PROJECTS.length;

  const getCatCount = (cat: string) =>
    PROJECTS.filter((p) => p.category === cat).length;

  const galleryItems = openCat
    ? PROJECTS.filter((p) => p.category === openCat)
    : [];

  useEffect(() => {
    const els = document.querySelectorAll("#portfolio .reveal:not(.visible)");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="portfolio"
        style={{
          padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
          background: "#15130F",
          borderTop: "1px solid rgba(212,168,58,0.07)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Header */}
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "#D4A83A",
                }}
              />
              <span
                style={{
                  color: "#D4A83A",
                  fontSize: "10.5px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Our Work
              </span>
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "#D4A83A",
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
                color: "#EDE8DF",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              Results We Are{" "}
              <span style={{ color: "#D4A83A", fontStyle: "italic" }}>
                Proud Of
              </span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#6A6458",
                maxWidth: "440px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Select a category to explore our work in detail. Each project is a
              story of real growth.
            </p>
          </div>

          {/* Stats bar */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1px",
              background: "rgba(212,168,58,0.08)",
              border: "1px solid rgba(212,168,58,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "28px",
            }}
          >
            {[
              { label: "Total Projects", value: allCount + "+" },
              { label: "Categories", value: categories.length },
              { label: "Happy Clients", value: "50+" },
              { label: "Avg. Rating", value: "4.9★" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  flex: "1 1 120px",
                  padding: "16px 20px",
                  background: "#15130F",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.3rem",
                    color: "#D4A83A",
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#4A4438",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Category cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(240px,28vw,300px), 1fr))",
              gap: "12px",
              marginBottom: "44px",
            }}
          >
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat}
                cat={cat}
                count={getCatCount(cat)}
                onClick={() => setOpenCat(cat)}
                index={i}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 32px",
                background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
                color: "#13110E",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "7px",
                boxShadow: "0 8px 28px rgba(212,168,58,0.28)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 36px rgba(212,168,58,0.45)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 28px rgba(212,168,58,0.28)")
              }
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </section>

      {/* Gallery overlay */}
      {openCat && (
        <GalleryOverlay
          cat={openCat}
          items={galleryItems}
          onClose={() => setOpenCat(null)}
        />
      )}
    </>
  );
}