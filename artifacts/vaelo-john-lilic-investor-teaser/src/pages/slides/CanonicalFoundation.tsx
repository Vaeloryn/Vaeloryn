export default function CanonicalFoundation() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-0 top-0 h-full w-[0.8vw] bg-primary" />
      <div className="absolute right-[-10vw] top-[-16vh] h-[50vw] w-[50vw] rounded-full border border-primary/12" />

      <div className="relative flex h-full flex-col px-[7vw] py-[5.5vh]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[1.5vw] font-bold tracking-[0.24em] text-primary">02 / THE ECOSYSTEM &amp; WHAT HAS BEEN BUILT</p>
            <h2 className="mt-[1.1vh] font-display text-[4.4vw] font-semibold leading-[0.9] tracking-[-0.055em] text-accent">A project ecosystem, not a token thesis.</h2>
          </div>
          <p className="mb-[0.4vh] w-[29vw] font-body text-[1.55vw] font-medium leading-[1.32] text-muted">
            A long-term model for moving promising work from discovery to the next meaningful milestone.
          </p>
        </div>

        <div className="mt-[3vh] border-y border-primary/35 py-[1.6vh]">
          <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">THE VAELORYN BRIDGE</p>
          <div className="mt-[1vh] flex items-center justify-between font-body text-[1.65vw] font-semibold text-accent">
            <span>Discover</span><span className="text-primary">→</span><span>Understand</span><span className="text-primary">→</span><span>Evaluate</span><span className="text-primary">→</span><span>Connect</span><span className="text-primary">→</span><span>Support</span><span className="text-primary">→</span><span>Track</span><span className="text-primary">→</span><span>Scale</span>
          </div>
        </div>

        <div className="mt-[2.3vh] grid flex-1 grid-cols-[1fr_0.92fr] gap-[4.5vw]">
          <div>
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">ECOSYSTEM &amp; PROTOCOL FOUNDATION</p>
            <p className="mt-[1.2vh] max-w-[48vw] font-body text-[1.7vw] leading-[1.3] text-accent">
              VAELO is the developing digital asset of this ecosystem. Its potential utility should follow real products, services, and activity where it provides genuine functional value.
            </p>
            <p className="mt-[1vh] font-body text-[1.5vw] italic leading-[1.3] text-muted">“Utility follows products.”</p>

            <div className="mt-[1.8vh] border-t border-accent/20 pt-[1.2vh]">
              <p className="font-body text-[1.5vw] leading-[1.28] text-muted">Built locally: fixed-supply ERC-20, atomic genesis, founder vesting, internal review, and recorded Foundry evidence. Public foundation: website, documentation, transparency material, and roadmap.</p>
              <p className="mt-[0.7vh] font-body text-[1.5vw] leading-[1.28] text-muted">Historical Base Sepolia V1.1 is non-canonical; canonical implementation is local and not deployed.</p>
            </div>
          </div>

          <div className="border-l border-primary/25 pl-[3vw]">
            <div className="flex items-end justify-between">
              <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">SUPPORTING TOKENOMICS</p>
              <p className="font-display text-[2.5vw] font-semibold leading-none text-accent">1B VAELO</p>
            </div>
            <div className="mt-[0.8vh] space-y-0">
              <div className="flex items-center justify-between border-b border-accent/15 py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Ecosystem &amp; Community</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">30%</p></div>
              <div className="flex items-center justify-between border-b border-accent/15 py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Public Distribution</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">20%</p></div>
              <div className="flex items-center justify-between border-b border-accent/15 py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Vaeloryn Treasury</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">20%</p></div>
              <div className="flex items-center justify-between border-b border-accent/15 py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Team &amp; Contributors</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">15%</p></div>
              <div className="flex items-center justify-between border-b border-accent/15 py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Founder</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">10%</p></div>
              <div className="flex items-center justify-between py-[0.35vh]"><p className="font-body text-[1.5vw] leading-none text-accent">Strategic Partnerships</p><p className="font-body text-[1.5vw] font-bold leading-none text-primary">5%</p></div>
            </div>
            <div className="mt-[0.8vh] border-t border-primary/35 pt-[0.7vh]">
              <p className="font-body text-[1.5vw] font-bold tracking-[0.16em] text-primary">FOUNDER VESTING · 100M VAELO / 10%</p>
              <p className="mt-[0.25vh] font-body text-[1.5vw] leading-[1.2] text-muted">2.5M at T0, 90, 180, and 270 days; 90M linear over exactly 1,095 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}