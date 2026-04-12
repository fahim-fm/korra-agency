"use client";

import { useEffect, useRef, useState } from "react";

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
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = target / 55;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(cur));
        }, 1800 / 55);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  useEffect(() => {
    const els = document.querySelectorAll("#stats .reveal:not(.visible)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" style={{
      padding: "clamp(44px,6vw,68px) clamp(20px,5vw,40px)",
      background: "#15130F",
      borderTop: "1px solid rgba(212,168,58,0.1)",
      borderBottom: "1px solid rgba(212,168,58,0.1)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Warm background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(212,168,58,0.05) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* Stats row */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(212,168,58,0.1)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(212,168,58,0.12)",
        }}
          id="stats-grid"
        >
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: "clamp(28px,4vw,44px) clamp(20px,3vw,32px)",
              background: "#15130F",
              textAlign: "center",
              transition: "background 0.3s",
              cursor: "default",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1A1713")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#15130F")}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                background: "linear-gradient(135deg, #D4A83A, #F8D878)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700, lineHeight: 1, marginBottom: "8px",
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ width: "18px", height: "1px", background: "rgba(212,168,58,0.4)", margin: "0 auto 8px" }} />
              <p style={{ fontSize: "11px", color: "#5A5448", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partner strip */}
        <div className="reveal reveal-delay-2" style={{
          marginTop: "36px",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "clamp(20px,4vw,48px)",
        }}>
          {["Capture Crown", "Talukder Photography", "Meta Business Partner", "Google Certified"].map((brand) => (
            <span key={brand} style={{
              fontSize: "11px", color: "#2A2820", letterSpacing: "0.16em",
              textTransform: "uppercase", fontWeight: 500, cursor: "default", transition: "color 0.25s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#5A5448")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2A2820")}
            >{brand}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          #stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
