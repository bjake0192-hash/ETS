"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#fbf8f4] p-12 rounded-3xl border border-navy-900/10 relative overflow-hidden">
      <h3 className="text-2xl font-black text-navy-900 mb-8 uppercase tracking-tight">Send a Message</h3>
      
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-electric-yellow/20 rounded-full flex items-center justify-center mb-2">
            <CheckCircle2 size={32} className="text-electric-yellow" />
          </div>
          <h4 className="text-2xl font-black text-navy-900">Message Sent</h4>
          <p className="text-navy-900/70">
            Thank you for reaching out. A member of our engineering team will be in touch shortly.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-bold uppercase tracking-widest text-electric-yellow hover:text-navy-900 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-black text-navy-900/50 uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-background border border-navy-900/20 rounded-lg px-4 py-3 text-navy-900 focus:border-electric-yellow outline-none transition-colors" 
                placeholder="John Doe" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-xs font-black text-navy-900/50 uppercase tracking-widest">Company</label>
              <input 
                type="text" 
                id="company"
                name="company"
                className="w-full bg-background border border-navy-900/20 rounded-lg px-4 py-3 text-navy-900 focus:border-electric-yellow outline-none transition-colors" 
                placeholder="Acme Corp" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-black text-navy-900/50 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              className="w-full bg-background border border-navy-900/20 rounded-lg px-4 py-3 text-navy-900 focus:border-electric-yellow outline-none transition-colors" 
              placeholder="john@company.com" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-black text-navy-900/50 uppercase tracking-widest">Message</label>
            <textarea 
              id="message"
              name="message"
              required
              rows={5} 
              className="w-full bg-background border border-navy-900/20 rounded-lg px-4 py-3 text-navy-900 focus:border-electric-yellow outline-none transition-colors resize-none" 
              placeholder="How can we help with your project?"
            ></textarea>
          </div>
          
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
              <AlertCircle size={16} />
              <span>Failed to send message. Please try again or contact us directly via email.</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-electric-yellow text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-charcoal-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Send Inquiry
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
