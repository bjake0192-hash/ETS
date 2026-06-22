"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Projects Completed", value: "1,200+" },
  { label: "Commercial Focus", value: "100%" },
  { label: "Skilled Engineers", value: "40+" }
];

const accreditations = [
  { 
    name: "NICEIC", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=NICEIC%20accreditation%20logo%20professional%20electrical%20safety%20white%20background&image_size=square",
    width: "w-24"
  },
  { 
    name: "CHAS", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=CHAS%20accreditation%20logo%20health%20and%20safety%20white%20background&image_size=square",
    width: "w-20"
  },
  { 
    name: "SafeContractor", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=SafeContractor%20accreditation%20logo%20professional%20standards%20white%20background&image_size=square",
    width: "w-32"
  },
  { 
    name: "Constructionline", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Constructionline%20accreditation%20logo%20industry%20standard%20white%20background&image_size=square",
    width: "w-32"
  }
];

export default function Stats() {
  return (
    <section className="py-28 bg-background border-t border-navy-900/10 relative overflow-hidden">
      <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-electric-yellow/8 blur-3xl" />
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="surface-card rounded-[2rem] border border-white/45 p-8 text-center"
            >
              <p className="text-5xl md:text-6xl font-black text-navy-900 mb-3 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-electric-yellow font-black tracking-widest uppercase text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Accreditations */}
        <Reveal className="pt-16 border-t border-navy-900/10">
          <p className="text-center text-navy-900/50 font-bold tracking-widest uppercase text-xs mb-12">
            CERTIFIED & ACCREDITED BY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {accreditations.map((brand, index) => (
              <motion.div 
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className={`${brand.width} h-20 relative flex items-center justify-center surface-card rounded-3xl border border-white/45 px-6`}>
                  <img 
                    src={brand.src} 
                    alt={`${brand.name} Accreditation`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
