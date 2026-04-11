"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0D0B08",
        padding: "100px 32px 72px",
      }}
    >
      {/* Layered background */}
      <div ref={parallaxRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Deep radial spotlight */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 90% 70% at 50% 40%, rgba(201,168,76,0.11) 0%, rgba(201,168,76,0.03) 40%, transparent 70%)",
        }} />
        {/* Fine grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }} />
        {/* Diagonal accent line */}
        <div style={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: "1px",
          height: "60%",
          background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.25), transparent)",
          transform: "rotate(15deg)",
        }} />
        <div style={{
          position: "absolute",
          top: "10%",
          left: "8%",
          width: "1px",
          height: "40%",
          background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)",
          transform: "rotate(-10deg)",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "180px",
          background: "linear-gradient(to bottom, transparent, #0D0B08)",
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        {/* Status badge */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "7px 18px",
            border: "1px solid rgba(201,168,76,0.35)",
            borderRadius: "100px",
            background: "rgba(201,168,76,0.07)",
            marginBottom: "36px",
            animation: "fadeIn 0.6s ease 0.1s both",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "block", animation: "pulse-ring 1.8s ease-out infinite" }} />
          <span style={{ fontSize: "11.5px", color: "#C9A84C", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
            Full-Service Digital Marketing
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(3rem, 8vw, 6.5rem)",
          lineHeight: 1.05,
          fontWeight: 700,
          color: "#EDE8DF",
          marginBottom: "28px",
          letterSpacing: "-0.02em",
          animation: "fadeUp 0.7s ease 0.2s both",
        }}>
          We Turn Local
          <br />
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(90deg, #C9A84C, #F0D080 40%, #C9A84C 70%, #A07830)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite, fadeUp 0.7s ease 0.3s both",
              display: "inline-block",
            }}
          >
            Businesses
          </span>
          <br />
          Into Digital Brands.
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: "1.125rem",
          color: "#8A8478",
          lineHeight: 1.8,
          maxWidth: "560px",
          margin: "0 auto 44px",
          animation: "fadeUp 0.7s ease 0.4s both",
        }}>
          Creative storytelling. Professional visuals. Data-driven strategy.
          We build systems that{" "}
          <span style={{ color: "#D4CEBC", fontWeight: 500 }}>attract, engage, and convert</span>{" "}
          real customers.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px",
          marginBottom: "60px",
          animation: "fadeUp 0.7s ease 0.55s both",
        }}>
          <a
            href="#contact"
            style={{
              padding: "15px 36px",
              background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
              color: "#0D0B08",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              boxShadow: "0 8px 32px rgba(201,168,76,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(201,168,76,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.3)";
            }}
          >
            Get a Free Audit →
          </a>
          <a
            href="#portfolio"
            style={{
              padding: "15px 36px",
              background: "transparent",
              border: "1px solid rgba(237,232,223,0.18)",
              color: "#C4BEB4",
              fontSize: "12.5px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
              (e.currentTarget as HTMLElement).style.color = "#C9A84C";
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(237,232,223,0.18)";
              (e.currentTarget as HTMLElement).style.color = "#C4BEB4";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Tags */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px",
          animation: "fadeUp 0.7s ease 0.7s both",
        }}>
          {["Social Media", "Photography", "Meta Ads", "Branding", "Web Design", "Content Strategy"].map((tag) => (
            <span key={tag} style={{
              fontSize: "11px",
              color: "#4A4640",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "5px 13px",
              borderRadius: "100px",
              letterSpacing: "0.04em",
              transition: "all 0.3s",
              cursor: "default",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#4A4640";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        animation: "fadeIn 1s ease 1.2s both", zIndex: 10,
      }}>
        <span style={{ fontSize: "9px", color: "#3A3630", letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: "1px", height: "48px",
          background: "linear-gradient(to bottom, #C9A84C, transparent)",
          opacity: 0.7,
          animation: "scanline 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.5); }
          100% { box-shadow: 0 0 0 8px rgba(201,168,76,0); }
        }
      `}</style>
    </section>
  );
}
