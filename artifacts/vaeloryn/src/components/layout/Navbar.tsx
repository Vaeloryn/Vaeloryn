import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const NavLinks = () => (
    <>
      <Link href="/#mission" onClick={closeMenu} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Mission
      </Link>
      <Link href="/#areas" onClick={closeMenu} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Areas
      </Link>
      <Link href="/help-build" onClick={closeMenu} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Help Build
      </Link>
      <Link href="/submit-idea" onClick={closeMenu} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Submit Idea
      </Link>
      <Link href="/contact" onClick={closeMenu} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-display font-bold tracking-[0.2em] text-lg text-foreground uppercase">
            Vaeloryn
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
