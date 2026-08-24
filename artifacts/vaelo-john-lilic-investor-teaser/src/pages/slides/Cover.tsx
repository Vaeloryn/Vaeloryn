const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img
        src={`${base}hero-horizon.png`}
        crossOrigin="anonymous"
        alt="Abstract gold horizon over dark architectural planes"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.93)_43%,rgba(10,10,10,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.24)_0%,rgba(10,10,10,0.1)_46%,rgba(10,10,10,0.9)_100%)]" />

      <div className="absolute left-[6vw] top-[5vh] flex items-center gap-[1.2vw]">
        <svg viewBox="0 0 180 180" aria-label="Vaeloryn mark" className="h-[4.1vw] w-[4.1vw] fill-primary">
          <polygon points="32,42 62,42 90,118 118,42 148,42 104,148 76,148" />
        </svg>
        <p className="font-body text-[1.55vw] font-bold tracking-[0.35em] text-accent">VAELORYN</p>
      </div>

      <div className="absolute bottom-[9vh] left-[6vw] w-[88vw]">
        <p className="font-body text-[1.55vw] font-bold tracking-[0.24em] text-primary">PRIVATE ANGEL BRIEF / 01</p>
        <h1 className="mt-[1.5vh] font-display text-[7.7vw] font-semibold leading-[0.78] tracking-[-0.065em] text-accent">What is Vaeloryn?</h1>
        <p className="mt-[3.5vh] max-w-[72vw] font-body text-[2.35vw] font-medium leading-[1.28] text-accent">
          A South African-founded ecosystem exploring how technology, innovation, and long-term thinking can support real-world scientific, medical, and technological progress.
        </p>

        <div className="mt-[4.5vh] grid grid-cols-4 gap-[1.8vw] border-t border-primary/50 pt-[2.2vh]">
          <div>
            <p className="font-body text-[1.35vw] font-bold tracking-[0.16em] text-primary">VAELO</p>
            <p className="mt-[0.7vh] font-body text-[1.55vw] leading-[1.25] text-muted">Developing native digital asset</p>
          </div>
          <div>
            <p className="font-body text-[1.35vw] font-bold tracking-[0.16em] text-primary">SUPPLY</p>
            <p className="mt-[0.7vh] font-body text-[1.55vw] leading-[1.25] text-muted">1,000,000,000 fixed VAELO</p>
          </div>
          <div>
            <p className="font-body text-[1.35vw] font-bold tracking-[0.16em] text-primary">EVIDENCE</p>
            <p className="mt-[0.7vh] font-body text-[1.55vw] leading-[1.25] text-muted">27 passed · 0 failed · 0 skipped</p>
          </div>
          <div>
            <p className="font-body text-[1.35vw] font-bold tracking-[0.16em] text-primary">STAGE</p>
            <p className="mt-[0.7vh] font-body text-[1.55vw] leading-[1.25] text-muted">Foundation · local · not deployed</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3.5vh] left-[6vw] flex items-center gap-[1.2vw] font-body text-[1.35vw] font-semibold tracking-[0.11em] text-muted">
        <span>PREPARED FOR JOHN LILIC</span>
        <span className="h-[0.5vh] w-[0.5vh] rounded-full bg-primary" />
        <span>AUGUST 2026</span>
      </div>
    </div>
  );
}