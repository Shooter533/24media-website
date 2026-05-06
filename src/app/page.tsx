import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Never Miss Another Job.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            24Media installs AI receptionists and lead response systems for trade businesses — so every call gets answered and every lead gets followed up, automatically.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Block */}
      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            You&apos;re losing jobs you don&apos;t even know about.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Every missed call, every slow reply, every voicemail left on read is a job that went to someone else. The average small business misses 40% of inbound calls. The first to respond wins 78% of jobs. Your competition is already using this.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-blue">40%</p>
              <p className="mt-2 text-sm text-gray-600">of calls missed by small businesses</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-blue">78%</p>
              <p className="mt-2 text-sm text-gray-600">of jobs won by the first responder</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className="text-4xl font-bold text-blue">5 min</p>
              <p className="mt-2 text-sm text-gray-600">is all it takes to lose a lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What We Install</h2>
            <p className="mt-4 text-lg text-gray-600">Three systems. One goal: never lose a lead again.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="AI Voice Receptionist"
              description="An AI agent answers every inbound call — 24/7, no hold music, no voicemail. Qualifies callers and books appointments directly."
              href="/services/ai-voice-receptionist"
              icon={<PhoneIcon />}
            />
            <ServiceCard
              title="Speed-to-Lead"
              description="Web enquiries get an instant automated response — SMS and voice call — within seconds. First to respond wins the job."
              href="/services/speed-to-lead"
              icon={<BoltIcon />}
            />
            <ServiceCard
              title="Missed Call Text-Back"
              description="Every missed call gets an instant SMS reply within seconds. Keeps leads warm before they call a competitor."
              href="/services/missed-call-text-back"
              icon={<ChatIcon />}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-lg text-gray-400">Live within a week. No tech skills required.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="We build your AI system"
              description="Customised to your business, your services, your tone. Takes about a week."
            />
            <StepCard
              number="2"
              title="It goes live on your number"
              description="Customers call, the AI answers. Leads come in, it follows up instantly."
            />
            <StepCard
              number="3"
              title="You just get the bookings"
              description="We handle the tech, you run the business. Monthly support included."
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for Trades & Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We work with owner-operators who are too busy on the tools to answer every call.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Plumbers", "Electricians", "HVAC", "Builders", "Landscapers", "Pest Control", "Cleaners", "Physios", "Chiropractors", "Beauty Clinics", "Law Firms", "Conveyancers"].map((industry) => (
              <span key={industry} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="bg-light-bg py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialPlaceholder name="Trade Business Owner" role="Plumbing Company" />
            <TestimonialPlaceholder name="Trade Business Owner" role="Electrical Services" />
            <TestimonialPlaceholder name="Trade Business Owner" role="Building Company" />
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">Case studies coming soon as clients are onboarded.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
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
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to stop losing jobs?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Book a free demo and see exactly how the system works for your business.
          </p>
          <Link
            href="/book-demo"
            className="mt-8 inline-block bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue/50 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center text-blue mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue transition-colors">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-blue text-sm font-semibold">Learn more &rarr;</span>
    </Link>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
        {number}
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialPlaceholder({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 opacity-60">
      <p className="text-gray-500 italic">&ldquo;Testimonial coming soon...&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div>
          <p className="text-sm font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
