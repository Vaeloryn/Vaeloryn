import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, useReducedMotion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && mobileMenuOpen) {
        const menuEls = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button, textarea, input, select') || []);
        const focusable = [buttonRef.current, ...menuEls].filter((el): el is HTMLElement => el != null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      document.querySelectorAll<HTMLElement>('[data-mobile-menu-background], footer').forEach((element) => {
        element.inert = true;
        element.setAttribute('aria-hidden', 'true');
      });
      // Focus first link on open
      setTimeout(() => {
        const menuEls = menuRef.current?.querySelectorAll<HTMLElement>('a[href]');
        if (menuEls && menuEls.length > 0) {
          menuEls[0].focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
      document.querySelectorAll<HTMLElement>('[data-mobile-menu-background], footer').forEach((element) => {
        element.inert = false;
        element.removeAttribute('aria-hidden');
      });
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.querySelectorAll<HTMLElement>('[data-mobile-menu-background], footer').forEach((element) => {
        element.inert = false;
        element.removeAttribute('aria-hidden');
      });
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      buttonRef.current?.focus();
    }, 10);
  };

  const linkClass = "text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1";

  const NavLinks = () => (
    <>
      <Link href="/vaelo" onClick={closeMenu} className={linkClass}>
        VAELO
      </Link>
      <Link href="/status" onClick={closeMenu} className={linkClass}>
        Progress
      </Link>
      <Link href="/verify" onClick={closeMenu} className={linkClass}>
        Verify
      </Link>
      <Link href="/roadmap" onClick={closeMenu} className={linkClass}>
        Roadmap
      </Link>
      <Link href="/private-sales" onClick={closeMenu} className="text-sm font-medium text-primary/80 hover:text-primary transition-colors border border-primary/25 hover:border-primary/50 px-3 py-1 rounded-md hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        Private Sales
      </Link>
      <Link href="/help-build" onClick={closeMenu} className={linkClass}>
        Help Build
      </Link>
      <Link href="/contact" onClick={closeMenu} className={linkClass}>
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
          <span className="font-display font-bold tracking-[0.2em] text-lg text-foreground uppercase">
            Vaeloryn
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Mobile Toggle */}
        <button
          ref={buttonRef}
          className="md:hidden z-50 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          onClick={() => {
            if (mobileMenuOpen) closeMenu();
            else setMobileMenuOpen(true);
          }}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Primary navigation"
            >
              <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {location === '/' && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary shadow-[0_0_10px_rgba(245,166,11,0.45)]"
          style={{ scaleX: prefersReducedMotion ? 1 : smoothScrollProgress }}
        />
      )}
    </nav>
  );
}
