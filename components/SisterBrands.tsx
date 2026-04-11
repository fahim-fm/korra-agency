"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const brands = [
  {
    initials: "CC", name: "Capture Crown", type: "Photography Studio",
    description: "Our dedicated photography studio specialising in food photography, commercial shoots, and brand content. Every image is crafted to make your product irresistible.",
    services: ["Food Photography", "Commercial Shoots", "Product Photography", "Brand Content"],
    stat: "100+ commercial shoots completed",
  },
  {
    initials: "TP", name: "Talukder Photography", type: "Cinematography Studio",
    description: "Professional cinematography and videography studio for brand films, product videos, reels, and commercial content that tells your story with cinematic quality.",
    services: ["Brand Films", "Product Videos", "Instagram Reels", "Event Coverage"],
    stat: "50+ brand films produced",
  },
];

export default function SisterBrands() {
  useScrollReveal();

  return (
    <section id="sister-brands" style={{
      padding: "80px 32px",
      background: "#0D0B08",
      borderTop: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Our Creative Family</span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "14px",
          }}>In-House Creative Studio</h2>
          <p style={{ fontSize: "15px", color: "#5A5650", maxWidth: "520px", margin: "0 auto", lineHeight: 1.72 }}>
            We own our creative studios — not outsourced. Faster delivery, tighter quality, unified vision.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px", marginBottom: "36px" }} className="brand-grid">
          {brands.map((brand, i) => (
            <div key={brand.name}
              className={`reveal reveal-delay-${i + 1} glow-card`}
              style={{
                background: "#100E0B",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "40px",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "160px", height: "160px",
                background: "radial-gradient(circle at top right, rgba(201,168,76,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                <div>
                  <div style={{
                    width: "48px", height: "48px",
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "9px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "14px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontWeight: 800, fontSize: "14px",
                      background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>{brand.initials}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", color: "#EDE8DF", fontWeight: 700, marginBottom: "4px" }}>{brand.name}</h3>
                  <p style={{ fontSize: "10px", color: "#C9A84C", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>{brand.type}</p>
                </div>
                <span style={{ fontSize: "9.5px", color: "#2A2820", letterSpacing: "0.14em", textTransform: "uppercase" }}>Sister Brand</span>
              </div>

              <p style={{ fontSize: "14px", color: "#5A5650", lineHeight: 1.75, marginBottom: "22px" }}>{brand.description}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px", marginBottom: "22px" }}>
                {brand.services.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#6A6460" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: "12px", color: "#3A3630" }}>{brand.stat}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{
          background: "rgba(201,168,76,0.04)",
          border: "1px solid rgba(201,168,76,0.18)",
          borderRadius: "12px",
          padding: "40px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <p style={{ fontSize: "10.5px", color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 600 }}>The Advantage</p>
          <h3 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
            color: "#EDE8DF", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3,
          }}>Strategy + Visuals + Execution — All Under One Roof</h3>
          <p style={{ fontSize: "14.5px", color: "#5A5650", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto" }}>
            Most agencies outsource photography and video. We own our creative studios — one unified look, faster turnaround, no gaps.
          </p>
        </div>
      </div>

      <style>{`@media(min-width:900px){.brand-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}
