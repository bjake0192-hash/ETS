"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "Global HQ Office Fit-out",
    location: "Central London",
    type: "Commercial Installation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Logistics Hub Power Grid",
    location: "Manchester Gateway",
    type: "Industrial Infrastructure",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Advanced Research Facility",
    location: "Cambridge Science Park",
    type: "Specialist Engineering",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Metro Retail Development",
    location: "Birmingham City Centre",
    type: "Retail Power Systems",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-y-10 right-0 w-[42%] rounded-l-full bg-electric-yellow/6 blur-3xl pointer-events-none" />
      <Reveal className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
            SELECTED WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-tight tracking-[-0.03em]">
            POWERING <span className="text-navy-900/40">LANDMARKS</span>
          </h2>
          <p className="mt-6 text-navy-900/65 max-w-xl leading-relaxed">
            Featured projects presented with a sharper editorial layout, deeper image treatment,
            and richer hover interactions to better sell capability and scale.
          </p>
        </div>
        <Link
          href="/projects"
          className="text-navy-900 font-black tracking-widest uppercase text-sm border-b-2 border-electric-yellow pb-1 hover:text-electric-yellow transition-colors"
        >
          View All Projects
        </Link>
      </Reveal>

      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] accent-ring"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-electric-yellow/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-electric-yellow font-black tracking-widest uppercase text-xs mb-2">
                      {project.type} — {project.location}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-electric-yellow p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-3 transition-all duration-300 shadow-[0_18px_34px_rgba(168,97,38,0.3)]">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
