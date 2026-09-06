import { Camera, Landmark, MapPinned, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartColors, marketingPlans } from "@/lib/model";
import { usePlan } from "@/lib/plan-store";
import { usd } from "@/lib/utils";

const audiences = [
  {
    icon: Users,
    t: "The couple",
    d: "Engaged 8–14 months out, waterfront or historic site on the Middle Peninsula or Northern Neck. They already saved a green truck on Pinterest. You are the photograph, then the rental.",
  },
  {
    icon: MapPinned,
    t: "The planner",
    d: "Local coordinators and a few Richmond/Williamsburg firms who book the rivers. They need a COI, a one-pager, and a dry-hire price they can defend. Preferred-vendor lists are short. Get on them.",
  },
  {
    icon: Landmark,
    t: "The venue",
    d: "Marinas, river houses, Irvington inns, plantation lawns, yacht clubs. Unlicensed sites need the host’s banquet license — your contract says so. The venue wants a bar that looks like it belongs on the dock.",
  },
  {
    icon: Camera,
    t: "The photographer",
    d: "Weekday photo days put the 3600 in front of clients you will never meet at a bridal show. Sell the truck as a seasonal set — holiday cards, fall foliage, spring engagements — and trade a simple rate for a usage license. Their grid is your catalog.",
  },
];

const seasons = [
  { t: "Jan–Mar", d: "Listings live. Walk venues while they are empty. Yacht-club holiday recap, photographer emails, winter-card sessions with a wreath on the 3600. One indoor styled frame if the pair is painted. Book next fall." },
  { t: "Apr–Jun", d: "Peak inquiry window for this year’s Saturdays and next year’s. Spring engagement sessions on the rivers. Answer in a day. Raise the weekend rate the week the fourth deposit clears. Content from real jobs, not stock." },
  { t: "Jul–Aug", d: "Heat. Protect the 3600. Photo days in shade, midweek oyster roasts, wedding getaway portraits at dusk. Do not buy ads you cannot staff. Festival deposits for fall." },
  { t: "Sep–Dec", d: "Oyster country and foliage sessions. Urbanna, Blessing of the Fleet, holiday installs, Christmas-card bookings. Collect emails, not drink tickets. January is already in the inbox." },
];

const say = [
  "Rent the Yellowstone. Not the liquor.",
  "Sip Back in Time.",
  "Dry hire for the Middle Peninsula, Northern Neck, and surrounding counties.",
];

const never = [
  "Packages that include alcohol, bartenders, or a cash bar.",
  "Statewide or I-95 claims the 3600 will not keep.",
  "Antique-show or Airbnb language. This is a working rental company.",
];

const kpis = [
  { k: "8", d: "Preferred-vendor lists on the circuit by month 12." },
  { k: "48h", d: "Inquiry to a written quote. Faster than a tap truck from Richmond." },
  { k: "1", d: "Styled shoot of the pair on the Rappahannock, reused for a year." },
  { k: "4", d: "Festival or static days treated as open houses, not side gigs." },
];

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-ink px-3 py-2 text-xs text-accent-fg shadow-[var(--shadow-border)]">
      <p className="text-accent-fg/70">{label}</p>
      <p className="tabular-nums">{usd(payload[0].value)}</p>
    </div>
  );
}

