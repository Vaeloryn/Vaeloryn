export default function Foundation() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(201,168,76,0.07)_100%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">09 / TECHNICAL FOUNDATION</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">LOCAL CANONICAL IMPLEMENTATION</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[38vw]">
        <h1 className="font-display text-[4.9vw] font-semibold leading-[0.94] tracking-[-0.045em]">Atomic by design. Tested before deployment.</h1>
        <div className="mt-[3vh] border border-primary/45 bg-primary/10 p-[1.6vw]">
          <p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-primary">INDEPENDENT SECURITY REVIEW</p>
          <p className="mt-[0.7vh] font-body text-[2vw] font-bold">Not yet completed</p>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[15vh] w-[48vw]">
        <div className="grid grid-cols-[1fr_4vw_1fr] items-center gap-y-[2vh]">
          <div className="border border-accent/15 p-[1.2vw]"><p className="font-body text-[1.5vw] text-muted">01</p><p className="font-body text-[1.7vw] font-bold">Genesis Distribution</p></div><p className="text-center font-display text-[2.8vw] text-primary">→</p><div className="border border-accent/15 p-[1.2vw]"><p className="font-body text-[1.5vw] text-muted">02</p><p className="font-body text-[1.7vw] font-bold">VaelorynToken</p></div>
          <div className="border border-accent/15 p-[1.2vw]"><p className="font-body text-[1.5vw] text-muted">03</p><p className="font-body text-[1.7vw] font-bold">Founder Vesting</p></div><p className="text-center font-display text-[2.8vw] text-primary">←</p><div className="border border-primary bg-primary p-[1.2vw] text-bg"><p className="font-body text-[1.5vw]">04</p><p className="font-body text-[1.7vw] font-bold">Deployment Factory</p></div>
        </div>
        <p className="mt-[2vh] font-body text-[1.65vw] leading-[1.35] text-muted">The one-shot factory creates distribution, token, vesting and allocation in one transaction.</p>
        <div className="mt-[2.5vh] grid grid-cols-3 gap-[1.2vw] border-t border-accent/20 pt-[2vh]">
          <div><p className="font-display text-[4.2vw] font-semibold leading-none text-primary">33</p><p className="font-body text-[1.5vw] font-bold">Passed</p></div>
          <div><p className="font-display text-[4.2vw] font-semibold leading-none text-accent">0</p><p className="font-body text-[1.5vw] font-bold">Failed</p></div>
          <div><p className="font-display text-[4.2vw] font-semibold leading-none text-accent">0</p><p className="font-body text-[1.5vw] font-bold">Skipped</p></div>
        </div>
        <p className="mt-[1.5vh] font-body text-[1.5vw] leading-[1.3] text-muted">Latest targeted test run: 33 passed, 0 failed, 0 skipped — 31 canonical tests + 2 invariant tests.</p>
      </div>
    </div>
  );
}
