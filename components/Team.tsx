"use client";

import { useEffect, useState } from "react";

const team = [
  {
    name: "Arif Hossain",
    role: "Founder & CEO",
    department: "Leadership",
    initials: "AH",
    photo: "/team/fahim1.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Mehrin Akter",
    role: "Head of Creative",
    department: "Creative",
    initials: "MA",
    photo: "/team/mehrin-akter.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Rafi Talukder",
    role: "Lead Photographer",
    department: "Creative",
    initials: "RT",
    photo: "/team/rafi-talukder.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Nusrat Jahan",
    role: "Meta Ads Specialist",
    department: "Marketing",
    initials: "NJ",
    photo: "/team/nusrat-jahan.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Tanvir Ahmed",
    role: "Social Media Manager",
    department: "Marketing",
    initials: "TA",
    photo: "/team/tanvir-ahmed.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Sumaia Khanam",
    role: "Web Designer",
    department: "Growth",
    initials: "SK",
    photo: "/team/sumaia-khanam.jpg",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
];

const deptColor: Record<string, string> = {
  Leadership: "#D4A83A",
  Creative: "#C49A30",
  Marketing: "#B48A28",
  Growth: "#D4A83A",
};

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

function MemberCard({ member, index }: { member: typeof team[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="card-hover reveal"
      style={{
        background: "#1A1713",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transitionDelay: `${index * 0.07}s`,
      }}
    >
      {/* Photo area */}
      <div style={{
        width: "100%",
        aspectRatio: "1 / 1",
        background: "linear-gradient(160deg, #1F1C18, #13110E)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        {!imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        ) : (
          <>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `radial-gradient(circle at 35% 50%, rgba(212,168,58,0.08) 0%, transparent 60%),
                                linear-gradient(rgba(212,168,58,0.025) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(212,168,58,0.025) 1px, transparent 1px)`,
              backgroundSize: "auto, 28px 28px, 28px 28px",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "80px", height: "80px",
                borderRadius: "50%",
                background: "rgba(212,168,58,0.1)",
                border: "2px solid rgba(212,168,58,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: "float 4s ease-in-out infinite",
                animationDelay: `${index * 0.3}s`,
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.7rem", fontWeight: 700,
                  background: "linear-gradient(135deg, #D4A83A, #F0C84A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{member.initials}</span>
              </div>
            </div>
          </>
        )}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
          background: "linear-gradient(to top, rgba(26,23,19,0.9), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          padding: "4px 10px",
          background: "rgba(13,11,8,0.8)",
          border: `1px solid ${deptColor[member.department]}50`,
          borderRadius: "5px",
          fontSize: "9px", color: deptColor[member.department],
          letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600,
          backdropFilter: "blur(4px)",
        }}>{member.department}</div>
      </div>

      {/* Info */}
      <div style={{ padding: "12px 14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
        <div>
          <h3 style={{ fontSize: "0.9rem", color: "#EDE8DF", fontWeight: 700, marginBottom: "1px" }}>
            {member.name}
          </h3>
          <p style={{ fontSize: "9px", color: "#D4A83A", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            {member.role}
          </p>
        </div>

        {/* Social icons */}
        <div style={{
          paddingTop: "8px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", gap: "5px", justifyContent: "center",
        }}>
          {[
            { href: member.instagram, icon: <InstagramIcon />, label: "Instagram", color: "#E4405F", hoverBg: "rgba(228,64,95,0.1)" },
            { href: member.linkedin, icon: <LinkedInIcon />, label: "LinkedIn", color: "#0A66C2", hoverBg: "rgba(10,102,194,0.1)" },
            { href: member.facebook, icon: <FacebookIcon />, label: "Facebook", color: "#1877F2", hoverBg: "rgba(24,119,242,0.1)" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                width: "26px", height: "26px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `1px solid rgba(255,255,255,0.09)`,
                borderRadius: "5px",
                color: "#6A6460",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = s.color;
                (e.currentTarget as HTMLElement).style.borderColor = s.color;
                (e.currentTarget as HTMLElement).style.background = s.hoverBg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6A6460";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  useEffect(() => {
    const els = document.querySelectorAll("#team .reveal:not(.visible)");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="team" style={{
      padding: "clamp(56px,8vw,88px) clamp(20px,5vw,40px)",
      background: "#13110E",
      borderTop: "1px solid rgba(212,168,58,0.07)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
            <span style={{ color: "#D4A83A", fontSize: "10.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
              The People Behind Korra
            </span>
            <div style={{ width: "22px", height: "1px", background: "#D4A83A" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "12px",
          }}>
            Meet Our{" "}
            <span style={{ color: "#D4A83A", fontStyle: "italic" }}>Team</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#6A6458", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>
            A talented crew of creatives, strategists, and marketers who are obsessed with growing your business.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(clamp(240px,22vw,280px), 1fr))",
          gap: "12px",
        }}>
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Hiring note */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "12px 24px",
            background: "rgba(212,168,58,0.06)",
            border: "1px solid rgba(212,168,58,0.18)",
            borderRadius: "8px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4A83A", flexShrink: 0, animation: "pulseGlow 2s ease-in-out infinite" }} />
            <span style={{ fontSize: "13.5px", color: "#7A7060" }}>
              We are growing —{" "}
              <a href="#contact" style={{ color: "#D4A83A", textDecoration: "none", fontWeight: 500 }}>
                join our team
              </a>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,58,0.5); }
          50% { box-shadow: 0 0 0 6px rgba(212,168,58,0); }
        }
      `}</style>
    </section>
  );
}
