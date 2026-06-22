"use client";

import { motion } from "framer-motion";
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
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
          OUR CORE CAPABILITIES
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6">
          ENGINEERING EXCELLENCE
        </h2>
        <div className="w-24 h-1 bg-electric-yellow mx-auto" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-2xl bg-white border border-navy-900/10 hover:border-electric-yellow/60 transition-all hover:-translate-y-2"
            >
              <div className="mb-6 bg-navy-900/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-electric-yellow transition-colors">
                <service.icon className="text-electric-yellow group-hover:text-navy-900 transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-navy-900/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
