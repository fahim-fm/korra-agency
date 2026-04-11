"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  {
    name: "Arif Hossain",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "10+ years in digital marketing. Arif built Korra from the ground up with a vision to help Bangladeshi businesses compete in the digital age.",
    expertise: ["Brand Strategy", "Business Development", "Campaign Management"],
    initials: "AH",
    color: "#C9A84C",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Mehrin Akter",
    role: "Head of Creative",
    department: "Creative",
    bio: "Award-winning art director who has led visual campaigns for 50+ brands. Mehrin brings world-class creative direction to every project.",
    expertise: ["Art Direction", "Brand Identity", "Visual Strategy"],
    initials: "MA",
    color: "#B89040",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Rafi Talukder",
    role: "Lead Photographer",
    department: "Creative",
    bio: "Founder of Talukder Photography. Rafi's eye for storytelling through a lens has elevated hundreds of brands across Bangladesh.",
    expertise: ["Food Photography", "Cinematography", "Product Shoots"],
    initials: "RT",
    color: "#A07830",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Nusrat Jahan",
    role: "Meta Ads Specialist",
    department: "Marketing",
    bio: "Certified Meta ads expert with a track record of delivering 5–10× ROAS for clients across retail, F&B, and real estate sectors.",
    expertise: ["Meta Ads", "Audience Targeting", "Funnel Optimization"],
    initials: "NJ",
    color: "#C9A84C",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Tanvir Ahmed",
    role: "Social Media Manager",
    department: "Marketing",
    bio: "Grew 20+ brand accounts from zero to thriving communities. Tanvir combines data insight with creative instinct to build audiences that convert.",
    expertise: ["Community Management", "Content Strategy", "Instagram Growth"],
    initials: "TA",
    color: "#B89040",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Sumaia Khanam",
    role: "Web Designer",
    department: "Growth",
    bio: "Full-stack designer who crafts conversion-focused websites. Sumaia's sites don't just look good — they generate leads.",
    expertise: ["UI/UX Design", "Next.js Development", "SEO Architecture"],
    initials: "SK",
    color: "#A07830",
    instagram: "#",
    linkedin: "#",
  },
];

const deptColors: Record<string, string> = {
  Leadership: "rgba(201,168,76,0.15)",
  Creative: "rgba(176,144,64,0.12)",
  Marketing: "rgba(160,120,48,0.12)",
  Growth: "rgba(201,168,76,0.1)",
};

export default function Team() {
  useScrollReveal();

  return (
    <section
      id="team"
      style={{
        padding: "80px 32px",
        background: "#0D0B08",
        borderTop: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
            <span style={{ color: "#C9A84C", fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              The People Behind Korra
            </span>
            <div style={{ width: "24px", height: "1px", background: "#C9A84C", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#EDE8DF", fontWeight: 700, lineHeight: 1.2, marginBottom: "14px",
          }}>
            Meet Our{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Team</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#5A5650", maxWidth: "480px", margin: "0 auto", lineHeight: 1.72 }}>
            A talented crew of creatives, strategists, and marketers who are obsessed with growing your business.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "14px",
        }}>
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${Math.min((i % 3) + 1, 4)} glow-card`}
              style={{
                background: "#100E0B",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {/* Photo area */}
              <div style={{
                height: "220px",
                background: `linear-gradient(160deg, #171410, #0D0B08)`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                {/* Decorative background pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `radial-gradient(circle at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 60%),
                                    radial-gradient(circle at 70% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `linear-gradient(rgba(201,168,76,0.02) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(201,168,76,0.02) 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }} />

                {/* Initials avatar (replace with <img> when you have photos) */}
                <div style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  background: `radial-gradient(135deg, ${member.color}22, ${member.color}08)`,
                  border: `2px solid ${member.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: `0 0 40px ${member.color}20`,
                  animation: "float 4s ease-in-out infinite",
                  animationDelay: `${i * 0.4}s`,
                }}>
                  <span style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${member.color}, #F0D080)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {member.initials}
                  </span>
                </div>

                {/* Department badge */}
                <div style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  padding: "4px 10px",
                  background: deptColors[member.department],
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "4px",
                  fontSize: "9.5px",
                  color: "#C9A84C",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}>
                  {member.department}
                </div>

                {/* REPLACE WITH PHOTO: uncomment below and add your image path */}
                {/* <img
                  src={`/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={member.name}
                  style={{
                    position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", objectPosition: "top",
                  }}
                /> */}
              </div>

              {/* Info */}
              <div style={{ padding: "24px 28px" }}>
                <h3 style={{
                  fontSize: "1.0625rem",
                  color: "#EDE8DF",
                  fontWeight: 700,
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: "12px",
                  color: "#C9A84C",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}>
                  {member.role}
                </p>
                <p style={{ fontSize: "13.5px", color: "#5A5650", lineHeight: 1.72, marginBottom: "18px" }}>
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "18px" }}>
                  {member.expertise.map((item) => (
                    <span key={item} style={{
                      fontSize: "10px", color: "#4A4640",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.04em",
                    }}>{item}</span>
                  ))}
                </div>

                {/* Social links */}
                <div style={{
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", gap: "10px",
                }}>
                  <a href={member.instagram} style={{
                    fontSize: "11px", color: "#3A3630", textDecoration: "none",
                    padding: "5px 12px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "5px",
                    letterSpacing: "0.06em",
                    transition: "all 0.3s",
                    display: "flex", alignItems: "center", gap: "5px",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#3A3630";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    Instagram
                  </a>
                  <a href={member.linkedin} style={{
                    fontSize: "11px", color: "#3A3630", textDecoration: "none",
                    padding: "5px 12px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "5px",
                    letterSpacing: "0.06em",
                    transition: "all 0.3s",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#3A3630";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring note */}
        <div className="reveal" style={{ marginTop: "48px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 28px",
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: "8px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", animation: "pulse-ring 2s ease-out infinite" }} />
            <span style={{ fontSize: "13.5px", color: "#7A7470" }}>
              We are growing —{" "}
              <a href="#contact" style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>
                join our team
              </a>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(201,168,76,0.5); }
          100% { box-shadow: 0 0 0 8px rgba(201,168,76,0); }
        }
      `}</style>
    </section>
  );
}
