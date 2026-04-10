"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Local Brands Served" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Sister Creative Brands" },
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
          const duration = 2000;
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#C9A84C] font-bold mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-px bg-[#2A2A2A] group-hover:bg-[#C9A84C] transition-colors duration-500 mb-3" />
              <p className="text-[#888888] text-sm tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-[#2A2A2A]">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {["Capture Crown", "Talukder Photography", "Meta Business Partner", "Google Certified"].map((brand) => (
              <div key={brand} className="text-[#2A2A2A] text-sm tracking-widest uppercase hover:text-[#C9A84C] transition-colors duration-300 cursor-default font-medium">
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
