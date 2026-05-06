import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              24<span className="text-blue">Media</span>
            </Link>
            <p className="mt-3 text-sm">
              AI automation for trade businesses. Based in Brisbane, Australia.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-voice-receptionist" className="hover:text-white transition-colors">AI Voice Receptionist</Link></li>
              <li><Link href="/services/speed-to-lead" className="hover:text-white transition-colors">Speed-to-Lead</Link></li>
              <li><Link href="/services/missed-call-text-back" className="hover:text-white transition-colors">Missed Call Text-Back</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/book-demo" className="hover:text-white transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Get Started</h4>
            <p className="text-sm mb-4">Ready to stop missing leads?</p>
            <Link
              href="/book-demo"
              className="inline-block bg-orange hover:bg-orange/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} 24Media. All rights reserved.</p>
          <p className="text-sm">ABN: Coming Soon</p>
        </div>
      </div>
    </footer>
  );
}
