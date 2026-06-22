import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "About ETS Ltd | Commercial Electrical Engineering Authority",
  description: "Learn about Electro Technical Systems (ETS) Ltd, our 25-year history, and our evolution into a leading commercial and industrial electrical contractor.",
};

export default function AboutPage() {
  return (
    <main>
      <SubpageHero 
        title="ABOUT OUR CAPABILITY"
        subtitle="With over 25 years of specialized expertise, we deliver high-reliability electrical systems for the UK's most demanding environments."
        imagePrompt="modern industrial electrical facility high-end corporate engineering architecture"
      />
      <About />
      <Stats />
      <div className="bg-white py-24 border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy-900 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-navy-900/70 leading-relaxed mb-6">
                To provide unmatched electrical engineering excellence through innovative solutions, 
                uncompromising safety standards, and a focus on long-term commercial value.
              </p>
              <div className="space-y-4">
                {[
                  "Uncompromising Health & Safety",
                  "Sustainable Energy Solutions",
                  "Engineering Innovation",
                  "Client-Centric Delivery"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-electric-yellow rounded-full" />
                    <span className="text-navy-900 font-bold uppercase text-sm tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-navy-900/10 shadow-2xl">
              <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20electrical%20engineers%20planning%20commercial%20project%20high-end&image_size=landscape_4_3" 
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <TrustBar />
    </main>
  );
}
