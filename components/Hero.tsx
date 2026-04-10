"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">

      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-2 z-10 hidden lg:flex">
        <div className="w-px h-24 bg-[#C9A84C] opacity-30" />
        <div className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-50" />
        <div className="w-px h-24 bg-[#C9A84C] opacity-30" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-2 z-10 hidden lg:flex">
        <div className="w-px h-24 bg-[#C9A84C] opacity-30" />
        <div className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-50" />
        <div className="w-px h-24 bg-[#C9A84C] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">

        <div className="inline-flex items-center gap-3 mb-8" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>
          <div className="w-8 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Full-Service Digital Marketing</span>
          <div className="w-8 h-px bg-[#C9A84C]" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none mb-6 font-serif" style={{ animation: "fadeUp 0.6s ease 0.2s both" }}>
          We Turn Local
          <br />
          <span className="text-[#C9A84C] italic">Businesses</span>
          <br />
          Into Digital Brands.
        </h1>

        <p className="text-[#BBBBBB] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animation: "fadeUp 0.6s ease 0.35s both" }}>
          Creative storytelling. Professional visuals. Data-driven strategy.
          <br className="hidden md:block" />
          We build the system that <span className="text-[#F5F0E8] font-medium">attracts, engages, and converts.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeUp 0.6s ease 0.5s both" }}>
          <a href="#contact" className="group px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-all duration-300 rounded-sm w-full sm:w-auto text-center">
            Get a Free Audit
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="#portfolio" className="px-8 py-4 border border-[#2A2A2A] text-[#F5F0E8] font-semibold text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 rounded-sm w-full sm:w-auto text-center">
            View Our Work
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-14" style={{ animation: "fadeUp 0.6s ease 0.65s both" }}>
          {["Social Media", "Photography", "Meta Ads", "Branding", "Web Design", "Content Strategy"].map((tag) => (
            <span key={tag} className="text-xs text-[#888888] tracking-wide border border-[#2A2A2A] px-3 py-1.5 rounded-full hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-300 cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" style={{ animation: "fadeIn 1s ease 1s both" }}>
        <span className="text-[#888888] text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>

    </section>
  );
}
