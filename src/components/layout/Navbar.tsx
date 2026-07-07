"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Sectors", href: "/sectors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl py-4 border-b border-navy-900/10 shadow-[0_16px_48px_rgba(26,21,18,0.08)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="surface-card rounded-full border border-white/40 px-5 sm:px-7 py-3 flex items-center justify-between gap-6">
          <Link href="/" className="group" aria-label="ETS Home">
            <motion.img
              src="/etslogo.png"
              alt="ETS logo"
              className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              whileHover={{ scale: 1.03 }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 rounded-full bg-navy-900/[0.035] p-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold rounded-full transition-colors",
                  pathname === link.href
                    ? "text-navy-900"
                    : "text-navy-900/65 hover:text-electric-yellow"
                )}
              >
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-electric-yellow/12 border border-electric-yellow/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="bg-electric-yellow text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-charcoal-800 transition-colors shadow-[0_14px_32px_rgba(168,97,38,0.22)]"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            className="md:hidden text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full px-6 pt-4"
          >
            <div className="surface-card border border-white/40 rounded-3xl p-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium rounded-2xl px-4 py-3 transition-colors",
                    pathname === link.href
                      ? "bg-electric-yellow/10 text-navy-900"
                      : "text-navy-900 hover:text-electric-yellow hover:bg-navy-900/[0.04]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-electric-yellow text-white px-6 py-3 rounded-2xl font-bold text-center mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
