"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const heroImage = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20commercial%20building%20electrical%20infrastructure%20high-end%20architecture%20bright%20daylight%20clean%20minimal&image_size=landscape_16_9";
  const certifications = [
    {
      name: "NICEIC",
      src: "/NICEIC-logo.jpg",
    },
    {
      name: "CHAS Elite",
      src: "/chas%20elite.jpeg",
    },
    {
      name: "Avetta",
      src: "/avetta-member-logo.png",
    },
    {
      name: "Constructionline Gold",
      src: "/Constructionline-Gold-Logo.png",
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 sm:pt-36 pb-36">
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="max-w-4xl">
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
          </div>

          <div className="mt-7 w-full">
            <div className="surface-card relative overflow-hidden border border-white/55 rounded-[2rem] px-5 sm:px-7 py-4 shadow-[0_24px_60px_rgba(26,21,18,0.08)] backdrop-blur-xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-electric-yellow/60 to-transparent" />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-navy-900/55 whitespace-nowrap lg:min-w-fit">
                  Certified & Accredited
                </p>
                <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4">
                  {certifications.map((brand) => (
                    <div key={brand.name} className="h-20 flex items-center justify-center px-2">
                      <img
                        src={brand.src}
                        alt={brand.name}
                        className="max-h-12 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
