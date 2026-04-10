"use client";

import { useState } from "react";

const categories = ["All", "Photography", "Social Media", "Branding", "Ads"];

const projects = [
  {
    id: 1,
    title: "Restaurant Brand Shoot",
    client: "Local Food Brand",
    category: "Photography",
    description: "Full food photography and brand content shoot for a premium restaurant launch.",
    result: "3x increase in Instagram engagement",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Food Photography", "Content Creation"],
  },
  {
    id: 2,
    title: "Social Media Growth Campaign",
    client: "Retail Fashion Brand",
    category: "Social Media",
    description: "Complete social media overhaul — strategy, content, and community management.",
    result: "0 to 10K followers in 90 days",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Instagram", "Facebook", "Content"],
  },
  {
    id: 3,
    title: "Brand Identity Redesign",
    client: "F&B Startup",
    category: "Branding",
    description: "Logo, color system, typography, and full brand guidelines from scratch.",
    result: "Brand recognition up 60%",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Logo", "Brand Guidelines", "Identity"],
  },
  {
    id: 4,
    title: "Meta Ads — Lead Generation",
    client: "Real Estate Agency",
    category: "Ads",
    description: "Full Meta ads campaign targeting local property buyers with retargeting funnel.",
    result: "৳50K ad spend → ৳4.2L revenue",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Meta Ads", "Lead Gen", "Retargeting"],
  },
  {
    id: 5,
    title: "Product Launch Content",
    client: "Beauty Brand",
    category: "Photography",
    description: "Professional product photography and short-form video content for launch campaign.",
    result: "Sold out in first 2 weeks",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Product Photography", "Video", "Launch"],
  },
  {
    id: 6,
    title: "Full Digital Presence",
    client: "Cafe Chain",
    category: "Social Media",
    description: "Social media, photography, ads, and website — complete digital transformation.",
    result: "200% increase in footfall",
    color: "#1A1A1A",
    accent: "#C9A84C",
    tags: ["Full Service", "Photography", "Ads"],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Our Work</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight">
              Results We Are
              <br />
              <span className="text-[#C9A84C] italic">Proud Of</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs tracking-widest uppercase rounded-sm transition-all duration-300 ${
                  active === cat
                    ? "bg-[#C9A84C] text-[#0A0A0A] font-semibold"
                    : "border border-[#2A2A2A] text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-[#111111] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9A84C] transition-all duration-500 cursor-default"
            >
              <div className="relative h-52 bg-[#1A1A1A] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">◈</div>
                    <span className="text-[#2A2A2A] text-xs tracking-widest uppercase group-hover:text-[#C9A84C] transition-colors duration-500">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] tracking-widest uppercase bg-[#0A0A0A] border border-[#2A2A2A] text-[#888888] px-2 py-1 rounded-sm">
                    {project.category}
                  </span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent transition-opacity duration-500 ${hovered === project.id ? "opacity-100" : "opacity-60"}`} />
              </div>

              <div className="p-6">
                <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">{project.client}</p>
                <h3 className="text-[#F5F0E8] text-lg font-medium mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm mb-4 group-hover:border-[#C9A84C]/30 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#C9A84C] text-xs font-medium">{project.result}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-wide uppercase text-[#888888] border border-[#2A2A2A] px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#888888] text-sm mb-6">
            These are placeholder projects — your real work goes here.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] text-sm font-semibold tracking-widest uppercase hover:bg-[#E8C97A] transition-all duration-300 rounded-sm"
          >
            Start Your Project
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
