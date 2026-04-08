'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Locations', href: '/locations' },
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '/partners' },
  ];

  return (
    <header className="bg-navy sticky top-0 z-50 border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-white font-bold text-xl tracking-tight">
              Beacon<span className="text-accent"> AV</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy-light border-t border-navy px-4 pb-4 pt-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-300 hover:text-white py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded text-center transition-colors"
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
