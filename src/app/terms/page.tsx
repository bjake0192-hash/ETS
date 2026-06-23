import { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/ui/SubpageHero";

export const metadata: Metadata = {
  title: "Terms of Service | ETS Ltd",
  description:
    "Website terms of service for Electro Technical Systems (ETS) Ltd, including acceptable use and liability information.",
};

export default function TermsPage() {
  return (
    <main>
      <SubpageHero
        title="TERMS OF SERVICE"
        subtitle="Website usage terms and important information about content and enquiries."
        imagePrompt="professional legal document contract signature desk modern clean premium"
      />
      <section className="bg-background py-24 border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl surface-card rounded-[2rem] border border-white/45 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight uppercase">
              Website Terms
            </h2>
            <p className="mt-5 text-navy-900/70 leading-relaxed">
              By accessing this website you agree to these terms. If you do not agree,
              please do not use the site. These terms apply to the website only and do
              not replace any contract agreed for the delivery of works.
            </p>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Acceptable Use
            </h3>
            <ul className="mt-4 space-y-3 text-navy-900/70 leading-relaxed">
              <li>Do not attempt to disrupt, probe, or compromise site security.</li>
              <li>Do not submit unlawful, harmful, or misleading information.</li>
              <li>Do not misuse forms or contact channels.</li>
            </ul>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Information & Enquiries
            </h3>
            <p className="mt-4 text-navy-900/70 leading-relaxed">
              Content on this site is provided for general information. Any quote,
              scope, or timeline is only confirmed once agreed in writing.
            </p>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Liability
            </h3>
            <p className="mt-4 text-navy-900/70 leading-relaxed">
              We take reasonable care to keep information accurate and the site
              available, but we cannot guarantee uninterrupted access or that content
              is error-free.
            </p>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Contact
            </h3>
            <p className="mt-4 text-navy-900/70 leading-relaxed">
              Questions about these terms can be directed through our{" "}
              <Link href="/contact" className="text-electric-yellow font-bold hover:text-navy-900 transition-colors">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
