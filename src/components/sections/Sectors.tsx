"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Settings, 
  Box, 
  GraduationCap, 
  Activity, 
  ShoppingBag 
} from "lucide-react";

const sectors = [
  { name: "Offices", icon: Briefcase },
  { name: "Industrial", icon: Settings },
  { name: "Warehousing", icon: Box },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: Activity },
  { name: "Retail", icon: ShoppingBag }
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
          INDUSTRIES WE SERVE
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-navy-900">
          SPECIALIZED SECTORS
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 rounded-xl bg-[#fbf8f4] border border-navy-900/10 flex flex-col items-center justify-center text-center hover:bg-electric-yellow transition-all duration-300"
            >
              <sector.icon 
                size={32} 
                className="text-electric-yellow group-hover:text-navy-900 mb-4 transition-colors" 
              />
              <span className="text-navy-900 group-hover:text-navy-900 font-black tracking-tight uppercase text-sm transition-colors">
                {sector.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute left-0 w-full overflow-hidden pointer-events-none opacity-[0.04] select-none text-navy-900" aria-hidden="true">
        <div className="whitespace-nowrap text-[20vw] font-black leading-none">
          COMMERCIAL INDUSTRIAL INFRASTRUCTURE
        </div>
      </div>
    </section>
  );
}
