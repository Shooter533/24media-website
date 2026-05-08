import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Workflows — 24Media",
  description:
    "Custom AI workflows for scheduling, follow-ups, review requests, and customer support — tailored to how your business actually works.",
};

export default function SpeedToLead() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Automated Workflows</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight max-w-3xl">
            Respond first.
            <br />
            <span className="text-accent">Win the job.</span>
          </h1>
          <div className="mt-6 max-w-2xl">
            <p className="text-lg text-secondary leading-relaxed">
              Custom AI workflows that respond to leads instantly, follow up automatically, and book appointments — before your competitor even picks up the phone.
            </p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm"
            >
              Book a Free Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold text-accent">78%</p>
            <p className="mt-1 text-sm text-secondary">of customers buy from the first responder</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold text-primary">5 min</p>
            <p className="mt-1 text-sm text-secondary">average response time drops conversion by 80%</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl font-bold text-accent">&lt;60s</p>
            <p className="mt-1 text-sm text-secondary">our system responds in under a minute</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">How It Works</p>
          <div className="mt-10 space-y-0 divide-y divide-border">
            <StepRow number="01" title="Lead comes in" description="From your website form, Facebook Lead Ads, or Google Ads." />
            <StepRow number="02" title="Instant response fires" description="SMS acknowledgement sent within seconds. AI voice call follows up." />
            <StepRow number="03" title="Appointment booked" description="The AI qualifies the lead and books them in — or escalates to you." />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Integrations</p>
          <h2 className="mt-4 text-3xl font-bold text-primary">Connects with everything.</h2>
          <div className="mt-8 flex flex-wrap gap-3 mb-16">
            {["Website Forms", "Facebook Lead Ads", "Google Ads", "Instagram", "Webhooks", "Any CRM"].map((source) => (
              <span key={source} className="border border-border text-secondary px-4 py-2 rounded-lg text-sm font-medium">
                {source}
              </span>
            ))}
          </div>

          <div className="border-t border-border pt-10 text-center">
            <h3 className="text-2xl font-bold text-primary">Ready to respond faster?</h3>
            <p className="text-sm text-secondary mt-3">Book a free call and we&apos;ll build a workflow tailored to your business.</p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm"
            >
              Book a Free Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StepRow({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="py-8 flex gap-8 items-start">
      <span className="text-sm text-muted font-semibold pt-0.5">{number}</span>
      <div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-secondary text-sm leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}
