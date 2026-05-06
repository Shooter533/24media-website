"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-stone/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl text-charcoal tracking-tight">
            24Media<span className="text-terracotta">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <NavPill href="/services/ai-voice-receptionist">Voice Receptionist</NavPill>
            <NavPill href="/services/speed-to-lead">Speed-to-Lead</NavPill>
            <NavPill href="/services/missed-call-text-back">Missed Call Text-Back</NavPill>
            <NavPill href="/how-it-works">How It Works</NavPill>
            <NavPill href="/about">About</NavPill>
            <Link
              href="/book-demo"
              className="ml-4 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-charcoal p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-stone border-t border-stone-dark/30 px-6 pb-6 space-y-1">
          <MobileLink href="/services/ai-voice-receptionist" onClick={() => setMobileOpen(false)}>Voice Receptionist</MobileLink>
          <MobileLink href="/services/speed-to-lead" onClick={() => setMobileOpen(false)}>Speed-to-Lead</MobileLink>
          <MobileLink href="/services/missed-call-text-back" onClick={() => setMobileOpen(false)}>Missed Call Text-Back</MobileLink>
          <MobileLink href="/how-it-works" onClick={() => setMobileOpen(false)}>How It Works</MobileLink>
          <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
          <Link
            href="/book-demo"
            className="block bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full text-sm font-medium text-center transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
}

function NavPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-charcoal/70 hover:text-charcoal border border-charcoal/15 hover:border-charcoal/30 px-4 py-2 rounded-full text-sm transition-all"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="block text-charcoal/70 hover:text-charcoal text-sm py-3 border-b border-stone-dark/20" onClick={onClick}>
      {children}
    </Link>
  );
}
