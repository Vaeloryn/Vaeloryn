const base = import.meta.env.BASE_URL;

export default function Founder() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <img src={`${base}hero-horizon.png`} crossOrigin="anonymous" alt="Abstract gold horizon over dark architectural planes" className="absolute inset-0 h-full w-full object-cover opacity-42" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,12,0.99)_0%,rgba(10,10,12,0.92)_58%,rgba(10,10,12,0.55)_100%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">12 / FOUNDER / WHY VAELORYN</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">GREGORY · FOUNDER &amp; CEO</p>
      </div>
      <div className="absolute left-[5.5vw] top-[18vh] w-[65vw]">
        <p className="font-body text-[1.8vw] font-bold tracking-[0.1em] text-primary mb-[2vh]">FORMER AERONAUTICAL ENGINEER &amp; CURRENT COMMERCIAL PILOT</p>
        <p className="mt-[2vh] w-[55vw] font-body text-[2.2vw] leading-[1.4] text-accent">
          "My background in engineering and aviation has shaped my interest in complex systems, technology and long-term problem solving."
        </p>
        <p className="mt-[3vh] w-[55vw] font-body text-[2.2vw] leading-[1.4] text-muted">
          "I started Vaeloryn because I want to build something that contributes to scientific and technological progress and creates a way for people, capital and expertise to support meaningful innovation."
        </p>
      </div>
      <div className="absolute bottom-[8vh] left-[5.5vw] right-[5.5vw] flex items-end justify-between border-t border-primary/55 pt-[2.2vh]">
        <div className="flex items-center gap-[1.2vw]">
          <img src={`${base}vaeloryn-logo.png`} crossOrigin="anonymous" alt="Vaeloryn logo" className="h-[5vw] w-[5vw] object-contain" />
          <div><p className="font-body text-[1.7vw] font-bold tracking-[0.24em]">VAELORYN</p><p className="mt-[0.5vh] font-body text-[1.5vw] text-primary">BEGIN IN SOUTH AFRICA. BUILD FOR HUMANITY.</p></div>
        </div>
        <div className="text-right">
          <a href="https://vaeloryn.com" target="_blank" rel="noopener noreferrer" className="font-body text-[1.9vw] font-bold text-primary underline decoration-primary/50 underline-offset-[0.5vh]">vaeloryn.com</a>
        </div>
      </div>
    </div>
  );
}
