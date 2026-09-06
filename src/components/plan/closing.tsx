const risks = [
  { t: "You start pouring", d: "The moment you mix a drink, you may be in ABC territory. Train yourself to refuse. Put it in the contract twice." },
  { t: "The 3600 overheats", d: "A 1950 cooling system on a July dock road is a real failure mode. Sorted radiator, electric fan if needed, a recovery tow, and a clause for mechanical delay." },
  { t: "Antique plates", d: "Middlesex charges no personal property tax on antique-tagged vehicles. That is a trap. Commercial towing wants regular tags, commercial insurance, and the $2.60 rate." },
  { t: "Collector policy on a photo day", d: "If the 3600 is on a hobby policy and someone falls off the running board at a $550 session, the claim can be denied as undisclosed commercial use. Same file as towing: commercial auto, GL, COI. Disclose posing-on-vehicle to the agent." },
  { t: "Dirt, docks, and wind", d: "Canned hams hate deep gravel and unlevel bulkheads. Site visits, a tow policy, jacks, boards, and a rain clause." },
  { t: "Saturday concentration", d: "One pair cannot be in Irvington and Williamsburg. Raise peak rates until the calendar hurts. Photo days fill the week; they do not clone Saturday." },
  { t: "Owner bottleneck", d: "You are the driver, the closer, and the mechanic’s first call. A blown weekend in May is a blown year. Build a backup driver who can handle a 4-speed 3600 before you need one." },
];

const launch = [
  { d: "Days 1–14", t: "LLC in Virginia, EIN, Middlesex BPOL, bank, insurance quotes on both machines, attorney on the rental contract, ABC confirmation email in the file." },
  { d: "Days 15–45", t: "Buy the Yellowstone and the 3600. Mechanical first: brakes, 12-volt, cooling, tires, lights. Conversion in progress. Domain, HoneyBook, COI template." },
  { d: "Days 46–70", t: "Paint, livery, photography of the pair on the water. The Knot and WeddingWire live. Ten venue and planner drop-ins from Deltaville to Irvington. One photo-day test." },
  { d: "Days 71–90", t: "Three paid bookings on the books, even if one is a weekday oyster roast. Festival deposit. Raise Saturday rate the day the fourth holds." },
];

export function Risks() {
  return (
    <section id="risks" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">11 — Risks</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          What actually kills this.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
          {risks.map((r) => (
            <article key={r.t} className="bg-bg p-6">
              <h3 className="font-display text-lg text-ink">{r.t}</h3>
              <p className="mt-2 text-sm text-muted">{r.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Launch() {
  return (
    <section id="launch" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">12 — First 90 days</p>
      <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
        Be boring on paper. Be unmistakable on the creek.
      </h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {launch.map((s, i) => (
          <li key={s.d} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <p className="text-xs tabular-nums text-subtle">0{i + 1}</p>
            <h3 className="mt-2 font-display text-xl text-ink">{s.d}</h3>
            <p className="mt-2 text-sm text-muted">{s.t}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Sources() {
  return (
    <footer className="border-t border-line bg-ink text-accent-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-display text-2xl">3600 Uncorked</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-accent-fg/70">
              Planning model for 3600 Uncorked, a dry-hire mobile bar serving
              the Middle Peninsula, Northern Neck, and surrounding areas from a
              Middlesex County yard: a 1963 Yellowstone canned ham towed by a
              green 1950 Chevrolet 3600. Figures are 2026 estimates from public
              ABC, SCC, Middlesex tax, and observed rental rates. Not legal, tax,
              or insurance advice. Confirm with Virginia ABC, a Virginia
              attorney, the Middlesex commissioner of the revenue, and your
              carrier before you hitch anything.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wide text-accent-fg/50 uppercase">Primary sources</p>
            <ul className="mt-3 space-y-2 text-sm text-accent-fg/80">
              <li>
                <a className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg" href="https://www.abc.virginia.gov/licenses/banquet-licenses">
                  Virginia ABC — banquet licenses ($40)
                </a>
              </li>
              <li>
                <a className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg" href="https://www.co.middlesex.va.us/292/Tax-Rates">
                  Middlesex County — 2026–27 tax rates
                </a>
              </li>
              <li>
                <a className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg" href="https://www.co.middlesex.va.us/297/Business-Professional-Occupational-Licen">
                  Middlesex County — BPOL
                </a>
              </li>
              <li>
                <a className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg" href="https://www.scc.virginia.gov/businesses/forms-and-fees/virginia-limited-liability-companies/">
                  Virginia SCC — LLC Articles $100, annual $50
                </a>
              </li>
              <li>
                <a className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg" href="https://law.lis.virginia.gov/admincode/title23/agency10/chapter210/section840/">
                  23VAC10-210-840 — tax on equipment rentals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-accent-fg/40">
          3600 Uncorked is a planning brand for this document, not a registered
          company. Search the SCC before you file. Yellowstone and Chevrolet
          are used here as the actual vehicles in the plan, not as an endorsement.
        </p>
      </div>
    </footer>
  );
}
