"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const heroImage = "/hero-bg.jpg";
  const certifications = [
    {
      name: "NICEIC",
      src: "/NICEIC-logo.png",
    },
    {
      name: "Certified SafeContractor",
      src: "/safecontractor.png",
    },
    {
      name: "Constructionline Gold",
      src: "/Constructionline-Gold-Logo.png",
    },
    {
      name: "OLEV Installer",
      src: "/OLEVInstaller.png",
    },
  ];

  const words = ["COMMERCIAL", "RESIDENTIAL"];
  const [activeCert, setActiveCert] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const certInterval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certifications.length);
    }, 3500);
    
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(certInterval);
      clearInterval(wordInterval);
    };
  }, [certifications.length, words.length]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 sm:pt-36 pb-24 sm:pb-36">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-background">
        <img 
          src={heroImage}
          alt="Commercial electrical infrastructure"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] scale-110"
          style={{ animation: 'ken-burns 20s infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 mesh-overlay opacity-40" />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-[8%] h-56 w-56 rounded-full bg-electric-yellow/12 blur-3xl hidden sm:block"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full bg-charcoal-900/10 blur-3xl hidden sm:block"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="max-w-4xl">
            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem] font-black text-navy-900 leading-[1.05] sm:leading-[0.9] tracking-[-0.04em] mb-6 flex flex-col items-start"
            >
              <span className="inline-grid overflow-hidden h-[1.1em] sm:h-[1em]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="col-start-1 row-start-1"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-electric-yellow">ELECTRICAL</span>
              <span>SPECIALISTS</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-lg md:text-xl text-navy-900/70 max-w-2xl mb-10 leading-relaxed"
            >
              Delivering high-end electrical engineering and infrastructure solutions
              for the UK's most demanding commercial and industrial environments.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-14">
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/services"
                  className="group bg-electric-yellow text-white px-10 h-16 rounded-full font-black flex items-center justify-center gap-3 hover:bg-charcoal-800 transition-all shadow-[0_18px_40px_rgba(168,97,38,0.24)] whitespace-nowrap"
                >
                  OUR SERVICES
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
          </div>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between gap-10 w-full mt-12 relative">
            {/* Soft lighter overlay behind the entire bottom row to illuminate text and logos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[350%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.65)_0%,_rgba(255,255,255,0)_75%)] pointer-events-none -z-10" />
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 text-[11px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-widest text-navy-900/80 relative z-10 max-w-2xl">
              <span className="flex items-center gap-2 whitespace-nowrap"><span className="text-electric-yellow">25+</span> Years Experience</span>
              <span className="text-navy-900/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 whitespace-nowrap"><span className="text-electric-yellow">✓</span> NICEIC Approved</span>
              <span className="text-navy-900/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 whitespace-nowrap"><span className="text-electric-yellow">✓</span> SafeContractor</span>
              <span className="text-navy-900/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-2 whitespace-nowrap"><span className="text-electric-yellow">✓</span> Commercial Specialists</span>
              <span className="text-navy-900/30 hidden lg:inline">•</span>
              <span className="flex items-center gap-2 whitespace-nowrap"><span className="text-electric-yellow">✓</span> Nationwide Projects</span>
            </div>
            
            <div className="flex items-center shrink-0 relative z-10 self-start md:self-center bg-white/40 backdrop-blur-sm p-3 rounded-2xl border border-white/60 sm:bg-transparent sm:backdrop-blur-none sm:p-0 sm:border-none">
              <span className="relative h-12 w-32 sm:h-16 sm:w-44 flex items-center justify-center overflow-hidden z-10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCert}
                    src={certifications[activeCert].src}
                    alt={certifications[activeCert].name}
                    initial={{ opacity: 0, scale: 0.9, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full h-full object-contain"
                  />
                </AnimatePresence>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
