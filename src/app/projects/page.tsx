import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Stats from "@/components/sections/Stats";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Projects Portfolio | ETS Ltd",
  description: "Explore our portfolio of commercial and industrial electrical engineering projects, from office fit-outs to logistics infrastructure.",
};

const caseStudies = [
  {
    title: "Global Tech Headquarters",
    location: "Central London",
    type: "Complete Commercial Fit-out",
    value: "£2.4M",
    duration: "14 Months",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "National Logistics Hub",
    location: "Manchester Gateway",
    type: "Industrial Infrastructure",
    value: "£1.8M",
    duration: "9 Months",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Advanced Research Facility",
    location: "Cambridge Science Park",
    type: "Specialist Engineering",
    value: "£3.1M",
    duration: "18 Months",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Metro Retail Center",
    location: "Birmingham City Centre",
    type: "Retail Power Systems",
    value: "£950k",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "NHS Healthcare Trust",
    location: "Leeds",
    type: "Critical Power & Backup",
    value: "£1.2M",
    duration: "11 Months",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "EV Fleet Charging Network",
    location: "Nationwide Rollout",
    type: "Infrastructure",
    value: "£4.5M",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1620803593652-19e340a631e8?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <SubpageHero 
        title="OUR PORTFOLIO"
        subtitle="Showcasing our commitment to engineering excellence across the UK's most iconic commercial and industrial landmarks."
        imagePrompt="modern skyline with high-end commercial architecture and architectural lighting"
      />
      
      {/* Featured Projects Carousel (from homepage) */}
      <div className="pt-24 bg-background">
        <FeaturedProjects />
      </div>

      {/* Case Studies Grid */}
      <section className="py-32 bg-[#fbf8f4] border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tighter uppercase mb-6">Proven <span className="text-navy-900/60">Delivery</span></h2>
            <p className="text-lg text-navy-900/70 leading-relaxed">
              Explore our extensive track record of delivering complex electrical installations 
              on time and within budget, across a variety of demanding sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-navy-900/10 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0" />
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 uppercase tracking-wider">
                    {study.duration}
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-electric-yellow font-black tracking-widest uppercase text-xs mb-2 block">{study.type}</span>
                  <h3 className="text-xl font-black text-navy-900 mb-2 leading-tight">{study.title}</h3>
                  <p className="text-navy-900/50 text-sm font-medium mb-6">{study.location}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-navy-900/10">
                    <div>
                      <p className="text-[10px] text-navy-900/60 uppercase tracking-widest font-bold mb-1">Project Value</p>
                      <p className="text-navy-900 font-black">{study.value}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center group-hover:bg-electric-yellow transition-colors duration-300">
                      <ArrowUpRight size={18} className="text-navy-900 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </main>
  );
}
