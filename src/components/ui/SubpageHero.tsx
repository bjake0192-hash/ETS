"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  imagePrompt: string;
}

export default function SubpageHero({ title, subtitle, imagePrompt }: SubpageHeroProps) {
  const imageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(imagePrompt)}&image_size=landscape_16_9`;

  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/84 to-background/70" />
        <div className="absolute inset-0 mesh-overlay opacity-35" />
        <div className="absolute -top-12 right-[8%] h-56 w-56 rounded-full bg-electric-yellow/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full surface-card border border-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-navy-900/60 mb-6"
          >
            ETS Ltd
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-navy-900 leading-[0.92] mb-6 tracking-[-0.04em] uppercase"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-electric-yellow" : ""}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-navy-900/70 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 w-32 h-px bg-gradient-to-r from-electric-yellow via-electric-yellow/40 to-transparent"
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-900/15 to-transparent" />
    </section>
  );
}
