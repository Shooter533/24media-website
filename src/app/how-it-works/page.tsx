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
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            How It Works
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From first call to live system in under a week. No tech skills required — we handle everything.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <ProcessStep
              number="1"
              title="Discovery Call"
              description="We jump on a 20-minute call to understand your business — services you offer, how you take bookings, what hours you operate, and what's falling through the cracks. No sales pitch, just getting the details right."
              timeline="Day 1"
            />
            <ProcessStep
              number="2"
              title="We Build Your System"
              description="We configure your AI agent with your business name, services, tone of voice, availability, and booking rules. We write the scripts, set up the integrations, and test everything thoroughly."
              timeline="Days 2–5"
            />
            <ProcessStep
              number="3"
              title="Go Live"
              description="We connect the system to your existing phone number. From this moment, every call is answered, every missed call gets a text, and every web lead gets an instant follow-up. You don't need to change anything about how you work."
              timeline="Day 5–7"
            />
            <ProcessStep
              number="4"
              title="Ongoing Support & Optimisation"
              description="We monitor performance, review call logs, and fine-tune the system based on real conversations. You get a monthly report showing calls handled, leads captured, and appointments booked. We're always a message away if you need changes."
              timeline="Ongoing"
            />
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What You Need to Do</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-lg text-gray-600 text-center mb-8">Almost nothing. Seriously.</p>
            <div className="space-y-4">
              <CheckItem text="Jump on a 20-minute discovery call" />
              <CheckItem text="Tell us your services and availability" />
              <CheckItem text="Approve the AI script before go-live" />
              <CheckItem text="That's it — we handle the rest" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free demo and we&apos;ll show you exactly how it works for your business.
          </p>
          <Link
            href="/book-demo"
            className="inline-block bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
}

function ProcessStep({ number, title, description, timeline }: { number: string; title: string; description: string; timeline: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-xs font-semibold text-blue bg-blue/10 px-3 py-1 rounded-full">{timeline}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-5 h-5 text-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
