import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import SisterBrands from "@/components/SisterBrands";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Approach />
      <Portfolio />
      <SisterBrands />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}