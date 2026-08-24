const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img
        src={`${base}hero-horizon.png`}
        crossOrigin="anonymous"
        alt="Abstract gold horizon over dark architectural planes"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.98)_0%,rgba(10,10,10,0.86)_42%,rgba(10,10,10,0.42)_72%,rgba(10,10,10,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.24)_0%,rgba(10,10,10,0.08)_48%,rgba(10,10,10,0.72)_100%)]" />

      <div className="absolute left-[6vw] top-[6vh] flex items-center gap-[1.2vw]">
        <svg
          viewBox="0 0 180 180"
          aria-label="Vaeloryn mark"
          className="h-[4.2vw] w-[4.2vw] fill-primary"
        >
          <polygon points="32,42 62,42 90,118 118,42 148,42 104,148 76,148" />
        </svg>
        <p className="font-body text-[1.55vw] font-bold tracking-[0.35em] text-accent">
          VAELORYN
        </p>
      </div>

      <div className="absolute bottom-[11vh] left-[6vw] w-[62vw]">
        <p className="font-body text-[1.65vw] font-semibold tracking-[0.22em] text-primary">
          PRIVATE ANGEL BRIEF
        </p>
        <h1 className="mt-[2vh] font-display text-[10vw] font-semibold leading-[0.76] tracking-[-0.07em] text-accent">
          VAELO
        </h1>
        <div className="mt-[4vh] h-[0.35vh] w-[13vw] bg-primary" />
        <p className="mt-[3vh] max-w-[52vw] font-body text-[2.35vw] font-medium leading-[1.35] text-accent">
          A fixed-supply, no-admin token protocol built around a verifiable
          canonical architecture.
        </p>
      </div>

      <div className="absolute bottom-[6vh] left-[6vw] flex items-center gap-[1.2vw] font-body text-[1.55vw] font-semibold tracking-[0.11em] text-muted">
        <span>PREPARED FOR JOHN LILIC</span>
        <span className="h-[0.55vh] w-[0.55vh] rounded-full bg-primary" />
        <span>AUGUST 2026</span>
      </div>
    </div>
  );
}