export function Marketing() {
  const { inputs, setInputs, result } = usePlan();
  const m = result.marketing;
  const gapCopy =
    m.gap > 4
      ? "The modeler is ahead of this funnel. Walk more docks, raise the close, or step the spend up."
      : m.gap < -4
        ? "The funnel covers the calendar with room. Do not buy ads you cannot staff on a Saturday."
        : "Funnel and calendar are in range for a single pair on this circuit.";

  return (
    <section id="marketing" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">10 — Marketing plan</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
          The pair is the media plan.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          3600 Uncorked does not out-shout a tap truck from Richmond. It arrives
          looking like 1950 and rents dry. The vintage Chevy 3600 and the Yellowstone are
          the campaign. Everything else — listings, festivals, photographers —
          is distribution for that photograph, on the Middle Peninsula, the
          Northern Neck, and the counties that touch them.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl bg-forest text-accent-fg md:grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-56">
            <img
              src="/concept.jpg"
              alt="Green 1950 Chevrolet 3600 and 1963 Yellowstone canned-ham bar"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] text-accent-fg/60 uppercase">Positioning</p>
            <p className="mt-3 font-display text-3xl leading-snug">Sip Back in Time</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-accent-fg/80">
              A dry-hire vintage mobile bar. Couples and hosts rent the finished
              Yellowstone, delivered behind the 3600. They buy the alcohol and
              hold the ABC banquet license. You own two photogenic machines and
              almost no inventory.
            </p>
            <p className="mt-6 text-sm text-accent-fg/70">
              Not a bartender service. Not a liquor package. Not a statewide brand.
            </p>
          </div>
        </div>

        <h3 className="mt-14 font-display text-2xl text-ink">Who you actually sell</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => (
            <article key={a.t} className="rounded-xl bg-bg p-6 shadow-[var(--shadow-border)]">
              <a.icon className="size-5 text-forest" strokeWidth={1.75} />
              <h4 className="mt-4 font-display text-xl text-ink">{a.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div>
            <h3 className="font-display text-2xl text-ink">Year-one spend</h3>
            <p className="mt-3 text-sm text-muted">
              Styled photography of the pair sits in launch capital, not this
              line. Annual spend is distribution: listings, festivals, print,
              and the hours it takes to walk Irvington with a leave-behind.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {(Object.keys(marketingPlans) as Array<keyof typeof marketingPlans>).map((id) => {
                const plan = marketingPlans[id];
                const on = inputs.marketing === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setInputs({ marketing: id })}
                    className={
                      "rounded-lg px-4 py-4 text-left transition-opacity duration-150 " +
                      (on ? "bg-forest text-accent-fg" : "bg-bg text-ink shadow-[var(--shadow-border)]")
                    }
                  >
                    <p className="font-display text-lg">{plan.name}</p>
                    <p className={"mt-1 text-sm tabular-nums " + (on ? "text-accent-fg/80" : "text-muted")}>
                      {usd(plan.spend)} / year
                    </p>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-muted">{marketingPlans[inputs.marketing].note}</p>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4">
              {[
                { k: "Inquiries", v: String(m.inquiries) },
                { k: "Close rate", v: `${Math.round(m.closeRate * 100)}%` },
                { k: "Booked from funnel", v: String(m.booked) },
                { k: "Cost / inquiry", v: usd(m.costPerInquiry) },
              ].map((item) => (
                <div key={item.k} className="bg-bg px-4 py-4">
                  <dt className="text-xs tracking-wide text-subtle uppercase">{item.k}</dt>
                  <dd className="mt-1 font-display text-2xl tabular-nums text-ink">{item.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">
              Modeler is set to {result.annual.events} dry-hire events. Funnel
              implies {m.booked}. {gapCopy}
            </p>
          </div>
          <div className="rounded-xl bg-bg p-4 shadow-[var(--shadow-border)] sm:p-5">
            <p className="mb-3 text-sm text-muted">Where the {usd(m.spend)} goes</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={m.channels} layout="vertical" margin={{ left: 8, right: 12 }}>
                  <CartesianGrid stroke={chartColors.line} horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="label"
                    width={96}
                    tick={{ fill: chartColors.muted, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<Tip />} cursor={{ fill: chartColors.line }} />
                  <Bar dataKey="amount" name="Spend" fill={chartColors.forest} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 space-y-1.5 text-sm">
              {m.channels.map((c) => (
                <li key={c.label} className="flex justify-between gap-3 text-muted">
                  <span>{c.label}</span>
                  <span className="tabular-nums text-ink">{usd(c.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-14 font-display text-2xl text-ink">A year on the circuit</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {seasons.map((s) => (
            <li key={s.t} className="border-t border-line pt-4">
              <p className="text-xs tracking-wide text-subtle uppercase">{s.t}</p>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-ink">What you say</h3>
            <ul className="mt-4 space-y-3">
              {say.map((line) => (
                <li key={line} className="border-l-2 border-lime pl-4 text-sm text-ink">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink">What you never say</h3>
            <ul className="mt-4 space-y-3">
              {never.map((line) => (
                <li key={line} className="border-l-2 border-line pl-4 text-sm text-muted">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-14 font-display text-2xl text-ink">Scoreboard, not vibes</h3>
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4">
          {kpis.map((item) => (
            <article key={item.k} className="bg-bg p-5">
              <p className="font-display text-3xl text-ink">{item.k}</p>
              <p className="mt-2 text-sm text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
