import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — 24Media",
  description:
    "Book a free 20-minute demo to see how AI voice receptionists and lead response systems work for your trade business.",
};

export default function BookDemo() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Book a Free Demo
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            See exactly how the system works for your business. 20 minutes, no obligation, no tech jargon.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              {/* Calendly Embed Placeholder */}
              <div className="bg-light-bg border-2 border-dashed border-gray-300 rounded-xl p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 font-medium text-lg">Calendly Booking Widget</p>
                <p className="text-gray-400 text-sm mt-2">Replace this with your Calendly embed code</p>
                <code className="mt-4 text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded">
                  {/* <!-- Calendly inline widget --> */}
                  calendly.com/your-link
                </code>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-gray-900 text-lg">What to expect:</h3>
              <div className="space-y-4">
                <ExpectItem text="20-minute call — no waffle" />
                <ExpectItem text="Live demo of the AI voice agent" />
                <ExpectItem text="Customised to your business type" />
                <ExpectItem text="Clear pricing — no hidden fees" />
                <ExpectItem text="No obligation, no pressure" />
              </div>

              <div className="bg-light-bg rounded-xl p-6 mt-8">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Not ready to book?</span> No worries. Send us a message and we&apos;ll get back to you within the hour.
                </p>
                <a
                  href="mailto:shane@24media.com.au"
                  className="mt-3 inline-block text-blue text-sm font-semibold hover:underline"
                >
                  shane@24media.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ExpectItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}
