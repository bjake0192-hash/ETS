"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const featuredProjects = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    client: "Global Tech Corp HQ",
    description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    startDate: "Jan 2024",
    endDate: "Aug 2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Excepteur Sint Occaecat",
    client: "National Logistics Hub",
    description: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    startDate: "Mar 2023",
    endDate: "Dec 2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Nemo Enim Ipsam Voluptatem",
    client: "Advanced Research Facility",
    description: "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    startDate: "Jun 2023",
    endDate: "Feb 2024",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Ut Enim Ad Minima",
    client: "Metro Retail Center",
    description: "Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.",
    startDate: "Sep 2024",
    endDate: "Ongoing",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "At Vero Eos Et Accusamus",
    client: "City Financial District",
    description: "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    startDate: "Nov 2023",
    endDate: "May 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-white/40 relative overflow-hidden border-t border-navy-900/10">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-12 tracking-tight text-center md:text-left uppercase">
            FEATURED <span className="text-navy-900/40">WORK</span>
          </h2>
        </Reveal>

        <div 
          className="w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Content */}
            <div className="relative min-h-[300px] flex flex-col justify-center pb-8 lg:pb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-navy-900 leading-tight mb-2">
                      {featuredProjects[activeIndex].title}
                    </h3>
                    <p className="text-electric-yellow font-bold uppercase tracking-widest text-sm">
                      Client: {featuredProjects[activeIndex].client}
                    </p>
                  </div>
                  
                  <p className="text-navy-900/70 text-lg leading-relaxed">
                    {featuredProjects[activeIndex].description}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-navy-900/10">
                    <div className="flex items-center gap-2 text-sm font-bold text-navy-900/60 uppercase tracking-wider">
                      <Calendar size={16} className="text-electric-yellow" />
                      <span>{featuredProjects[activeIndex].startDate}</span>
                      <ArrowRight size={14} className="mx-1 text-navy-900/30" />
                      <span>{featuredProjects[activeIndex].endDate}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-0 left-0 flex gap-3">
                {featuredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "w-8 bg-electric-yellow" : "w-2 bg-navy-900/20 hover:bg-navy-900/40"
                    }`}
                    aria-label={`View project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Image Container */}
            <div className="relative aspect-[4/3] lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/40 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={featuredProjects[activeIndex].image}
                    alt={featuredProjects[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}