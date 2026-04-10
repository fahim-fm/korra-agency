"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for new businesses",
    price: "15,000",
    period: "per month",
    description: "Get your digital presence up and running with professional content and basic social media management.",
    features: [
      { text: "Social media management (1 platform)", included: true },
      { text: "12 posts per month", included: true },
      { text: "Basic content creation", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Photography session (1/month)", included: true },
      { text: "Meta Ads management", included: false },
      { text: "Brand identity design", included: false },
      { text: "Website design", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Most popular for scaling brands",
    price: "35,000",
    period: "per month",
    description: "Full social media management, paid ads, and professional content — everything you need to grow fast.",
    features: [
      { text: "Social media management (2 platforms)", included: true },
      { text: "20 posts per month", included: true },
      { text: "Professional content creation", included: true },
      { text: "Weekly performance report", included: true },
      { text: "Photography session (2/month)", included: true },
      { text: "Meta Ads management (up to ৳20K spend)", included: true },
      { text: "Brand identity design", included: false },
      { text: "Website design", included: false },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Full-Service",
    subtitle: "Complete digital transformation",
    price: "75,000",
    period: "per month",
    description: "The complete Korra system — strategy, visuals, ads, web, and branding all handled for you.",
    features: [
      { text: "Social media management (all platforms)", included: true },
      { text: "Unlimited posts per month", included: true },
      { text: "Premium content + cinematography", included: true },
      { text: "Daily performance tracking", included: true },
      { text: "Photography + video (weekly)", included: true },
      { text: "Meta Ads management (unlimited spend)", included: true },
      { text: "Brand identity design", included: true },
      { text: "Website design & development", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Go Full-Service",
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Pricing</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-4">
            Simple, Transparent
            <br />
            <span className="text-[#C9A84C] italic">Pricing</span>
          </h2>
          <p className="text-[#888888] text-lg max-w-xl mx-auto mb-8">
            No hidden fees. No long-term lock-ins. Just results.
          </p>

          <div className="inline-flex items-center bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 text-sm rounded-sm transition-all duration-300 ${billing === "monthly" ? "bg-[#C9A84C] text-[#0A0A0A] font-semibold" : "text-[#888888] hover:text-[#F5F0E8]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 text-sm rounded-sm transition-all duration-300 ${billing === "yearly" ? "bg-[#C9A84C] text-[#0A0A0A] font-semibold" : "text-[#888888] hover:text-[#F5F0E8]"}`}
            >
              Yearly
              <span className="ml-2 text-[10px] text-[#C9A84C] font-medium">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const price = billing === "yearly"
              ? Math.floor(parseInt(plan.price.replace(",", "")) * 0.8).toLocaleString()
              : plan.price;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-sm overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "bg-[#1A1A1A] border-2 border-[#C9A84C] scale-105"
                    : "bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#C9A84C]"
                }`}
              >
                {plan.popular && (
                  <div className="bg-[#C9A84C] text-[#0A0A0A] text-xs font-bold tracking-widest uppercase text-center py-2">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1">
                  <div className="mb-6">
                    <h3 className="text-[#F5F0E8] text-xl font-serif font-medium mb-1">{plan.name}</h3>
                    <p className="text-[#888888] text-sm">{plan.subtitle}</p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[#C9A84C] text-sm">৳</span>
                    <span className="text-[#F5F0E8] text-4xl font-serif font-bold">{price}</span>
                  </div>
                  <p className="text-[#888888] text-xs tracking-wide uppercase mb-6">{plan.period}</p>

                  <p className="text-[#888888] text-sm leading-relaxed mb-8 pb-8 border-b border-[#2A2A2A]">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <span className={`mt-0.5 text-sm flex-shrink-0 ${feature.included ? "text-[#C9A84C]" : "text-[#2A2A2A]"}`}>
                          {feature.included ? "✓" : "✕"}
                        </span>
                        <span className={`text-sm ${feature.included ? "text-[#BBBBBB]" : "text-[#444444]"}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <a
                    href="#contact"
                    className={`block text-center py-3 px-6 text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#E8C97A]"
                        : "border border-[#2A2A2A] text-[#F5F0E8] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#888888] text-sm mb-2">Need a custom package?</p>
          <a href="#contact" className="text-[#C9A84C] text-sm hover:text-[#E8C97A] transition-colors duration-300 underline underline-offset-4">
            Let us build one for you →
          </a>
        </div>

      </div>
    </section>
  );
}
