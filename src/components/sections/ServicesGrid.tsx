"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { 
  Building2, 
  Factory, 
  Wrench, 
  ClipboardCheck, 
  Leaf, 
  Lightbulb, 
  ShieldAlert, 
  Network 
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const services = [
  {
    icon: Building2,
    title: "Commercial Installations",
    description: "Complete electrical fit-outs for offices, retail spaces, and corporate environments."
  },
  {
    icon: Factory,
    title: "Industrial Electrical",
    description: "Heavy-duty power distribution and control systems for factories and warehouses."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Planned and reactive maintenance to keep your business operations running smoothly."
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    description: "Full EICR reports, PAT testing, and specialized system commissioning."
  },
  {
    icon: Leaf,
    title: "Energy Efficiency",
    description: "EV charging infrastructure and energy-saving lighting solutions for businesses."
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting",
    description: "Design, installation, and testing of compliant emergency lighting systems."
  },
  {
    icon: ShieldAlert,
    title: "Fire Alarm Systems",
    description: "Advanced fire detection and alarm systems tailored to commercial safety standards."
  },
  {
    icon: Network,
    title: "Data & Infrastructure",
    description: "Structured cabling, server room fit-outs, and integrated data solutions."
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/30 to-transparent" />
      <Reveal className="container mx-auto px-6 text-center mb-16">
        <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
          OUR CORE CAPABILITIES
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 mb-6 tracking-[-0.03em]">
          ENGINEERING EXCELLENCE
        </h2>
        <p className="max-w-2xl mx-auto text-navy-900/65 leading-relaxed">
          Designed to feel premium and dependable, every service line is delivered with engineering rigor,
          compliance discipline, and a finish that reflects the ETS standard.
        </p>
        <div className="w-24 h-1 bg-electric-yellow mx-auto mt-6" />
      </Reveal>

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative p-8 rounded-[2rem] surface-card border border-white/50 hover:border-electric-yellow/55 transition-all hover:-translate-y-3"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 bg-navy-900/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-electric-yellow transition-colors shadow-inner">
                <service.icon className="text-electric-yellow group-hover:text-white transition-colors" size={30} />
              </div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-navy-900 tracking-tight">
                  {service.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-navy-900/35 group-hover:text-electric-yellow group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-navy-900/60 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-electric-yellow/0 via-electric-yellow/30 to-electric-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-navy-900/35">
                Precision Delivery
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
