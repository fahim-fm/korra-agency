"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#sister-brands" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A84C] rounded-sm flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#F5F0E8] text-lg font-bold tracking-wide">Korra</span>
                <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase">Marketing Agency</span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[#BBBBBB] text-sm tracking-wide hover:text-[#C9A84C] transition-colors duration-300 relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a href="#contact" className="px-5 py-2.5 bg-[#C9A84C] text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-[#E8C97A] transition-colors duration-300 rounded-sm">
                Get a Free Audit
              </a>
            </div>

            <button className="md:hidden text-[#F5F0E8] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-3xl text-[#F5F0E8] hover:text-[#C9A84C] transition-colors duration-300">
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 px-8 py-3 bg-[#C9A84C] text-[#0A0A0A] font-semibold tracking-wide hover:bg-[#E8C97A] transition-colors duration-300 rounded-sm">
          Get a Free Audit
        </a>
      </div>
    </>
  );
}
