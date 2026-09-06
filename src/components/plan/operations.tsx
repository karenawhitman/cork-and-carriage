const days = [
  { t: "Home yard", d: "Middlesex County — a barn or carport in Saluda, Hartfield, or Deltaville. Covered parking for both machines. Parts shelf for 3600 belts, points, hoses. A modern backup tow relationship (friend’s truck or a rental) written into the ops binder." },
  { t: "The Yellowstone", d: "1963 canned ham, bumper-pull, electric brakes, spare, leveling jacks, 30A or generator, LED interior, lockable cage the client can use, water jug, handwash for the bartender. Site-visit gravel and dock-edge slope before you commit." },
  { t: "The 3600", d: "1950 Chevrolet ¾-ton Advance Design. 12-volt electrical, working brakes, radials, a cooling system that will idle in August. Highway speed is not the point; reliability is. Do not put antique plates on a working tow vehicle." },
  { t: "Labor & radius", d: "Owner-operator. One event is a ten-hour day because the Chevy is slower than a half-ton. Home circuit is the Middle Peninsula and Northern Neck — comfortably inside 90 minutes from a Middlesex yard. Surrounding counties by surcharge. Never double-book Saturdays. Never send the trailer with a different truck unless the client has signed off — the pair is the product." },
];

export function Operations() {
  return (
    <section id="operations" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">06 — Operations</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
        One pair, one Saturday, no heroics on Route 17.
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {days.map((item) => (
          <div key={item.t} className="border-t border-line pt-5">
            <h3 className="font-display text-xl text-ink">{item.t}</h3>
            <p className="mt-2 text-sm text-muted">{item.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
        <h3 className="font-display text-xl text-ink">A Saturday in the life</h3>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "06:00 — Hitch, lights, coolant, inventory photo of the empty bar",
            "08:00–10:30 — Tow the back roads, arrive, level, power, style",
            "10:30 — Walkthrough with planner; client liquor staged by their bartender",
            "16:00–22:00 — Event window (you may leave if the contract allows)",
            "22:00–23:30 — Strike, wipe-down, hitch. Getaway add-on if booked.",
            "Sunday — Deep clean, charge batteries, log 3600 wear, restock ice bins",
          ].map((line) => (
            <li key={line} className="text-sm text-muted">
              {line}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-6 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
        <h3 className="font-display text-xl text-ink">A photo day in the life</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Truck-only unless the photographer paid for the pair. No ABC, no ice
          run. Seasonal props (wreath, pumpkins, a crate of lights) live in the
          bed, not a separate trailer. The 3600 is on commercial auto that day,
          not a collector policy.
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "COI naming the landowner or venue additional insured — send before you roll",
            "Arrive 30 minutes early — park, wipe chrome, stage the season",
            "Unhitch if the session is 3600-only; Yellowstone stays in the yard",
            "Only you (or a listed driver) move the truck. Clients pose; they do not drive.",
            "Three-hour window: golden hour preferred, shade in July. No posing in the travel lane.",
            "Photographer owns the shot list and brings their own GL; you stay out of frame",
            "Usage license signed before the first frame for anything public",
            "Strike props, log miles, no Sunday deep-clean unless the pair rolled",
          ].map((line) => (
            <li key={line} className="text-sm text-muted">
              {line}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
