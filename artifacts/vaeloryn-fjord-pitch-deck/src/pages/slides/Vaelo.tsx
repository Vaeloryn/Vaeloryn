export default function Vaelo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_55%,rgba(201,168,76,0.12),transparent_33%)]" />
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">05 / VAELO</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">CANONICAL TOKEN DESIGN</p>
      </div>
      <div className="absolute left-[5.5vw] top-[16vh] w-[36vw]">
        <p className="font-display text-[10vw] font-semibold leading-[0.74] tracking-[-0.06em] text-primary">1B</p>
        <p className="mt-[2.5vh] font-display text-[4.2vw] font-semibold leading-none">fixed VAELO</p>
        <p className="mt-[2.8vh] font-body text-[1.8vw] leading-[1.4] text-muted">A native digital asset intended to support participation, coordination and useful economic activity as the ecosystem develops.</p>
      </div>
      <div className="absolute right-[5.5vw] top-[16vh] w-[47vw]">
        <div className="grid grid-cols-2 border border-accent/15">
          <div className="border-b border-r border-accent/15 p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">NETWORK TARGET</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">Base Mainnet</p></div>
          <div className="border-b border-accent/15 p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">STANDARD</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">ERC-20</p></div>
          <div className="border-b border-r border-accent/15 p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">SUPPLY</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">Fixed · no additional minting</p></div>
          <div className="border-b border-accent/15 p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">UTILITY</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">Burn · EIP-2612 Permit</p></div>
          <div className="border-r border-accent/15 p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">TRANSFER RULES</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">No tax · no blacklist · no pause</p></div>
          <div className="p-[1.4vw]"><p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">CONTROL</p><p className="mt-[0.7vh] font-body text-[1.9vw] font-bold">No upgradeability · no owner/admin</p></div>
        </div>
        <div className="mt-[3vh] border border-primary/55 bg-primary/10 p-[1.5vw]">
          <p className="font-body text-[1.5vw] font-bold tracking-[0.16em] text-primary">CURRENT STATUS</p>
          <p className="mt-[0.7vh] font-body text-[1.85vw] font-bold text-accent">Canonical Base Mainnet deployment is prepared but has not yet occurred.</p>
        </div>
      </div>
    </div>
  );
}