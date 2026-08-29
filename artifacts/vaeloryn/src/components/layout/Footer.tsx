import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-20 bg-background">
      <div className="container mx-auto px-6 flex flex-col items-center gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-display font-bold tracking-[0.2em] text-xl text-foreground uppercase opacity-80">
            Vaeloryn
          </span>
          <p className="font-display text-muted-foreground text-sm tracking-widest uppercase">
            Born in South Africa. Built for a global future.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 items-center sm:items-start text-center sm:text-left">
          {/* Main links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
              Navigate
            </span>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/vaelo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              VAELO
            </Link>
            <Link href="/status" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Progress
            </Link>
            <a href="/vaeloryn-wallet/" className="text-sm text-primary/70 hover:text-primary transition-colors">
              Wallet
            </a>
            <Link href="/help-build" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Help Build
            </Link>
            <Link href="/submit-idea" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Submit Idea
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Documentation links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
              Documentation
            </span>
            <Link href="/whitepaper" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              White Paper
            </Link>
            <Link href="/transparency" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Trust &amp; Transparency
            </Link>
            <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Roadmap
            </Link>
            <Link href="/risks" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Risks
            </Link>
          </div>

          {/* Protocol links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
              Protocol
            </span>
            <Link href="/verify" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Verify
            </Link>
            <a
              href="https://sepolia.basescan.org/address/0xAD1cdb84Ead8b3DA2aBDDC3bF692dDDA677B479c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              VaelorynToken ↗
            </a>
            <a
              href="https://sepolia.basescan.org/address/0x5858ecb46B6442b665C2a92cb387D3ce11b65FB2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              FounderVesting ↗
            </a>
            <a
              href="https://sepolia.basescan.org/address/0xa3eF040471497538a617061FdDEea0CD4C03beBa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GenesisAllocator ↗
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground/40 text-center max-w-lg leading-relaxed">
          Vaeloryn and VAELO are deployed on Base Sepolia testnet. Testnet VAELO has no monetary value.
          No mainnet product is launched. No public token sale is active. Nothing on this site constitutes
          financial, legal or investment advice.
        </p>
      </div>
    </footer>
  );
}
