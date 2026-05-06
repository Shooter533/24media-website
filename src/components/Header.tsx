"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            24<span className="text-blue">Media</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services/ai-voice-receptionist" className="text-gray-300 hover:text-white text-sm transition-colors">
              AI Voice Receptionist
            </Link>
            <Link href="/services/speed-to-lead" className="text-gray-300 hover:text-white text-sm transition-colors">
              Speed-to-Lead
            </Link>
            <Link href="/services/missed-call-text-back" className="text-gray-300 hover:text-white text-sm transition-colors">
              Missed Call Text-Back
            </Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white text-sm transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
              About
            </Link>
            <Link
              href="/book-demo"
              className="bg-orange hover:bg-orange/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Demo
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-3">
          <Link href="/services/ai-voice-receptionist" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>
            AI Voice Receptionist
          </Link>
          <Link href="/services/speed-to-lead" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>
            Speed-to-Lead
          </Link>
          <Link href="/services/missed-call-text-back" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>
            Missed Call Text-Back
          </Link>
          <Link href="/how-it-works" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link
            href="/book-demo"
            className="block bg-orange hover:bg-orange/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </Link>
        </nav>
      )}
    </header>
  );
}
