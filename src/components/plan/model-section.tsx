const rows = [
  {
    model: "Dry hire (this plan)",
    you: "Yellowstone, 3600, delivery, setup, lighting, ice bins, glassware optional",
    client: "Alcohol, mixers, bartenders, ABC banquet license, cups if not rented",
    license: "None for you. Host’s banquet license at unlicensed venues.",
    margin: "Very high. Fuel, vintage wear, processing.",
  },
  {
    model: "Staffed dry hire",
    you: "The pair plus TIPS-certified bartenders who pour the client’s liquor",
    client: "Alcohol and mixers; you may still avoid resale",
    license: "Gray. Pouring can look like service. Confirm with VA ABC before offering.",
    margin: "High, but payroll and liquor-liability insurance appear.",
  },
  {
    model: "Full service",
    you: "Trailer, truck, staff, liquor, mixers, cups, menu",
    client: "A check",
    license: "ABC retail / caterer path. Slow, expensive, venue-by-venue.",
    margin: "Lower. Inventory, breakage, cash-bar risk, compliance load.",
  },
];

export function ModelSection() {
  return (
    <section id="model" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">02 — The model</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Stay on the dry side of the bar.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Three ways to run a mobile bar. This plan commits to the first and
          treats the second as a later, lawyer-reviewed add-on — never a silent
          default. Extra revenue comes from the pair as a prop, not from a pour.
        </p>
        <div className="mt-10 overflow-x-auto rounded-xl bg-bg shadow-[var(--shadow-border)]">
          <table className="w-full min-w-3xl text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs tracking-wide text-subtle uppercase">
                <th className="px-5 py-3 font-medium">Model</th>
                <th className="px-5 py-3 font-medium">You provide</th>
                <th className="px-5 py-3 font-medium">Client provides</th>
                <th className="px-5 py-3 font-medium">ABC posture</th>
                <th className="px-5 py-3 font-medium">Unit economics</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.model}
                  className={i === 0 ? "bg-forest/10" : "border-t border-line"}
                >
                  <td className="px-5 py-4 font-medium text-ink">{row.model}</td>
                  <td className="px-5 py-4 text-muted">{row.you}</td>
                  <td className="px-5 py-4 text-muted">{row.client}</td>
                  <td className="px-5 py-4 text-muted">{row.license}</td>
                  <td className="px-5 py-4 text-muted">{row.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg bg-bg p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-ink">What you sell</h3>
            <p className="mt-2 text-sm text-muted">
              A four- to eight-hour rental of the finished Yellowstone, delivery
              behind the 3600 within a stated radius, setup and strike. Add-ons:
              extra hour, lighting, glass crates, tap jockey boxes, the truck as
              a getaway.
            </p>
          </article>
          <article className="rounded-lg bg-bg p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-ink">What you never sell</h3>
            <p className="mt-2 text-sm text-muted">
              Alcohol, mixers as a package, a cash bar, or “we’ll handle the
              ABC paperwork for a cut.” Those sentences turn a rental company
              into a retailer. The contract says so in plain type.
            </p>
          </article>
          <article className="rounded-lg bg-bg p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-ink">Optional later</h3>
            <p className="mt-2 text-sm text-muted">
              A vetted bartender referral list (independent contractors paid by
              the client) and, only after written ABC guidance, a staffed-pour
              add-on with liquor-liability coverage.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
