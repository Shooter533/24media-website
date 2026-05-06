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
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue font-semibold text-sm uppercase tracking-wide mb-4">Flagship Service</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            AI Voice Receptionist
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            An AI agent answers every inbound call — 24/7, no hold music, no voicemail. It handles common queries, qualifies the caller, and books appointments directly into your calendar.
          </p>
          <Link
            href="/book-demo"
            className="mt-8 inline-block bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What It Does</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Feature title="Always On" description="Nights, weekends, public holidays — your phone is always answered." />
            <Feature title="Books Appointments" description="Directly into Google Calendar, Calendly, or your booking system." />
            <Feature title="Sounds Natural" description="Modern AI voice — not a phone tree. Callers often don't realise it's AI." />
            <Feature title="Qualifies Leads" description="Asks the right questions to determine if the caller is a good fit." />
            <Feature title="Transfers When Needed" description="If a human is required, it transfers the call or sends an immediate SMS." />
            <Feature title="Full Call Logs" description="Transcripts and recordings delivered to you after every call." />
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Real-World Use Cases</h2>
          <div className="space-y-6">
            <UseCase
              scenario="Plumber on the tools at 2pm"
              result="Gets a job booked while he's under the sink. Customer never waited on hold."
            />
            <UseCase
              scenario="Electrician running jobs back-to-back"
              result="AI answers the call, qualifies the lead, and books a quote for tomorrow morning."
            />
            <UseCase
              scenario="Builder on a noisy site"
              result="Can't hear the phone ring. AI picks up, gets the details, sends an SMS summary."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How the Tech Works</h2>
          <p className="text-gray-600 text-center text-lg leading-relaxed mb-12">
            We configure a voice AI agent specifically for your business. It knows your services, your availability, and your tone. When a call comes in, it picks up within 2 rings and handles the conversation naturally.
          </p>
          <div className="bg-navy rounded-xl p-8 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Starting from</p>
            <p className="text-4xl font-bold text-white">$797<span className="text-lg font-normal text-gray-400">/mo</span></p>
            <p className="text-gray-400 mt-2 text-sm">+ one-time setup fee from $2,000</p>
            <Link
              href="/book-demo"
              className="mt-6 inline-block bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book a Demo to See It Live
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue/10 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function UseCase({ scenario, result }: { scenario: string; result: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <p className="font-semibold text-gray-900">{scenario}</p>
      <p className="mt-2 text-gray-600">{result}</p>
    </div>
  );
}
