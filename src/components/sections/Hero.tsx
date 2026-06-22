"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const heroImage = "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20commercial%20building%20electrical%20infrastructure%20high-end%20architecture%20bright%20daylight%20clean%20minimal&image_size=landscape_16_9";

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
          style={{ 
            backgroundImage: `url('${heroImage}')`,
            animation: 'ken-burns 20s infinite alternate'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-navy-900 leading-[0.95] tracking-tighter mb-6">
              COMMERCIAL <br />
              <span className="text-electric-yellow">ELECTRICAL</span> <br />
              SPECIALISTS
            </h1>
            <p className="text-lg md:text-xl text-navy-900/70 max-w-xl mb-8 leading-relaxed">
              Delivering high-end electrical engineering and infrastructure solutions 
              for the UK's most demanding commercial and industrial environments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#services"
                className="group bg-electric-yellow text-navy-900 px-8 py-4 rounded font-black flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1"
              >
                OUR SERVICES
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#projects"
                className="px-8 py-4 rounded border-2 border-navy-900/20 text-navy-900 font-black hover:bg-navy-900/5 transition-all transform hover:-translate-y-1"
              >
                VIEW PROJECTS
              </Link>
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
