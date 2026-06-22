import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import Sectors from "@/components/sections/Sectors";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Specialist Sectors | ETS Ltd",
  description: "Specialized electrical engineering solutions for offices, industrial, healthcare, education, and retail sectors.",
};

export default function SectorsPage() {
  return (
    <main>
      <SubpageHero 
        title="SPECIALIZED SECTORS"
        subtitle="Tailored electrical infrastructure for a diverse range of industries, each with its own unique engineering requirements."
        imagePrompt="modern healthcare facility and university building architecture commercial"
      />
      <Sectors />
      
      {/* Sector Deep Dive */}
      <section className="py-24 bg-background border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { 
                 title: "Offices & Corporate", 
                 desc: "Creating high-performance workplaces with advanced lighting, data, and power solutions." 
               },
               { 
                 title: "Industrial & Warehousing", 
                 desc: "Heavy-duty infrastructure designed for reliability and 24/7 operational demand." 
               },
               { 
                 title: "Public Sector", 
                 desc: "Trusted partners for healthcare and education infrastructure across the UK." 
               }
             ].map((sector, i) => (
               <div key={i} className="p-10 rounded-2xl bg-[#fbf8f4] border border-navy-900/10 hover:border-electric-yellow/30 transition-all">
                  <h4 className="text-electric-yellow font-black uppercase tracking-widest text-xs mb-4">{sector.title}</h4>
                  <p className="text-navy-900/70 leading-relaxed">{sector.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
