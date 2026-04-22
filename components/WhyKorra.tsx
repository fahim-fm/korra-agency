"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    number: "01",
    icon: "✦",
    title: "Creative & Trend-Driven Content",
    description:
      "We create content that is not just visually appealing but aligned with current trends to maximize reach and engagement. Your brand stays relevant, fresh, and scroll-stopping.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Deep Understanding of Local Market",
    description:
      "We understand local customer behavior, preferences, and buying patterns — helping your business connect with the right audience at the right moment.",
  },
  {
    number: "03",
    icon: "⬡",
    title: "Consistent & Professional Branding",
    description:
      "From visuals to messaging, we maintain a strong and consistent brand identity across all platforms so your business is instantly recognizable and trusted.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Focus on Real Results",
    description:
      "Our priority is not just likes or views — we focus on generating real customers, real engagement, and real business growth. Every action we take is tied to a measurable outcome.",
  },
  {
    number: "05",
    icon: "◇",
    title: "Dedicated & Passionate Team",
    description:
      "Our team is committed to delivering high-quality work with creativity, consistency, and professionalism. We don't just work for your business — we work as your growth partner.",
  },
  {
    number: "06",
    icon: "★",
    title: "Your Success Is Our Priority",
    description:
      "We treat every client as a long-term partner. When your business grows, we grow. That shared stake in your success drives everything we do.",
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(160deg, #1D1A15, #1A1713)"
          : "#1A1713",
        border: hovered
          ? "1px solid rgba(212,168,58,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "clamp(24px,3vw,32px)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.45s ease, transform 0.45s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s`,
        boxShadow: hovered ? "0 10px 36px rgba(212,168,58,0.1)" : "none",
        cursor: "default",
      }}
    >
      {/* Mouse spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(260px circle at ${mouse.x}% ${mouse.y}%, rgba(212,168,58,0.07) 0%, transparent 65%)`,
          transition: "opacity 0.3s",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          {/* Icon bubble */}
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: hovered
                ? "rgba(212,168,58,0.14)"
                : "rgba(212,168,58,0.08)",
              border: "1px solid rgba(212,168,58,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              color: "#D4A83A",
              transition: "background 0.3s, transform 0.3s",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              flexShrink: 0,
            }}
          >
            {reason.icon}
          </div>

          {/* Number */}
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.7rem",
              color: hovered
                ? "rgba(212,168,58,0.25)"
                : "rgba(212,168,58,0.14)",
              fontWeight: 700,
              lineHeight: 1,
              transition: "color 0.3s",
            }}
          >
            {reason.number}
          </span>
        </div>

        <h3
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            color: hovered ? "#EDE8DF" : "#C4BEB4",
            fontWeight: 700,
            marginBottom: "10px",
            lineHeight: 1.35,
            transition: "color 0.25s",
            fontFamily: "var(--font-playfair), serif",
          }}
        >
          {reason.title}
        </h3>

        <p
          style={{
            fontSize: "13.5px",
            color: "#5A5448",
            lineHeight: 1.78,
          }}
        >
          {reason.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyKorra() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="why-korra"
      style={{
        padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
        background: "#13110E",
        borderTop: "1px solid rgba(212,168,58,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(212,168,58,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
      >
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "clamp(36px,5vw,60px)",
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{ width: "22px", height: "1px", background: "#D4A83A" }}
            />
            <span
              style={{
                color: "#D4A83A",
                fontSize: "10.5px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Why Choose Korra
            </span>
            <div
              style={{ width: "22px", height: "1px", background: "#D4A83A" }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
              color: "#EDE8DF",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "14px",
            }}
          >
            The Korra{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>
              Difference
            </span>
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#6A6458",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.78,
            }}
          >
            We don&apos;t just work for your business — we work{" "}
            <span style={{ color: "#C4BEB4", fontWeight: 500 }}>
              as your growth partner
            </span>
            . Your success is our priority.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(clamp(260px,30vw,340px), 1fr))",
            gap: "12px",
            marginBottom: "clamp(36px,5vw,56px)",
          }}
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.number} reason={reason} index={i} />
          ))}
        </div>

        {/* Bottom banner */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(212,168,58,0.08) 0%, rgba(212,168,58,0.04) 100%)",
            border: "1px solid rgba(212,168,58,0.2)",
            borderRadius: "14px",
            padding: "clamp(28px,4vw,44px) clamp(24px,5vw,56px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 55% 90% at 10% 50%, rgba(212,168,58,0.06) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <p
              style={{
                fontSize: "10px",
                color: "#D4A83A",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Ready to grow?
            </p>
            <h3
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)",
                color: "#EDE8DF",
                fontWeight: 700,
                lineHeight: 1.25,
                maxWidth: "520px",
              }}
            >
              Let&apos;s build something remarkable together — starting with a
              free strategy session.
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <a
              href="#contact"
              style={{
                padding: "13px 28px",
                background: "linear-gradient(135deg,#D4A83A,#F0C84A)",
                color: "#13110E",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
                boxShadow: "0 6px 24px rgba(212,168,58,0.28)",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 10px 32px rgba(212,168,58,0.45)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 24px rgba(212,168,58,0.28)")
              }
            >
              Book Free Session →
            </a>
            <a
              href="#services"
              style={{
                padding: "13px 24px",
                background: "transparent",
                border: "1px solid rgba(212,168,58,0.35)",
                color: "#D4A83A",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(212,168,58,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,168,58,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(212,168,58,0.35)";
              }}
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}