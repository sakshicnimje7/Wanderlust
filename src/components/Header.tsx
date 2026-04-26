'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About', href: '/#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-xl font-semibold text-white tracking-tight hidden sm:block">
              Wanderlust
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Plan a Trip
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} variant="outline" />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute top-20 left-0 right-0 p-6 flex flex-col gap-2">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-lg font-medium text-white/90 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
              >
                {link?.label}
              </Link>
            ))}
            <Link
              href="/sign-in"
              className="mt-2 text-lg font-medium text-white/90 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
            >
              Sign In
            </Link>
            <Link
              href="/destinations"
              className="mt-4 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3.5 rounded-full font-semibold"
            >
              Plan a Trip
              <Icon name="ArrowRightIcon" size={18} variant="outline" />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}