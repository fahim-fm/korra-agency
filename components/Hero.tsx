"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
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
        background: "#080808",
        padding: "120px 40px 80px",
      }}
    >
      {/* Background texture */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(191,160,80,0.025) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(191,160,80,0.025) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        {/* Central glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(191,160,80,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom, transparent, #080808)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            animation: "fadeUp 0.7s ease 0.1s both",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          <span style={{
            color: "#BFA050",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}>
            Full-Service Digital Marketing
          </span>
          <div style={{ width: "32px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            color: "#E8E4DC",
            fontWeight: 700,
            marginBottom: "28px",
            animation: "fadeUp 0.7s ease 0.2s both",
          }}
        >
          We Turn Local Businesses
          <br />
          Into{" "}
          <span style={{ color: "#BFA050", fontStyle: "italic" }}>
            Digital Brands.
          </span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "1.125rem",
            color: "#7A7670",
            lineHeight: 1.8,
            maxWidth: "580px",
            margin: "0 auto 48px",
            animation: "fadeUp 0.7s ease 0.35s both",
          }}
        >
          Creative storytelling. Professional visuals. Data-driven strategy.
          We build systems that{" "}
          <span style={{ color: "#C4BEB6", fontWeight: 500 }}>
            attract, engage, and convert
          </span>{" "}
          real customers.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "72px",
            animation: "fadeUp 0.7s ease 0.5s both",
          }}
        >
          <a
            href="#contact"
            style={{
              padding: "15px 36px",
              background: "#BFA050",
              color: "#080808",
              fontSize: "12.5px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#D4B55E";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#BFA050";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get a Free Audit →
          </a>
          <a
            href="#portfolio"
            style={{
              padding: "15px 36px",
              background: "transparent",
              border: "1px solid rgba(232,228,220,0.15)",
              color: "#C4BEB6",
              fontSize: "12.5px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#BFA050";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,228,220,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#C4BEB6";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            animation: "fadeUp 0.7s ease 0.65s both",
          }}
        >
          {["Social Media", "Photography", "Meta Ads", "Branding", "Web Design", "Content Strategy"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11.5px",
                color: "#5A5650",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "6px 14px",
                borderRadius: "100px",
                letterSpacing: "0.04em",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#BFA050";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#5A5650";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "fadeIn 1s ease 1.2s both",
          zIndex: 10,
        }}
      >
        <div style={{
          width: "1px",
          height: "56px",
          background: "linear-gradient(to bottom, #BFA050, transparent)",
          opacity: 0.6,
        }} />
      </div>
    </section>
  );
}
