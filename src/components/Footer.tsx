import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone border-t border-stone-dark/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl text-charcoal tracking-tight">
              24Media<span className="text-terracotta">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              AI automation for trade businesses.<br />Based in Brisbane, Australia.
            </p>
          </div>

          <div>
            <h4 className="text-charcoal font-medium text-xs uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/ai-voice-receptionist" className="text-muted hover:text-charcoal transition-colors">AI Voice Receptionist</Link></li>
              <li><Link href="/services/speed-to-lead" className="text-muted hover:text-charcoal transition-colors">Speed-to-Lead</Link></li>
              <li><Link href="/services/missed-call-text-back" className="text-muted hover:text-charcoal transition-colors">Missed Call Text-Back</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal font-medium text-xs uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/how-it-works" className="text-muted hover:text-charcoal transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="text-muted hover:text-charcoal transition-colors">About</Link></li>
              <li><Link href="/book-demo" className="text-muted hover:text-charcoal transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-charcoal font-medium text-xs uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-muted mb-5">Ready to stop missing leads?</p>
            <Link
              href="/book-demo"
              className="inline-block bg-terracotta hover:bg-terracotta-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-dark/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} 24Media. All rights reserved.</p>
          <p className="text-xs text-muted">Brisbane, Australia</p>
        </div>
      </div>
    </footer>
  );
}
