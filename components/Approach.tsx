"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    phase: "Research",
    headline: "Understand before we act",
    description:
      "We begin by deeply understanding your business, market, and goals — identifying what works, what doesn't, and where the real opportunity lies.",
    points: [
      "Business audit (current situation analysis)",
      "Target audience identification (age, behaviour, interests)",
      "Competitor analysis (what they're doing & gaps)",
      "Market positioning evaluation",
    ],
  },
  {
    number: "02",
    phase: "Strategy",
    headline: "Build a roadmap for growth",
    description:
      "We create a customised marketing roadmap tailored to your business objectives. Every action is planned with a clear goal: growth and conversion.",
    points: [
      "Content strategy (what to post & why)",
      "Platform selection (Facebook, Instagram, etc.)",
      "Growth strategy (organic + paid)",
      "Campaign planning (offers, promotions, launches)",
      "Monthly content calendar",
    ],
  },
  {
    number: "03",
    phase: "Creation",
    headline: "Content that stops the scroll",
    description:
      "We produce high-quality, scroll-stopping content that represents your brand professionally — grabbing attention and building trust instantly.",
    points: [
      "Professional photography (product / food / brand)",
      "Cinematic video production (reels, ads, promos)",
      "Graphic design (posts, banners, creatives)",
      "Copywriting (captions that attract & convert)",
    ],
  },
  {
    number: "04",
    phase: "Execution",
    headline: "Consistent presence, every day",
    description:
      "We implement the strategy and manage your platforms consistently, ensuring your brand stays active, relevant, and engaging.",
    points: [
      "Scheduled posting",
      "Social media page management",
      "Audience engagement (comments & messages)",
      "Ad campaign launch & management",
      "Trend-based content execution",
    ],
  },
  {
    number: "05",
    phase: "Growth",
    headline: "Optimise, scale, repeat",
    description:
      "We continuously track performance and improve results — ensuring consistent improvement and long-term growth through data-driven decisions.",
    points: [
      "Performance tracking (reach, engagement, conversions)",
      "Data analysis & reporting",
      "Ad optimisation (budget, targeting, creatives)",
      "Strategy adjustment based on results",
      "Scaling successful campaigns",
    ],
  },
];

export default function Approach() {
  useScrollReveal();
  const [active, setActive] = useState(0);

  const go = (dir: number) =>
    setActive((p) => Math.max(0, Math.min(steps.length - 1, p + dir)));

  const step = steps[active];

  return (
    <section
      id="approach"
      style={{
        padding: "80px 32px",
        background: "#0F0D0A",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              How We Work
            </span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>The Korra System</h2>
          <p style={{ fontSize: "15px", color: "#5A5650", maxWidth: "460px", margin: "0 auto", lineHeight: 1.72 }}>
            Everything we do is data-driven, creative, and focused on delivering real business results.
          </p>
        </div>

        {/* Stepper card */}
        <div style={{
          background: "#0D0B08",
          border: "1px solid rgba(201,168,76,0.1)",
          borderRadius: "14px",
          overflow: "hidden",
        }}>

          {/* Tab bar */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid rgba(201,168,76,0.08)",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}>
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: "72px",
                  padding: "14px 8px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                  border: "none",
                  borderBottom: active === i ? "2px solid #C9A84C" : "2px solid transparent",
                  background: active === i ? "rgba(201,168,76,0.06)" : "transparent",
                  transition: "all 0.25s",
                }}
              >
                <span style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: active === i ? "#C9A84C" : i < active ? "rgba(201,168,76,0.45)" : "rgba(255,255,255,0.15)",
                  transition: "color 0.25s",
                }}>
                  {s.number}
                </span>
                <span style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: active === i ? "#C9A84C" : i < active ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.15)",
                  transition: "color 0.25s",
                }}>
                  {s.phase}
                </span>
                <div style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: active === i || i < active ? "#C9A84C" : "rgba(255,255,255,0.07)",
                  transition: "background 0.25s",
                }} />
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div
            key={active}
            style={{ padding: "36px 40px 30px", animation: "fadeUp 0.35s ease" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px", flexWrap: "wrap" }}>
              <span style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "2.2rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}>
                {step.number}
              </span>
              <span style={{
                fontSize: "9.5px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "4px 12px",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#C9A84C",
                borderRadius: "4px",
              }}>
                {step.phase}
              </span>
              <h3 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#EDE8DF",
                letterSpacing: "-0.01em",
                margin: 0,
              }}>
                {step.headline}
              </h3>
            </div>

            <p style={{ fontSize: "14px", color: "#6A6460", lineHeight: 1.78, marginBottom: "20px", maxWidth: "680px" }}>
              {step.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {step.points.map((point) => (
                <span key={point} style={{ fontSize: "13px", color: "#5A5650", display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Nav bar */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 40px",
            borderTop: "1px solid rgba(201,168,76,0.08)",
          }}>
            <button
              onClick={() => go(-1)}
              disabled={active === 0}
              style={{
                background: "transparent",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#C9A84C",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "7px 18px",
                borderRadius: "5px",
                cursor: active === 0 ? "default" : "pointer",
                opacity: active === 0 ? 0.2 : 1,
                transition: "opacity 0.2s",
              }}
            >
              ← Prev
            </button>

            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {steps.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: "20px",
                    height: "2px",
                    borderRadius: "2px",
                    background: i <= active ? "#C9A84C" : "rgba(201,168,76,0.15)",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              disabled={active === steps.length - 1}
              style={{
                background: "transparent",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#C9A84C",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "7px 18px",
                borderRadius: "5px",
                cursor: active === steps.length - 1 ? "default" : "pointer",
                opacity: active === steps.length - 1 ? 0.2 : 1,
                transition: "opacity 0.2s",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}