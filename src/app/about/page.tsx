import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 24Media",
  description:
    "24Media is an AI automation agency based in Brisbane, Australia. We help small service businesses automate the busywork so they can focus on their trade.",
};

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">About Us</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-primary leading-[1.1] tracking-tight">
            Built for small business.
            <br />
            <span className="text-accent">By someone who gets it.</span>
          </h1>
          <p className="mt-6 text-lg text-secondary leading-relaxed max-w-2xl">
            We&apos;re an AI automation agency based in Brisbane that helps trades and service businesses stop losing jobs to missed calls and slow follow-ups.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-2">
              <div className="bg-surface rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-border rounded-full mx-auto mb-4" />
                  <p className="text-sm text-muted">Photo coming soon</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-primary">Shane McGrath</h2>
              <p className="text-sm text-accent font-semibold mt-2 mb-8">Founder, 24Media</p>
              <div className="space-y-5 text-secondary leading-relaxed">
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

      <section className="bg-surface py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Our Values</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Why we built this.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
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

      <section className="py-24 lg:py-28 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Want to chat?
          </h2>
          <p className="mt-6 text-lg text-secondary">
            Book a free demo or just drop me a line — happy to talk through whether this is a fit for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm"
            >
              Book a Free Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a
              href="mailto:shane@24media.com.au"
              className="border border-border hover:border-primary/30 text-primary px-7 py-3.5 rounded-lg font-semibold transition-colors text-center text-sm"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-t border-border pt-6">
      <h3 className="font-semibold text-primary mb-2">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}
