export default function CanonicalFoundation() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-0 top-0 h-full w-[0.8vw] bg-primary" />
      <div className="absolute right-[-8vw] top-[-12vh] h-[46vw] w-[46vw] rounded-full border border-primary/15" />

      <div className="relative flex h-full flex-col px-[7vw] py-[6vh]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[1.45vw] font-bold tracking-[0.24em] text-primary">02 / THE ECOSYSTEM</p>
            <h2 className="mt-[1.2vh] font-display text-[4.9vw] font-semibold leading-[0.88] tracking-[-0.055em] text-accent">The bridge is the product.</h2>
          </div>
          <p className="mb-[0.5vh] w-[30vw] font-body text-[1.65vw] font-medium leading-[1.32] text-muted">
            Vaeloryn’s long-term model connects exceptional people and ideas with the expertise, resources, and opportunities required to move forward.
          </p>
        </div>

        <div className="mt-[4.5vh] grid grid-cols-[1.06fr_0.94fr] gap-[4.5vw]">
          <div>
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">VAELORYN BRIDGE</p>
            <div className="mt-[2vh] grid grid-cols-4 gap-[0.8vw]">
              <div className="border-t border-primary/60 pt-[1.5vh]">
                <p className="font-display text-[2.8vw] font-semibold leading-none text-accent">01</p>
                <p className="mt-[1vh] font-body text-[1.6vw] font-semibold text-accent">Discover</p>
                <p className="mt-[0.5vh] font-body text-[1.45vw] leading-[1.25] text-muted">People and ideas</p>
              </div>
              <div className="border-t border-primary/60 pt-[1.5vh]">
                <p className="font-display text-[2.8vw] font-semibold leading-none text-accent">02</p>
                <p className="mt-[1vh] font-body text-[1.6vw] font-semibold text-accent">Evaluate</p>
                <p className="mt-[0.5vh] font-body text-[1.45vw] leading-[1.25] text-muted">What enables progress</p>
              </div>
              <div className="border-t border-primary/60 pt-[1.5vh]">
                <p className="font-display text-[2.8vw] font-semibold leading-none text-accent">03</p>
                <p className="mt-[1vh] font-body text-[1.6vw] font-semibold text-accent">Connect</p>
                <p className="mt-[0.5vh] font-body text-[1.45vw] leading-[1.25] text-muted">Expertise, people, capital</p>
              </div>
              <div className="border-t border-primary/60 pt-[1.5vh]">
                <p className="font-display text-[2.8vw] font-semibold leading-none text-accent">04</p>
                <p className="mt-[1vh] font-body text-[1.6vw] font-semibold text-accent">Support</p>
                <p className="mt-[0.5vh] font-body text-[1.45vw] leading-[1.25] text-muted">The next milestone</p>
              </div>
            </div>
            <div className="mt-[2vh] flex items-center gap-[0.9vw] font-body text-[1.6vw] font-semibold text-accent">
              <span className="text-primary">05–07</span>
              <span>Track progress → Scale what works → Reinvest opportunity</span>
            </div>

            <div className="mt-[4vh] border-t border-accent/20 pt-[2.5vh]">
              <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">THE ROLE OF VAELO</p>
              <p className="mt-[1.4vh] max-w-[48vw] font-body text-[2vw] leading-[1.35] text-accent">
                VAELO is the developing digital asset of the Vaeloryn ecosystem. Its potential utility should follow real products, services, and ecosystem activity where it provides genuine functional value.
              </p>
              <p className="mt-[1.2vh] font-body text-[1.55vw] italic leading-[1.3] text-muted">“Utility follows products.”</p>
            </div>
          </div>

          <div className="border-l border-primary/25 pl-[3vw]">
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">WHAT HAS BEEN BUILT</p>
            <div className="mt-[2vh] space-y-[1.6vh]">
              <div className="border-b border-accent/15 pb-[1.5vh]">
                <p className="font-body text-[1.75vw] font-semibold text-accent">Canonical protocol</p>
                <p className="mt-[0.5vh] font-body text-[1.55vw] leading-[1.3] text-muted">Fixed-supply ERC-20 with burn and Permit / EIP-2612.</p>
              </div>
              <div className="border-b border-accent/15 pb-[1.5vh]">
                <p className="font-body text-[1.75vw] font-semibold text-accent">Genesis architecture</p>
                <p className="mt-[0.5vh] font-body text-[1.55vw] leading-[1.3] text-muted">One-shot factory, distribution, token, and founder vesting.</p>
              </div>
              <div className="border-b border-accent/15 pb-[1.5vh]">
                <p className="font-body text-[1.75vw] font-semibold text-accent">Public foundation</p>
                <p className="mt-[0.5vh] font-body text-[1.55vw] leading-[1.3] text-muted">Website, documentation, transparency materials, and defined roadmap.</p>
              </div>
              <div>
                <p className="font-body text-[1.75vw] font-semibold text-accent">Security groundwork</p>
                <p className="mt-[0.5vh] font-body text-[1.55vw] leading-[1.3] text-muted">Internal smart-contract review and recorded local Foundry evidence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3.5vh] border-t border-accent/20 pt-[2vh]">
          <div className="flex items-center justify-between">
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">SUPPORTING TOKENOMICS / FIXED SUPPLY</p>
            <p className="font-display text-[3vw] font-semibold leading-none text-accent">1B VAELO</p>
          </div>
          <div className="mt-[1.5vh] grid grid-cols-6 gap-[1vw]">
            <div><p className="font-body text-[1.45vw] font-bold text-primary">30%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Ecosystem &amp; Community</p></div>
            <div><p className="font-body text-[1.45vw] font-bold text-primary">20%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Public Distribution</p></div>
            <div><p className="font-body text-[1.45vw] font-bold text-primary">20%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Vaeloryn Treasury</p></div>
            <div><p className="font-body text-[1.45vw] font-bold text-primary">15%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Team &amp; Contributors</p></div>
            <div><p className="font-body text-[1.45vw] font-bold text-primary">10%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Founder</p></div>
            <div><p className="font-body text-[1.45vw] font-bold text-primary">5%</p><p className="mt-[0.3vh] font-body text-[1.35vw] leading-[1.2] text-muted">Strategic Partnerships</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}