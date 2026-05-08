import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
              Automate the busywork.
              <br />
              <span className="text-accent">Focus on your trade.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl">
              24Media builds tailored AI systems for small service businesses — handling calls, following up leads, and managing scheduling so you don&apos;t have to.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:0485040001"
                className="text-primary border border-border hover:border-accent/30 px-7 py-3.5 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0485 040 001
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">Call now to hear our AI receptionist in action — available 24/7.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <Stat value="40%" label="of calls to small businesses go unanswered" />
          <Stat value="78%" label="of customers buy from the first responder" />
          <Stat value="5 min" label="is all it takes to lose a lead to a competitor" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">The Problem</p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              You&apos;re too busy working to answer every call
            </h2>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              Missed calls, slow follow-ups, and forgotten leads are costing you jobs every week. Your competitors are already responding faster. AI levels the playing field.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">What We Build For You</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight max-w-xl">
            AI systems tailored to your business
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<PhoneIcon />}
              title="AI Receptionist"
              description="An AI agent answers every call — 24/7. It qualifies leads, answers questions, and books appointments directly into your calendar."
              href="/services/ai-voice-receptionist"
            />
            <ServiceCard
              icon={<MessageIcon />}
              title="Missed Call Text-Back"
              description="Every missed call gets an instant SMS reply within seconds. Keeps leads engaged before they call your competitor."
              href="/services/missed-call-text-back"
            />
            <ServiceCard
              icon={<WorkflowIcon />}
              title="Automated Workflows"
              description="Custom automations for scheduling, follow-ups, review requests, and customer support — tailored to how your business actually works."
              href="/services/speed-to-lead"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">How It Works</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Live in a week. No tech skills needed.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <Step number="1" title="We learn your business" description="Tell us how you work — your services, your hours, your tone. We design a system around you." />
            <Step number="2" title="We build & connect" description="Your AI system goes live on your existing number. No hardware, no software to install." />
            <Step number="3" title="You get the results" description="Calls answered, leads followed up, appointments booked. You focus on the job at hand." />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">Who We Help</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Built for trades & service businesses
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
            If you&apos;re too busy on the tools to answer every call, we built this for you.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Plumbers", "Electricians", "HVAC", "Builders", "Landscapers", "Cleaners", "Auto Repair", "Beauty & Hair", "Medical & Allied Health", "Accounting", "Legal", "Real Estate"].map((industry) => (
              <span key={industry} className="border border-border text-secondary px-4 py-2 rounded-lg text-sm font-medium">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">What Clients Say</p>
            <blockquote className="mt-8 text-2xl sm:text-3xl font-medium text-primary leading-relaxed">
              &ldquo;We were missing 10+ calls a week. Now every single one gets answered and booked — without me lifting a finger.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-primary">Local Plumbing Business</p>
              <p className="text-sm text-muted">Brisbane, QLD</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">FAQ</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
            Common questions
          </h2>
          <div className="mt-12 space-y-0 divide-y divide-border">
            <FAQ question="Will it sound like a robot?" answer="No. Modern AI voice sounds natural. Most callers don't realise they're speaking to AI." />
            <FAQ question="What if someone needs a real person?" answer="The AI transfers the call or sends you a notification immediately. You stay in control." />
            <FAQ question="How long does setup take?" answer="Most clients are live within 5–7 business days. We handle everything." />
            <FAQ question="Do I need to change my phone number?" answer="No. We route through your existing number. Nothing changes for your customers." />
            <FAQ question="What does it cost?" answer="It depends on the services you need. Book a free call and we'll give you a clear, no-obligation quote." />
            <FAQ question="Is this just a chatbot?" answer="No. This is voice AI that answers phone calls, books appointments, sends SMS, and takes real action for your business." />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Ready to stop losing leads?
          </h2>
          <p className="mt-6 text-lg text-secondary">
            Book a free 15-minute call. We&apos;ll show you exactly how AI can work for your business.
          </p>
          <Link
            href="/book-demo"
            className="mt-10 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm"
          >
            Book a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-2xl lg:text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-secondary">{label}</p>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group block bg-white border border-border rounded-xl p-8 hover:border-accent/30 hover:shadow-sm transition-all">
      <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-accent">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary group-hover:text-accent transition-colors">{title}</h3>
      <p className="mt-3 text-secondary text-sm leading-relaxed">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
        Learn more
        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </span>
    </Link>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">{number}</div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-6">
      <h3 className="font-semibold text-primary">{question}</h3>
      <p className="mt-2 text-secondary text-sm leading-relaxed">{answer}</p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
