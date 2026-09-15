export default function Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.06),transparent_45%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">03 / THE PROBLEM</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">THE COORDINATION GAP</p>
      </div>
      <div className="absolute left-[5.5vw] top-[17vh] w-[39vw]">
        <h1 className="font-display text-[5vw] font-semibold leading-[0.95] tracking-[-0.045em] text-accent">Promising ideas can stall before execution.</h1>
        <p className="mt-[3.5vh] font-body text-[2vw] leading-[1.45] text-muted">
          Important scientific and technological ideas can struggle to access capital, expertise, infrastructure, networks, and coordinated support.
        </p>
      </div>
      <div className="absolute right-[5.5vw] top-[17vh] w-[44vw]">
        <div className="grid grid-cols-2 gap-[1.2vw]">
          <div className="h-[20vh] border border-accent/15 bg-accent/[0.035] p-[1.7vw]"><p className="font-display text-[3.4vw] font-semibold text-primary">01</p><p className="mt-[1vh] font-body text-[1.9vw] font-bold">Capital</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-muted">Long-horizon funding is difficult to align.</p></div>
          <div className="h-[20vh] border border-accent/15 bg-accent/[0.035] p-[1.7vw]"><p className="font-display text-[3.4vw] font-semibold text-primary">02</p><p className="mt-[1vh] font-body text-[1.9vw] font-bold">Expertise</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-muted">Specialists are fragmented across disciplines.</p></div>
          <div className="h-[20vh] border border-accent/15 bg-accent/[0.035] p-[1.7vw]"><p className="font-display text-[3.4vw] font-semibold text-primary">03</p><p className="mt-[1vh] font-body text-[1.9vw] font-bold">Infrastructure</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-muted">Tools and operating support remain uneven.</p></div>
          <div className="h-[20vh] border border-accent/15 bg-accent/[0.035] p-[1.7vw]"><p className="font-display text-[3.4vw] font-semibold text-primary">04</p><p className="mt-[1vh] font-body text-[1.9vw] font-bold">Coordination</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-muted">Resources rarely arrive as one system.</p></div>
        </div>
      </div>
    </div>
  );
}
