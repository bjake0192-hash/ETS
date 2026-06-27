import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import Sectors from "@/components/sections/Sectors";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      
      {/* Home page serves as a high-level summary of all capabilities */}
      <FeaturedProjects />
      <About />
      <ServicesGrid />
      <Stats />
      <Sectors />
      <CTA />
    </main>
  );
}
