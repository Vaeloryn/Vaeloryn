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
          <p className="mt-[0.4vh] font-body text-[1.5vw] tracking-[0.18em] text-primary">PRE-SEED / BASE ECOSYSTEM FUND</p>
        </div>
      </div>
      <div className="absolute bottom-[9vh] left-[5.5vw] w-[88vw]">
        <h1 className="mt-[1vh] font-display text-[6.5vw] font-semibold leading-[0.9] tracking-[-0.04em] text-accent w-[70vw]">Building the financial ecosystem for funding the technologies that shape the future.</h1>
        <p className="mt-[3vh] font-body text-[1.8vw] font-medium leading-[1.4] text-muted w-[50vw]">An onchain ecosystem connecting capital with scientific, medical and technological innovation.</p>
        <div className="mt-[4.5vh] grid grid-cols-[1fr_1fr] items-center gap-[3vw] border-t border-primary/55 pt-[2vh]">
          <p className="font-display text-[2.2vw] font-medium tracking-wide text-accent">Begin in South Africa. Build for humanity.</p>
          <p className="text-right font-body text-[1.2vw] font-semibold tracking-[0.12em] text-muted opacity-60">DOES NOT IMPLY BASE OR COINBASE ENDORSEMENT</p>
        </div>
      </div>
    </div>
  );
}
