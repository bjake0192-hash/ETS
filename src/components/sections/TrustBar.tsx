"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react";

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
    <section className="bg-background border-y border-navy-900/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 bg-electric-yellow/10 p-2 rounded-lg">
                <item.icon className="text-electric-yellow" size={24} />
              </div>
              <div>
                <h3 className="text-navy-900 font-bold tracking-tight mb-1">{item.title}</h3>
                <p className="text-sm text-navy-900/60 leading-snug">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
