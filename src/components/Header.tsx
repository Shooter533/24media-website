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
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="text-xl font-bold text-primary tracking-tight">
            24Media
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink href="/services/ai-voice-receptionist">AI Receptionist</NavLink>
            <NavLink href="/services/missed-call-text-back">Missed Call Text-Back</NavLink>
            <NavLink href="/how-it-works">How It Works</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/book-demo"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book a Free Call
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <nav className="lg:hidden bg-white border-t border-border px-6 pb-6 pt-2">
          <div className="space-y-1">
            <MobileLink href="/services/ai-voice-receptionist" onClick={() => setMobileOpen(false)}>AI Receptionist</MobileLink>
            <MobileLink href="/services/missed-call-text-back" onClick={() => setMobileOpen(false)}>Missed Call Text-Back</MobileLink>
            <MobileLink href="/how-it-works" onClick={() => setMobileOpen(false)}>How It Works</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
          </div>
          <Link
            href="/book-demo"
            className="block bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg text-sm font-semibold text-center transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a Free Call
          </Link>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-secondary hover:text-primary text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="block text-secondary hover:text-primary py-3 text-sm font-medium" onClick={onClick}>
      {children}
    </Link>
  );
}
