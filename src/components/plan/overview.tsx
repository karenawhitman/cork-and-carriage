import { Camera, GlassWater, Landmark, Truck } from "lucide-react";

const pillars = [
  {
    icon: Truck,
    title: "The pair",
    body: "A 1963 Yellowstone canned-ham travel trailer with a serving hatch, bar top, ice, and string lights — towed by a green 1950 Chevrolet 3600. The truck is not a prop in the driveway. It is how the bar gets there, and half of what people photograph.",
  },
  {
    icon: GlassWater,
    title: "The hire",
    body: "Clients rent the bar dry. They buy the beer, wine, and spirits, and they staff the window. You deliver, level, power, and collect. No bottles on your books.",
  },
  {
    icon: Landmark,
    title: "The circuit",
    body: "Yard in Middlesex County. The work is the Middle Peninsula, the Northern Neck, and surrounding counties — Gloucester, Mathews, Lancaster, Irvington, Williamsburg when it pays. BPOL at home. Combined sales tax 5.3% on most of the circuit. Antique tags stay off the 3600.",
  },
  {
    icon: Camera,
    title: "The other checks",
    body: "Saturdays are the engine. Weekdays are seasonal photo sessions with the 3600 — engagements, holiday cards, styled work — plus festival static, a getaway in the Chevy, glass and lighting add-ons. The pair earns when it is not pouring someone else’s whiskey.",
  },
];

export function Overview() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">01 — Overview</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
        Two machines, two rivers, no ounces on the books.
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-muted">
        <p>
          Cork & Carriage LLC is a Middlesex County equipment-rental company.
          The first service — the 1950 Chevrolet 3600 as a photo set — books
          now. 3600 Uncorked, the dry-hire Yellowstone bar, opens Spring 2027
          and serves the Middle Peninsula, the Northern Neck, and surrounding
          areas. The product is a restored 1963 canned-ham trailer converted to
          a bar and delivered behind the 3600, to waterfront weddings, river
          houses, oyster-country parties, and nearby historic lawns. The client
          provides alcohol and bartenders. That is dry hire: high contribution
          margin, no liquor inventory, and a legal posture that is rental, not
          retail.
        </p>
        <p>
          Full-service mobile bars quote $3,000–$5,000 once liquor and staff
          are in. Dry hire of this pair lands around $1,150–$1,950 for the
          same Saturday, which is why planners say yes. The vintage rig is the
          reason they say it with a photograph. Ancillary work — seasonal photo
          days with the 3600, festivals, the Chevy as a getaway car — keeps the
          calendar from going quiet between peak weekends.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
          >
            <item.icon className="size-5 text-forest" strokeWidth={1.75} />
            <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
