import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, Chrome, Plus, Share, Smartphone } from 'lucide-react';
import { Link } from 'wouter';
import { SEO } from '@/components/SEO';

const WALLET_URL = '/vaeloryn-wallet/';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const installSteps = [
  { number: '01', title: 'Open in Safari', copy: 'Open the wallet in Safari on your iPhone — not Chrome.', icon: Smartphone },
  { number: '02', title: 'Tap Share', copy: 'Tap the Share button, the square with the arrow.', icon: Share },
  { number: '03', title: 'Add to Home Screen', copy: 'Scroll the Share sheet and tap Add to Home Screen.', icon: Plus },
  { number: '04', title: 'Name it Vaeloryn', copy: 'Keep the name Vaeloryn, then tap Add.', icon: Check },
  { number: '05', title: 'Open the new icon', copy: 'Launch the new Vaeloryn icon from your Home Screen.', icon: Smartphone },
];

export function Wallet() {
  return (
    <div className="w-full">
      <SEO
        title="Vaeloryn Wallet | Base Sepolia Test Wallet"
        description="Open the standalone Vaeloryn wallet for Base Sepolia. Canonical VAELO is not live and no public sale is active."
        canonical="https://vaeloryn.com/wallet"
        keywords="Vaeloryn wallet, VAELO wallet, Base Sepolia, Vaeloryn"
      />

      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,168,76,0.12),transparent_38%)]" />
        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft size={15} />
              Vaeloryn
            </Link>
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Wallet
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">Base Sepolia</span>
            </div>
            <h1 className="font-display text-5xl font-light uppercase tracking-[0.12em] text-foreground md:text-7xl">
              Wallet
            </h1>
            <div className="my-8 h-px w-16 bg-primary" />
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              The Vaeloryn wallet is the first flagship product. Hold, receive and send when you are ready.
              Canonical VAELO is not live. No public sale is active.
            </p>
            <p className="mt-5 text-base italic leading-relaxed text-primary/80">
              Wallet first. Discover features will be added later.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={WALLET_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open wallet
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#install"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-7 text-sm font-medium tracking-wide text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
              >
                Add to iPhone Home Screen
                <Smartphone size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="install" className="border-b border-white/5 bg-black/20 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">Install guide</p>
              <h2 className="font-display text-3xl font-light uppercase tracking-[0.1em] text-foreground md:text-5xl">
                Keep it close.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                iOS blocks automatic installation. Follow these steps in Safari to place the wallet on your Home Screen.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-5">
              {installSteps.map(({ number, title, copy, icon: Icon }) => (
                <div key={number} className="group rounded-lg border border-white/8 bg-white/[0.025] p-5 transition-colors hover:border-primary/30">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-2xl font-light text-primary/80">{number}</span>
                    <Icon size={17} strokeWidth={1.5} className="text-muted-foreground/60 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mb-2 font-display text-lg text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.02] p-5">
              <Chrome size={18} className="mt-0.5 shrink-0 text-primary/80" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Android: open the wallet in Chrome, then use the menu and choose <span className="text-foreground">Add to Home screen</span> or <span className="text-foreground">Install app</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col gap-6 rounded-lg border border-primary/20 bg-primary/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">Base Sepolia</p>
              <h2 className="font-display text-3xl font-light tracking-wide text-foreground">A measured place for test assets.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                The standalone wallet keeps the network, scope and status clear. Canonical VAELO remains unavailable until its verified contract is configured.
              </p>
            </div>
            <a
              href={WALLET_URL}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Open wallet
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}