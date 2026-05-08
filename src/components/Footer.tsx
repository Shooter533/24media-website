import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link href="/" className="text-xl font-bold text-primary tracking-tight">
              24Media
            </Link>
            <p className="mt-4 text-sm text-secondary leading-relaxed max-w-xs">
              AI automation tailored for small service businesses. Less busywork, more bookings.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-primary font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/ai-voice-receptionist" className="text-secondary hover:text-primary transition-colors">AI Receptionist</Link></li>
              <li><Link href="/services/missed-call-text-back" className="text-secondary hover:text-primary transition-colors">Missed Call Text-Back</Link></li>
              <li><Link href="/services/speed-to-lead" className="text-secondary hover:text-primary transition-colors">Automated Workflows</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-primary font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/how-it-works" className="text-secondary hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="text-secondary hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/book-demo" className="text-secondary hover:text-primary transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-primary font-semibold text-sm mb-4">Ready to automate?</h4>
            <p className="text-sm text-secondary mb-5">See how AI can handle the busywork so you can focus on what you do best.</p>
            <Link
              href="/book-demo"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Free Call
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} 24Media. All rights reserved.</p>
          <p className="text-xs text-muted">Suite 21, Level 1/247 Bayview St, Hollywell QLD 4216</p>
        </div>
      </div>
    </footer>
  );
}
