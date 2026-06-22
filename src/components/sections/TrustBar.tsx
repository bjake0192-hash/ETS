"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const trustItems = [
  {
    icon: Zap,
    title: "100% Commercial Focused",
    description: "Specialized in large-scale infrastructure and industrial systems."
  },
  {
    icon: ShieldCheck,
    title: "Safe & Compliant",
    description: "Fully accredited with NICEIC, CHAS, and SafeContractor."
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Over 25 years of electrical engineering expertise."
  },
  {
    icon: BarChart3,
    title: "Delivering Value",
    description: "Optimized solutions that power business efficiency."
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
              className="surface-card rounded-[1.75rem] border border-white/45 p-6 flex items-start gap-4"
            >
              <div className="mt-1 bg-electric-yellow/10 p-3 rounded-2xl">
                <item.icon className="text-electric-yellow" size={24} />
              </div>
              <div>
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
