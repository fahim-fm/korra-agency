"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "For new businesses",
    price: 15000,
    description: "Get your digital presence up and running with professional content and basic social media management.",
    features: [
      { text: "Social media management (1 platform)", included: true },
      { text: "12 posts per month", included: true },
      { text: "Basic content creation", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Photography session (1/month)", included: true },
      { text: "Meta Ads management", included: false },
      { text: "Brand identity design", included: false },
      { text: "Website design", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Most popular — scaling brands",
    price: 35000,
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
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Full-Service",
    subtitle: "Complete transformation",
    price: 75000,
    description: "The complete Korra system — strategy, visuals, ads, web, and branding all handled for you.",
    features: [
      { text: "Social media management (all platforms)", included: true },
      { text: "Unlimited posts per month", included: true },
      { text: "Premium content + cinematography", included: true },
      { text: "Daily performance tracking", included: true },
      { text: "Photography + video (weekly)", included: true },
      { text: "Meta Ads management (unlimited spend)", included: true },
      { text: "Brand identity design", included: true },
      { text: "Website design & development", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Go Full-Service",
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      id="pricing"
      style={{
        padding: "120px 40px",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              Pricing
            </span>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "#E8E4DC",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            Simple, Transparent{" "}
            <span style={{ color: "#BFA050", fontStyle: "italic" }}>Pricing</span>
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5A5650", marginBottom: "36px", lineHeight: 1.75 }}>
            No hidden fees. No long-term lock-ins. Just results.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: "inline-flex",
            background: "#0D0D0D",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px",
            padding: "4px",
          }}>
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: "8px 24px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  borderRadius: "6px",
                  border: "none",
                  background: billing === b ? "#BFA050" : "transparent",
                  color: billing === b ? "#080808" : "#5A5650",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  position: "relative",
                }}
              >
                {b}
                {b === "yearly" && (
                  <span style={{
                    marginLeft: "6px",
                    fontSize: "9px",
                    color: billing === b ? "#080808" : "#BFA050",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}>
                    −20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
          className="pricing-grid"
        >
          {plans.map((plan) => {
            const price = billing === "yearly"
              ? Math.floor(plan.price * 0.8).toLocaleString()
              : plan.price.toLocaleString();

            return (
              <div
                key={plan.name}
                style={{
                  background: plan.popular ? "#0D0D0D" : "#080808",
                  border: plan.popular ? "1px solid rgba(191,160,80,0.35)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <div style={{
                    background: "#BFA050",
                    color: "#080808",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    padding: "8px",
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ padding: "40px 40px 32px", flex: 1 }}>
                  <div style={{ marginBottom: "28px" }}>
                    <h3 style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.375rem",
                      color: "#E8E4DC",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}>
                      {plan.name}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#4A4840" }}>{plan.subtitle}</p>
                  </div>

                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ color: "#BFA050", fontSize: "16px", fontWeight: 600 }}>৳</span>
                    <span style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "2.75rem",
                      color: "#E8E4DC",
                      fontWeight: 700,
                      marginLeft: "4px",
                      lineHeight: 1,
                    }}>
                      {price}
                    </span>
                  </div>
                  <p style={{ fontSize: "11px", color: "#3A3830", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "28px" }}>
                    per month
                  </p>

                  <p style={{
                    fontSize: "14px",
                    color: "#5A5650",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                    paddingBottom: "28px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    {plan.description}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                      >
                        <span style={{
                          fontSize: "13px",
                          color: feature.included ? "#BFA050" : "#2A2820",
                          flexShrink: 0,
                          marginTop: "2px",
                          fontWeight: 600,
                        }}>
                          {feature.included ? "✓" : "—"}
                        </span>
                        <span style={{
                          fontSize: "13.5px",
                          color: feature.included ? "#8A8680" : "#2A2820",
                          lineHeight: 1.5,
                        }}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: "0 40px 40px" }}>
                  <a
                    href="#contact"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "14px 24px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      borderRadius: "6px",
                      transition: "all 0.3s",
                      background: plan.popular ? "#BFA050" : "transparent",
                      border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                      color: plan.popular ? "#080808" : "#7A7670",
                    }}
                    onMouseEnter={(e) => {
                      if (plan.popular) {
                        (e.currentTarget as HTMLElement).style.background = "#D4B55E";
                      } else {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(191,160,80,0.4)";
                        (e.currentTarget as HTMLElement).style.color = "#BFA050";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.popular) {
                        (e.currentTarget as HTMLElement).style.background = "#BFA050";
                      } else {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                        (e.currentTarget as HTMLElement).style.color = "#7A7670";
                      }
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom package */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14.5px", color: "#4A4840", marginBottom: "8px" }}>
            Need a custom package?
          </p>
          <a
            href="#contact"
            style={{ color: "#6A6050", fontSize: "13.5px", textDecoration: "underline", textUnderlineOffset: "4px", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA050")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6A6050")}
          >
            Let us build one for you →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
