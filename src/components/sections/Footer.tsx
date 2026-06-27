"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const accreditations = [
  { 
    name: "NICEIC", 
    src: "/NICEIC-logo.jpg"
  },
  { 
    name: "CHAS Elite", 
    src: "/chas%20elite.jpeg"
  },
  { 
    name: "Avetta", 
    src: "/avetta-member-logo.png"
  },
  { 
    name: "Constructionline Gold", 
    src: "/Constructionline-Gold-Logo.png"
  }
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 mesh-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-yellow/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <img 
                src="/etslogo.png" 
                alt="ETS logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium electrical engineering and infrastructure solutions for commercial and industrial sectors across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Projects', 'Sectors', 'About'].map((item) => (
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
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="text-electric-yellow shrink-0 mt-0.5" />
                <span>27 Old Market,<br />Wisbech,<br />Cambridgeshire, PE13</span>
              </li>
              <li>
                <a href="tel:01617666699" className="flex items-center gap-3 text-white/60 hover:text-electric-yellow transition-colors">
                  <Phone size={18} className="text-electric-yellow shrink-0" />
                  <span>0161 766 6699</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ets-ltd.co.uk" className="flex items-center gap-3 text-white/60 hover:text-electric-yellow transition-colors">
                  <Mail size={18} className="text-electric-yellow shrink-0" />
                  <span>info@ets-ltd.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Accreditations</h4>
            <div className="grid grid-cols-2 gap-3">
              {accreditations.map((brand) => (
                <div key={brand.name} className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <img 
                    src={brand.src} 
                    alt={brand.name}
                    className="max-w-full max-h-10 object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" 
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
