"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const plans = [
  {
    name: "Starter", subtitle: "For new businesses", price: 15000,
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
    name: "Growth", subtitle: "Most popular", price: 35000,
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
    name: "Full-Service", subtitle: "Complete transformation", price: 75000,
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

export default function Pricing() {
  useScrollReveal();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" style={{
      padding: "80px 32px",
      background: "#0F0D0A",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Pricing</span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>
            Simple, Transparent{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Pricing</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#5A5650", marginBottom: "28px" }}>No hidden fees. No long-term lock-ins.</p>

          <div style={{
            display: "inline-flex",
            background: "#0D0B08",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px", padding: "3px",
          }}>
            {(["monthly", "yearly"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding: "7px 22px", fontSize: "12px", letterSpacing: "0.06em",
                textTransform: "capitalize", fontWeight: 600, borderRadius: "6px",
                border: "none",
                background: billing === b ? "linear-gradient(135deg,#C9A84C,#E8C97A)" : "transparent",
                color: billing === b ? "#0D0B08" : "#4A4640",
                cursor: "pointer", transition: "all 0.25s",
              }}>
                {b}{b === "yearly" && <span style={{ marginLeft: "5px", fontSize: "9px", color: billing === b ? "#0D0B08" : "#C9A84C", fontWeight: 700 }}>−20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }} className="pricing-grid">
          {plans.map((plan, i) => {
            const price = billing === "yearly"
              ? Math.floor(plan.price * 0.8).toLocaleString()
              : plan.price.toLocaleString();

            return (
              <div key={plan.name}
                className={`reveal reveal-delay-${i + 1} glow-card`}
                style={{
                  background: plan.popular ? "linear-gradient(160deg, #171410, #110E0B)" : "#100E0B",
                  border: plan.popular ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <>
                    <div style={{
                      background: "linear-gradient(135deg,#C9A84C,#E8C97A)",
                      color: "#0D0B08", fontSize: "9.5px", fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      textAlign: "center", padding: "7px",
                    }}>Most Popular</div>
                    {/* Gold glow */}
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
                    <p style={{ fontSize: "12px", color: "#3A3630" }}>{plan.subtitle}</p>
                  </div>

                  <div style={{ marginBottom: "6px" }}>
                    <span style={{ color: "#C9A84C", fontSize: "15px", fontWeight: 600 }}>৳</span>
                    <span style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "2.5rem",
                      background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 700, marginLeft: "3px", lineHeight: 1,
                    }}>{price}</span>
                  </div>
                  <p style={{ fontSize: "10.5px", color: "#2A2820", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>per month</p>

                  <p style={{
                    fontSize: "13.5px", color: "#4A4640", lineHeight: 1.72,
                    marginBottom: "20px", paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>{plan.description}</p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {plan.features.map((feature) => (
                      <li key={feature.text} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{
                          fontSize: "11px",
                          color: feature.included ? "#C9A84C" : "#1E1C18",
                          flexShrink: 0, marginTop: "2px", fontWeight: 700,
                        }}>{feature.included ? "✓" : "—"}</span>
                        <span style={{ fontSize: "13px", color: feature.included ? "#7A7670" : "#2A2820", lineHeight: 1.5 }}>
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
                    background: plan.popular ? "linear-gradient(135deg,#C9A84C,#E8C97A)" : "transparent",
                    border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: plan.popular ? "#0D0B08" : "#5A5650",
                    boxShadow: plan.popular ? "0 6px 24px rgba(201,168,76,0.25)" : "none",
                  }}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                        (e.currentTarget as HTMLElement).style.color = "#C9A84C";
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

        <div className="reveal" style={{ textAlign: "center", marginTop: "36px" }}>
          <p style={{ fontSize: "13.5px", color: "#3A3630" }}>
            Need a custom package?{" "}
            <a href="#contact" style={{ color: "#C9A84C", textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
              Let us build one for you →
            </a>
          </p>
        </div>
      </div>

      <style>{`@media(min-width:900px){.pricing-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
    </section>
  );
}
