"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    phase: "Attract",
    headline: "Pull the right people in",
    description:
      "We craft content and run targeted campaigns that put your brand in front of the exact people who are ready to buy. No wasted reach — just the right eyes at the right time.",
    points: ["SEO-optimised content", "Targeted Meta Ads", "Social media presence", "Brand awareness campaigns"],
    color: "#C9A84C",
  },
  {
    number: "02",
    phase: "Engage",
    headline: "Make them stop and care",
    description:
      "Stunning visuals, compelling stories, and consistent brand voice that make your audience connect emotionally with your business and keep coming back.",
    points: ["Professional photography", "Creative direction", "Brand storytelling", "Community management"],
    color: "#E8C97A",
  },
  {
    number: "03",
    phase: "Convert",
    headline: "Turn views into revenue",
    description:
      "Every piece of content, every ad, every post is designed with one goal — converting interest into action. We track, optimise, and report on real results.",
    points: ["Conversion-focused design", "Ad optimisation", "Performance reporting", "Retargeting campaigns"],
    color: "#C9A84C",
  },
];

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveStep((prev) => {
              if (prev >= steps.length - 1) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, 800);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" className="py-24 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">How We Work</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-4">
            The Korra System
          </h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto">
            We do not just post content — we build a machine that grows your business consistently.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className={`relative p-8 rounded-sm border cursor-pointer transition-all duration-700 ${
                activeStep >= i
                  ? "bg-[#1A1A1A] border-[#C9A84C]"
                  : "bg-[#0A0A0A] border-[#2A2A2A]"
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-sm transition-all duration-700 ${activeStep >= i ? "bg-[#C9A84C]" : "bg-[#2A2A2A]"}`} />

              <div className="flex items-start justify-between mb-8">
                <span className={`text-5xl font-serif font-bold transition-colors duration-700 ${activeStep >= i ? "text-[#C9A84C]" : "text-[#2A2A2A]"}`}>
                  {step.number}
                </span>
                <span className={`text-xs tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border transition-all duration-700 ${
                  activeStep >= i
                    ? "border-[#C9A84C] text-[#C9A84C]"
                    : "border-[#2A2A2A] text-[#2A2A2A]"
                }`}>
                  {step.phase}
                </span>
              </div>

              <h3 className={`text-xl font-medium mb-3 transition-colors duration-700 ${activeStep >= i ? "text-[#F5F0E8]" : "text-[#444444]"}`}>
                {step.headline}
              </h3>

              <p className={`text-sm leading-relaxed mb-6 transition-colors duration-700 ${activeStep >= i ? "text-[#888888]" : "text-[#333333]"}`}>
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.points.map((point) => (
                  <li key={point} className={`flex items-center gap-3 text-sm transition-colors duration-700 ${activeStep >= i ? "text-[#BBBBBB]" : "text-[#333333]"}`}>
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-700 ${activeStep >= i ? "bg-[#C9A84C]" : "bg-[#333333]"}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2A2A2A]" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-[#111111] px-8 py-4 border border-[#2A2A2A] rounded-sm">
              <p className="text-[#888888] text-sm tracking-wide text-center">
                Every client gets a dedicated strategy —{" "}
                <span className="text-[#C9A84C]">no templates, no shortcuts.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
