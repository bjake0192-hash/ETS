"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Global HQ Office Fit-out",
    location: "Central London",
    type: "Commercial Installation",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20corporate%20office%20lighting%20installation%20commercial&image_size=landscape_4_3"
  },
  {
    title: "Logistics Hub Power Grid",
    location: "Manchester Gateway",
    type: "Industrial Infrastructure",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20warehouse%20electrical%20infrastructure%20large%20scale&image_size=landscape_4_3"
  },
  {
    title: "Advanced Research Facility",
    location: "Cambridge Science Park",
    type: "Specialist Engineering",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=hospital%20electrical%20systems%20healthcare%20engineering&image_size=landscape_4_3"
  },
  {
    title: "Metro Retail Development",
    location: "Birmingham City Centre",
    type: "Retail Power Systems",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=retail%20shopping%20center%20power%20distribution%20modern&image_size=landscape_4_3"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">
            SELECTED WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 leading-tight">
            POWERING <span className="text-navy-900/40">LANDMARKS</span>
          </h2>
        </div>
        <button className="text-navy-900 font-black tracking-widest uppercase text-sm border-b-2 border-electric-yellow pb-1 hover:text-electric-yellow transition-colors">
          View All Projects
        </button>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-electric-yellow font-black tracking-widest uppercase text-xs mb-2">
                      {project.type} — {project.location}
                    </p>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-electric-yellow p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-navy-900" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
