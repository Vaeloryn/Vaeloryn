export default function Vision() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_26%,rgba(201,168,76,0.13),transparent_31%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">02 / THE VISION</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">A LONG-TERM INNOVATION ECOSYSTEM</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[56vw]">
        <h1 className="font-display text-[5.2vw] font-semibold leading-[0.94] tracking-[-0.045em] text-accent">
          Connect the resources that meaningful progress requires.
        </h1>
        <p className="mt-[3vh] w-[51vw] font-body text-[2vw] leading-[1.42] text-muted">
          Build a long-term innovation ecosystem connecting capital, expertise, people and opportunity to support meaningful advances in science and technology.
        </p>
      </div>
      <div className="absolute bottom-[8vh] left-[5.5vw] right-[5.5vw] grid grid-cols-4 gap-[1.2vw]">
        <div className="border-t border-accent/25 pt-[1.5vh]"><p className="font-body text-[1.75vw] font-bold text-accent">Medical science</p><p className="mt-[0.6vh] font-body text-[1.5vw] text-muted">Human health and biology</p></div>
        <div className="border-t border-accent/25 pt-[1.5vh]"><p className="font-body text-[1.75vw] font-bold text-accent">Energy &amp; AI</p><p className="mt-[0.6vh] font-body text-[1.5vw] text-muted">Systems for the future</p></div>
        <div className="border-t border-accent/25 pt-[1.5vh]"><p className="font-body text-[1.75vw] font-bold text-accent">Computing &amp; engineering</p><p className="mt-[0.6vh] font-body text-[1.5vw] text-muted">Tools that expand capability</p></div>
        <div className="border-t border-accent/25 pt-[1.5vh]"><p className="font-body text-[1.75vw] font-bold text-accent">Aerospace &amp; frontier science</p><p className="mt-[0.6vh] font-body text-[1.5vw] text-muted">Questions at the edge</p></div>
      </div>
      <div className="absolute right-[6vw] top-[18vh] h-[28vw] w-[28vw] rounded-full border border-primary/30">
        <div className="absolute inset-[3.5vw] rounded-full border border-primary/20" />
        <div className="absolute inset-[8vw] flex items-center justify-center rounded-full border border-primary/50 bg-primary/10">
          <p className="font-display text-[4.2vw] font-semibold text-primary">V</p>
        </div>
      </div>
    </div>
  );
}