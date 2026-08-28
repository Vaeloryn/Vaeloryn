export default function Vesting() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[5vh] flex items-center justify-between border-t-[0.25vh] border-primary pt-[2vh]">
        <p className="font-body text-[1.5vw] font-bold tracking-[0.22em] text-primary">07 / FOUNDER VESTING &amp; SUPPLY DISCIPLINE</p>
        <p className="font-body text-[1.5vw] tracking-[0.14em] text-muted">100M VAELO CAP</p>
      </div>
      <div className="absolute left-[5.5vw] top-[15vh] w-[86vw]">
        <h1 className="font-display text-[4.7vw] font-semibold leading-none tracking-[-0.04em]">A defined release path—not discretionary control.</h1>
      </div>
      <div className="absolute left-[5.5vw] right-[5.5vw] top-[34vh]">
        <div className="relative h-[0.3vh] bg-accent/20">
          <div className="absolute left-0 top-0 h-full w-[22%] bg-primary" />
          <div className="absolute left-[22%] top-0 h-full w-[78%] bg-primary/45" />
          <div className="absolute left-0 top-[-1vw] h-[2vw] w-[2vw] rounded-full border-[0.45vw] border-bg bg-primary" />
          <div className="absolute left-[10%] top-[-1vw] h-[2vw] w-[2vw] rounded-full border-[0.45vw] border-bg bg-primary" />
          <div className="absolute left-[20%] top-[-1vw] h-[2vw] w-[2vw] rounded-full border-[0.45vw] border-bg bg-primary" />
          <div className="absolute left-[30%] top-[-1vw] h-[2vw] w-[2vw] rounded-full border-[0.45vw] border-bg bg-primary" />
          <div className="absolute right-0 top-[-1vw] h-[2vw] w-[2vw] rounded-full border-[0.45vw] border-bg bg-primary" />
        </div>
        <div className="mt-[3.8vh] grid grid-cols-5 gap-[1.5vw]">
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-primary">T0</p><p className="mt-[0.5vh] font-display text-[2.8vw] font-semibold">2.5M</p><p className="font-body text-[1.5vw] text-muted">Initial release</p></div>
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-primary">+90 DAYS</p><p className="mt-[0.5vh] font-display text-[2.8vw] font-semibold">2.5M</p><p className="font-body text-[1.5vw] text-muted">Quarterly release</p></div>
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-primary">+180 DAYS</p><p className="mt-[0.5vh] font-display text-[2.8vw] font-semibold">2.5M</p><p className="font-body text-[1.5vw] text-muted">Quarterly release</p></div>
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-primary">+270 DAYS</p><p className="mt-[0.5vh] font-display text-[2.8vw] font-semibold">2.5M</p><p className="font-body text-[1.5vw] text-muted">Linear phase begins</p></div>
          <div><p className="font-body text-[1.5vw] tracking-[0.12em] text-primary">+1,095 DAYS</p><p className="mt-[0.5vh] font-display text-[2.8vw] font-semibold">90M</p><p className="font-body text-[1.5vw] text-muted">Accrued linearly</p></div>
        </div>
      </div>
      <div className="absolute bottom-[8vh] left-[5.5vw] right-[5.5vw] grid grid-cols-3 gap-[1.5vw] border-t border-accent/20 pt-[2.5vh]">
        <div><p className="font-display text-[3vw] font-semibold text-primary">100M</p><p className="font-body text-[1.55vw] text-muted">Absolute founder allocation cap</p></div>
        <div><p className="font-display text-[3vw] font-semibold text-primary">10%</p><p className="font-body text-[1.55vw] text-muted">Of total fixed supply</p></div>
        <div><p className="font-display text-[3vw] font-semibold text-primary">Immutable</p><p className="font-body text-[1.55vw] text-muted">Beneficiary and vesting parameters</p></div>
      </div>
    </div>
  );
}