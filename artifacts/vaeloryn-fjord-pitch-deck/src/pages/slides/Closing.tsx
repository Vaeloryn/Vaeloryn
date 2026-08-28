const base = import.meta.env.BASE_URL;

export default function Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img src={`${base}hero-horizon.png`} crossOrigin="anonymous" alt="Abstract gold horizon over dark architectural planes" className="absolute inset-0 h-full w-full object-cover opacity-42" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,12,0.99)_0%,rgba(10,10,12,0.92)_58%,rgba(10,10,12,0.55)_100%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">12 / WHY VAELORYN</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">LONG-TERM ALIGNMENT</p>
      </div>
      <div className="absolute left-[5.5vw] top-[18vh] w-[68vw]">
        <h1 className="font-display text-[5.8vw] font-semibold leading-[0.9] tracking-[-0.05em] text-accent">Capital, expertise and technology reinforcing one another.</h1>
        <p className="mt-[3.5vh] w-[60vw] font-body text-[2vw] leading-[1.42] text-muted">Vaeloryn is building toward a long-term ecosystem where these resources can work together in support of meaningful scientific and technological progress.</p>
        <p className="mt-[2vh] w-[60vw] font-body text-[1.75vw] leading-[1.4] text-accent">VAELO is one component of that ecosystem—not a substitute for building real products and projects.</p>
      </div>
      <div className="absolute bottom-[8vh] left-[5.5vw] right-[5.5vw] flex items-end justify-between border-t border-primary/55 pt-[2.2vh]">
        <div className="flex items-center gap-[1.2vw]">
          <img src={`${base}vaeloryn-logo.png`} crossOrigin="anonymous" alt="Vaeloryn logo" className="h-[5vw] w-[5vw] object-contain" />
          <div><p className="font-body text-[1.7vw] font-bold tracking-[0.24em]">VAELORYN</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-primary">BEGIN IN SOUTH AFRICA. BUILD FOR HUMANITY.</p></div>
        </div>
        <div className="text-right">
          <a href="https://vaeloryn.com" target="_blank" rel="noopener noreferrer" className="font-body text-[1.9vw] font-bold text-primary underline decoration-primary/50 underline-offset-[0.5vh]">vaeloryn.com</a>
          <a href="https://github.com/Vaeloryn/Vaeloryn" target="_blank" rel="noopener noreferrer" className="mt-[1vh] block font-body text-[1.5vw] text-muted underline decoration-muted/40 underline-offset-[0.4vh]">github.com/Vaeloryn/Vaeloryn</a>
        </div>
      </div>
    </div>
  );
}