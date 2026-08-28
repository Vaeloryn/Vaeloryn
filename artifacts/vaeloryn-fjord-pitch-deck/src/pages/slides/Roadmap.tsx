export default function Roadmap() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">11 / ROADMAP</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">PLANNED MILESTONES</p>
      </div>
      <div className="absolute left-[5.5vw] top-[14vh] w-[65vw]">
        <h1 className="font-display text-[4.7vw] font-semibold leading-none tracking-[-0.04em]">Four stages—from foundation to global ecosystem.</h1>
      </div>
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[31vh] grid grid-cols-4 gap-[1.2vw]">
        <div className="h-[47vh] border border-primary bg-primary/10 p-[1.6vw]"><p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-primary">STAGE A / CURRENT PRIORITY</p><p className="mt-[1.5vh] font-display text-[3vw] font-semibold">Foundation</p><p className="mt-[2vh] font-body text-[1.55vw] leading-[1.45] text-muted">Legal and corporate structure · regulatory analysis · security review · treasury architecture · essential team capability · transparency infrastructure · first project selection</p></div>
        <div className="h-[47vh] border border-accent/15 p-[1.6vw]"><p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-muted">STAGE B / PLANNED</p><p className="mt-[1.5vh] font-display text-[3vw] font-semibold">Execution</p><p className="mt-[2vh] font-body text-[1.65vw] leading-[1.45] text-muted">Build a flagship project and demonstrate measurable value.</p></div>
        <div className="h-[47vh] border border-accent/15 p-[1.6vw]"><p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-muted">STAGE C / PLANNED</p><p className="mt-[1.5vh] font-display text-[3vw] font-semibold">Expansion</p><p className="mt-[2vh] font-body text-[1.65vw] leading-[1.45] text-muted">Internal projects, partnerships and potential strategic investments where appropriately structured.</p></div>
        <div className="h-[47vh] border border-accent/15 p-[1.6vw]"><p className="font-body text-[1.5vw] font-bold tracking-[0.14em] text-muted">STAGE D / PLANNED</p><p className="mt-[1.5vh] font-display text-[3vw] font-semibold">Global Ecosystem</p><p className="mt-[2vh] font-body text-[1.65vw] leading-[1.45] text-muted">Develop a globally connected innovation ecosystem.</p></div>
      </div>
      <div className="absolute bottom-[6vh] left-[5.5vw] right-[5.5vw] h-[0.25vh] bg-accent/15"><div className="h-full w-[25%] bg-primary" /></div>
    </div>
  );
}