"use client";

import { motion } from "framer-motion";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  imagePrompt: string;
}

export default function SubpageHero({ title, subtitle, imagePrompt }: SubpageHeroProps) {
  const imageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(imagePrompt)}&image_size=landscape_16_9`;

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-black text-navy-900 leading-tight mb-6 tracking-tighter uppercase">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-electric-yellow" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-xl text-navy-900/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy-900/15 to-transparent" />
    </section>
  );
}
