"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahim Uddin",
    role: "Owner",
    company: "Spice Garden Restaurant",
    content: "Korra completely transformed how our restaurant looks online. The food photography alone doubled our Instagram engagement. We are getting new customers every week just from social media now.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Tasnim Akter",
    role: "Founder",
    company: "Bloom Fashion BD",
    content: "We went from 500 followers to over 12,000 in just three months. The content quality is incredible and the Meta ads campaign brought us real sales, not just likes. Highly recommend Korra.",
    rating: 5,
    initial: "T",
  },
  {
    name: "Farhan Hossain",
    role: "CEO",
    company: "UrbanNest Properties",
    content: "The lead generation campaign they ran for us was exceptional. We spent ৳40,000 on ads and got back over ৳3 lakh in closed deals. The ROI speaks for itself.",
    rating: 5,
    initial: "F",
  },
  {
    name: "Nadia Islam",
    role: "Marketing Manager",
    company: "Glowlab Skincare",
    content: "Professional, creative, and results-driven. Korra built our entire brand identity from scratch and it looks better than brands with 10x our budget. The team truly cares about your success.",
    rating: 5,
    initial: "N",
  },
  {
    name: "Sabbir Ahmed",
    role: "Owner",
    company: "Cafe Noir Dhaka",
    content: "The photography from Capture Crown is stunning. Every photo they took made our food look absolutely amazing. Our Google reviews went up and people keep saying they came because of our Instagram.",
    rating: 5,
    initial: "S",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  const goToNext = () => goTo((active + 1) % testimonials.length);
  const goToPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Client Stories</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight">
            What Our Clients
            <br />
            <span className="text-[#C9A84C] italic">Say About Us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className={`transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
            <div className="relative bg-[#111111] border border-[#2A2A2A] rounded-sm p-10 md:p-14 mb-8">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

              <div className="text-[#C9A84C] text-6xl font-serif leading-none mb-6 opacity-40">"</div>

              <p className="text-[#F5F0E8] text-lg md:text-xl leading-relaxed mb-10 font-serif italic">
                {t.content}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#C9A84C] flex items-center justify-center">
                    <span className="text-[#C9A84C] font-serif font-bold text-lg">{t.initial}</span>
                  </div>
                  <div>
                    <p className="text-[#F5F0E8] font-medium">{t.name}</p>
                    <p className="text-[#888888] text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    active === i
                      ? "w-8 h-2 bg-[#C9A84C]"
                      : "w-2 h-2 bg-[#2A2A2A] hover:bg-[#888888]"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={goToPrev}
                className="w-10 h-10 border border-[#2A2A2A] rounded-sm flex items-center justify-center text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 border border-[#2A2A2A] rounded-sm flex items-center justify-center text-[#888888] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { value: "50+", label: "Happy Clients", sub: "Local businesses transformed" },
            { value: "4.9", label: "Average Rating", sub: "Across all projects" },
            { value: "95%", label: "Client Retention", sub: "Come back for more" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-[#111111] border border-[#2A2A2A] rounded-sm hover:border-[#C9A84C] transition-colors duration-300">
              <p className="font-serif text-4xl text-[#C9A84C] font-bold mb-2">{stat.value}</p>
              <p className="text-[#F5F0E8] font-medium mb-1">{stat.label}</p>
              <p className="text-[#888888] text-sm">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
