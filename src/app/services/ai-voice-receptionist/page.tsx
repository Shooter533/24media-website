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
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Flagship Service</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            AI VOICE<br /><span className="text-charcoal">RECEPTIONIST</span><span className="text-terracotta">.</span>
          </h1>
          <div className="mt-10 max-w-xl">
            <p className="text-lg text-charcoal-light leading-relaxed">
              An AI agent answers every inbound call — 24/7, no hold music, no voicemail. It handles common queries, qualifies the caller, and books appointments directly into your calendar.
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

      <section className="border-t border-stone-dark/30 py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What It Does</SectionLabel>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <Feature title="Always On" description="Nights, weekends, public holidays — your phone is always answered." />
            <Feature title="Books Appointments" description="Directly into Google Calendar, Calendly, or your booking system." />
            <Feature title="Sounds Natural" description="Modern AI voice — not a phone tree. Callers often don't realise it's AI." />
            <Feature title="Qualifies Leads" description="Asks the right questions to determine if the caller is a good fit." />
            <Feature title="Transfers When Needed" description="If a human is required, it transfers the call or sends an immediate SMS." />
            <Feature title="Full Call Logs" description="Transcripts and recordings delivered to you after every call." />
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Real-World Use Cases</SectionLabel>
          <div className="mt-12 space-y-0 divide-y divide-stone-dark/30">
            <UseCase scenario="Plumber on the tools at 2pm" result="Gets a job booked while he's under the sink. Customer never waited on hold." />
            <UseCase scenario="Electrician running jobs back-to-back" result="AI answers the call, qualifies the lead, and books a quote for tomorrow morning." />
            <UseCase scenario="Builder on a noisy site" result="Can't hear the phone ring. AI picks up, gets the details, sends an SMS summary." />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The Tech</SectionLabel>
          <p className="mt-8 text-lg text-charcoal-light leading-relaxed">
            We configure a voice AI agent specifically for your business. It knows your services, your availability, and your tone. When a call comes in, it picks up within 2 rings and handles the conversation naturally.
          </p>
          <div className="mt-16 border-t border-stone-dark/30 pt-10">
            <p className="text-xs text-muted uppercase tracking-wider mb-3">Starting from</p>
            <p className="font-serif text-5xl text-charcoal">$797<span className="text-xl text-muted font-sans">/mo</span></p>
            <p className="text-sm text-muted mt-3">+ one-time setup fee from $2,000</p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              BOOK A DEMO TO SEE IT LIVE
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

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-stone-dark/30 pt-6">
      <h3 className="font-medium text-charcoal">{title}</h3>
      <p className="mt-2 text-charcoal-light leading-relaxed">{description}</p>
    </div>
  );
}

function UseCase({ scenario, result }: { scenario: string; result: string }) {
  return (
    <div className="py-8">
      <p className="font-medium text-charcoal">{scenario}</p>
      <p className="mt-2 text-charcoal-light">{result}</p>
    </div>
  );
}
