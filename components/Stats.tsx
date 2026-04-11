"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "Local Brands Served" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "In-House Studios" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const steps = 55;
        const timer = setInterval(() => {
          current += target / steps;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 1800 / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  useScrollReveal();
  return (
    <section style={{
      padding: "72px 32px",
      background: "linear-gradient(180deg, #0D0B08 0%, #110F0B 50%, #0D0B08 100%)",
      borderTop: "1px solid rgba(201,168,76,0.1)",
      borderBottom: "1px solid rgba(201,168,76,0.1)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(201,168,76,0.08)",
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(201,168,76,0.1)",
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: "44px 32px",
              background: "#0D0B08",
              textAlign: "center",
              transition: "background 0.3s",
              cursor: "default",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#110F0B")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D0B08")}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700, lineHeight: 1,
                marginBottom: "10px",
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ width: "20px", height: "1px", background: "rgba(201,168,76,0.4)", margin: "0 auto 10px" }} />
              <p style={{ fontSize: "11px", color: "#5A5650", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2" style={{
          marginTop: "48px",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "40px",
        }}>
          {["Capture Crown", "Talukder Photography", "Meta Business Partner", "Google Certified"].map((brand) => (
            <span key={brand} style={{
              fontSize: "11px", color: "#2A2820", letterSpacing: "0.16em",
              textTransform: "uppercase", fontWeight: 500, cursor: "default",
              transition: "color 0.3s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5A5650")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2820")}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
    </section>
  );
}
