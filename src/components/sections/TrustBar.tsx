"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const trustItems = [
  {
    title: "Established Authority",
    description: "Over 25 years of engineering excellence in the UK.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Compliance Driven",
    description: "Rigorous safety standards and full industry accreditation.",
    icon: CheckCircle2,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Expert Engineering",
    description: "Highly skilled team of certified electrical specialists.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Operational Uptime",
    description: "Responsive 24/7 support for critical environments.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function TrustBar() {
  return (
    <section className="bg-background border-y border-navy-900/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 mesh-overlay opacity-20" />
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative surface-card rounded-[1.75rem] border border-white/45 p-6 flex items-start gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-electric-yellow/55"
            >
              <img 
                src={item.image} 
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/50 to-background/30 group-hover:from-electric-yellow/15 group-hover:via-background/60 group-hover:to-background/50 transition-colors duration-500" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 mt-1 bg-electric-yellow/10 p-3 rounded-2xl transition-colors duration-300 group-hover:bg-electric-yellow">
                <item.icon className="text-electric-yellow group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="text-navy-900 font-bold tracking-tight mb-1">{item.title}</h3>
                <p className="text-sm text-navy-900/60 leading-snug">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
