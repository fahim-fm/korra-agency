"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBg = scrolled ? "rgba(19,17,14,0.96)" : "transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition:
            "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          background: navBg,
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212,168,58,0.12)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,40px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "70px",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src="/kora.png"
                alt="Korra"
                style={{ height: "50px", width: "auto" }}
              />
            </a>

            {/* Desktop nav */}
            <div
              style={{ display: "none", alignItems: "center", gap: "28px" }}
              className="desk-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "#8A8070",
                    fontSize: "13.5px",
                    textDecoration: "none",
                    transition: "color 0.25s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EDE8DF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8A8070")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="desk-nav"
              style={{
                display: "none",
                padding: "9px 22px",
                background: "linear-gradient(135deg, #D4A83A, #F0C84A)",
                color: "#13110E",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "7px",
                boxShadow: "0 4px 18px rgba(212,168,58,0.3)",
                transition: "box-shadow 0.3s, transform 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 28px rgba(212,168,58,0.5)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 18px rgba(212,168,58,0.3)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              Talk to Us
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#EDE8DF",
                cursor: "pointer",
                padding: "6px",
                lineHeight: 0,
              }}
              className="mob-toggle"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(13,11,8,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            padding: "0 32px",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
                color: "#EDE8DF",
                textDecoration: "none",
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                transition: "color 0.25s",
                padding: "10px 0",
                textAlign: "center",
                width: "100%",
                borderBottom:
                  i < navLinks.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A83A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#EDE8DF")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "28px",
              padding: "14px 40px",
              background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
              color: "#13110E",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 6px 24px rgba(212,168,58,0.3)",
            }}
          >
            Talk to Us →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desk-nav { display: flex !important; }
          .mob-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
