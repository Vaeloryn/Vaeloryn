export default function CanonicalFoundation() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute left-0 top-0 h-full w-[0.8vw] bg-primary" />
      <div className="absolute right-[-8vw] top-[-12vh] h-[46vw] w-[46vw] rounded-full border border-primary/20" />
      <div className="absolute right-[4vw] top-[9vh] h-[27vw] w-[27vw] rounded-full border border-primary/10" />

      <div className="relative flex h-full flex-col px-[7vw] py-[7vh]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[1.55vw] font-bold tracking-[0.26em] text-primary">
              01 / PROTOCOL FOUNDATION
            </p>
            <h2 className="mt-[1.5vh] font-display text-[5.3vw] font-semibold leading-[0.9] tracking-[-0.055em] text-accent">
              Canonical by construction.
            </h2>
          </div>
          <p className="mb-[0.5vh] w-[27vw] font-body text-[1.7vw] font-medium leading-[1.35] text-muted">
            An immutable architecture designed to make the intended rules
            inspectable.
          </p>
        </div>

        <div className="mt-[7vh] grid flex-1 grid-cols-3 gap-[2.3vw]">
          <div className="border-t border-primary/65 pt-[2.8vh]">
            <p className="font-body text-[1.55vw] font-bold tracking-[0.18em] text-primary">
              FIXED SUPPLY
            </p>
            <p className="mt-[2vh] font-display text-[5vw] font-semibold leading-[0.92] tracking-[-0.06em] text-accent">
              1,000,000,000
            </p>
            <p className="mt-[0.6vh] font-body text-[2vw] font-semibold text-accent">
              VAELO
            </p>
            <p className="mt-[3vh] font-body text-[2vw] leading-[1.42] text-muted">
              No owner, admin, upgradeability, pause, blacklist, tax, or
              additional minting.
            </p>
          </div>

          <div className="border-t border-primary/65 pt-[2.8vh]">
            <p className="font-body text-[1.55vw] font-bold tracking-[0.18em] text-primary">
              ATOMIC GENESIS
            </p>
            <p className="mt-[2vh] font-display text-[3.6vw] font-semibold leading-[0.95] tracking-[-0.045em] text-accent">
              One-shot allocation
            </p>
            <p className="mt-[3vh] font-body text-[2vw] leading-[1.42] text-muted">
              Factory deploys distribution, token, and vesting, then allocates
              supply in the same transaction.
            </p>
          </div>

          <div className="border-t border-primary/65 pt-[2.8vh]">
            <p className="font-body text-[1.55vw] font-bold tracking-[0.18em] text-primary">
              FOUNDER ALIGNMENT
            </p>
            <p className="mt-[2vh] font-display text-[5vw] font-semibold leading-[0.92] tracking-[-0.06em] text-accent">
              100M
            </p>
            <p className="mt-[0.6vh] font-body text-[2vw] font-semibold text-accent">
              VAELO vesting schedule
            </p>
            <p className="mt-[3vh] font-body text-[2vw] leading-[1.42] text-muted">
              2.5M at T0, 90, 180, and 270 days; 90M linear over exactly 1,095
              days.
            </p>
          </div>
        </div>

        <div className="mt-[3vh] flex items-center justify-between border-t border-accent/20 pt-[2.5vh]">
          <p className="font-body text-[1.85vw] font-semibold text-accent">
            Canonical protocol is locally implemented and has not been
            deployed.
          </p>
          <p className="font-body text-[1.5vw] font-bold tracking-[0.2em] text-primary">
            VAELO / VAELORYN
          </p>
        </div>
      </div>
    </div>
  );
}