"use client";

import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";
import Link from "next/link";

const accreditations = [
  { 
    name: "NICEIC", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=NICEIC%20accreditation%20logo%20professional%20electrical%20safety%20white%20background&image_size=square"
  },
  { 
    name: "CHAS", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=CHAS%20accreditation%20logo%20health%20and%20safety%20white%20background&image_size=square"
  },
  { 
    name: "SafeContractor", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=SafeContractor%20accreditation%20logo%20professional%20standards%20white%20background&image_size=square"
  },
  { 
    name: "Constructionline", 
    src: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Constructionline%20accreditation%20logo%20industry%20standard%20white%20background&image_size=square"
  }
];

export function Footer() {
  const icons = [Globe, Mail, Share2];

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-navy-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8" aria-label="ETS Home">
              <img
                src="/etslogo.png"
                alt="ETS logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-navy-900/60 text-sm leading-relaxed mb-8">
              Premium commercial electrical contractors delivering engineering 
              excellence across the UK. Established expertise, modern solutions.
            </p>
            <div className="flex gap-4">
              {icons.map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-900/50 hover:text-electric-yellow hover:bg-navy-900/10 transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Our Projects", href: "/projects" },
                { name: "Sectors", href: "/sectors" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-navy-900/60 hover:text-electric-yellow transition-colors text-sm font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-electric-yellow shrink-0" />
                <span className="text-navy-900/60 text-sm font-medium">
                  123 Business Park, Industrial Estate,<br />
                  London, UK, SE1 7AB
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-electric-yellow shrink-0" />
                <span className="text-navy-900/60 text-sm font-medium">01234 567 890</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-electric-yellow shrink-0" />
                <span className="text-navy-900/60 text-sm font-medium">info@ets-ltd.com</span>
              </li>
            </ul>
          </div>

          {/* Accreditations Small */}
          <div>
            <h4 className="text-navy-900 font-black uppercase tracking-widest text-xs mb-8">Accreditations</h4>
            <div className="grid grid-cols-2 gap-4">
              {accreditations.map((brand) => (
                <div key={brand.name} className="h-12 bg-[#fbf8f4] rounded border border-navy-900/10 flex items-center justify-center p-2 group hover:border-electric-yellow transition-colors">
                  <img 
                    src={brand.src} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-navy-900/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy-900/40 text-xs font-bold">
            © {new Date().getFullYear()} Electro Technical Systems (ETS) Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-navy-900/40 hover:text-navy-900 text-xs font-bold transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-navy-900/40 hover:text-navy-900 text-xs font-bold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
