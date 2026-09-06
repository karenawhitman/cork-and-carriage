const items = [
  {
    title: "Entity",
    body: "Form a Virginia LLC with the State Corporation Commission. Articles of Organization are $100. Annual registration is $50, due the last day of the anniversary month. Get a free EIN from the IRS. Use a Middlesex registered agent and a definite place of business in the county.",
  },
  {
    title: "ABC — you",
    body: "Dry hire is not a liquor sale and not a pour. You should not need a Virginia ABC retail license. Do not advertise packages that include alcohol, do not run a cash bar, and do not take a cut of drink tickets. Confirm in writing with Virginia ABC before the first booking.",
  },
  {
    title: "ABC — the host",
    body: "A banquet license ($40) is issued to the individual or group hosting a private event where alcohol is provided at no charge — weddings, reunions, company parties — at an unlicensed location. The host applies. Your contract requires proof when the venue is not already ABC-licensed.",
  },
  {
    title: "Sales tax",
    body: "Virginia taxes the lease or rental of tangible personal property. Register as a dealer with Virginia Tax and collect on gross rental proceeds (23VAC10-210-840). Middlesex combined rate is 5.3%. Hampton Roads bookings are 6.0%. Buy the trailer tax-exempt for rental if you qualify; your CPA confirms.",
  },
  {
    title: "Middlesex BPOL & tags",
    body: "BPOL with the county: $30 if receipts are $2,000–$50,000; above that, repair/personal/business services at $0.20 per $100 (retail $0.17). If the yard is inside the Town of Urbanna, add the town license. Register the 3600 and the Yellowstone as regular vehicles — not antique plates. Antique tags in Middlesex are untaxed, and they are not for towing to paid events.",
  },
  {
    title: "Personal property & insurance",
    body: "Middlesex 2026–27: autos, trucks, and trailers $2.60 per $100 assessed; business equipment $3.50 per $100 on 10% of original cost. GL $1–2M, inland marine on the Yellowstone, agreed-value on the 3600, commercial auto. Hobby/antique policies will not cover a working tow. Venues will want a COI naming them additional insured.",
  },
  {
    title: "Photo-day insurance",
    body: "A paid session with the 3600 as set is commercial use. Hagerty-style collector policies exclude it. Virginia antique plates (Va. Code § 46.2-730) are for club events, parades, testing, and pleasure driving within 250 miles — not driving to a booked job. Keep regular tags and tell the commercial-auto agent the truck is a photography prop: people pose on running boards, it parks on third-party lawns, and it earns a fee. GL $1M/$2M with additional-insured COIs for venues and landowners. Photographer insurance covers the photographer, not your Chevy. Only scheduled drivers. No champagne in the contract. This is a map; the carrier and a Virginia agent write the policy.",
  },
];

export function Legal() {
  return (
    <section id="legal" className="border-t border-line bg-forest text-accent-fg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-accent-fg/60 uppercase">
          05 — Virginia law
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium sm:text-4xl">
          The legal design is the business design.
        </h2>
        <p className="mt-4 max-w-2xl text-accent-fg/75">
          This section is a planning map, not advice. A Virginia attorney,
          Virginia ABC, a commercial-auto agent, and the Middlesex commissioner
          of the revenue will have the last word. The dry-hire thesis collapses
          if you casually start pouring — or if the 3600 is tagged as a parade
          piece.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-accent-fg/10 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="bg-forest p-6">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-accent-fg/75">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-accent-fg/60">
          Health departments generally care when you prepare food or handle
          open beverages as a vendor. Pure equipment rental with client-owned
          product is a different fact pattern — still call the county if you
          include ice from your machine or washed glassware. When in doubt,
          rent sealed ice and let the bartender’s employer own the warewash.
        </p>
      </div>
    </section>
  );
}
