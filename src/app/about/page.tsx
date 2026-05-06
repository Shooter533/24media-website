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
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            About 24Media
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We&apos;re an AI automation agency based in Brisbane that helps trade businesses stop losing jobs to missed calls and slow follow-ups.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="bg-light-bg rounded-xl aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                  <p className="text-sm text-gray-500">Photo coming soon</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shane McGrath</h2>
              <p className="text-sm text-blue font-semibold mb-4">Founder, 24Media</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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

      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why We Built This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Not a Tech Startup"
              description="We're a service business that happens to use advanced technology. You deal with people, not portals."
            />
            <ValueCard
              title="Built for Small Business"
              description="Not enterprise. Not corporate. We work with owner-operators who are too busy to answer every call."
            />
            <ValueCard
              title="Outcome-Focused"
              description="We don't sell features — we deliver results. Leads captured, calls answered, bookings made."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Chat?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a free demo or just drop me a line — happy to talk through whether this is a fit for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Free Demo
            </Link>
            <a
              href="mailto:shane@24media.com.au"
              className="border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
