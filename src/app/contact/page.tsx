import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact ETS Ltd | Commercial Electrical Inquiry",
  description: "Get in touch with our commercial engineering team. We are ready to discuss your next electrical infrastructure project.",
};

export default function ContactPage() {
  return (
    <main>
      <SubpageHero 
        title="GET IN TOUCH"
        subtitle="Our engineering team is ready to discuss your commercial electrical requirements and provide technical guidance."
        imagePrompt="modern corporate reception desk high-end office interior professional"
      />
      
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-6 sm:mb-8 tracking-tighter uppercase leading-tight">Direct <span className="text-electric-yellow">Communication</span></h2>
              <p className="text-base sm:text-lg text-navy-900/70 leading-relaxed mb-10 sm:mb-12">
                Whether you have a specific project requirement or need technical advice, 
                our team is available to assist industry professionals and commercial clients.
              </p>
              
              <div className="space-y-8 sm:space-y-10">
                <div className="flex gap-5 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-900/5 rounded-xl flex items-center justify-center border border-navy-900/10 shrink-0">
                    <Phone size={20} className="text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-2">Telephone</h4>
                    <p className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">01553 631 759</p>
                    <p className="text-xs sm:text-sm text-navy-900/50">Mon-Fri, 8am - 5pm</p>
                  </div>
                </div>

                <div className="flex gap-5 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-900/5 rounded-xl flex items-center justify-center border border-navy-900/10 shrink-0">
                    <Mail size={20} className="text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-2">Email Address</h4>
                    <p className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight break-all">info@ets-ltd.com</p>
                    <p className="text-xs sm:text-sm text-navy-900/50">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-5 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-900/5 rounded-xl flex items-center justify-center border border-navy-900/10 shrink-0">
                    <MapPin size={20} className="text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-2">Office Location</h4>
                    <p className="text-lg sm:text-xl font-bold text-navy-900 leading-relaxed">
                      27 Old Market, Wisbech,<br />
                      Cambridgeshire, PE13
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
