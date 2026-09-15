export default function Tokenomics() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">08 / TOKENOMICS</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">FINALIZED CANONICAL ALLOCATION</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[33vw]">
        <h1 className="font-display text-[5vw] font-semibold leading-[0.94] tracking-[-0.045em]">One fixed supply. Six defined allocations.</h1>
        <p className="mt-[3vh] font-body text-[2vw] leading-[1.4] text-muted">The canonical design allocates the complete 1,000,000,000 VAELO supply atomically at Genesis. It is not yet deployed.</p>
        <div className="mt-[4vh] flex h-[13vw] w-[13vw] items-center justify-center rounded-full border-[1.6vw] border-primary">
          <div className="text-center"><p className="font-display text-[4.3vw] font-semibold leading-none">1B</p><p className="mt-[0.5vh] font-body text-[1.5vw] font-bold tracking-[0.14em] text-primary">VAELO</p></div>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[16vh] w-[51vw]">
        <div className="space-y-[1.5vh]">
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Ecosystem &amp; Community</span><span className="font-bold text-primary">300M · 30%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[100%] bg-primary" /></div></div>
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Public Distribution</span><span className="font-bold text-primary">200M · 20%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[66.66%] bg-primary/85" /></div></div>
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Vaeloryn Treasury</span><span className="font-bold text-primary">200M · 20%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[66.66%] bg-primary/72" /></div></div>
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Team &amp; Contributors</span><span className="font-bold text-primary">150M · 15%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[50%] bg-primary/60" /></div></div>
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Founder</span><span className="font-bold text-primary">100M · 10%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[33.33%] bg-primary/48" /></div></div>
          <div><div className="flex justify-between font-body text-[1.7vw]"><span>Strategic Partnerships</span><span className="font-bold text-primary">50M · 5%</span></div><div className="mt-[0.6vh] h-[1.2vh] bg-accent/10"><div className="h-full w-[16.66%] bg-primary/38" /></div></div>
        </div>
        <div className="mt-[3vh] flex justify-between border-t border-accent/25 pt-[1.6vh] font-body text-[1.6vw] text-muted"><span>No post-Genesis allocation editing</span></div>
      </div>
    </div>
  );
}
