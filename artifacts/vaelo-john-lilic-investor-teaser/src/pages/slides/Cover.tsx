const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img
        src={`${base}hero-horizon.png`}
        crossOrigin="anonymous"
        alt="Abstract gold horizon over dark architectural planes"
        className="absolute inset-0 h-full w-full object-cover opacity-56"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.92)_48%,rgba(10,10,10,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.2)_0%,rgba(10,10,10,0.14)_45%,rgba(10,10,10,0.92)_100%)]" />

      <div className="absolute left-[6vw] top-[5vh] flex items-center gap-[1.2vw]">
        <svg viewBox="0 0 180 180" aria-label="Vaeloryn mark" className="h-[4vw] w-[4vw] fill-primary">
          <polygon points="32,42 62,42 90,118 118,42 148,42 104,148 76,148" />
        </svg>
        <p className="font-body text-[1.55vw] font-bold tracking-[0.35em] text-accent">VAELORYN</p>
      </div>

      <div className="absolute bottom-[8vh] left-[6vw] w-[88vw]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.24em] text-primary">PRIVATE ANGEL BRIEF / 01</p>
        <h1 className="mt-[1.4vh] font-display text-[6.8vw] font-semibold leading-[0.8] tracking-[-0.065em] text-accent">VAELORYN / VAELO</h1>
        <p className="mt-[2.5vh] max-w-[74vw] font-body text-[2vw] font-medium leading-[1.3] text-accent">
          A South African-founded ecosystem exploring how technology, innovation, and long-term thinking can support real-world scientific, medical, and technological progress.
        </p>

        <div className="mt-[3vh] grid grid-cols-3 gap-[2.2vw] border-t border-primary/50 pt-[2vh]">
          <div>
            <p className="font-body text-[1.5vw] font-bold tracking-[0.16em] text-primary">THE OPPORTUNITY</p>
            <p className="mt-[0.8vh] font-body text-[1.65vw] leading-[1.3] text-accent">Promising people and ideas can stall without the right expertise, resources, and connections.</p>
          </div>
          <div>
            <p className="font-body text-[1.5vw] font-bold tracking-[0.16em] text-primary">THE SOLUTION</p>
            <p className="mt-[0.8vh] font-body text-[1.65vw] leading-[1.3] text-accent">The Vaeloryn Bridge identifies, evaluates, connects, and supports work toward its next milestone.</p>
          </div>
          <div>
            <p className="font-body text-[1.5vw] font-bold tracking-[0.16em] text-primary">THE ROLE OF VAELO</p>
            <p className="mt-[0.8vh] font-body text-[1.65vw] leading-[1.3] text-accent">A developing ecosystem asset whose utility should follow real products, services, and activity.</p>
          </div>
        </div>

        <div className="mt-[2.4vh] flex items-center justify-between border-t border-accent/20 pt-[1.4vh] font-body text-[1.5vw] font-semibold text-muted">
          <span>1,000,000,000 FIXED VAELO</span>
          <span>27 PASSED · 0 FAILED · 0 SKIPPED</span>
          <span>LOCAL CANONICAL IMPLEMENTATION · NOT DEPLOYED</span>
          <span>INTERNAL REVIEW · PUBLIC FOUNDATION · ROADMAP</span>
        </div>
      </div>
    </div>
  );
}