"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const accreditations = [
  { 
    name: "NICEIC", 
    src: "/NICEIC-logo.png"
  },
  { 
    name: "SafeContractor", 
    src: "/safecontractor.png"
  },
  { 
    name: "Constructionline Gold", 
    src: "/Constructionline-Gold-Logo.png"
  },
  { 
    name: "OLEV Installer", 
    src: "/OLEVInstaller.png"
  }
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-yellow/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16 sm:mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <img 
                src="/etslogo.png" 
                alt="ETS logo" 
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium electrical engineering and infrastructure solutions for commercial and industrial sectors across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:pl-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-6">Navigation</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              {['Services', 'Sectors', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-electric-yellow transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-6">Contact</h3>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="text-electric-yellow shrink-0 mt-0.5" />
                <span className="leading-relaxed">27 Old Market, Wisbech,<br />Cambridgeshire, PE13</span>
              </li>
              <li>
                <a href="tel:01553631759" className="flex items-center gap-3 text-white/60 hover:text-electric-yellow transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-yellow/20 transition-colors">
                    <Phone size={14} className="text-electric-yellow shrink-0" />
                  </div>
                  <span>01553 631 759</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ets-ltd.com" className="flex items-center gap-3 text-white/60 hover:text-electric-yellow transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electric-yellow/20 transition-colors">
                    <Mail size={14} className="text-electric-yellow shrink-0" />
                  </div>
                  <span className="break-all">info@ets-ltd.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-6">Accreditations</h3>
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 sm:gap-3">
              {accreditations.map((brand) => (
                <div key={brand.name} className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 flex items-center justify-center relative overflow-hidden group aspect-square sm:aspect-auto">
                  <div className="absolute inset-0 bg-charcoal-900/60 mix-blend-multiply transition-opacity group-hover:opacity-30 z-10" />
                  <img 
                    src={brand.src} 
                    alt={brand.name}
                    className="max-w-full max-h-8 sm:max-h-10 object-contain relative z-0" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Electro Technical Systems (ETS) Ltd. All rights reserved.
            <br className="block sm:hidden" />
            <span className="hidden sm:inline"> | </span>Registered in England no: 08443192
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-xs font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-xs font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
