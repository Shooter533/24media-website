import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Receptionist — 24Media",
  description:
    "An AI agent answers every inbound call 24/7. No hold music, no voicemail. Qualifies callers, books appointments, and transfers when needed.",
};

export default function AIVoiceReceptionist() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">AI Receptionist</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight max-w-3xl">
            Every call answered.
            <br />
            <span className="text-accent">24/7, no exceptions.</span>
          </h1>
          <div className="mt-6 max-w-2xl">
            <p className="text-lg text-secondary leading-relaxed">
              An AI agent answers every inbound call — no hold music, no voicemail. It handles common queries, qualifies the caller, and books appointments directly into your calendar.
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

      <section className="border-t border-border py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">What It Does</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <Feature title="Always On" description="Nights, weekends, public holidays — your phone is always answered." />
            <Feature title="Books Appointments" description="Directly into Google Calendar, Calendly, or your booking system." />
            <Feature title="Sounds Natural" description="Modern AI voice — not a phone tree. Callers often don't realise it's AI." />
            <Feature title="Qualifies Leads" description="Asks the right questions to determine if the caller is a good fit." />
            <Feature title="Transfers When Needed" description="If a human is required, it transfers the call or sends an immediate SMS." />
            <Feature title="Full Call Logs" description="Transcripts and recordings delivered to you after every call." />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Real-World Use Cases</p>
          <div className="mt-10 space-y-0 divide-y divide-border">
            <UseCase scenario="Plumber on the tools at 2pm" result="Gets a job booked while he's under the sink. Customer never waited on hold." />
            <UseCase scenario="Electrician running jobs back-to-back" result="AI answers the call, qualifies the lead, and books a quote for tomorrow morning." />
            <UseCase scenario="Builder on a noisy site" result="Can't hear the phone ring. AI picks up, gets the details, sends an SMS summary." />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Try It Right Now</p>
          <h2 className="mt-4 text-3xl font-bold text-primary">
            Call our AI receptionist.
          </h2>
          <p className="mt-6 text-lg text-secondary leading-relaxed">
            This is the real thing — a live AI receptionist handling calls 24/7. Call right now and experience what your customers will hear.
          </p>
          <a
            href="tel:0485040001"
            className="mt-8 inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            0485 040 001
          </a>
          <p className="mt-3 text-sm text-muted">Available 24/7 — call anytime.</p>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">The Tech</p>
          <p className="mt-6 text-lg text-secondary leading-relaxed">
            We configure a voice AI agent specifically for your business. It knows your services, your availability, and your tone. When a call comes in, it picks up within 2 rings and handles the conversation naturally.
          </p>
          <div className="mt-14 border-t border-border pt-10">
            <h3 className="text-2xl font-bold text-primary">Ready to never miss a call again?</h3>
            <p className="text-sm text-secondary mt-3">Book a free call and we&apos;ll set up a demo tailored to your business.</p>
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

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function UseCase({ scenario, result }: { scenario: string; result: string }) {
  return (
    <div className="py-8">
      <p className="font-semibold text-primary">{scenario}</p>
      <p className="mt-2 text-secondary text-sm">{result}</p>
    </div>
  );
}
