"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const points = [
    "Comprehensive Commercial Installations",
    "Specialist Industrial Systems",
    "Energy Efficiency Consultation",
    "Ongoing Maintenance & Compliance"
  ];

  const aboutImage = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop";

  return (
    <section id="about" className="py-20 bg-background overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-[34%] bg-electric-yellow/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-square accent-ring">
              <img 
                src={aboutImage} 
                alt="Commercial Electrical Infrastructure"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-electric-yellow/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-electric-yellow/10 rounded-full blur-3xl z-0" />
            
            <div className="absolute bottom-8 right-8 surface-card border border-white/45 p-6 rounded-2xl z-20 hidden md:block">
              <p className="text-4xl font-black text-electric-yellow mb-1">25+</p>
              <p className="text-sm font-bold text-navy-900 tracking-wider uppercase">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <Reveal className="w-full lg:w-[55%]">
            <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
              ESTABLISHED AUTHORITY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 leading-[0.95] mb-8 tracking-[-0.03em]">
              POWERING COMMERCIAL <br />
              <span className="text-navy-900/40">INFRASTRUCTURE</span>
            </h2>
            <p className="text-lg text-navy-900/70 mb-8 leading-relaxed">
              At Electro Technical Systems (ETS) Ltd, we have evolved from a local electrical 
              provider into a leading commercial engineering contractor. Our focus is purely 
              on delivering complex, high-reliability electrical systems for industrial 
              and commercial sectors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <div key={i} className="surface-card rounded-2xl border border-white/45 px-4 py-4 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-electric-yellow" />
                  <span className="text-navy-900 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <motion.div whileHover={{ x: 6 }}>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-electric-yellow font-black tracking-wider uppercase hover:text-navy-900 transition-colors group"
              >
                Learn More About Our Capability
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
