import React from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';
import Icon from './ui/AppIcon';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <AppLogo size={28} />
            <span className="font-display text-base font-semibold text-foreground">Wanderlust</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">·</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">© 2026</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/destinations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Destinations
            </Link>
            <Link href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { name: 'Instagram', icon: 'CameraIcon' },
              { name: 'Twitter', icon: 'ChatBubbleLeftIcon' },
            ].map((s) => (
              <button
                type="button"
                key={s.name}
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all"
              >
                <Icon name={s.icon as any} size={16} variant="outline" />
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 sm:hidden">© 2026 Wanderlust. All rights reserved.</p>
      </div>
    </footer>
  );
}