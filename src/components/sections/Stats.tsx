"use client";

import { motion } from "framer-motion";

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
    <section className="py-24 bg-background border-t border-navy-900/10">
      <div className="container mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-6xl md:text-7xl font-black text-navy-900 mb-2 tracking-tighter">
                {stat.value}
              </p>
              <p className="text-electric-yellow font-black tracking-widest uppercase text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Accreditations */}
        <div className="pt-16 border-t border-navy-900/10">
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
                <div className={`${brand.width} h-16 relative flex items-center justify-center`}>
                  <img 
                    src={brand.src} 
                    alt={`${brand.name} Accreditation`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
