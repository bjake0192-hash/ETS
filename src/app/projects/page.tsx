import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";

export const metadata: Metadata = {
  title: "Commercial Projects Portfolio | ETS Ltd",
  description: "Explore our portfolio of commercial and industrial electrical engineering projects, from office fit-outs to logistics infrastructure.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SubpageHero 
        title="OUR PORTFOLIO"
        subtitle="Showcasing our commitment to engineering excellence across the UK's most iconic commercial and industrial landmarks."
        imagePrompt="modern skyline with high-end commercial architecture and architectural lighting"
      />
      <Projects />
      <Stats />
      
      {/* Capability Statement Section */}
      <section className="py-24 bg-background border-t border-navy-900/10 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-navy-900 mb-8 tracking-tighter opacity-5 select-none uppercase">Scale & Authority</h2>
          <div className="max-w-3xl mx-auto -mt-12 md:-mt-16">
            <h3 className="text-3xl font-black text-navy-900 mb-6 uppercase tracking-tight">Delivering at Scale</h3>
            <p className="text-navy-900/70 text-lg leading-relaxed">
              From individual corporate headquarters to national logistics networks, 
              we have the resource, expertise, and infrastructure to deliver projects 
              of any scale, on time and on budget.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
