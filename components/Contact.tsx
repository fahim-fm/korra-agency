"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Get In Touch</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-6">
                Let us Grow
                <br />
                <span className="text-[#C9A84C] italic">Your Business</span>
              </h2>
              <p className="text-[#888888] text-lg leading-relaxed mb-12">
                Book a free 30-minute strategy call and we will audit your current digital presence,
                identify the biggest growth opportunities, and show you exactly how Korra can help.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: "◎", label: "Email", value: "hello@korraagency.com" },
                  { icon: "◈", label: "WhatsApp", value: "+880 1XXX-XXXXXX" },
                  { icon: "◐", label: "Location", value: "Dhaka, Bangladesh" },
                  { icon: "◉", label: "Working Hours", value: "Sun – Thu, 9AM – 7PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#111111] border border-[#2A2A2A] rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A84C]">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-[#888888] text-xs tracking-widest uppercase mb-1">{item.label}</p>
                      <p className="text-[#F5F0E8] text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[#888888] text-xs tracking-widest uppercase mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 border border-[#2A2A2A] text-[#888888] text-xs tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 rounded-sm"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#2A2A2A] rounded-sm p-8 md:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-[#1A1A1A] border border-[#C9A84C] rounded-full flex items-center justify-center mb-6">
                    <span className="text-[#C9A84C] text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-3">Message Sent!</h3>
                  <p className="text-[#888888] text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. We will get back to you within 24 hours with your free audit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 border border-[#2A2A2A] text-[#888888] text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 rounded-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-[#444444]"
                      />
                    </div>
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-[#444444]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-[#444444]"
                      />
                    </div>
                    <div>
                      <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                      >
                        <option value="" className="text-[#444444]">Select a service</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="photography">Photography & Cinematography</option>
                        <option value="meta-ads">Meta Ads</option>
                        <option value="branding">Brand Identity</option>
                        <option value="website">Website Design</option>
                        <option value="full-service">Full-Service Package</option>
                        <option value="other">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Monthly Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-15k">Under ৳15,000</option>
                      <option value="15k-35k">৳15,000 – ৳35,000</option>
                      <option value="35k-75k">৳35,000 – ৳75,000</option>
                      <option value="above-75k">Above ৳75,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[#888888] text-xs tracking-widest uppercase block mb-2">Tell Us About Your Business *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What does your business do? What are your goals?"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] text-[#F5F0E8] text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 placeholder:text-[#444444] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#C9A84C] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-all duration-300 rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Get My Free Audit →"}
                  </button>

                  <p className="text-[#444444] text-xs text-center">
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] border-t border-[#2A2A2A] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C9A84C] rounded-sm flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold text-lg font-serif">K</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[#F5F0E8] text-lg font-bold tracking-wide">Korra</span>
                  <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">Marketing Agency</span>
                </div>
              </div>
              <p className="text-[#888888] text-sm leading-relaxed max-w-sm mb-6">
                Full-service digital marketing and content creation agency helping local businesses
                grow in the digital space. Creative storytelling, professional visuals, real results.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[#888888] text-xs">Currently accepting new clients</span>
              </div>
            </div>

            <div>
              <p className="text-[#F5F0E8] text-sm font-medium mb-6">Services</p>
              <ul className="space-y-3">
                {["Social Media Management", "Photography & Film", "Meta Ads", "Brand Identity", "Content Strategy", "Web Design"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-[#888888] text-sm hover:text-[#C9A84C] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#F5F0E8] text-sm font-medium mb-6">Company</p>
              <ul className="space-y-3">
                {[
                  { label: "Our Work", href: "#portfolio" },
                  { label: "How We Work", href: "#approach" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Capture Crown", href: "#sister-brands" },
                  { label: "Talukder Photography", href: "#sister-brands" },
                  { label: "Contact Us", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#888888] text-sm hover:text-[#C9A84C] transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#444444] text-xs">
              © {new Date().getFullYear()} Korra Marketing Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" className="text-[#444444] text-xs hover:text-[#888888] transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
