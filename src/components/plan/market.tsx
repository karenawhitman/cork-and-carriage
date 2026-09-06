const stats = [
  { k: "The circuit", v: "Middle Peninsula and Northern Neck — Middlesex, Gloucester, Mathews, Lancaster, Northumberland, Richmond County, Westmoreland, Essex. The yard is in Middlesex. The calendar is the rivers." },
  { k: "Surrounding", v: "Historic Triangle, New Kent, West Point, and farms that touch the circuit. Typical tow about an hour. Richmond and Hampton Roads by surcharge; I-95 is not the 3600’s job." },
  { k: "Nov", v: "Urbanna Oyster Festival is a static-hire weekend that does not care about Saturday wedding inventory. Book it like a peak date." },
  { k: "Apr–Nov", v: "Peak Saturdays from the Piankatank to the Potomac shore. July heat is hard on a 1950 cooling system. December–March are photo days, holiday installs, and yacht-club parties." },
];

const venues = [
  { region: "Middle Peninsula", names: "Urbanna, Deltaville, Saluda, Hartfield, Gloucester, Mathews, West Point — Rappahannock and Piankatank river houses, marinas, private docks" },
  { region: "Northern Neck", names: "Irvington, Kilmarnock, White Stone, Reedville, Warsaw, Tides Inn-adjacent estates, Lancaster and Northumberland farms" },
  { region: "Surrounding", names: "Williamsburg plantations, James City lawns, York River, New Kent, Kingsmill-adjacent private events" },
  { region: "By exception", names: "Richmond and Goochland farms, Hampton Roads waterfront — mileage surcharge, cooling budget, one event a day" },
];

export function Market() {
  return (
    <section id="market" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">04 — Market</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
          The circuit is the Middle Peninsula, the Northern Neck, and the counties that touch them.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          The customer booked an unlicensed river lawn, a marina tent, or a
          farm wedding between the Rappahannock and the Potomac and does not
          want a hotel banquet bar — or a $4,500 open-bar invoice. The
          Yellowstone and the vintage Chevy 3600 are the photograph they already had
          in mind. Middlesex is where the pair sleeps. The Middle Peninsula
          and Northern Neck are where it earns.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
          {stats.map((s) => (
            <article key={s.k} className="bg-bg p-6">
              <p className="font-display text-3xl text-ink">{s.k}</p>
              <p className="mt-2 text-sm text-muted">{s.v}</p>
            </article>
          ))}
        </div>
        <h3 className="mt-12 font-display text-2xl text-ink">Where the pair earns its keep</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {venues.map((v) => (
            <li key={v.region} className="rounded-lg bg-bg px-5 py-4 shadow-[var(--shadow-border)]">
              <p className="text-xs tracking-wide text-subtle uppercase">{v.region}</p>
              <p className="mt-1 text-sm text-ink">{v.names}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ink">Buyer</h3>
            <p className="mt-2 text-sm text-muted">
              Primary: engaged couples 8–14 months out who picked a waterfront
              or historic site on the Middle Peninsula or Northern Neck.
              Secondary: oyster-roast hosts, yacht clubs, nonprofit galas,
              Williamsburg destination weekends, and photographers who need a
              period truck. The economic buyer is often the planner; the
              emotional buyer is the dock at dusk.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink">Competition</h3>
            <p className="mt-2 text-sm text-muted">
              Horse-trailer bars, tap trucks, venue in-house bars, and a
              folding table. Almost nobody on the Middle Peninsula or Northern
              Neck is arriving in a matched 1950/1963 pair. That is the whole
              point of the capital outlay. Do not compete on a per-guest liquor
              package. Compete on the photograph and the dry-hire price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
