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
      <div className="absolute top-24 left-[8%] h-40 w-40 rounded-full bg-electric-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-[10%] h-52 w-52 rounded-full bg-charcoal-900/8 blur-3xl pointer-events-none" />
      <Reveal className="container mx-auto px-6 mb-16">
        <div className="surface-card relative overflow-hidden rounded-[2.5rem] border border-white/50 px-8 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-yellow/10 via-transparent to-charcoal-900/5" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/70 to-transparent" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)] lg:items-end">
            <div>
              <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
                OUR CORE CAPABILITIES
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-[4.2rem] font-black text-navy-900 mb-6 tracking-[-0.04em] leading-[0.92]">
                ENGINEERING
                <span className="block text-navy-900/42">EXCELLENCE</span>
              </h2>
              <p className="max-w-2xl text-navy-900/65 leading-relaxed text-base md:text-lg">
                Every service line is delivered with engineering rigor, compliance discipline,
                and a premium finish that reflects the ETS standard across commercial and
                industrial environments.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["8 Core Service Lines", "Compliance-Led Delivery", "Commercial & Industrial"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/55 bg-white/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-navy-900/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/50 bg-white/35 p-6 md:p-7 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-navy-900/45">
                Premium Delivery
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-electric-yellow">End-to-End</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                    From design and fit-out through maintenance, testing, and infrastructure support.
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-electric-yellow/0 via-electric-yellow/35 to-electric-yellow/0" />
                <div>
                  <p className="text-3xl md:text-4xl font-black text-navy-900">High Reliability</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                    Built for demanding sites where uptime, safety, and clean execution matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
