"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#sister-brands" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          backgroundColor: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>

            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
              <div style={{
                width: "38px", height: "38px",
                background: "#BFA050",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "6px",
              }}>
                <span style={{ color: "#080808", fontWeight: 800, fontSize: "18px", fontFamily: "var(--font-playfair), serif" }}>K</span>
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ color: "#E8E4DC", fontSize: "16px", fontWeight: 700, letterSpacing: "0.04em" }}>Korra</div>
                <div style={{ color: "#BFA050", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>Marketing Agency</div>
              </div>
            </a>

            {/* Desktop links */}
            <div style={{ display: "none", alignItems: "center", gap: "36px" }} className="md-flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#9A9690",
                    fontSize: "13.5px",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E8E4DC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9690")}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="md-flex" style={{ display: "none" }}>
              <a
                href="#contact"
                style={{
                  padding: "10px 24px",
                  background: "transparent",
                  border: "1px solid rgba(191,160,80,0.5)",
                  color: "#BFA050",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  fontWeight: 600,
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
                Free Audit
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#E8E4DC", cursor: "pointer", padding: "8px" }}
              className="md-hide"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(8,8,8,0.98)",
          backdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "2rem",
              color: "#E8E4DC",
              textDecoration: "none",
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA050")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#E8E4DC")}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "8px",
            padding: "12px 36px",
            background: "#BFA050",
            color: "#080808",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: 700,
          }}
        >
          Get Free Audit
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hide { display: none !important; }
        }
      `}</style>
    </>
  );
}
