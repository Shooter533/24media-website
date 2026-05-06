import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl text-charcoal/20 leading-[0.95] tracking-tight">
            NEVER MISS<br />
            ANOTHER <span className="text-charcoal">JOB</span><span className="text-terracotta">.</span>
          </h1>
          <div className="mt-10 max-w-xl">
            <p className="text-lg text-charcoal-light leading-relaxed">
              24Media installs AI receptionists and lead response systems for trade businesses — so every call gets answered and every lead gets followed up, automatically.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                BOOK A FREE CONSULTATION
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
              </Link>
              <Link
                href="/how-it-works"
                className="text-charcoal border border-charcoal/20 hover:border-charcoal/40 px-8 py-3.5 rounded-full font-medium transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider stats bar */}
      <section className="border-y border-stone-dark/30 py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <p className="text-terracotta text-sm font-medium uppercase tracking-wider">40% of calls missed by small businesses.</p>
          <p className="text-charcoal-light text-sm font-medium uppercase tracking-wider">First to respond wins 78% of jobs.</p>
          <p className="text-terracotta text-sm font-medium uppercase tracking-wider">5 minutes is all it takes to lose a lead.</p>
        </div>
      </section>

      {/* Problem Block */}
      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mt-6">
            You&apos;re losing jobs you<br />don&apos;t even know about.
          </h2>
          <p className="mt-8 text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Every missed call, every slow reply, every voicemail left on read is a job that went to someone else. Your competition is already using this.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>What We Install</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mt-6 mb-20">
            Three systems. One goal:<br />never lose a lead again.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <ServiceBlock
              number="01"
              title="AI Voice Receptionist"
              description="An AI agent answers every inbound call — 24/7, no hold music, no voicemail. Qualifies callers and books appointments directly."
              href="/services/ai-voice-receptionist"
            />
            <ServiceBlock
              number="02"
              title="Speed-to-Lead"
              description="Web enquiries get an instant automated response — SMS and voice call — within seconds. First to respond wins the job."
              href="/services/speed-to-lead"
            />
            <ServiceBlock
              number="03"
              title="Missed Call Text-Back"
              description="Every missed call gets an instant SMS reply within seconds. Keeps leads warm before they call a competitor."
              href="/services/missed-call-text-back"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mt-6 mb-20">
            Live within a week.<br />No tech skills required.
          </h2>

          <div className="space-y-16">
            <StepRow number="01" title="We build your AI system" description="Customised to your business, your services, your tone. Takes about a week." />
            <StepRow number="02" title="It goes live on your number" description="Customers call, the AI answers. Leads come in, it follows up instantly." />
            <StepRow number="03" title="You just get the bookings" description="We handle the tech, you run the business. Monthly support included." />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-stone-dark/30 py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Who It&apos;s For</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mt-6">
            Built for trades & services.
          </h2>
          <p className="mt-6 text-lg text-charcoal-light max-w-2xl mx-auto">
            We work with owner-operators who are too busy on the tools to answer every call.
          </p>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {["Plumbers", "Electricians", "HVAC", "Builders", "Landscapers", "Pest Control", "Cleaners", "Physios", "Chiropractors", "Beauty Clinics", "Law Firms", "Conveyancers"].map((industry) => (
              <span key={industry} className="border border-charcoal/15 text-charcoal/60 px-5 py-2 rounded-full text-sm">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Reviews</SectionLabel>
          <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-charcoal/40 leading-relaxed mt-10">
            &ldquo;Testimonials coming soon as we onboard our first clients. We&apos;re confident the results will speak for themselves.&rdquo;
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <TestimonialPlaceholder name="Trade Business Owner" role="Plumbing Company" />
            <TestimonialPlaceholder name="Trade Business Owner" role="Electrical Services" />
            <TestimonialPlaceholder name="Trade Business Owner" role="Building Company" />
          </div>
          <p className="mt-10 text-sm text-muted">Case studies coming soon as clients are onboarded.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-warm-white py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mt-6 mb-16">
            Common questions.
          </h2>
          <div className="space-y-0 divide-y divide-stone-dark/30">
            <FAQ question="Will it sound like a robot?" answer="No. Modern AI voice sounds natural. Callers often don't know they're speaking to an AI." />
            <FAQ question="What if someone needs to speak to a real person?" answer="It transfers the call or sends a message to you immediately. You stay in control." />
            <FAQ question="How long does setup take?" answer="Most clients are live within 5–7 business days." />
            <FAQ question="Do I need to change my phone number?" answer="No. We route through your existing number. Nothing changes for your customers." />
            <FAQ question="What's the contract?" answer="Month-to-month after setup. No lock-in contracts." />
            <FAQ question="Is this just a chatbot?" answer="No. This is a voice AI that answers phone calls and takes action — books appointments, captures info, and responds to SMS." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Ready to stop<br />losing jobs?
          </h2>
          <p className="mt-6 text-lg text-charcoal-light">
            Book a free demo and see exactly how the system works for your business.
          </p>
          <Link
            href="/book-demo"
            className="mt-10 inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3.5 rounded-full font-medium transition-colors"
          >
            BOOK A FREE DEMO
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 justify-start">
      <span className="w-2 h-2 rounded-full bg-terracotta" />
      <span className="text-xs font-medium uppercase tracking-wider text-muted">{children}</span>
    </div>
  );
}

function ServiceBlock({ number, title, description, href }: { number: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group block">
      <span className="text-xs text-muted font-medium">{number}</span>
      <h3 className="mt-3 text-xl font-semibold text-charcoal group-hover:text-terracotta transition-colors">{title}</h3>
      <p className="mt-3 text-charcoal-light leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-terracotta text-sm font-medium uppercase tracking-wide">
        Learn more
        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
      </span>
    </Link>
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

function TestimonialPlaceholder({ name, role }: { name: string; role: string }) {
  return (
    <div className="text-center opacity-40">
      <div className="w-14 h-14 bg-stone-dark rounded-full mx-auto mb-3" />
      <p className="text-xs font-medium text-charcoal">{name}</p>
      <p className="text-xs text-muted">{role}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-6">
      <h3 className="font-medium text-charcoal">{question}</h3>
      <p className="mt-2 text-charcoal-light leading-relaxed">{answer}</p>
    </div>
  );
}
