export default function Funding() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">11 / FROM PROTOTYPE TO PRODUCTION</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">USE OF FUNDS</p>
      </div>
      <div className="absolute left-[5.5vw] top-[16vh] w-[45vw]">
        <h1 className="font-display text-[4.6vw] font-semibold leading-[1.05] tracking-[-0.04em]">Moving toward a Base-native ecosystem.</h1>
        <p className="mt-[3vh] font-body text-[1.9vw] leading-[1.45] text-muted">
          Vaeloryn is currently self-funded and in development. Pre-seed funding would allow the project to move from its current prototype and technical foundation toward a production-ready Base-native ecosystem.
        </p>
        <div className="mt-[5vh] border border-primary/40 bg-primary/10 p-[1.5vw] inline-block">
          <p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-primary">PRE-SEED ROUND</p>
          <p className="mt-[0.5vh] font-display text-[2.5vw] font-semibold text-accent">[FUNDING REQUEST TO BE FINALIZED]</p>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[16vh] w-[40vw]">
        <div className="space-y-[1.5vh] font-body text-[1.65vw]">
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">01</span><span>Product &amp; engineering</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">02</span><span>Wallet development</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">03</span><span>Base integration</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">04</span><span>Independent security review</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">05</span><span>Legal and regulatory preparation</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">06</span><span>Infrastructure</span></div>
          <div className="flex items-center gap-[1.5vw] border-b border-accent/15 pb-[1.5vh]"><span className="text-primary font-bold">07</span><span>Ecosystem development</span></div>
          <div className="flex items-center gap-[1.5vw]"><span className="text-primary font-bold">08</span><span>First real-world use case</span></div>
        </div>
      </div>
    </div>
  );
}
