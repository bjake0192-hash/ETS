import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import Sectors from "@/components/sections/Sectors";
import CTA from "@/components/sections/CTA";
import { Building2, Factory, Stethoscope, ShoppingBag, GraduationCap, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialist Sectors | ETS Ltd",
  description: "Specialized electrical engineering solutions for offices, industrial, healthcare, education, and retail sectors.",
};

const deepSectors = [
  {
    icon: <Building2 size={32} className="text-white" />,
    title: "Commercial & Corporate",
    subtitle: "High-Performance Workplaces",
    desc: "Modern office environments require robust, flexible electrical infrastructure. From Cat A/B fit-outs to intelligent lighting and power distribution systems, we deliver environments that foster productivity.",
    points: ["Architectural Lighting Systems", "Floor Box & Underfloor Power", "Server Room Infrastructure", "Energy Management"],
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    icon: <Factory size={32} className="text-white" />,
    title: "Industrial & Logistics",
    subtitle: "24/7 Operational Reliability",
    desc: "Downtime is not an option in logistics and manufacturing. We engineer heavy-duty electrical systems designed to withstand harsh environments and continuous high-load demand.",
    points: ["High Voltage Installations", "Machinery Power Drops", "High-Bay LED Lighting", "Automated Control Systems"],
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Stethoscope size={32} className="text-white" />,
    title: "Healthcare",
    subtitle: "Critical Systems & Compliance",
    desc: "Working in live healthcare environments requires extreme care, precision, and infection control. We install critical backup systems and medical-grade infrastructure.",
    points: ["Uninterruptible Power Supplies (UPS)", "Medical IT Systems", "Nurse Call Installations", "HTM 06-01 Compliance"],
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    icon: <ShoppingBag size={32} className="text-white" />,
    title: "Retail & Leisure",
    subtitle: "Customer-Centric Environments",
    desc: "In retail, atmosphere is everything. We work alongside designers and architects to deliver complex lighting schemes and point-of-sale infrastructure that enhance the customer experience.",
    points: ["Display & Accent Lighting", "POS Power Infrastructure", "Fire Alarm Systems", "Fast-Track Fit-outs"],
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <GraduationCap size={32} className="text-white" />,
    title: "Education",
    subtitle: "Safe Learning Spaces",
    desc: "From primary schools to university campuses, we upgrade legacy systems and install modern technologies to create safe, energy-efficient learning environments.",
    points: ["Campus Networking & Power", "Interactive Classroom Setup", "Safeguarding & Access Control", "Holiday Period Scheduling"],
    bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
  },
  {
    icon: <Zap size={32} className="text-white" />,
    title: "EV & Green Energy",
    subtitle: "Sustainable Infrastructure",
    desc: "As the UK transitions to sustainable energy, we are at the forefront of installing scalable electric vehicle charging networks and renewable integration for commercial clients.",
    points: ["Commercial Fleet Charging", "Public Infrastructure", "Load Management Systems", "Renewable Integration"],
    bgImage: "https://images.unsplash.com/photo-1620803593652-19e340a631e8?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function SectorsPage() {
  return (
    <main>
      <SubpageHero 
        title="SPECIALIZED SECTORS"
        subtitle="Tailored electrical infrastructure for a diverse range of industries, each with its own unique engineering requirements."
        imagePrompt="modern healthcare facility and university building architecture commercial"
      />
      
      {/* Sector Deep Dive */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-electric-yellow font-black tracking-widest uppercase text-[10px] sm:text-sm mb-4 block">Industry Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tighter uppercase mb-6 leading-tight">Cross-Sector <span className="text-navy-900/60">Capability</span></h2>
            <p className="text-base sm:text-lg text-navy-900/70 leading-relaxed">
              We understand that every sector has distinct operational demands, compliance standards, 
              and working environments. Our specialized teams are trained to adapt to these unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             {deepSectors.map((sector, i) => (
               <div key={i} className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[450px] sm:min-h-[500px] flex flex-col justify-end">
                  {/* Background Image */}
                  <img 
                    src={sector.bgImage} 
                    alt={sector.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-electric-yellow rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-xl -translate-y-2 sm:-translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="scale-75 sm:scale-100">
                        {sector.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-electric-yellow font-black uppercase tracking-widest text-[10px] sm:text-xs mb-3">{sector.subtitle}</h4>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">{sector.title}</h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                      {sector.desc}
                    </p>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {sector.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-electric-yellow rounded-full mt-1.5 sm:mt-2 shrink-0" />
                          <span className="text-white/90 text-xs sm:text-sm font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
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
