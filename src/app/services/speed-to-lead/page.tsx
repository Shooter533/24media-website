import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speed-to-Lead — 24Media",
  description:
    "Turn web enquiries into booked jobs in under 60 seconds. Instant automated SMS and voice follow-up from every form submission.",
};

export default function SpeedToLead() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Lead Response</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            SPEED-TO<br /><span className="text-charcoal">-LEAD</span><span className="text-terracotta">.</span>
          </h1>
          <div className="mt-10 max-w-xl">
            <p className="text-lg text-charcoal-light leading-relaxed">
              Turn web enquiries into booked jobs in under 60 seconds. When a prospect fills in a form, the system fires an instant response — before they call your competitor.
            </p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              BOOK A FREE DEMO
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-dark/30 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl text-terracotta">78%</p>
            <p className="mt-2 text-sm text-muted">of customers buy from the first responder</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-charcoal">5 min</p>
            <p className="mt-2 text-sm text-muted">average response time drops conversion by 80%</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-terracotta">&lt;60s</p>
            <p className="mt-2 text-sm text-muted">our system responds in under a minute</p>
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <div className="mt-12 space-y-16">
            <StepRow number="01" title="Lead comes in" description="From your website form, Facebook Lead Ads, or Google Ads." />
            <StepRow number="02" title="Instant response fires" description="SMS acknowledgement sent within seconds. AI voice call follows up." />
            <StepRow number="03" title="Appointment booked" description="The AI qualifies the lead and books them in — or escalates to you." />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Integrations</SectionLabel>
          <h2 className="font-serif text-3xl text-charcoal mt-6 mb-10">Connects with everything.</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {["Website Forms", "Facebook Lead Ads", "Google Ads", "Instagram", "Webhooks", "Any CRM"].map((source) => (
              <span key={source} className="border border-charcoal/15 text-charcoal/60 px-5 py-2 rounded-full text-sm">
                {source}
              </span>
            ))}
          </div>

          <div className="border-t border-stone-dark/30 pt-10 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-3">Starting from</p>
            <p className="font-serif text-5xl text-charcoal">$597<span className="text-xl text-muted font-sans">/mo</span></p>
            <p className="text-sm text-muted mt-3">+ one-time setup fee from $1,500</p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              BOOK A DEMO
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-terracotta" />
      <span className="text-xs font-medium uppercase tracking-wider text-muted">{children}</span>
    </div>
  );
}

function StepRow({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-8 items-start border-t border-stone-dark/30 pt-8">
      <span className="text-xs text-muted font-medium pt-1">{number}</span>
      <div>
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-2 text-charcoal-light leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}
