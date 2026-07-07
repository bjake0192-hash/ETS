import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesBreakdown from "@/components/sections/ServicesBreakdown";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Commercial Electrical Services | ETS Ltd",
  description: "Comprehensive commercial and industrial electrical services including installations, maintenance, testing, and EV charging infrastructure.",
};

export default function ServicesPage() {
  return (
    <main>
      <SubpageHero 
        title="ENGINEERING SERVICES"
        subtitle="Specialized electrical solutions tailored for commercial, industrial, and infrastructure projects across the UK."
        imagePrompt="industrial power distribution room modern electrical systems high-tech"
      />
      <ServicesGrid />
      
      {/* Detailed Service Breakdown Section (Client Component) */}
      <ServicesBreakdown />
      
      <CTA />
    </main>
  );
}
