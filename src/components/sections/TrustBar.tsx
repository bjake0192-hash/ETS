"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const trustItems = [
  {
    icon: Zap,
    title: "100% Commercial Focused",
    description: "Specialized in large-scale infrastructure and industrial systems.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20commercial%20electrical%20plantroom%20infrastructure%20premium%20architectural%20photography%20soft%20lighting&image_size=landscape_4_3",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Compliant",
    description: "Fully accredited with NICEIC, CHAS, and SafeContractor.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=electrical%20safety%20inspection%20commercial%20site%20clipboard%20hard%20hat%20premium%20editorial%20style&image_size=landscape_4_3",
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Over 25 years of electrical engineering expertise.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20commercial%20electrical%20engineers%20on%20site%20teamwork%20premium%20corporate%20photography&image_size=landscape_4_3",
  },
  {
    icon: BarChart3,
    title: "Delivering Value",
    description: "Optimized solutions that power business efficiency.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high-end%20commercial%20electrical%20control%20room%20efficiency%20analytics%20screens%20clean%20industrial%20environment&image_size=landscape_4_3",
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
