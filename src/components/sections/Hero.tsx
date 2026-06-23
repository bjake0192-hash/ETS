"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const heroImage = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20commercial%20building%20electrical%20infrastructure%20high-end%20architecture%20bright%20daylight%20clean%20minimal&image_size=landscape_16_9";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-36 sm:pt-40 pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
          style={{ 
            backgroundImage: `url('${heroImage}')`,
            animation: 'ken-burns 20s infinite alternate'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 mesh-overlay opacity-40" />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-[8%] h-56 w-56 rounded-full bg-electric-yellow/12 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-charcoal-900/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-end">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.6rem] xl:text-[5.2rem] font-black text-navy-900 leading-[0.9] tracking-[-0.04em] mb-6"
            >
              COMMERCIAL <br />
              <span className="text-electric-yellow">ELECTRICAL</span> <br />
              SPECIALISTS
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-navy-900/70 max-w-2xl mb-8 leading-relaxed"
            >
              Delivering high-end electrical engineering and infrastructure solutions 
              for the UK's most demanding commercial and industrial environments.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-stretch">
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/services"
                  className="group bg-electric-yellow text-white px-8 h-14 rounded-full font-black inline-flex items-center justify-center gap-2 hover:bg-charcoal-800 transition-all shadow-[0_18px_40px_rgba(168,97,38,0.24)] whitespace-nowrap"
                >
                  OUR SERVICES
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/projects"
                  className="surface-card px-8 h-14 rounded-full border border-navy-900/15 text-navy-900 font-black hover:bg-navy-900/5 transition-all inline-flex items-center justify-center whitespace-nowrap"
                >
                  VIEW PROJECTS
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3 max-w-3xl"
            >
              {[
                { value: "25+", label: "Years Delivering Complex Installations" },
                { value: "1,200+", label: "Projects Completed Across the UK" },
                { value: "24/7", label: "Responsive Support for Critical Environments" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="surface-card rounded-3xl border border-white/45 p-5"
                >
                  <p className="text-3xl font-black text-navy-900">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="surface-card rounded-[2rem] border border-white/45 p-6 relative overflow-hidden">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/70 to-transparent" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy-900/45">
                Premium Delivery
              </p>
              <div className="mt-8 space-y-6">
                {[
                  "Large-scale commercial fit-outs",
                  "Industrial power and infrastructure",
                  "Compliance-led delivery and maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.12 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 h-3 w-3 rounded-full bg-electric-yellow shadow-[0_0_0_6px_rgba(168,97,38,0.12)]" />
                    <p className="text-sm leading-relaxed text-navy-900/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-navy-900/20 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-electric-yellow rounded-full"
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
