import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
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
      
      {/* Detailed Service Breakdown Section */}
      <section className="py-24 bg-white border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-black text-navy-900 mb-8 tracking-tighter uppercase">Powering Modern <span className="text-electric-yellow">Industry</span></h2>
              <p className="text-lg text-navy-900/70 leading-relaxed mb-8">
                Our approach combines traditional engineering excellence with modern technology. 
                We don't just install systems; we design infrastructure that supports business 
                continuity and operational efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-electric-yellow font-black uppercase tracking-widest text-xs mb-4">Design & Build</h4>
                  <p className="text-sm text-navy-900/60 leading-relaxed">Complete turnkey solutions from initial concept and CAD design to final commissioning.</p>
                </div>
                <div>
                  <h4 className="text-electric-yellow font-black uppercase tracking-widest text-xs mb-4">Compliance</h4>
                  <p className="text-sm text-navy-900/60 leading-relaxed">Rigorous testing and certification to ensure 100% compliance with BS7671 standards.</p>
                </div>
              </div>
            </div>
            <div className="relative">
               <img 
                 src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=complex%20industrial%20electrical%20wiring%20system%20organized%20professional&image_size=landscape_4_3" 
                 alt="Technical Detail"
                 className="rounded-2xl border border-navy-900/10"
               />
               <div className="absolute -bottom-6 -left-6 bg-electric-yellow p-8 rounded-xl hidden md:block">
                  <p className="text-navy-900 font-black text-3xl">Quality <br/>Assured</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
