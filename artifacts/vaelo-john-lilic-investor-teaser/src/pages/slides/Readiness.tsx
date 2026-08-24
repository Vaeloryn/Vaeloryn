export default function Readiness() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-x-[6vw] top-[6vh] h-[0.25vh] bg-primary" />
      <div className="absolute bottom-[-16vh] right-[-5vw] h-[54vw] w-[54vw] rounded-full border border-primary/15" />
      <div className="absolute bottom-[-6vh] right-[5vw] h-[36vw] w-[36vw] rounded-full border border-primary/10" />

      <div className="relative flex h-full flex-col px-[7vw] py-[7vh]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[1.55vw] font-bold tracking-[0.26em] text-primary">
              02 / EXECUTION READINESS
            </p>
            <h2 className="mt-[1.5vh] font-display text-[5.3vw] font-semibold leading-[0.9] tracking-[-0.055em] text-accent">
              Evidence, not theater.
            </h2>
          </div>
          <p className="mb-[0.5vh] w-[28vw] font-body text-[1.7vw] font-medium leading-[1.35] text-muted">
            A disciplined path from local construction to external diligence
            and deployment readiness.
          </p>
        </div>

        <div className="mt-[5vh] grid flex-1 grid-cols-[0.92fr_1.08fr] gap-[6vw]">
          <div className="border-t border-primary/65 pt-[3vh]">
            <p className="font-body text-[1.55vw] font-bold tracking-[0.18em] text-primary">
              LATEST RECORDED CANONICAL FOUNDRY RUN
            </p>
            <div className="mt-[1.5vh] flex items-end gap-[1.3vw]">
              <p className="font-display text-[10vw] font-semibold leading-[0.75] tracking-[-0.08em] text-accent">
                27
              </p>
              <p className="mb-[0.8vh] font-body text-[2.2vw] font-semibold text-accent">
                tests passed
              </p>
            </div>
            <div className="mt-[3.5vh] grid grid-cols-2 gap-[1.8vw]">
              <div className="border-l border-accent/25 pl-[1.4vw]">
                <p className="font-display text-[4vw] font-semibold leading-none text-primary">
                  0
                </p>
                <p className="mt-[0.6vh] font-body text-[1.8vw] font-semibold text-muted">
                  failed
                </p>
              </div>
              <div className="border-l border-accent/25 pl-[1.4vw]">
                <p className="font-display text-[4vw] font-semibold leading-none text-primary">
                  0
                </p>
                <p className="mt-[0.6vh] font-body text-[1.8vw] font-semibold text-muted">
                  skipped
                </p>
              </div>
            </div>
            <p className="mt-[4vh] font-body text-[2vw] leading-[1.42] text-muted">
              Unit, edge-case, fuzz, Permit, and invariant coverage is
              recorded locally.
            </p>
          </div>

          <div className="border-t border-primary/65 pt-[3vh]">
            <p className="font-body text-[1.55vw] font-bold tracking-[0.18em] text-primary">
              CURRENT STATUS
            </p>
            <div className="mt-[2.4vh] border-b border-accent/20 pb-[2.2vh]">
              <p className="font-body text-[2.25vw] font-semibold text-accent">
                Local canonical implementation
              </p>
              <p className="mt-[0.8vh] font-body text-[1.8vw] leading-[1.35] text-muted">
                Not deployed.
              </p>
            </div>
            <div className="py-[2.2vh] border-b border-accent/20">
              <p className="font-body text-[2.25vw] font-semibold text-accent">
                Independent security audit
              </p>
              <p className="mt-[0.8vh] font-body text-[1.8vw] leading-[1.35] text-muted">
                Not yet completed.
              </p>
            </div>
            <div className="py-[2.2vh]">
              <p className="font-body text-[2.25vw] font-semibold text-accent">
                Historical V1.1 Base Sepolia prototype
              </p>
              <p className="mt-[0.8vh] font-body text-[1.8vw] leading-[1.35] text-muted">
                Non-canonical and preserved as historical evidence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[3vh] flex items-center justify-between border-t border-accent/20 pt-[2.5vh]">
          <p className="font-body text-[1.85vw] font-semibold text-accent">
            Next-stage agenda: external audit diligence, deployment readiness,
            and distribution operating plan.
          </p>
          <p className="font-body text-[1.5vw] font-bold tracking-[0.2em] text-primary">
            VAELORYN
          </p>
        </div>
      </div>
    </div>
  );
}