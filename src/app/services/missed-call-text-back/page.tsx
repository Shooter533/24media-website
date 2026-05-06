import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missed Call Text-Back — 24Media",
  description:
    "Every missed call gets an instant SMS reply within seconds. Keep leads warm before they call a competitor.",
};

export default function MissedCallTextBack() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue font-semibold text-sm uppercase tracking-wide mb-4">Entry-Level Product</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Missed Call Text-Back
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every missed call gets an instant SMS reply. Keep leads warm before they call your competitor. The simplest way to stop losing jobs.
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple. Automatic. Effective.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Call comes in</h3>
              <p className="mt-2 text-gray-600">You&apos;re on the tools, in a meeting, or it&apos;s after hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Missed? SMS fires instantly</h3>
              <p className="mt-2 text-gray-600">Within seconds — not minutes, not hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">AI handles the conversation</h3>
              <p className="mt-2 text-gray-600">Two-way SMS — books them in or gets their details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What the Customer Sees</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
            <div className="space-y-4">
              <div className="bg-blue text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[80%]">
                Hi! Thanks for calling Smith Plumbing. Sorry we missed you — we&apos;re on a job right now. Reply here to book or we&apos;ll call you back ASAP.
              </div>
              <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-br-sm p-4 text-sm max-w-[80%] ml-auto">
                Hey, I need a hot water system replaced. Can someone come tomorrow?
              </div>
              <div className="bg-blue text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[80%]">
                Absolutely! I can book you in for tomorrow morning between 8–10am. Does that work?
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Personalised with your business name and services.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Start Here?</h2>
          <div className="space-y-4">
            <Benefit text="Lowest cost — easiest yes for your business" />
            <Benefit text="No changes to how you work — just stop losing leads" />
            <Benefit text="See results in the first week" />
            <Benefit text="Upgrade to Voice Receptionist or Speed-to-Lead anytime" />
          </div>

          <div className="mt-12 bg-navy rounded-xl p-8 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Starting from</p>
            <p className="text-4xl font-bold text-white">$497<span className="text-lg font-normal text-gray-400">/mo</span></p>
            <p className="text-gray-400 mt-2 text-sm">+ one-time setup fee of $1,500</p>
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

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-light-bg rounded-lg p-4">
      <svg className="w-5 h-5 text-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-gray-700 font-medium">{text}</p>
    </div>
  );
}
