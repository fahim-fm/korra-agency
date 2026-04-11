"use client";

export default function SisterBrands() {
  return (
    <section
      id="sister-brands"
      style={{
        padding: "120px 40px",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              Our Creative Family
            </span>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "20px",
          }}>
            In-House Creative Studio
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5A5650", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Unlike agencies that outsource visuals, we have our own creative brands under one roof —
            meaning faster delivery, tighter quality, and a unified vision for your brand.
          </p>
        </div>

        {/* Two brand cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "40px" }} className="brand-grid">
          {[
            {
              initials: "CC",
              name: "Capture Crown",
              type: "Photography Studio",
              description: "Our dedicated photography studio specialising in food photography, commercial shoots, and brand content creation. Every image is crafted to make your product irresistible.",
              services: ["Food Photography", "Commercial Shoots", "Product Photography", "Brand Content"],
              stat: "100+ commercial shoots completed",
            },
            {
              initials: "TP",
              name: "Talukder Photography",
              type: "Cinematography Studio",
              description: "Professional cinematography and videography studio for brand films, product videos, reels, and commercial content that tells your story with cinematic quality.",
              services: ["Brand Films", "Product Videos", "Instagram Reels", "Event Coverage"],
              stat: "50+ brand films produced",
            },
          ].map((brand) => (
            <div
              key={brand.name}
              style={{
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "48px",
                transition: "border-color 0.4s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.25)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"}
            >
              {/* Subtle corner accent */}
              <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: "radial-gradient(ellipse at top right, rgba(191,160,80,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px", gap: "16px" }}>
                <div>
                  <div style={{
                    width: "52px", height: "52px",
                    background: "rgba(191,160,80,0.08)",
                    border: "1px solid rgba(191,160,80,0.2)",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}>
                    <span style={{ color: "#BFA050", fontFamily: "var(--font-playfair), serif", fontWeight: 800, fontSize: "16px" }}>
                      {brand.initials}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.375rem", color: "#E8E4DC", fontWeight: 700, marginBottom: "4px" }}>
                    {brand.name}
                  </h3>
                  <p style={{ fontSize: "10.5px", color: "#BFA050", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
                    {brand.type}
                  </p>
                </div>
                <span style={{ fontSize: "10px", color: "#2A2820", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Sister Brand
                </span>
              </div>

              <p style={{ fontSize: "14.5px", color: "#5A5650", lineHeight: 1.8, marginBottom: "28px" }}>
                {brand.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px", marginBottom: "28px" }}>
                {brand.services.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(191,160,80,0.5)", flexShrink: 0 }} />
                    <span style={{ fontSize: "13.5px", color: "#7A7670" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
              }}>
                <span style={{ fontSize: "12.5px", color: "#3A3830" }}>{brand.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Advantage banner */}
        <div style={{
          background: "rgba(191,160,80,0.04)",
          border: "1px solid rgba(191,160,80,0.2)",
          borderRadius: "12px",
          padding: "48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(191,160,80,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <p style={{ fontSize: "10.5px", color: "#BFA050", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>
            The Advantage
          </p>
          <h3 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            marginBottom: "16px",
            lineHeight: 1.3,
          }}>
            Strategy + Visuals + Execution — All Under One Roof
          </h3>
          <p style={{ fontSize: "15px", color: "#5A5650", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            Most agencies outsource photography and video to freelancers. We own our creative studios.
            That means a unified look, faster turnaround, and no communication gaps.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .brand-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
