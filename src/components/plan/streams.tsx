import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartColors } from "@/lib/model";
import { usePlan } from "@/lib/plan-store";
import { usd } from "@/lib/utils";

const streams = [
  {
    t: "Event add-ons",
    d: "Glass crates, string lighting, a jockey box, extra hour, ice. Sold on the same contract as the Saturday. High margin, no extra tow.",
  },
  {
    t: "Photo and prop days",
    d: "The 3600 is the set. Weekday three-hour windows for engagements, bridal portraits, family and holiday cards, styled editorials, and small-brand work. Truck-only (unhitched) or the pair. No alcohol, no bartender. Photographers book the machine; we stage wreaths, pumpkins, or lights when the season asks.",
  },
  {
    t: "Festival and static",
    d: "Urbanna Oyster Festival, Deltaville Blessing of the Fleet, Saluda and Irvington markets, holiday installs at oyster houses. The Yellowstone parks. You are still dry hire — the host or the event holds the license.",
  },
  {
    t: "3600 getaway",
    d: "After the reception, the couple leaves in the Chevy. Short add-on on a day the truck is already on site. Do not offer this on a day the trailer has a second booking — there is only one 3600.",
  },
  {
    t: "Merch",
    d: "Small: matchbooks, a print of the pair, a koozie. It will not pay the insurance. It makes the lookbook feel like a place.",
  },
  {
    t: "What you skip",
    d: "Overnight stays in the Yellowstone, antique-plate hobby use, and any package that includes a pour. Short-term rental and ABC are different businesses. Stay a rental company.",
  },
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

export function Streams() {
  const { result } = usePlan();

  return (
    <section id="streams" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">03 — Other checks</p>
      <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
        Saturdays pay for the pair. Everything else pays for January.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        A canned ham and a green Advance Design Chevy are famous on a river lawn
        in June. They are idle in February unless you sell the photograph, the
        festival, and the getaway. None of these streams require you to touch
        a bottle.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            t: "Spring sessions",
            d: "Dogwoods and first-warm-dock engagements. Book March–May before Saturday inventory is gone. Truck-only on lawns that cannot take the Yellowstone.",
          },
          {
            t: "Summer sessions",
            d: "Golden-hour river portraits and wedding-day 3600 send-offs. Shade, coolant, three hours. July heat is a constraint, not a slogan.",
          },
          {
            t: "Fall sessions",
            d: "Oyster country and foliage. Urbanna week, harvest tables, yacht-club verandas. Highest weekday demand after peak Saturdays.",
          },
          {
            t: "Winter sessions",
            d: "Holiday cards, wreaths on the grille, New Year’s docks. The calendar that pays January. Indoor adjacent only if the pair is already painted.",
          },
        ].map((s) => (
          <article key={s.t} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-ink">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <ul className="grid gap-4 sm:grid-cols-2">
          {streams.map((s) => (
            <li key={s.t} className="border-t border-line pt-4">
              <h3 className="font-display text-lg text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </li>
          ))}
        </ul>
        <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
          <p className="mb-3 text-sm text-muted">Year-one revenue mix</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={result.mix}
                layout="vertical"
                margin={{ top: 4, right: 12, left: 8, bottom: 0 }}
              >
                <CartesianGrid stroke={chartColors.line} horizontal={false} />
                <XAxis
                  type="number"
                  tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                  tick={{ fill: chartColors.muted, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={110}
                  tick={{ fill: chartColors.muted, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<Tip />} />
                <Bar dataKey="amount" name="Revenue" fill={chartColors.forest} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-sm text-muted">
            Ancillary {usd(result.annual.ancillary)} of {usd(result.annual.revenue)} total
            — tune it in the modeler.
          </p>
        </div>
      </div>
    </section>
  );
}
