import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartColors } from "@/lib/model";
import { usePlan } from "@/lib/plan-store";
import { usd } from "@/lib/utils";

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-ink px-3 py-2 text-xs text-accent-fg shadow-[var(--shadow-border)]">
      <p className="text-accent-fg/70">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="tabular-nums">
          {p.name}: {usd(p.value)}
        </p>
      ))}
    </div>
  );
}

export function Forecast() {
  const { result } = usePlan();
  const yearData = result.years.map((y) => ({
    name: `Year ${y.year}`,
    Revenue: y.revenue,
    Profit: y.profit,
    events: y.events,
  }));

  return (
    <section id="forecast" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">09 — Forecast</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Year one proves the pair. Year three still has one Saturday.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Growth is more events on the same Yellowstone and the same 3600, not
          a second brand, until Saturdays are truly full. The modeler caps a
          single pair at 72 events — vintage cooling and a home circuit of the
          Middle Peninsula and Northern Neck are the constraint. Year two is
          1.25×; year three is 1.45×.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {result.years.map((y) => (
            <article key={y.year} className="rounded-lg bg-bg p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs tracking-wide text-subtle uppercase">Year {y.year}</p>
              <p className="mt-2 font-display text-3xl tabular-nums text-ink">{usd(y.profit)}</p>
              <p className="mt-1 text-sm text-muted">
                {y.events} events · {usd(y.revenue)} revenue
              </p>
              <p className="mt-3 text-xs text-subtle">
                Cumulative owner profit {usd(y.cumulative)}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-bg p-4 shadow-[var(--shadow-border)] sm:p-5">
            <p className="mb-3 text-sm text-muted">Revenue and owner profit</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke={chartColors.line} vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: chartColors.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis
                    tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                    tick={{ fill: chartColors.muted, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={44}
                  />
                  <Tooltip content={<Tip />} />
                  <Area type="monotone" dataKey="Revenue" stroke={chartColors.forest} fill={chartColors.forest} fillOpacity={0.12} />
                  <Area type="monotone" dataKey="Profit" stroke={chartColors.moss} fill={chartColors.moss} fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-xl bg-bg p-4 shadow-[var(--shadow-border)] sm:p-5">
            <p className="mb-3 text-sm text-muted">Year-one seasonality</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={result.monthly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke={chartColors.line} vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: chartColors.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis
                    tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                    tick={{ fill: chartColors.muted, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={44}
                  />
                  <Tooltip content={<Tip />} />
                  <Bar dataKey="revenue" name="Revenue" fill={chartColors.forest} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <ul className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
          <li className="rounded-lg bg-bg px-4 py-3 shadow-[var(--shadow-border)]">
            Fixed costs stay nearly flat. Insurance, a Middlesex carport,
            vintage maintenance, personal property tax, and listings — about{" "}
            {usd(result.annual.fixed)} a year in this run.
          </li>
          <li className="rounded-lg bg-bg px-4 py-3 shadow-[var(--shadow-border)]">
            A second pair is a year-three conversation, after 40+ Saturdays
            are turning away. Until then, raise rates 5–8% each January and
            sell more photo days in the trough.
          </li>
        </ul>
      </div>
    </section>
  );
}
