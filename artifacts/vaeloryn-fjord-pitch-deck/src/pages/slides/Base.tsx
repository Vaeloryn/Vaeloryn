export default function Base() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">06 / BUILT FOR BASE</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">PRIMARY BLOCKCHAIN ECOSYSTEM</p>
      </div>
      <div className="absolute left-[5.5vw] top-[16vh] w-[45vw]">
        <h1 className="font-display text-[4.6vw] font-semibold leading-[1.05] tracking-[-0.04em]">The intended production home for Vaeloryn.</h1>
        <p className="mt-[3vh] font-body text-[1.9vw] leading-[1.45] text-muted">
          Vaeloryn is being developed with Base as its intended primary blockchain ecosystem and production home.
        </p>
        <div className="mt-[4vh] border-l-[0.25vw] border-primary pl-[1.5vw]">
          <p className="font-body text-[1.6vw] leading-[1.4] text-accent">
            The canonical Vaeloryn protocol is currently implemented and tested locally. Base Mainnet is the intended production environment, pending independent security review, legal preparation and deployment readiness.
          </p>
        </div>
      </div>
      <div className="absolute right-[5.5vw] top-[16vh] w-[39vw]">
        <div className="grid grid-cols-2 gap-[1vw]">
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Scalable EVM</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">High-performance infrastructure</p></div>
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Low cost</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">Practical transaction fees</p></div>
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Global access</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">Worldwide participation</p></div>
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Payments</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">Onchain economic activity</p></div>
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Developer ecosystem</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">Active builder community</p></div>
          <div className="border border-accent/15 bg-accent/[0.035] p-[1.5vw]"><p className="font-body text-[1.7vw] font-bold">Coinbase connection</p><p className="mt-[0.5vh] font-body text-[1.3vw] text-muted">Proximity to distribution</p></div>
        </div>
        <p className="mt-[4vh] font-body text-[1.2vw] uppercase tracking-[0.15em] text-muted opacity-60 text-right">
          This positioning does not imply endorsement, investment or partnership by Base or Coinbase.
        </p>
      </div>
    </div>
  );
}
