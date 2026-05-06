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
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Entry-Level Product</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            MISSED CALL<br /><span className="text-charcoal">TEXT-BACK</span><span className="text-terracotta">.</span>
          </h1>
          <div className="mt-10 max-w-xl">
            <p className="text-lg text-charcoal-light leading-relaxed">
              Every missed call gets an instant SMS reply. Keep leads warm before they call your competitor. The simplest way to stop losing jobs.
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
          <SectionLabel>How It Works</SectionLabel>
          <div className="mt-12 space-y-16">
            <StepRow number="01" title="Call comes in" description="You're on the tools, in a meeting, or it's after hours." />
            <StepRow number="02" title="Missed? SMS fires instantly" description="Within seconds — not minutes, not hours." />
            <StepRow number="03" title="AI handles the conversation" description="Two-way SMS — books them in or gets their details." />
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-md mx-auto">
          <SectionLabel>What the Customer Sees</SectionLabel>
          <div className="mt-10 space-y-4">
            <div className="bg-terracotta text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[85%]">
              Hi! Thanks for calling Smith Plumbing. Sorry we missed you — we&apos;re on a job right now. Reply here to book or we&apos;ll call you back ASAP.
            </div>
            <div className="bg-stone text-charcoal rounded-2xl rounded-br-sm p-4 text-sm max-w-[85%] ml-auto">
              Hey, I need a hot water system replaced. Can someone come tomorrow?
            </div>
            <div className="bg-terracotta text-white rounded-2xl rounded-bl-sm p-4 text-sm max-w-[85%]">
              Absolutely! I can book you in for tomorrow morning between 8–10am. Does that work?
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-8">Personalised with your business name and services.</p>
        </div>
      </section>

      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Why Start Here?</SectionLabel>
          <div className="mt-12 space-y-0 divide-y divide-stone-dark/30">
            <Benefit text="Lowest cost — easiest yes for your business" />
            <Benefit text="No changes to how you work — just stop losing leads" />
            <Benefit text="See results in the first week" />
            <Benefit text="Upgrade to Voice Receptionist or Speed-to-Lead anytime" />
          </div>

          <div className="mt-20 border-t border-stone-dark/30 pt-10 text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-3">Starting from</p>
            <p className="font-serif text-5xl text-charcoal">$497<span className="text-xl text-muted font-sans">/mo</span></p>
            <p className="text-sm text-muted mt-3">+ one-time setup fee of $1,500</p>
            <Link
              href="/book-demo"
              className="mt-8 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              BOOK A DEMO
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

function StepRow({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-8 items-start border-t border-stone-dark/30 pt-8">
      <span className="text-xs text-muted font-medium pt-1">{number}</span>
      <div>
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-2 text-charcoal-light leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="py-5 flex items-center gap-3">
      <svg className="w-4 h-4 text-terracotta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <p className="text-charcoal">{text}</p>
    </div>
  );
}
