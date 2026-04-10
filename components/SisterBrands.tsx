"use client";

export default function SisterBrands() {
  return (
    <section id="sister-brands" className="py-24 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Our Creative Family</span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-4">
            In-House Creative Studio
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Unlike most agencies that outsource their visuals, we have our own creative brands under one roof.
            This means faster delivery, tighter quality control, and a unified vision for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          <div className="group relative bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9A84C] transition-all duration-500 p-10">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#C9A84C] opacity-[0.03] -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="w-14 h-14 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm flex items-center justify-center mb-4 group-hover:border-[#C9A84C] transition-colors duration-500">
                  <span className="text-[#C9A84C] text-2xl font-serif font-bold">CC</span>
                </div>
                <h3 className="text-[#F5F0E8] text-2xl font-serif font-medium mb-1">Capture Crown</h3>
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Photography Studio</p>
              </div>
              <span className="text-[#2A2A2A] text-xs tracking-widest uppercase group-hover:text-[#C9A84C] transition-colors duration-500">Sister Brand</span>
            </div>

            <p className="text-[#888888] text-base leading-relaxed mb-8">
              Our dedicated photography studio specialising in food photography, commercial shoots,
              and brand content creation. Every image is crafted to make your product irresistible.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Food Photography", "Commercial Shoots", "Product Photography", "Brand Content"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#BBBBBB] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[#2A2A2A]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#111111] flex items-center justify-center">
                    <span className="text-[#C9A84C] text-[10px] font-bold">◈</span>
                  </div>
                ))}
              </div>
              <span className="text-[#888888] text-sm">100+ commercial shoots completed</span>
            </div>
          </div>

          <div className="group relative bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#C9A84C] transition-all duration-500 p-10">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#C9A84C] opacity-[0.03] -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="w-14 h-14 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm flex items-center justify-center mb-4 group-hover:border-[#C9A84C] transition-colors duration-500">
                  <span className="text-[#C9A84C] text-2xl font-serif font-bold">TP</span>
                </div>
                <h3 className="text-[#F5F0E8] text-2xl font-serif font-medium mb-1">Talukder Photography</h3>
                <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Cinematography Studio</p>
              </div>
              <span className="text-[#2A2A2A] text-xs tracking-widest uppercase group-hover:text-[#C9A84C] transition-colors duration-500">Sister Brand</span>
            </div>

            <p className="text-[#888888] text-base leading-relaxed mb-8">
              Professional cinematography and videography studio for brand films, product videos,
              reels, and commercial content that tells your story with cinematic quality.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Brand Films", "Product Videos", "Instagram Reels", "Event Coverage"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#BBBBBB] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[#2A2A2A]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border-2 border-[#111111] flex items-center justify-center">
                    <span className="text-[#C9A84C] text-[10px] font-bold">◎</span>
                  </div>
                ))}
              </div>
              <span className="text-[#888888] text-sm">50+ brand films produced</span>
            </div>
          </div>
        </div>

        <div className="relative bg-[#0A0A0A] border border-[#C9A84C] rounded-sm p-10 text-center overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">The Advantage</p>
            <h3 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] mb-4">
              Strategy + Visuals + Execution — All Under One Roof
            </h3>
            <p className="text-[#888888] max-w-2xl mx-auto text-base leading-relaxed">
              Most agencies outsource photography and video to freelancers. We own our creative studios.
              That means your brand gets a unified look, faster turnaround, and no communication gaps.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
