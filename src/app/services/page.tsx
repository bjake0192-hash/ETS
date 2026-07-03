import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTA from "@/components/sections/CTA";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Electrical Services | ETS Ltd",
  description: "Comprehensive commercial and industrial electrical services including installations, maintenance, testing, and EV charging infrastructure.",
};

const detailedServices = [
  {
    title: "Commercial Installations",
    description: "End-to-end electrical design and installation for large-scale commercial spaces, office fit-outs, and retail environments. We ensure minimal disruption and maximum operational efficiency.",
    features: ["Office Fit-outs & Refurbishments", "Retail & Hospitality Systems", "Custom Lighting Design", "Power Distribution"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Industrial Infrastructure",
    description: "Robust power solutions designed to withstand the harsh conditions of manufacturing facilities, warehouses, and logistics hubs.",
    features: ["High Voltage Systems", "Machinery Connections", "Warehouse Lighting", "Control Panel Wiring"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "EV Fleet Charging",
    description: "As an OLEV approved installer, we provide scalable electric vehicle charging infrastructure for commercial fleets, public car parks, and workplace environments.",
    features: ["Site Capacity Assessments", "Multi-Point Installations", "Load Balancing Systems", "Ongoing Maintenance"],
    image: "https://images.unsplash.com/photo-1620803593652-19e340a631e8?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Testing & Compliance",
    description: "Rigorous inspection and testing services to ensure your facilities remain 100% compliant with the latest BS7671 electrical safety regulations.",
    features: ["EICR Certificates", "Emergency Lighting Tests", "Thermal Imaging", "PAT Testing"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <main>
      <SubpageHero 
        title="ENGINEERING SERVICES"
        subtitle="Specialized electrical solutions tailored for commercial, industrial, and infrastructure projects across the UK."
        imagePrompt="industrial power distribution room modern electrical systems high-tech"
      />
      <ServicesGrid />
      
      {/* Detailed Service Breakdown Section */}
      <section className="py-24 bg-background border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tighter uppercase mb-6">Deep Technical <span className="text-electric-yellow">Capability</span></h2>
            <p className="text-lg text-navy-900/70 leading-relaxed">
              Our approach combines traditional engineering excellence with modern technology. 
              We don't just install systems; we design infrastructure that supports business 
              continuity, safety, and operational efficiency.
            </p>
          </div>

          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <div key={index} className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-electric-yellow/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-navy-900/10 shadow-xl relative">
                    <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-lg text-navy-900/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-electric-yellow shrink-0" />
                        <span className="text-navy-900 font-bold uppercase text-xs tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 text-electric-yellow font-black tracking-wider uppercase hover:text-navy-900 transition-colors group"
                  >
                    View Related Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
