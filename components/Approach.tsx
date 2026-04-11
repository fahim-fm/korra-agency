"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    phase: "Attract",
    headline: "Pull the right people in",
    description:
      "We craft content and run targeted campaigns that put your brand in front of the exact people who are ready to buy. No wasted reach — just the right eyes at the right time.",
    points: ["SEO-optimised content", "Targeted Meta Ads", "Social media presence", "Brand awareness campaigns"],
  },
  {
    number: "02",
    phase: "Engage",
    headline: "Make them stop and care",
    description:
      "Stunning visuals, compelling stories, and a consistent brand voice that make your audience connect emotionally with your business and keep coming back.",
    points: ["Professional photography", "Creative direction", "Brand storytelling", "Community management"],
  },
  {
    number: "03",
    phase: "Convert",
    headline: "Turn views into revenue",
    description:
      "Every piece of content, every ad, every post is designed with one goal — converting interest into action. We track, optimise, and report on real results.",
    points: ["Conversion-focused design", "Ad optimisation", "Performance reporting", "Retargeting campaigns"],
  },
];

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setActiveStep(Math.min(i, steps.length - 1));
            if (i >= steps.length - 1) clearInterval(interval);
          }, 700);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="approach"
      style={{
        padding: "120px 40px",
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "#BFA050", opacity: 0.7 }} />
            <span style={{ color: "#BFA050", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              How We Work
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
            The Korra System
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5A5650", maxWidth: "440px", margin: "0 auto", lineHeight: 1.75 }}>
            We do not just post content — we build a machine that grows your business consistently.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={sectionRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                padding: "48px 52px",
                background: activeStep >= i ? "#0D0D0D" : "#080808",
                cursor: "pointer",
                transition: "background 0.5s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Active left border */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "3px",
                height: "100%",
                background: "#BFA050",
                opacity: activeStep >= i ? 1 : 0,
                transition: "opacity 0.5s",
              }} />

              <div style={{ paddingLeft: "8px" }}>
                {/* Number + phase */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                  <span style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "2.5rem",
                    color: activeStep >= i ? "rgba(191,160,80,0.5)" : "rgba(255,255,255,0.06)",
                    fontWeight: 700,
                    lineHeight: 1,
                    transition: "color 0.5s",
                  }}>
                    {step.number}
                  </span>
                  <span style={{
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "4px 12px",
                    border: `1px solid ${activeStep >= i ? "rgba(191,160,80,0.4)" : "rgba(255,255,255,0.07)"}`,
                    color: activeStep >= i ? "#BFA050" : "#3A3830",
                    borderRadius: "4px",
                    transition: "all 0.5s",
                  }}>
                    {step.phase}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: activeStep >= i ? "#E8E4DC" : "#2A2820",
                  marginBottom: "12px",
                  transition: "color 0.5s",
                  letterSpacing: "-0.01em",
                }}>
                  {step.headline}
                </h3>

                <p style={{
                  fontSize: "14.5px",
                  color: activeStep >= i ? "#5A5650" : "#222018",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                  maxWidth: "680px",
                  transition: "color 0.5s",
                }}>
                  {step.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                  {step.points.map((point) => (
                    <span
                      key={point}
                      style={{
                        fontSize: "13px",
                        color: activeStep >= i ? "#7A7670" : "#1A1810",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.5s",
                      }}
                    >
                      <span style={{
                        width: "4px", height: "4px", borderRadius: "50%",
                        background: activeStep >= i ? "#BFA050" : "#1A1810",
                        flexShrink: 0,
                        transition: "background 0.5s",
                      }} />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <p style={{ fontSize: "14px", color: "#3A3830" }}>
            Every client gets a dedicated strategy —{" "}
            <span style={{ color: "#6A6050" }}>no templates, no shortcuts.</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
