"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="hero" style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      background: "#13110E",
      padding: "clamp(100px,14vw,130px) clamp(20px,5vw,48px) clamp(64px,8vw,90px)",
    }}>
      {/* Parallax background */}
      <div ref={bgRef} style={{ position: "absolute", inset: "-10%", zIndex: 0, pointerEvents: "none" }}>
        {/* Warm gold spotlight — brighter than before */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 38%, rgba(212,168,58,0.14) 0%, rgba(212,168,58,0.04) 45%, transparent 70%)",
        }} />
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(212,168,58,0.055) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,168,58,0.055) 1px, transparent 1px)`,
          backgroundSize: "68px 68px",
        }} />
        {/* Diagonal light streaks */}
        <div style={{
          position: "absolute", top: "8%", right: "12%",
          width: "1px", height: "55%",
          background: "linear-gradient(to bottom, transparent, rgba(212,168,58,0.3), transparent)",
          transform: "rotate(12deg)",
        }} />
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: "1px", height: "35%",
          background: "linear-gradient(to bottom, transparent, rgba(212,168,58,0.18), transparent)",
          transform: "rotate(-8deg)",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "220px",
          background: "linear-gradient(to bottom, transparent, #13110E)",
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "880px", margin: "0 auto", textAlign: "center", width: "100%" }}>

        {/* Status pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "6px 16px",
          border: "1px solid rgba(212,168,58,0.4)",
          borderRadius: "100px",
          background: "rgba(212,168,58,0.08)",
          marginBottom: "32px",
          animation: "fadeIn 0.6s ease 0.1s both",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#D4A83A", display: "block",
            animation: "pulseGlow 2s ease-in-out infinite",
          }} />
          <span style={{ fontSize: "11px", color: "#D4A83A", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>
            Full-Service Digital Marketing · Dhaka, BD
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(2.6rem, 8.5vw, 6rem)",
          lineHeight: 1.06,
          fontWeight: 700,
          color: "#EDE8DF",
          marginBottom: "24px",
          letterSpacing: "-0.02em",
          animation: "fadeUp 0.7s ease 0.2s both",
        }}>
          We Turn Local<br />
          <span className="gold-shimmer">Businesses</span><br />
          Into Digital Brands.
        </h1>

        {/* Subtext — lighter, more readable */}
        <p style={{
          fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
          color: "#A09880",
          lineHeight: 1.82,
          maxWidth: "560px",
          margin: "0 auto 44px",
          animation: "fadeUp 0.7s ease 0.35s both",
        }}>
          Creative storytelling. Professional visuals. Data-driven strategy.
          We build systems that{" "}
          <span style={{ color: "#D4CEC4", fontWeight: 500 }}>attract, engage, and convert</span>{" "}
          real customers for your business.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "14px",
          marginBottom: "56px",
          animation: "fadeUp 0.7s ease 0.5s both",
        }}>
          <a href="#contact" style={{
            padding: "clamp(12px,2vw,16px) clamp(24px,4vw,40px)",
            background: "linear-gradient(135deg, #D4A83A, #F0C84A)",
            color: "#13110E",
            fontSize: "clamp(11px,1.4vw,13px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(212,168,58,0.35)",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 40px rgba(212,168,58,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(212,168,58,0.35)";
            }}
          >
            Talk to Us — It's Free →
          </a>
          <a href="#portfolio" style={{
            padding: "clamp(12px,2vw,16px) clamp(24px,4vw,40px)",
            background: "transparent",
            border: "1px solid rgba(237,232,223,0.2)",
            color: "#C4BEB4",
            fontSize: "clamp(11px,1.4vw,13px)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.5)";
              (e.currentTarget as HTMLElement).style.color = "#D4A83A";
              (e.currentTarget as HTMLElement).style.background = "rgba(212,168,58,0.07)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(237,232,223,0.2)";
              (e.currentTarget as HTMLElement).style.color = "#C4BEB4";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            See Our Work
          </a>
        </div>

        {/* Service tags */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px",
          animation: "fadeUp 0.7s ease 0.65s both",
        }}>
          {["Social Media", "Photography", "Meta Ads", "Branding", "Web Design", "Content Strategy"].map((tag) => (
            <span key={tag} style={{
              fontSize: "11.5px",
              color: "#5A5648",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: "100px",
              letterSpacing: "0.04em",
              transition: "all 0.25s",
              cursor: "default",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(212,168,58,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#5A5648";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >{tag}</span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        animation: "fadeIn 1s ease 1.2s both", zIndex: 2,
      }}>
        <span style={{ fontSize: "9px", color: "#A89968", letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: "1px", height: "44px",
          background: "linear-gradient(to bottom, #D4A83A, transparent)",
          animation: "scrollDrop 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,58,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(212,168,58,0); }
        }
      `}</style>
    </section>
  );
}
