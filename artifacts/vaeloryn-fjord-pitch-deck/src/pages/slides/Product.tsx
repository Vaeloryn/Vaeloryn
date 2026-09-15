const base = import.meta.env.BASE_URL;

export default function Product() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">05 / THE FIRST PRODUCT</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted border border-primary/40 px-[1vw] py-[0.5vh]">CURRENTLY IN DEVELOPMENT</p>
      </div>
      <div className="absolute left-[5.5vw] top-[16vh] w-[35vw]">
        <h1 className="font-display text-[5vw] font-semibold leading-[0.95] tracking-[-0.04em]">Vaeloryn Wallet</h1>
        <p className="mt-[3vh] font-body text-[1.85vw] leading-[1.45] text-muted">
          The Vaeloryn Wallet is currently in development and is intended to become the primary entry point into the Vaeloryn ecosystem.
        </p>
        <div className="mt-[4vh] space-y-[2vh] font-body text-[1.6vw] text-accent">
          <p className="flex items-start gap-[1vw]"><span className="text-primary mt-[0.5vh]">→</span> <span>Interact with VAELO</span></p>
          <p className="flex items-start gap-[1vw]"><span className="text-primary mt-[0.5vh]">→</span> <span>Interact with Vaeloryn applications</span></p>
          <p className="flex items-start gap-[1vw]"><span className="text-primary mt-[0.5vh]">→</span> <span>Participate in supported ecosystem activity</span></p>
          <p className="flex items-start gap-[1vw]"><span className="text-primary mt-[0.5vh]">→</span> <span>Interact with future ecosystem projects</span></p>
          <p className="flex items-start gap-[1vw]"><span className="text-primary mt-[0.5vh]">→</span> <span>Provide an onchain interface for the wider ecosystem</span></p>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[16vh] w-[48vw] h-[65vh] border border-primary/30 rounded-lg overflow-hidden bg-[#0A0A0C] flex items-center justify-center">
        <img src={`${base}wallet-prototype.jpg`} crossOrigin="anonymous" alt="Vaeloryn Wallet prototype UI showing testnet/not live status" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
