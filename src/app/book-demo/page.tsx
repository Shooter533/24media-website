import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — 24Media",
  description:
    "Book a free 20-minute demo to see how AI voice receptionists and lead response systems work for your trade business.",
};

export default function BookDemo() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Let&apos;s Talk</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            BOOK A<br /><span className="text-charcoal">FREE DEMO</span><span className="text-terracotta">.</span>
          </h1>
          <p className="mt-10 text-lg text-charcoal-light leading-relaxed max-w-xl">
            See exactly how the system works for your business. 20 minutes, no obligation, no tech jargon.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-dark/30 py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <div className="bg-warm-white border border-stone-dark/20 rounded-2xl p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                <svg className="w-14 h-14 text-muted mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-charcoal font-medium text-lg">Calendly Booking Widget</p>
                <p className="text-muted text-sm mt-2">Replace this with your Calendly embed code</p>
                <code className="mt-4 text-xs text-muted bg-stone px-3 py-1.5 rounded-full">
                  calendly.com/your-link
                </code>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <SectionLabel>What to Expect</SectionLabel>
                <div className="mt-6 divide-y divide-stone-dark/30">
                  <ExpectItem text="20-minute call — no waffle" />
                  <ExpectItem text="Live demo of the AI voice agent" />
                  <ExpectItem text="Customised to your business type" />
                  <ExpectItem text="Clear pricing — no hidden fees" />
                  <ExpectItem text="No obligation, no pressure" />
                </div>
              </div>

              <div className="border-t border-stone-dark/30 pt-8">
                <p className="text-sm text-charcoal-light">
                  <span className="font-medium text-charcoal">Not ready to book?</span> No worries. Send us a message and we&apos;ll get back to you within the hour.
                </p>
                <a
                  href="mailto:shane@24media.com.au"
                  className="mt-3 inline-block text-terracotta text-sm font-medium hover:underline"
                >
                  shane@24media.com.au ↗
                </a>
              </div>
            </div>
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

function ExpectItem({ text }: { text: string }) {
  return (
    <div className="py-4 flex items-center gap-3">
      <svg className="w-4 h-4 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-sm text-charcoal">{text}</p>
    </div>
  );
}
