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
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue font-semibold text-sm uppercase tracking-wide mb-4">Lead Response</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Speed-to-Lead
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Turn web enquiries into booked jobs in under 60 seconds. When a prospect fills in a form, the system fires an instant response — before they call your competitor.
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Numbers Don&apos;t Lie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="bg-light-bg rounded-xl p-6">
              <p className="text-4xl font-bold text-blue">78%</p>
              <p className="mt-2 text-sm text-gray-600">of customers buy from the first responder</p>
            </div>
            <div className="bg-light-bg rounded-xl p-6">
              <p className="text-4xl font-bold text-blue">5 min</p>
              <p className="mt-2 text-sm text-gray-600">average response time drops conversion by 80%</p>
            </div>
            <div className="bg-light-bg rounded-xl p-6">
              <p className="text-4xl font-bold text-blue">&lt;60s</p>
              <p className="mt-2 text-sm text-gray-600">our system responds in under a minute</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step number="1" title="Lead comes in" description="From your website form, Facebook Lead Ads, or Google Ads." />
            <Step number="2" title="Instant response fires" description="SMS acknowledgement sent within seconds. AI voice call follows up." />
            <Step number="3" title="Appointment booked" description="The AI qualifies the lead and books them in — or escalates to you." />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Connects With</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Website Forms", "Facebook Lead Ads", "Google Ads", "Instagram", "Webhooks", "Any CRM"].map((source) => (
              <span key={source} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {source}
              </span>
            ))}
          </div>

          <div className="bg-navy rounded-xl p-8 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Starting from</p>
            <p className="text-4xl font-bold text-white">$597<span className="text-lg font-normal text-gray-400">/mo</span></p>
            <p className="text-gray-400 mt-2 text-sm">+ one-time setup fee from $1,500</p>
            <Link
              href="/book-demo"
              className="mt-6 inline-block bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
        {number}
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
