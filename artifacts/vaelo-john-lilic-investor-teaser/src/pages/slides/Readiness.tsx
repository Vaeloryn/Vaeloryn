export default function Readiness() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-accent">
      <div className="absolute inset-x-[6vw] top-[4.5vh] h-[0.25vh] bg-primary" />
      <div className="absolute bottom-[-22vh] right-[-4vw] h-[55vw] w-[55vw] rounded-full border border-primary/12" />

      <div className="relative flex h-full flex-col px-[7vw] py-[5vh]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-[1.5vw] font-bold tracking-[0.24em] text-primary">03 / WHY NOW</p>
            <h2 className="mt-[1.1vh] font-display text-[4.5vw] font-semibold leading-[0.9] tracking-[-0.055em] text-accent">From foundation to execution.</h2>
          </div>
          <p className="mb-[0.4vh] w-[30vw] font-body text-[1.55vw] font-medium leading-[1.32] text-muted">
            The technical groundwork is real. The next stage is diligence, readiness, and choosing the right first project.
          </p>
        </div>

        <div className="mt-[3.2vh] grid flex-1 grid-cols-[0.86fr_1.14fr] gap-[5vw]">
          <div className="border-t border-primary/65 pt-[2vh]">
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">RECORDED EVIDENCE</p>
            <div className="mt-[1.1vh] flex items-end gap-[1.1vw]">
              <p className="font-display text-[8.5vw] font-semibold leading-[0.78] tracking-[-0.08em] text-accent">27</p>
              <p className="mb-[0.55vh] font-body text-[1.95vw] font-semibold text-accent">tests passed</p>
            </div>
            <p className="mt-[1.4vh] font-body text-[1.65vw] leading-[1.3] text-muted">Latest recorded canonical Foundry run: 27 tests passed, 0 failed, 0 skipped.</p>
            <div className="mt-[2.2vh] grid grid-cols-2 gap-[1.6vw]">
              <div className="border-l border-accent/25 pl-[1.2vw]"><p className="font-display text-[3.2vw] font-semibold leading-none text-primary">0</p><p className="mt-[0.4vh] font-body text-[1.55vw] font-semibold text-muted">failed</p></div>
              <div className="border-l border-accent/25 pl-[1.2vw]"><p className="font-display text-[3.2vw] font-semibold leading-none text-primary">0</p><p className="mt-[0.4vh] font-body text-[1.55vw] font-semibold text-muted">skipped</p></div>
            </div>
            <p className="mt-[2.4vh] font-body text-[1.55vw] leading-[1.3] text-muted">Internal smart-contract review completed. Independent security audit remains pending.</p>
          </div>

          <div className="border-t border-primary/65 pt-[2vh]">
            <p className="font-body text-[1.4vw] font-bold tracking-[0.18em] text-primary">NEXT-STAGE AGENDA</p>
            <div className="mt-[1.2vh] space-y-[1vh]">
              <div className="border-b border-accent/15 pb-[1vh]"><p className="font-body text-[1.7vw] font-semibold text-accent">Final security work</p><p className="mt-[0.3vh] font-body text-[1.5vw] leading-[1.23] text-muted">Independent smart-contract and security review before production or mainnet.</p></div>
              <div className="border-b border-accent/15 pb-[1vh]"><p className="font-body text-[1.7vw] font-semibold text-accent">Deployment preparation</p><p className="mt-[0.3vh] font-body text-[1.5vw] leading-[1.23] text-muted">Complete legal, regulatory, custody, and operational gates.</p></div>
              <div className="border-b border-accent/15 pb-[1vh]"><p className="font-body text-[1.7vw] font-semibold text-accent">Ecosystem development</p><p className="mt-[0.3vh] font-body text-[1.5vw] leading-[1.23] text-muted">Build the contributor network and evaluate the first real Vaeloryn project.</p></div>
              <div><p className="font-body text-[1.7vw] font-semibold text-accent">Launch preparation</p><p className="mt-[0.3vh] font-body text-[1.5vw] leading-[1.23] text-muted">Progress remains milestone-gated, not calendar-gated.</p></div>
            </div>
          </div>
        </div>

        <div className="mt-[1.2vh] border-t border-accent/20 pt-[1.5vh]">
          <p className="max-w-[80vw] font-display text-[1.95vw] font-semibold leading-[1.13] text-accent">
            Vaeloryn is entering the stage where the right early partners can help turn an established technical foundation into a scalable ecosystem.
          </p>
          <div className="mt-[0.9vh] flex items-center justify-between gap-[2vw]">
            <p className="font-body text-[1.5vw] leading-[1.25] text-muted">We would welcome the opportunity to discuss the vision, the technology, and the next stage of Vaeloryn.</p>
            <a href="https://vaeloryn.com" target="_blank" rel="noopener noreferrer" className="shrink-0 font-body text-[1.5vw] font-bold tracking-[0.12em] text-primary underline underline-offset-[0.5vh]">VAELORYN.COM</a>
          </div>
        </div>
      </div>
    </div>
  );
}