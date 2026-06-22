"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-yellow/5 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#fbf8f4] rounded-3xl p-12 md:p-24 border border-navy-900/10 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black text-navy-900 leading-[0.9] tracking-tighter mb-8">
              LET’S POWER YOUR <br />
              <span className="text-electric-yellow">NEXT PROJECT</span>
            </h2>
            <p className="text-xl text-navy-900/70 mb-12 leading-relaxed">
              Contact our engineering team today to discuss your commercial electrical 
              requirements and discover why ETS is the trusted choice for industry leaders.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="bg-electric-yellow text-white px-10 py-5 rounded-full font-black flex items-center gap-3 hover:bg-charcoal-800 transition-all transform hover:scale-105 shadow-2xl shadow-electric-yellow/20">
                START A CONVERSATION
                <ArrowRight size={20} />
              </button>
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
      </div>
    </section>
  );
}
