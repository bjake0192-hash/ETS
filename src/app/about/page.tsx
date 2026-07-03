import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import TrustBar from "@/components/sections/TrustBar";
import { CheckCircle2, ShieldCheck, Zap, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About ETS Ltd | Commercial Electrical Engineering Authority",
  description: "Learn about Electro Technical Systems (ETS) Ltd, our 25-year history, and our evolution into a leading commercial and industrial electrical contractor.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck size={32} className="text-electric-yellow mb-6" />,
      title: "Uncompromising Safety",
      description: "Health and safety are not just compliance requirements; they are the foundation of every project we undertake."
    },
    {
      icon: <Zap size={32} className="text-electric-yellow mb-6" />,
      title: "Engineering Excellence",
      description: "We bring technical precision and innovative problem-solving to complex electrical infrastructure challenges."
    },
    {
      icon: <Users size={32} className="text-electric-yellow mb-6" />,
      title: "Collaborative Partnership",
      description: "We integrate seamlessly with principal contractors, architects, and facilities managers to ensure smooth delivery."
    },
    {
      icon: <Target size={32} className="text-electric-yellow mb-6" />,
      title: "Future-Ready Systems",
      description: "Our solutions are designed not just for today's demands, but with scalability for tomorrow's technologies."
    }
  ];

  return (
    <main>
      <SubpageHero 
        title="ABOUT OUR CAPABILITY"
        subtitle="With over 25 years of specialized expertise, we deliver high-reliability electrical systems for the UK's most demanding environments."
        imagePrompt="modern industrial electrical facility high-end corporate engineering architecture"
      />
      <About />
      <Stats />
      
      {/* Mission Section */}
      <div className="bg-background py-24 border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy-900 mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-navy-900/70 text-lg leading-relaxed mb-6">
                To provide unmatched electrical engineering excellence through innovative solutions, 
                uncompromising safety standards, and a focus on long-term commercial value. We strive 
                to be the trusted partner for the UK's most critical infrastructure projects.
              </p>
              <div className="space-y-4">
                {[
                  "NICEIC Approved Contractor Status",
                  "CHAS Elite Compliance",
                  "Nationwide Project Delivery",
                  "Specialized Commercial Focus"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-electric-yellow" />
                    <span className="text-navy-900 font-bold uppercase text-sm tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-navy-900/10 shadow-2xl aspect-square md:aspect-auto md:h-[600px] relative">
              <div className="absolute inset-0 bg-charcoal-900/10 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-[#fbf8f4] py-24 border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">Our Principles</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-900 uppercase tracking-tight">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-navy-900/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {value.icon}
                <h3 className="text-xl font-black text-navy-900 mb-4">{value.title}</h3>
                <p className="text-navy-900/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History/Evolution Section */}
      <div className="bg-charcoal-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full mesh-overlay opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-electric-yellow/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-electric-yellow font-black tracking-widest uppercase text-sm mb-4 block">The ETS Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">Built on <br/><span className="text-white/40">Experience</span></h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  While Electro Technical Systems (ETS) Ltd in its current form was established in 2014, our foundation is built upon our founder's 25+ years of hands-on experience in complex electrical engineering.
                </p>
                <p>
                  What started as a vision to raise the standard of commercial electrical contracting has grown into a formidable force in the industry. Our evolution has been driven by an unwavering commitment to technical precision and adaptability to changing compliance requirements.
                </p>
                <p>
                  Today, we operate nationwide, partnering with leading developers, retail brands, and industrial facility managers to power the environments that keep the UK moving.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-electric-yellow mb-2">25+</p>
                  <p className="text-white/70 text-sm">Years of foundational industry experience driving our technical standards.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-electric-yellow mb-2">2014</p>
                  <p className="text-white/70 text-sm">ETS Ltd officially incorporated, focusing on high-end commercial installations.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-electric-yellow mb-2">Growth</p>
                  <p className="text-white/70 text-sm">Achieved top-tier accreditations (NICEIC, CHAS Elite) ensuring compliance-led delivery.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <p className="text-3xl font-black text-electric-yellow mb-2">Today</p>
                  <p className="text-white/70 text-sm">Leading nationwide provider of complex infrastructure and commercial fit-outs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
    </main>
  );
}
