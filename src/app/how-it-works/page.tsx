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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Process</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight">
            From first call to live system
            <br />
            <span className="text-accent">in under a week.</span>
          </h1>
          <p className="mt-6 text-lg text-secondary leading-relaxed max-w-2xl">
            No tech skills required — we handle everything. You just tell us how your business works.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 divide-y divide-border">
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

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Your Part</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
            What you need to do.
          </h2>
          <p className="mt-4 text-lg text-secondary">Almost nothing. Seriously.</p>
          <div className="mt-10 divide-y divide-border">
            <CheckItem text="Jump on a 20-minute discovery call" />
            <CheckItem text="Tell us your services and availability" />
            <CheckItem text="Approve the AI script before go-live" />
            <CheckItem text="That's it — we handle the rest" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Ready to get started?
          </h2>
          <p className="mt-6 text-lg text-secondary">
            Book a free demo and we&apos;ll show you exactly how it works for your business.
          </p>
          <Link
            href="/book-demo"
            className="mt-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm"
          >
            Book a Free Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function ProcessStep({ number, title, description, timeline }: { number: string; title: string; description: string; timeline: string }) {
  return (
    <div className="py-10 flex gap-8 items-start">
      <span className="text-sm text-muted font-semibold pt-1">{number}</span>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">{timeline}</span>
        </div>
        <p className="text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="py-5 flex items-center gap-3">
      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-primary text-sm">{text}</p>
    </div>
  );
}
