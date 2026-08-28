export default function Capital() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">10 / USE OF INITIAL CAPITAL</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">POTENTIAL FOUNDATION-STAGE USES</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[44vw]">
        <h1 className="font-display text-[5vw] font-semibold leading-[0.94] tracking-[-0.045em]">Build the foundation before claiming the future.</h1>
        <p className="mt-[3vh] font-body text-[2vw] leading-[1.4] text-muted">Initial funding is intended to support the work required to establish a credible operating foundation.</p>
      </div>
      <div className="absolute bottom-[8vh] left-[5.5vw] right-[5.5vw] grid grid-cols-4 gap-[1.2vw]">
        <div className="h-[22vh] border-t border-primary bg-accent/[0.035] p-[1.4vw]"><p className="font-display text-[3.2vw] font-semibold text-primary">01</p><p className="font-body text-[1.7vw] font-bold">Independent security review</p><p className="mt-[0.7vh] font-body text-[1.5vw] text-muted">External assurance before production use</p></div>
        <div className="h-[22vh] border-t border-primary bg-accent/[0.035] p-[1.4vw]"><p className="font-display text-[3.2vw] font-semibold text-primary">02</p><p className="font-body text-[1.7vw] font-bold">Legal &amp; corporate structure</p><p className="mt-[0.7vh] font-body text-[1.5vw] text-muted">Regulatory analysis and formal setup</p></div>
        <div className="h-[22vh] border-t border-primary bg-accent/[0.035] p-[1.4vw]"><p className="font-display text-[3.2vw] font-semibold text-primary">03</p><p className="font-body text-[1.7vw] font-bold">Production &amp; team capability</p><p className="mt-[0.7vh] font-body text-[1.5vw] text-muted">Infrastructure and essential technical work</p></div>
        <div className="h-[22vh] border-t border-primary bg-accent/[0.035] p-[1.4vw]"><p className="font-display text-[3.2vw] font-semibold text-primary">04</p><p className="font-body text-[1.7vw] font-bold">First real project &amp; transparency</p><p className="mt-[0.7vh] font-body text-[1.5vw] text-muted">Execution and operational accountability</p></div>
      </div>
      <p className="absolute right-[5.5vw] top-[18vh] w-[31vw] border-l-[0.25vw] border-primary pl-[1.5vw] font-body text-[1.65vw] leading-[1.4] text-accent">No promise of returns. VAELO is one component of an ecosystem that must be built through real products, projects and measurable work.</p>
    </div>
  );
}