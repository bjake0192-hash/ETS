import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | ETS Ltd",
  description:
    "Privacy policy for Electro Technical Systems (ETS) Ltd, including how we collect, use, and protect personal data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <SubpageHero
        title="PRIVACY POLICY"
        subtitle="How we handle personal data when you use our website or contact our team."
        imagePrompt="professional commercial office abstract privacy cybersecurity compliance modern clean"
      />
      <section className="bg-background py-24 border-t border-navy-900/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl surface-card rounded-[2rem] border border-white/45 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 tracking-tight uppercase">
              Overview
            </h2>
            <p className="mt-5 text-navy-900/70 leading-relaxed">
              This Privacy Policy explains how Electro Technical Systems (ETS) Ltd
              (“ETS”, “we”, “us”) collects and uses information when you browse this
              website or contact us about our commercial electrical services.
            </p>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              What We Collect
            </h3>
            <ul className="mt-4 space-y-3 text-navy-900/70 leading-relaxed">
              <li>Contact details you submit (name, email, phone number).</li>
              <li>Project information you provide in enquiries.</li>
              <li>Basic usage data (pages visited, approximate location, device type).</li>
            </ul>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              How We Use It
            </h3>
            <ul className="mt-4 space-y-3 text-navy-900/70 leading-relaxed">
              <li>Respond to enquiries and provide quotations.</li>
              <li>Improve website performance and usability.</li>
              <li>Maintain security, prevent abuse, and ensure service continuity.</li>
            </ul>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Data Sharing
            </h3>
            <p className="mt-4 text-navy-900/70 leading-relaxed">
              We only share information where required to deliver services (for example,
              with service providers who help operate our website) or where legally
              required. We do not sell personal data.
            </p>

            <h3 className="mt-10 text-xl font-black text-navy-900 uppercase tracking-wide">
              Your Rights
            </h3>
            <p className="mt-4 text-navy-900/70 leading-relaxed">
              You may request access, correction, or deletion of personal data that we
              hold about you. To make a request, contact our team using the details on
              the Contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
