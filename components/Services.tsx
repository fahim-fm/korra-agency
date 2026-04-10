"use client";

import { useState } from "react";

const services = [
  {
    category: "Creative",
    icon: "◈",
    title: "Photography & Cinematography",
    description: "Professional food photography, product shoots, brand films, and commercial content. We make your business look world-class.",
    tags: ["Food Photography", "Product Shoots", "Brand Films", "Reels"],
  },
  {
    category: "Creative",
    icon: "◎",
    title: "Content Planning & Creative Direction",
    description: "We build a full content system — calendars, scripts, shot lists, and creative briefs — so every post has purpose and strategy behind it.",
    tags: ["Content Calendar", "Scripts", "Creative Briefs", "Shot Lists"],
  },
  {
    category: "Creative",
    icon: "◐",
    title: "Brand Identity Development",
    description: "Logo design, color palettes, typography systems, and brand guidelines that make your business instantly recognizable and memorable.",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Typography"],
  },
  {
    category: "Marketing",
    icon: "◉",
    title: "Social Media Management",
    description: "Full management of your Facebook and Instagram — content creation, scheduling, community management, and monthly performance reports.",
    tags: ["Facebook", "Instagram", "Community Mgmt", "Reporting"],
  },
  {
    category: "Marketing",
    icon: "◈",
    title: "Paid Advertising — Meta Ads",
    description: "Data-driven Meta ad campaigns that bring real customers to your door. We handle strategy, creative, targeting, and optimization.",
    tags: ["Meta Ads", "Campaign Strategy", "Ad Creative", "Optimization"],
  },
  {
    category: "Marketing",
    icon: "◎",
    title: "Marketing & Branding Strategy",
    description: "Your dedicated marketing team. We audit your current presence, build a growth roadmap, and execute it month after month.",
    tags: ["Brand Audit", "Growth Roadmap", "Competitor Analysis", "Retainer"],
  },
  {
    category: "Growth",
    icon: "◐",
    title: "Website Design & Development",
    description: "Fast, modern, mobile-first websites that convert visitors into customers. Built on Next.js with SEO best practices built in.",
    tags: ["Next.js", "Mobile-First", "SEO", "Landing Pages"],
  },
];

const categories = ["All", "Creative", "Marketing", "Growth"];

export default function Services() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">What We Do</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight">
              Services Built for
              <br />
              <span className="text-[#C9A84C] italic">Real Growth</span>
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
          {filtered.map((service, i) => (
            <div
              key={i}
              className="group relative bg-[#111111] border border-[#2A2A2A] rounded-sm p-8 hover:border-[#C9A84C] transition-all duration-500 overflow-hidden cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl text-[#C9A84C] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#2A2A2A] group-hover:text-[#C9A84C] transition-colors duration-300 font-medium">
                  {service.category}
                </span>
              </div>

              <h3 className="text-[#F5F0E8] text-lg font-medium mb-3 leading-snug group-hover:text-[#C9A84C] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#888888] text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wide uppercase text-[#888888] border border-[#2A2A2A] px-2 py-1 rounded-sm group-hover:border-[#C9A84C]/30 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#888888] text-sm mb-6">Not sure which service you need?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 rounded-sm"
          >
            Get a Free Consultation
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
