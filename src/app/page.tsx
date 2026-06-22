import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Sectors from "@/components/sections/Sectors";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      
      {/* Home page serves as a high-level summary of all capabilities */}
      <About />
      <ServicesGrid />
      <Stats />
      <Projects />
      <Sectors />
      <CTA />
    </main>
  );
}
