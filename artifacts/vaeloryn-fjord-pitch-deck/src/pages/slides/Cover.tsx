const base = import.meta.env.BASE_URL;

export default function Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img src={`${base}hero-horizon.png`} crossOrigin="anonymous" alt="Abstract gold horizon over dark architectural planes" className="absolute inset-0 h-full w-full object-cover opacity-65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,12,0.98)_0%,rgba(10,10,12,0.88)_50%,rgba(10,10,12,0.30)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.08)_0%,rgba(10,10,12,0.16)_55%,rgba(10,10,12,0.96)_100%)]" />
      <div className="absolute left-[5.5vw] top-[5.5vh] flex items-center gap-[1.2vw]">
        <img src={`${base}vaeloryn-logo.png`} crossOrigin="anonymous" alt="Vaeloryn logo" className="h-[5.2vw] w-[5.2vw] object-contain" />
        <div>
          <p className="font-body text-[1.55vw] font-bold tracking-[0.32em] text-accent">VAELORYN</p>
          <p className="mt-[0.4vh] font-body text-[1.5vw] tracking-[0.18em] text-primary">POTENTIAL DISTRIBUTION VENUE BRIEF</p>
        </div>
      </div>
      <div className="absolute bottom-[9vh] left-[5.5vw] w-[88vw]">
        <p className="font-body text-[1.6vw] font-bold tracking-[0.24em] text-primary">VAELO / PROPOSED PUBLIC SALE</p>
        <h1 className="mt-[1vh] font-display text-[8vw] font-semibold leading-[0.78] tracking-[-0.06em] text-accent">Vaeloryn</h1>
        <p className="mt-[2.4vh] font-display text-[3.4vw] font-medium leading-none text-accent">Begin in South Africa. Build for humanity.</p>
        <div className="mt-[4.5vh] grid grid-cols-[1.35fr_0.65fr] items-center gap-[3vw] border-t border-primary/55 pt-[2vh]">
          <p className="font-body text-[1.55vw] font-bold tracking-[0.13em] text-accent">SCIENCE · TECHNOLOGY · INNOVATION · ENERGY · MEDICINE</p>
          <p className="text-right font-body text-[1.5vw] font-semibold tracking-[0.12em] text-muted">MAINNET CANONICAL TOKEN · NOT DEPLOYED</p>
        </div>
      </div>
    </div>
  );
}