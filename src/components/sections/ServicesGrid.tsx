"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    description: "Complete electrical fit-outs for offices, retail spaces, and corporate environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Factory,
    title: "Industrial Electrical",
    description: "Heavy-duty power distribution and control systems for factories and warehouses.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Planned and reactive maintenance to keep your business operations running smoothly.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    description: "Full EICR reports, PAT testing, and specialized system commissioning.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Leaf,
    title: "Energy Efficiency",
    description: "EV charging infrastructure and energy-saving lighting solutions for businesses.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting",
    description: "Design, installation, and testing of compliant emergency lighting systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: ShieldAlert,
    title: "Fire Alarm Systems",
    description: "Advanced fire detection and alarm systems tailored to commercial safety standards.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Network,
    title: "Data & Infrastructure",
    description: "Structured cabling, server room fit-outs, and integrated data solutions.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="services" className="py-12 md:py-16 bg-[#fbf8f4] relative overflow-hidden border-b border-navy-900/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/30 to-transparent" />
      <div className="absolute top-24 left-[8%] h-40 w-40 rounded-full bg-electric-yellow/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-[10%] h-52 w-52 rounded-full bg-charcoal-900/8 blur-3xl pointer-events-none" />
      <Reveal className="container mx-auto px-6 mb-12 sm:mb-16">
        <div className="surface-card relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 px-6 py-8 md:px-12 md:py-12 lg:px-14 lg:py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-yellow/10 via-transparent to-charcoal-900/5" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/70 to-transparent" />
          <div className="relative z-10 grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)] lg:items-end">
            <div>
              <span className="text-electric-yellow font-black tracking-widest uppercase text-[10px] sm:text-sm mb-4 block">
                OUR CORE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black text-navy-900 mb-6 tracking-[-0.04em] leading-[0.92]">
                ENGINEERING
                <span className="block text-navy-900/42">EXCELLENCE</span>
              </h2>
              <p className="max-w-2xl text-navy-900/65 leading-relaxed text-sm sm:text-base md:text-lg">
                Every service line is delivered with engineering rigor, compliance discipline,
                and a premium finish that reflects the ETS standard across commercial and
                industrial environments.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
                {["8 Core Service Lines", "Compliance-Led Delivery", "Commercial & Industrial"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/55 bg-white/45 px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-navy-900/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-white/50 bg-white/35 p-5 sm:p-7 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-navy-900/45 mb-4">
                Premium Delivery
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <p className="text-2xl sm:text-4xl font-black text-electric-yellow leading-none">End-to-End</p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-900/60">
                    From design and fit-out through maintenance, testing, and infrastructure support.
                  </p>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-electric-yellow/0 via-electric-yellow/35 to-electric-yellow/0" />
                <div>
                  <p className="text-2xl sm:text-4xl font-black text-navy-900 leading-none">High Reliability</p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-navy-900/60">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                animate={isActive ? { scale: 1.04, y: -8 } : { scale: 1, y: 0 }}
                className={`group relative px-6 py-6 sm:py-5 rounded-[1.75rem] sm:rounded-[1.75rem] surface-card border transition-all duration-500 overflow-hidden ${
                  isActive ? "border-electric-yellow shadow-2xl shadow-electric-yellow/10" : "border-white/50 hover:border-electric-yellow/55"
                }`}
              >
                {/* Background Image that fades in when active */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-30' : 'opacity-0'}`}
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/50 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                {/* Power Pulse Animation */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: [0, 1, 0], scale: [0.95, 1.08, 1.15] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-[1.75rem] border-2 border-electric-yellow/30 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                <div className={`relative z-10 mb-5 sm:mb-4 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner ${
                  isActive ? "bg-electric-yellow shadow-lg shadow-electric-yellow/30" : "bg-navy-900/5 group-hover:bg-electric-yellow"
                }`}>
                  <service.icon className={`transition-colors duration-500 ${
                    isActive ? "text-white" : "text-electric-yellow group-hover:text-white"
                  }`} size={22} />
                </div>

                <div className="relative z-10 flex items-start justify-between gap-4 mb-2">
                  <h3 className={`text-base sm:text-base font-bold tracking-tight transition-colors duration-500 ${
                    isActive ? "text-navy-900" : "text-navy-900"
                  }`}>
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className={`transition-all duration-500 shrink-0 ${
                      isActive ? "text-electric-yellow translate-x-1 -translate-y-1" : "text-navy-900/35 group-hover:text-electric-yellow group-hover:translate-x-1 group-hover:-translate-y-1"
                    }`}
                  />
                </div>
                <p className="relative z-10 text-navy-900/60 text-xs sm:text-[11px] leading-relaxed">
                  {service.description}
                </p>
                <div className={`relative z-10 mt-5 h-px w-full bg-gradient-to-r from-electric-yellow/0 via-electric-yellow/30 to-electric-yellow/0 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
                <p className={`relative z-10 mt-4 text-[10px] sm:text-[9px] font-black uppercase tracking-[0.22em] transition-colors duration-500 ${
                  isActive ? "text-electric-yellow" : "text-navy-900/35"
                }`}>
                  Precision Delivery
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
