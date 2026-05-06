import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — 24Media",
  description:
    "Discovery call, custom build, go live, ongoing support. Your AI system is live within 7 days with zero tech skills required.",
};

export default function HowItWorks() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Process</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            HOW IT<br /><span className="text-charcoal">WORKS</span><span className="text-terracotta">.</span>
          </h1>
          <p className="mt-10 text-lg text-charcoal-light leading-relaxed max-w-xl">
            From first call to live system in under a week. No tech skills required — we handle everything.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-dark/30 py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 divide-y divide-stone-dark/30">
            <ProcessStep
              number="01"
              title="Discovery Call"
              description="We jump on a 20-minute call to understand your business — services you offer, how you take bookings, what hours you operate, and what's falling through the cracks. No sales pitch, just getting the details right."
              timeline="Day 1"
            />
            <ProcessStep
              number="02"
              title="We Build Your System"
              description="We configure your AI agent with your business name, services, tone of voice, availability, and booking rules. We write the scripts, set up the integrations, and test everything thoroughly."
              timeline="Days 2–5"
            />
            <ProcessStep
              number="03"
              title="Go Live"
              description="We connect the system to your existing phone number. From this moment, every call is answered, every missed call gets a text, and every web lead gets an instant follow-up. You don't need to change anything about how you work."
              timeline="Day 5–7"
            />
            <ProcessStep
              number="04"
              title="Ongoing Support & Optimisation"
              description="We monitor performance, review call logs, and fine-tune the system based on real conversations. You get a monthly report showing calls handled, leads captured, and appointments booked. We're always a message away if you need changes."
              timeline="Ongoing"
            />
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Your Part</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mt-6 mb-4">
            What you need to do.
          </h2>
          <p className="text-lg text-charcoal-light mb-12">Almost nothing. Seriously.</p>
          <div className="divide-y divide-stone-dark/30">
            <CheckItem text="Jump on a 20-minute discovery call" />
            <CheckItem text="Tell us your services and availability" />
            <CheckItem text="Approve the AI script before go-live" />
            <CheckItem text="That's it — we handle the rest" />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg text-charcoal-light">
            Book a free demo and we&apos;ll show you exactly how it works for your business.
          </p>
          <Link
            href="/book-demo"
            className="mt-10 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
          >
            BOOK A FREE DEMO
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </Link>
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

function ProcessStep({ number, title, description, timeline }: { number: string; title: string; description: string; timeline: string }) {
  return (
    <div className="py-10 flex gap-8 items-start">
      <span className="text-xs text-muted font-medium pt-1.5">{number}</span>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
          <span className="text-xs font-medium text-terracotta uppercase tracking-wider">{timeline}</span>
        </div>
        <p className="text-charcoal-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="py-5 flex items-center gap-3">
      <svg className="w-4 h-4 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-charcoal">{text}</p>
    </div>
  );
}
