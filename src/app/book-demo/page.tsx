import type { Metadata } from "next";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Demo — 24Media",
  description:
    "Book a free 30-minute demo to see how AI automation works for your service business. No obligation, no tech jargon.",
};

export default function BookDemo() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Let&apos;s Talk</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight">
            Book a free demo.
          </h1>
          <p className="mt-6 text-lg text-secondary leading-relaxed max-w-2xl">
            See exactly how the system works for your business. 30 minutes, no obligation, no tech jargon.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <CalendlyEmbed />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">What to Expect</p>
                <div className="divide-y divide-border">
                  <ExpectItem text="30-minute call — no waffle" />
                  <ExpectItem text="Live demo of the AI voice agent" />
                  <ExpectItem text="Customised to your business type" />
                  <ExpectItem text="Clear pricing — no hidden fees" />
                  <ExpectItem text="No obligation, no pressure" />
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-secondary">
                  <span className="font-semibold text-primary">Not ready to book?</span> No worries. Send us a message and we&apos;ll get back to you within the hour.
                </p>
                <a
                  href="mailto:shane@24media.com.au"
                  className="mt-3 inline-block text-accent text-sm font-semibold hover:underline"
                >
                  shane@24media.com.au &rarr;
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
    <div className="py-4 flex items-center gap-3">
      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-sm text-primary">{text}</p>
    </div>
  );
}
