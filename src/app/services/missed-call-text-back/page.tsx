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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Missed Call Text-Back</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight max-w-3xl">
            Missed a call?
            <br />
            <span className="text-accent">We&apos;ve got it covered.</span>
          </h1>
          <div className="mt-6 max-w-2xl">
            <p className="text-lg text-secondary leading-relaxed">
              Every missed call gets an instant SMS reply. Keep leads warm before they call your competitor. The simplest way to stop losing jobs.
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
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">How It Works</p>
          <div className="mt-10 space-y-0 divide-y divide-border">
            <StepRow number="01" title="Call comes in" description="You're on the tools, in a meeting, or it's after hours." />
            <StepRow number="02" title="Missed? SMS fires instantly" description="Within seconds — not minutes, not hours." />
            <StepRow number="03" title="AI handles the conversation" description="Two-way SMS — books them in or gets their details." />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide text-center">What the Customer Sees</p>
          <div className="mt-10 space-y-4">
            <div className="bg-accent text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[85%]">
              Hi! Thanks for calling Smith Plumbing. Sorry we missed you — we&apos;re on a job right now. Reply here to book or we&apos;ll call you back ASAP.
            </div>
            <div className="bg-surface border border-border text-primary rounded-2xl rounded-br-sm p-4 text-sm max-w-[85%] ml-auto">
              Hey, I need a hot water system replaced. Can someone come tomorrow?
            </div>
            <div className="bg-accent text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[85%]">
              Absolutely! I can book you in for tomorrow morning between 8–10am. Does that work?
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-8">Personalised with your business name and services.</p>
        </div>
      </section>

      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Why Start Here?</p>
          <div className="mt-10 space-y-0 divide-y divide-border">
            <Benefit text="Lowest cost — easiest yes for your business" />
            <Benefit text="No changes to how you work — just stop losing leads" />
            <Benefit text="See results in the first week" />
            <Benefit text="Upgrade to AI Receptionist or Automated Workflows anytime" />
          </div>

          <div className="mt-20 border-t border-border pt-10 text-center">
            <h3 className="text-2xl font-bold text-primary">Ready to stop losing leads?</h3>
            <p className="text-sm text-secondary mt-3">Book a free call and we&apos;ll show you exactly how it works for your business.</p>
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

function StepRow({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="py-8 flex gap-8 items-start">
      <span className="text-sm text-muted font-semibold pt-0.5">{number}</span>
      <div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-secondary text-sm leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="py-5 flex items-center gap-3">
      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-primary text-sm">{text}</p>
    </div>
  );
}
