"use client";
import { useEffect } from "react";
import { useState } from "react";

const plans = [
  {
    name: "Starter", subtitle: "For new businesses", price: 40000,
    description: "Get your digital presence running with professional content and basic social media management.",
    features: [
      { text: "Social media management (1 platform)", included: true },
      { text: "12 posts per month", included: true },
      { text: "Basic content creation", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Photography session (1/month)", included: true },
      { text: "Meta Ads management", included: false },
      { text: "Brand identity design", included: false },
      { text: "Website design", included: false },
    ],
    cta: "Get Started", popular: false,
  },
  {
    name: "Growth", subtitle: "Most popular", price: 60000,
    description: "Full social media management, paid ads, and professional content — everything you need to grow fast.",
    features: [
      { text: "Social media management (2 platforms)", included: true },
      { text: "20 posts per month", included: true },
      { text: "Professional content creation", included: true },
      { text: "Weekly performance report", included: true },
      { text: "Photography session (2/month)", included: true },
      { text: "Meta Ads management (up to ৳20K spend)", included: true },
      { text: "Brand identity design", included: false },
      { text: "Website design", included: false },
    ],
    cta: "Start Growing", popular: true,
  },
  {
    name: "Full-Service", subtitle: "Complete transformation", price: 100000,
    description: "The complete Korra system — strategy, visuals, ads, web, and branding all handled for you.",
    features: [
      { text: "Social media management (all platforms)", included: true },
      { text: "Unlimited posts per month", included: true },
      { text: "Premium content + cinematography", included: true },
      { text: "Daily performance tracking", included: true },
      { text: "Photography + video (weekly)", included: true },
      { text: "Meta Ads (unlimited spend)", included: true },
      { text: "Brand identity design", included: true },
      { text: "Website design & development", included: true },
    ],
    cta: "Go Full-Service", popular: false,
  },
];

const PROJECT_CATS = [
  { id: "all", label: "All" },
  { id: "photo", label: "Photography" },
  { id: "video", label: "Cinematography" },
  { id: "design", label: "Design" },
  { id: "social", label: "Page Mgmt" },
  { id: "ads", label: "Paid Marketing" },
  { id: "web", label: "Web Design" },
];

const projectCards = [
  {
    cat: "photo", catLabel: "Photography",
    title: "Photography Packages",
    items: [
      { name: "Product photography", price: "৳6,000 – 12,000" },
      { name: "Restaurant / food shoot", price: "৳12,000 – 25,000" },
      { name: "Full day shoot", price: "৳15,000 / day" },
    ],
  },
  {
    cat: "video", catLabel: "Cinematography & Reels",
    title: "Video & Reel Packages",
    items: [
      { name: "Reel shoot & editing", price: "৳2,000 / video" },
      { name: "Cinematic reel / promo video", price: "৳6,000 – 15,000" },
      { name: "Full day video shoot", price: "৳10,000 – 25,000" },
    ],
  },
  {
    cat: "design", catLabel: "Social Media Design",
    title: "Design Packages",
    items: [
      { name: "Logo design", price: "৳8,000 – 15,000" },
      { name: "Single post design", price: "৳700 / post" },
      { name: "Carousel design", price: "৳2,000 / set" },
      { name: "Motion graphic", price: "৳3,000 / piece" },
    ],
  },
  {
    cat: "social", catLabel: "Page Management",
    title: "Page Management",
    items: [
      { name: "New page setup & optimisation", price: "৳3,000 – 8,000" },
      { name: "Basic management", price: "৳8,000 – 15,000 / mo" },
      { name: "Full management", price: "৳20,000 – 40,000 / mo" },
    ],
  },
  {
    cat: "ads", catLabel: "Paid Marketing",
    title: "Paid Marketing",
    items: [
      { name: "Ads setup", price: "৳5,000 / campaign" },
      { name: "Monthly ads management", price: "৳15,000 – 30,000" },
    ],
  },
  {
    cat: "web", catLabel: "Website Design",
    title: "Website Design & Development",
    items: [
      { name: "Landing page", price: "৳8,000 – 10,000" },
      { name: "Basic website", price: "৳15,000 – 30,000" },
      { name: "Business website", price: "৳30,000 – 60,000" },
      { name: "E-commerce website", price: "৳40,000 – 80,000" },
    ],
  },
];

const addons = [
  { name: "Extra reel", price: "৳1,000 / video" },
  { name: "Extra poster design", price: "৳1,000 / design" },
  { name: "Extra shoot day", price: "৳10,000 / day" },
  { name: "Urgent delivery", price: "+20% charge" },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [activeProject, setActiveProject] = useState("all");
  const filteredProjects = activeProject === "all"
    ? projectCards
    : projectCards.filter((c) => c.cat === activeProject);

  return (
    <section id="pricing" style={{
      padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
      background: "#15130F",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Monthly Plans Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Pricing</span>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>
            Simple, Transparent{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Pricing</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6A6458", marginBottom: "28px" }}>No hidden fees. No long-term lock-ins.</p>

          <div style={{
            display: "inline-flex",
            background: "#13110E",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px", padding: "3px",
          }}>
            {(["monthly", "yearly"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding: "7px 22px", fontSize: "12px", letterSpacing: "0.06em",
                textTransform: "capitalize", fontWeight: 600, borderRadius: "6px",
                border: "none",
                background: billing === b ? "linear-gradient(135deg,#D4A83A,#F0C84A)" : "transparent",
                color: billing === b ? "#13110E" : "#4A4640",
                cursor: "pointer", transition: "all 0.25s",
              }}>
                {b}{b === "yearly" && (
                  <span style={{ marginLeft: "5px", fontSize: "9px", color: billing === b ? "#13110E" : "#D4A83A", fontWeight: 700 }}>−20%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Monthly Plans Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }} className="pricing-grid">
          {plans.map((plan, i) => {
            const price = billing === "yearly"
              ? Math.floor(plan.price * 0.8).toLocaleString()
              : plan.price.toLocaleString();

            return (
              <div key={plan.name}
                className={`reveal reveal-delay-${i + 1} glow-card`}
                style={{
                  background: plan.popular ? "linear-gradient(160deg, #171410, #110E0B)" : "#1A1713",
                  border: plan.popular ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <>
                    <div style={{
                      background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
                      color: "#13110E", fontSize: "9.5px", fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      textAlign: "center", padding: "7px",
                    }}>Most Popular</div>
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: "120px",
                      background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
                      pointerEvents: "none", zIndex: 0,
                    }} />
                  </>
                )}

                <div style={{ padding: "32px 32px 24px", flex: 1, position: "relative" }}>
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "#EDE8DF", fontWeight: 700, marginBottom: "4px" }}>
                      {plan.name}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#4A4438" }}>{plan.subtitle}</p>
                  </div>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ color: "#D4A83A", fontSize: "15px", fontWeight: 600 }}>৳</span>
                    <span style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "2.5rem",
                      background: "linear-gradient(135deg, #D4A83A, #F0D080)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 700, marginLeft: "3px", lineHeight: 1,
                    }}>{price}</span>
                  </div>
                  <p style={{ fontSize: "10.5px", color: "#A89968", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>per month</p>

                  <p style={{
                    fontSize: "13.5px", color: "#5A5448", lineHeight: 1.72,
                    marginBottom: "20px", paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>{plan.description}</p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {plan.features.map((feature) => (
                      <li key={feature.text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{
                          fontSize: "11px",
                          color: feature.included ? "#D4A83A" : "#1E1C18",
                          flexShrink: 0, marginTop: "2px", fontWeight: 700,
                        }}>{feature.included ? "✓" : "—"}</span>
                        <span style={{ fontSize: "13px", color: feature.included ? "#7A7670" : "#A89968", lineHeight: 1.5 }}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: "0 32px 32px" }}>
                  <a href="#contact" style={{
                    display: "block", textAlign: "center",
                    padding: "13px 20px",
                    fontSize: "11.5px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    textDecoration: "none", borderRadius: "7px", transition: "all 0.3s",
                    background: plan.popular ? "linear-gradient(135deg,#D4A83A,#F0C84A)" : "transparent",
                    border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: plan.popular ? "#13110E" : "#5A5650",
                    boxShadow: plan.popular ? "0 6px 24px rgba(201,168,76,0.25)" : "none",
                  }}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                        (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                        (e.currentTarget as HTMLElement).style.color = "#5A5650";
                      }
                    }}
                  >{plan.cta}</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Custom package link ── */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "36px", marginBottom: "80px" }}>
          <p style={{ fontSize: "13.5px", color: "#4A4438" }}>
            Need a custom package?{" "}
            <a href="#contact" style={{ color: "#D4A83A", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
              Let us build one for you →
            </a>
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            PROJECT-BASED PACKAGES
        ═══════════════════════════════════════════ */}

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: "20px", marginBottom: "72px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.12)" }} />
          <span style={{ fontSize: "10px", color: "#3A3830", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>or choose per project</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.12)" }} />
        </div>

        {/* Section header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Project-Based Packages</span>
            <div style={{ width: "24px", height: "1px", background: "#D4A83A", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>
            Pay Per{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Project</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6A6458", maxWidth: "440px", margin: "0 auto" }}>
            One-off deliverables, no monthly commitment. Pick exactly what you need.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
          {PROJECT_CATS.map((cat) => (
            <button key={cat.id} onClick={() => setActiveProject(cat.id)} style={{
              padding: "7px 16px", fontSize: "11.5px", letterSpacing: "0.08em",
              textTransform: "uppercase", fontWeight: 600, borderRadius: "7px",
              border: activeProject === cat.id ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: activeProject === cat.id ? "linear-gradient(135deg,#D4A83A,#F0C84A)" : "transparent",
              color: activeProject === cat.id ? "#13110E" : "#6A6458",
              cursor: "pointer", transition: "all 0.22s", outline: "none",
            }}
              onMouseEnter={(e) => {
                if (activeProject !== cat.id) {
                  (e.currentTarget as HTMLElement).style.color = "#D4A83A";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,58,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeProject !== cat.id) {
                  (e.currentTarget as HTMLElement).style.color = "#6A6458";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }
              }}
            >{cat.label}</button>
          ))}
        </div>

        {/* Project cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(clamp(260px,28vw,320px), 1fr))",
          gap: "10px",
          marginBottom: "12px",
        }}>
          {filteredProjects.map((card, i) => (
            <div key={card.cat + i} className="card-hover" style={{
              background: "#1A1713",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "13px",
              padding: "24px 24px 20px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Corner glow */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "130px", height: "130px",
                background: "radial-gradient(circle at top right, rgba(212,168,58,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Category badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#D4A83A", flexShrink: 0 }} />
                <span style={{ fontSize: "9.5px", color: "#D4A83A", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>
                  {card.catLabel}
                </span>
              </div>

              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#EDE8DF", marginBottom: "16px", lineHeight: 1.3 }}>
                {card.title}
              </h3>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{
                    display: "flex", alignItems: "baseline",
                    justifyContent: "space-between", gap: "10px",
                    paddingBottom: j < card.items.length - 1 ? "9px" : 0,
                    borderBottom: j < card.items.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}>
                    <span style={{ fontSize: "13px", color: "#6A6458", flex: 1, lineHeight: 1.4 }}>{item.name}</span>
                    <span style={{ fontSize: "12.5px", color: "#C9A84C", fontWeight: 500, whiteSpace: "nowrap" }}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Add-ons block */}
        <div style={{
          background: "rgba(212,168,58,0.04)",
          border: "1px solid rgba(212,168,58,0.14)",
          borderRadius: "11px",
          padding: "22px 24px",
          marginBottom: "12px",
          marginTop: "8px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#D4A83A", flexShrink: 0 }} />
            <span style={{ fontSize: "10px", color: "#D4A83A", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>Add-ons</span>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "8px",
          }}>
            {addons.map((addon) => (
              <div key={addon.name} style={{
                display: "flex", flexDirection: "column", gap: "3px",
                padding: "10px 12px",
                background: "rgba(212,168,58,0.05)",
                border: "1px solid rgba(212,168,58,0.1)",
                borderRadius: "8px",
              }}>
                <span style={{ fontSize: "12px", color: "#6A6458" }}>{addon.name}</span>
                <span style={{ fontSize: "12px", color: "#C9A84C", fontWeight: 600 }}>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          padding: "12px 16px",
          background: "rgba(212,168,58,0.04)",
          border: "1px solid rgba(212,168,58,0.12)",
          borderRadius: "8px",
        }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D4A83A", flexShrink: 0 }} />
          <p style={{ fontSize: "12.5px", color: "#6A6458" }}>
            Need a custom combination?{" "}
            <a href="#contact" style={{ color: "#D4A83A", textDecoration: "none", fontWeight: 500 }}>
              Talk to us — we'll build a package →
            </a>
          </p>
        </div>

      </div>

      <style>{`
        @media(min-width:900px){.pricing-grid{grid-template-columns:repeat(3,1fr)!important}}
      `}</style>
    </section>
  );
}