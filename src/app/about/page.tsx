import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 24Media",
  description:
    "24Media is an AI automation agency based in Brisbane, Australia. Founded by Shane McGrath to help trade businesses stop missing leads.",
};

export default function About() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>About Us</SectionLabel>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal/20 leading-[0.95] tracking-tight mt-6">
            ABOUT<br /><span className="text-charcoal">24MEDIA</span><span className="text-terracotta">.</span>
          </h1>
          <p className="mt-10 text-lg text-charcoal-light leading-relaxed max-w-xl">
            We&apos;re an AI automation agency based in Brisbane that helps trade businesses stop losing jobs to missed calls and slow follow-ups.
          </p>
        </div>
      </section>

      <section className="border-t border-stone-dark/30 py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2">
              <div className="bg-warm-white rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-stone-dark rounded-full mx-auto mb-4" />
                  <p className="text-sm text-muted">Photo coming soon</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="font-serif text-3xl text-charcoal">Shane McGrath</h2>
              <p className="text-sm text-terracotta font-medium mt-2 mb-8">Founder, 24Media</p>
              <div className="space-y-5 text-charcoal-light leading-relaxed">
                <p>
                  I started 24Media because I kept seeing the same problem: good trade businesses losing work they didn&apos;t even know about. Missed calls, slow replies to web enquiries, voicemails that never got returned.
                </p>
                <p>
                  These aren&apos;t bad businesses — they&apos;re busy ones. The owner is on the tools, the admin is overwhelmed, and the phone just keeps ringing.
                </p>
                <p>
                  I come from a software and tech background. I saw how AI voice technology had matured to the point where it could genuinely hold natural conversations — not the old &ldquo;press 1 for sales&rdquo; rubbish. I realised this could solve a real problem for small businesses that can&apos;t afford a full-time receptionist.
                </p>
                <p>
                  24Media isn&apos;t a tech startup — it&apos;s a service business. We don&apos;t sell software licenses and leave you to figure it out. We build, install, and maintain the system for you. You just get the bookings.
                </p>
                <p>
                  Based in Brisbane, working with businesses across Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mt-6 mb-16">
            Why we built this.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            <ValueBlock
              title="Not a Tech Startup"
              description="We're a service business that happens to use advanced technology. You deal with people, not portals."
            />
            <ValueBlock
              title="Built for Small Business"
              description="Not enterprise. Not corporate. We work with owner-operators who are too busy to answer every call."
            />
            <ValueBlock
              title="Outcome-Focused"
              description="We don't sell features — we deliver results. Leads captured, calls answered, bookings made."
            />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
            Want to chat?
          </h2>
          <p className="mt-6 text-lg text-charcoal-light">
            Book a free demo or just drop me a line — happy to talk through whether this is a fit for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              BOOK A FREE DEMO
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </Link>
            <a
              href="mailto:shane@24media.com.au"
              className="border border-charcoal/20 hover:border-charcoal/40 text-charcoal px-8 py-3.5 rounded-full font-medium transition-colors text-center"
            >
              Email Me
            </a>
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

function ValueBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-stone-dark/30 pt-6">
      <h3 className="font-medium text-charcoal mb-2">{title}</h3>
      <p className="text-charcoal-light text-sm leading-relaxed">{description}</p>
    </div>
  );
}
