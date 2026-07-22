import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-24 bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
        <span className="font-display font-bold tracking-[0.2em] text-xl text-foreground uppercase opacity-80">
          Vaeloryn
        </span>
        <p className="font-display text-muted-foreground text-sm tracking-widest uppercase max-w-md">
          Born in South Africa. Built for a global future.
        </p>
        <div className="flex gap-6 mt-4">
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/help-build" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Help Build
          </Link>
          <Link href="/submit-idea" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Submit Idea
          </Link>
        </div>
      </div>
    </footer>
  );
}
