"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.45s ease",
        backgroundColor: scrolled ? "rgba(13,11,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

            <a href="#" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
              <div style={{
                width: "36px", height: "36px",
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "7px",
                boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
              }}>
                <span style={{ color: "#0D0B08", fontWeight: 800, fontSize: "17px", fontFamily: "var(--font-playfair), serif" }}>K</span>
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ color: "#EDE8DF", fontSize: "15.5px", fontWeight: 700, letterSpacing: "0.04em" }}>Korra</div>
                <div style={{ color: "#C9A84C", fontSize: "8.5px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.8 }}>Marketing Agency</div>
              </div>
            </a>

            <div style={{ display: "none", alignItems: "center", gap: "32px" }} className="md-nav">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} style={{
                  color: "#6A6460", fontSize: "13px", letterSpacing: "0.04em",
                  textDecoration: "none", transition: "color 0.3s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6A6460")}
                >{link.label}</a>
              ))}
            </div>

            <a href="#contact" className="md-nav" style={{
              display: "none",
              padding: "9px 22px",
              background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
              color: "#0D0B08",
              fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", borderRadius: "6px",
              boxShadow: "0 4px 16px rgba(201,168,76,0.25)",
              transition: "box-shadow 0.3s",
            }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(201,168,76,0.45)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.25)"}
            >
              Free Audit
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#EDE8DF", cursor: "pointer", padding: "6px" }}
              className="md-hide">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        background: "rgba(13,11,8,0.98)", backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", gap: "28px",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "auto" : "none",
        transition: "opacity 0.4s ease",
      }}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontSize: "1.9rem", color: "#EDE8DF",
            textDecoration: "none", fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic", transition: "color 0.3s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#EDE8DF")}
          >{link.label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{
          marginTop: "6px", padding: "12px 32px",
          background: "linear-gradient(135deg,#C9A84C,#E8C97A)",
          color: "#0D0B08", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          textDecoration: "none", borderRadius: "6px",
        }}>Get Free Audit</a>
      </div>

      <style>{`
        @media(min-width:768px){.md-nav{display:flex!important}.md-hide{display:none!important}}
      `}</style>
    </>
  );
}
