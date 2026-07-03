"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stats = [
  { label: "Years Experience", value: 25, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Commercial Focus", value: 100, suffix: "%" },
  { label: "Skilled Engineers", value: 40, suffix: "+" }
];

const accreditations = [
  { 
    name: "NICEIC", 
    src: "/NICEIC-logo.jpg",
    width: "w-24"
  },
  { 
    name: "CHAS Elite", 
    src: "/chas%20elite.jpeg",
    width: "w-24"
  },
  { 
    name: "Avetta", 
    src: "/avetta-member-logo.png",
    width: "w-24"
  },
  { 
    name: "Constructionline Gold", 
    src: "/Constructionline-Gold-Logo.png",
    width: "w-32"
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 15,
    mass: 1
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, springValue, value, hasAnimated]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden border-b border-navy-900/10">
      <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-electric-yellow/8 blur-3xl" />
      <div className="container mx-auto px-6">
        {/* Stats Grid with Animation */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="surface-card rounded-[2rem] border border-white/45 p-8 text-center hover:-translate-y-2 transition-transform duration-500"
            >
              <p className="text-5xl md:text-6xl font-black text-navy-900 mb-3 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-electric-yellow font-black tracking-widest uppercase text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
