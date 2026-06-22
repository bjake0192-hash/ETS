"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-yellow/8 skew-x-12 translate-x-1/4" />
      <div className="absolute inset-0 mesh-overlay opacity-30" />
      
      <Reveal className="container mx-auto px-6 relative z-10">
        <div className="surface-card rounded-[2rem] p-12 md:p-24 border border-white/45 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric-yellow/8 via-transparent to-charcoal-900/5" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/80 to-transparent" />
          <motion.div
            animate={{ x: ["-10%", "12%", "-10%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-electric-yellow/10 blur-3xl"
          />
          <div className="max-w-3xl">
            <p className="text-electric-yellow font-black uppercase tracking-[0.28em] text-xs mb-4">
              Ready To Talk
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-navy-900 leading-[0.9] tracking-tighter mb-8 relative z-10">
              LET’S POWER YOUR <br />
              <span className="text-electric-yellow">NEXT PROJECT</span>
            </h2>
            <p className="text-xl text-navy-900/70 mb-12 leading-relaxed relative z-10">
              Contact our engineering team today to discuss your commercial electrical 
              requirements and discover why ETS is the trusted choice for industry leaders.
            </p>
            
            <div className="flex flex-wrap gap-6 relative z-10">
              <motion.button
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-electric-yellow text-white px-10 py-5 rounded-full font-black flex items-center gap-3 hover:bg-charcoal-800 transition-all shadow-2xl shadow-electric-yellow/20"
              >
                START A CONVERSATION
                <ArrowRight size={20} />
              </motion.button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-900/5 flex items-center justify-center border border-navy-900/10">
                  <Phone size={20} className="text-electric-yellow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-900/50 uppercase tracking-widest">Call Us</p>
                  <p className="text-navy-900 font-black text-lg">01234 567 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
