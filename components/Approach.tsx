"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01", phase: "Attract", headline: "Pull the right people in",
    description: "We craft content and run targeted campaigns that put your brand in front of the exact people ready to buy. No wasted reach — just the right eyes at the right time.",
    points: ["SEO-optimised content", "Targeted Meta Ads", "Social media presence", "Brand awareness campaigns"],
  },
  {
    number: "02", phase: "Engage", headline: "Make them stop and care",
    description: "Stunning visuals, compelling stories, and a consistent brand voice that make your audience connect emotionally with your business.",
    points: ["Professional photography", "Creative direction", "Brand storytelling", "Community management"],
  },
  {
    number: "03", phase: "Convert", headline: "Turn views into revenue",
    description: "Every piece of content, every ad, every post is designed with one goal — converting interest into action. We track, optimise, and report on real results.",
    points: ["Conversion-focused design", "Ad optimisation", "Performance reporting", "Retargeting campaigns"],
  },
];

export default function Approach() {
  useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let i = 0;
        const interval = setInterval(() => {
          i++;
          setActiveStep(Math.min(i, steps.length - 1));
          if (i >= steps.length - 1) clearInterval(interval);
        }, 600);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" style={{
      padding: "80px 32px",
      background: "#0F0D0A",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>How We Work</span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>The Korra System</h2>
          <p style={{ fontSize: "15px", color: "#5A5650", maxWidth: "400px", margin: "0 auto", lineHeight: 1.72 }}>
            We build a machine that grows your business consistently, month after month.
          </p>
        </div>

        <div ref={sectionRef} style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2px",
          background: "rgba(201,168,76,0.06)",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(201,168,76,0.08)",
        }}
          className="approach-grid"
        >
          {steps.map((step, i) => (
            <div key={i} onClick={() => setActiveStep(i)} style={{
              padding: "36px 40px",
              background: activeStep >= i ? "#130F0B" : "#0D0B08",
              cursor: "pointer",
              transition: "background 0.5s",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Active top line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                opacity: activeStep >= i ? 1 : 0,
                transition: "opacity 0.5s",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "2.2rem",
                  background: activeStep >= i
                    ? "linear-gradient(135deg, #C9A84C, #E8C97A)"
                    : "none",
                  WebkitBackgroundClip: activeStep >= i ? "text" : "unset",
                  WebkitTextFillColor: activeStep >= i ? "transparent" : "rgba(255,255,255,0.06)",
                  backgroundClip: activeStep >= i ? "text" : "unset",
                  fontWeight: 700, lineHeight: 1,
                  transition: "all 0.5s",
                }}>{step.number}</span>
                <span style={{
                  fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600,
                  padding: "4px 12px",
                  border: `1px solid ${activeStep >= i ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.06)"}`,
                  color: activeStep >= i ? "#C9A84C" : "#FFFFFF",
                  borderRadius: "4px", transition: "all 0.5s",
                }}>{step.phase}</span>
                <h3 style={{
                  fontSize: "1.125rem", fontWeight: 600,
                  color: activeStep >= i ? "#EDE8DF" : "#FFFFFF",
                  letterSpacing: "-0.01em", transition: "color 0.5s",
                }}>{step.headline}</h3>
              </div>

              <p style={{
                fontSize: "14px", color: activeStep >= i ? "#5A5650" : "#1E1C18",
                lineHeight: 1.75, marginBottom: "16px", maxWidth: "720px", transition: "color 0.5s",
              }}>{step.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
                {step.points.map((point) => (
                  <span key={point} style={{
                    fontSize: "13px",
                    color: activeStep >= i ? "#6A6460" : "#1A1810",
                    display: "flex", alignItems: "center", gap: "7px",
                    transition: "color 0.5s",
                  }}>
                    <span style={{
                      width: "4px", height: "4px", borderRadius: "50%", flexShrink: 0,
                      background: activeStep >= i ? "#C9A84C" : "#1A1810",
                      transition: "background 0.5s",
                    }} />
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(min-width:900px){.approach-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
    </section>
  );
}
