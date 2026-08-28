export default function Sale() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">09 / INITIAL PUBLIC SALE</p>
        <p className="border border-primary bg-primary/10 px-[1vw] py-[0.5vh] font-body text-[1.5vw] font-bold tracking-[0.12em] text-primary">PROPOSED / WORKING PARAMETERS</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[37vw]">
        <p className="font-display text-[9vw] font-semibold leading-[0.75] tracking-[-0.055em] text-primary">1%</p>
        <h1 className="mt-[2vh] font-display text-[4.2vw] font-semibold leading-none">of fixed supply</h1>
        <div className="mt-[3.5vh] grid grid-cols-2 gap-[1vw] font-body">
          <div className="border-t border-accent/25 pt-[1.2vh]"><p className="text-[1.5vw] text-muted">NETWORK</p><p className="mt-[0.5vh] text-[1.9vw] font-bold">Base</p></div>
          <div className="border-t border-accent/25 pt-[1.2vh]"><p className="text-[1.5vw] text-muted">SALE TYPE</p><p className="mt-[0.5vh] text-[1.9vw] font-bold">Tiered</p></div>
          <div className="border-t border-accent/25 pt-[1.2vh]"><p className="text-[1.5vw] text-muted">MAXIMUM</p><p className="mt-[0.5vh] text-[1.9vw] font-bold">10M VAELO</p></div>
          <div className="border-t border-accent/25 pt-[1.2vh]"><p className="text-[1.5vw] text-muted">REFERENCE FDV</p><p className="mt-[0.5vh] text-[1.9vw] font-bold">$5M</p></div>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[15vh] w-[49vw]">
        <div className="border border-accent/15">
          <div className="grid grid-cols-[0.7fr_1.2fr_1fr] border-b border-accent/20 bg-accent/[0.04] px-[1.4vw] py-[1.2vh] font-body text-[1.5vw] font-bold tracking-[0.12em] text-muted"><span>TIER</span><span>ALLOCATION</span><span>PRICE</span></div>
          <div className="grid grid-cols-[0.7fr_1.2fr_1fr] border-b border-accent/15 px-[1.4vw] py-[1.4vh] font-body text-[1.8vw]"><span>01</span><span>1M VAELO</span><span className="font-bold text-primary">$0.003</span></div>
          <div className="grid grid-cols-[0.7fr_1.2fr_1fr] border-b border-accent/15 px-[1.4vw] py-[1.4vh] font-body text-[1.8vw]"><span>02</span><span>2M VAELO</span><span className="font-bold text-primary">$0.004</span></div>
          <div className="grid grid-cols-[0.7fr_1.2fr_1fr] border-b border-accent/15 px-[1.4vw] py-[1.4vh] font-body text-[1.8vw]"><span>03</span><span>3M VAELO</span><span className="font-bold text-primary">$0.005</span></div>
          <div className="grid grid-cols-[0.7fr_1.2fr_1fr] px-[1.4vw] py-[1.4vh] font-body text-[1.8vw]"><span>04</span><span>4M VAELO</span><span className="font-bold text-primary">$0.006</span></div>
        </div>
        <div className="mt-[2.5vh] flex items-end justify-between border-t border-primary pt-[1.5vh]">
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-muted">MAXIMUM THEORETICAL GROSS</p><p className="font-display text-[4.2vw] font-semibold leading-none text-primary">$50,000</p></div>
          <p className="w-[18vw] text-right font-body text-[1.5vw] leading-[1.3] text-muted">Sale not created or approved. Platform terms require external Fjord confirmation.</p>
        </div>
      </div>
    </div>
  );
}