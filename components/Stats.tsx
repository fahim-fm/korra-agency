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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: "96px 40px",
        background: "#0C0C0C",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Stats grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "52px 40px",
                background: "#0C0C0C",
                textAlign: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#0F0F0F")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0C0C0C")}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                color: "#BFA050",
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: "12px",
              }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{
                width: "24px",
                height: "1px",
                background: "rgba(191,160,80,0.4)",
                margin: "0 auto 12px",
              }} />
              <p style={{
                fontSize: "12px",
                color: "#5A5650",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partner logos row */}
        <div style={{
          marginTop: "64px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
        }}>
          {["Capture Crown", "Talukder Photography", "Meta Business Partner", "Google Certified"].map((brand) => (
            <span
              key={brand}
              style={{
                fontSize: "11.5px",
                color: "#3A3830",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "default",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6A6458")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3A3830")}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
