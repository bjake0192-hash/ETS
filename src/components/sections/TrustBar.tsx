"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const trustItems = [
  {
    title: "NICEIC Approved",
    description: "Certified for all commercial and industrial electrical installations.",
    image: "/NICEIC-logo.png"
  },
  {
    title: "CHAS Elite",
    description: "Advanced health and safety compliance and risk management.",
    image: "/chas%20elite.png"
  },
  {
    title: "Avetta Certified",
    description: "Pre-qualified supply chain risk management and safety.",
    image: "/avetta-member-logo.png"
  },
  {
    title: "Constructionline Gold",
    description: "Verified to the highest standard of public and private sector procurement.",
    image: "/Constructionline-Gold-Logo.png"
  },
  {
    title: "OLEV Installer",
    description: "Approved installer for workplace and commercial EV charging grants.",
    image: "/OLEVInstaller.png"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative surface-card rounded-[1.75rem] border border-white/45 p-6 flex flex-col items-start gap-4 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-electric-yellow/55"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/50 to-background/30 group-hover:from-electric-yellow/15 group-hover:via-background/60 group-hover:to-background/50 transition-colors duration-500" />
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 h-16 w-full flex items-center justify-start mb-2">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="max-h-full max-w-[80%] object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              <div className="relative z-10">
                <p className="text-xs text-navy-900/60 leading-snug">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
