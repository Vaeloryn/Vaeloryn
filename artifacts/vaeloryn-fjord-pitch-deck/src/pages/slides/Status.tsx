export default function Status() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">10 / CURRENT STATUS &amp; NEXT PHASE</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">PATH TO PRODUCTION</p>
      </div>
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[18vh] grid grid-cols-2 gap-[4vw]">
        <div>
          <h2 className="font-display text-[3.8vw] font-semibold text-primary">Built Today</h2>
          <div className="mt-[3vh] space-y-[1.8vh] font-body text-[1.7vw] text-accent">
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Vaeloryn website &amp; documentation</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Ecosystem &amp; product architecture</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Canonical VAELO implementation</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Tokenomics &amp; founder vesting</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Wallet prototype &amp; UI</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-primary rounded-full"></span> <span>Local testing &amp; deployment infrastructure</span></p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-[3.8vw] font-semibold text-muted">Next Phase <span className="text-[2vw] font-normal tracking-wide">(Planned)</span></h2>
          <div className="mt-[3vh] space-y-[1.8vh] font-body text-[1.7vw] text-muted">
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>Independent security review</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>Legal &amp; regulatory preparation</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>Complete wallet infrastructure</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>Canonical Base Mainnet deployment</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>Base integration &amp; measurable activity</span></p>
            <p className="flex items-center gap-[1vw]"><span className="h-[0.5vw] w-[0.5vw] bg-muted/40 rounded-full"></span> <span>First real ecosystem use case &amp; users</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
