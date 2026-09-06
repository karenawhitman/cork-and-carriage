import { regions } from "@/lib/model";
import { usePlan } from "@/lib/plan-store";
import { num, usd } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function SliderRow({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-muted">{label}</span>
        <span className="font-display text-lg tabular-nums text-ink">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer appearance-none bg-transparent accent-forest"
      />
    </label>
  );
}

export function Economics() {
  const { inputs, setInputs, result, reset } = usePlan();
  const a = result.annual;

  return (
    <section id="economics" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">08 — The modeler</p>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Change the circuit. Watch the year move.
        </h2>
        <Button variant="outline" size="sm" onClick={reset}>
          Reset assumptions
        </Button>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
          <p className="text-xs tracking-wide text-subtle uppercase">Primary circuit: Middle Peninsula & Northern Neck</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {(Object.keys(regions) as Array<keyof typeof regions>).map((id) => {
              const r = regions[id];
              const on = inputs.region === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setInputs({ region: id })}
                  className={
                    "min-h-11 rounded-md px-3 py-2 text-left text-sm transition-opacity duration-150 " +
                    (on ? "bg-forest text-accent-fg" : "bg-bg text-ink shadow-[var(--shadow-border)]")
                  }
                >
                  {r.short}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-sm text-muted">{result.region.blurb}</p>
          <div className="mt-8 space-y-6">
            <SliderRow
              label="Dry-hire events per year"
              value={inputs.eventsPerYear}
              display={String(inputs.eventsPerYear)}
              min={16}
              max={72}
              step={1}
              onChange={(eventsPerYear) => setInputs({ eventsPerYear })}
            />
            <SliderRow
              label="Weekend share"
              value={Math.round(inputs.weekendShare * 100)}
              display={`${Math.round(inputs.weekendShare * 100)}%`}
              min={40}
              max={90}
              step={1}
              onChange={(n) => setInputs({ weekendShare: n / 100 })}
            />
            <SliderRow
              label="Add-on attach rate"
              value={Math.round(inputs.addOnShare * 100)}
              display={`${Math.round(inputs.addOnShare * 100)}%`}
              min={0}
              max={100}
              step={5}
              onChange={(n) => setInputs({ addOnShare: n / 100 })}
            />
            <SliderRow
              label="Photo / prop days"
              value={inputs.photoDays}
              display={String(inputs.photoDays)}
              min={0}
              max={30}
              step={1}
              onChange={(photoDays) => setInputs({ photoDays })}
            />
            <SliderRow
              label="Festival / static days"
              value={inputs.festivalDays}
              display={String(inputs.festivalDays)}
              min={0}
              max={12}
              step={1}
              onChange={(festivalDays) => setInputs({ festivalDays })}
            />
            <SliderRow
              label="Getaway attach (of Saturdays)"
              value={Math.round(inputs.getawayShare * 100)}
              display={`${Math.round(inputs.getawayShare * 100)}%`}
              min={0}
              max={60}
              step={5}
              onChange={(n) => setInputs({ getawayShare: n / 100 })}
            />
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-subtle">Saturday rate</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums text-ink">{usd(result.rates.weekend)}</dd>
            </div>
            <div>
              <dt className="text-subtle">Weekday rate</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums text-ink">{usd(result.rates.weekday)}</dd>
            </div>
            <div>
              <dt className="text-subtle">Photo day</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums text-ink">{usd(result.rates.photo)}</dd>
            </div>
            <div>
              <dt className="text-subtle">Sales tax collected</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums text-ink">
                {(a.taxRate * 100).toFixed(1)}%
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { l: "Revenue", v: usd(a.revenue) },
              { l: "Ancillary", v: usd(a.ancillary) },
              { l: "Fixed costs", v: usd(a.fixed) },
              { l: "Owner profit", v: usd(a.ownerProfit) },
            ].map((s) => (
              <div key={s.l} className="rounded-lg bg-surface px-4 py-4 shadow-[var(--shadow-border)]">
                <p className="text-xs tracking-wide text-subtle uppercase">{s.l}</p>
                <p className="mt-1 font-display text-2xl tabular-nums text-ink sm:text-3xl">{s.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-xl bg-bg shadow-[var(--shadow-border)]">
            <table className="w-full text-sm">
              <tbody>
                <Row k="Weekend events" v={`${a.weekendEvents} × ${usd(result.rates.weekend)}`} />
                <Row k="Weekday events" v={`${a.weekdayEvents} × ${usd(result.rates.weekday)}`} />
                <Row k="Rental revenue" v={usd(a.rental)} />
                <Row k="Delivery" v={usd(a.delivery)} />
                <Row k="Event add-ons" v={usd(a.addOns)} />
                <Row k="Photo / prop days" v={usd(a.photo)} />
                <Row k="Festivals & static" v={usd(a.festival)} />
                <Row k="3600 getaway" v={usd(a.getaway)} />
                <Row k="Merch" v={usd(a.merch)} />
                <Row k="Fuel, wear, cleaning" v={usd(-a.variable)} />
                <Row k="Card processing (2.9%)" v={usd(-a.processing)} />
                <Row k="Annual fixed" v={usd(-a.fixed)} />
                <tr className="bg-forest text-accent-fg">
                  <td className="px-5 py-3">Owner profit (pre-tax, pre-owner wage)</td>
                  <td className="px-5 py-3 text-right tabular-nums">{usd(a.ownerProfit)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            {num(a.hours, 0)} owner hours — {usd(Math.max(0, a.effectiveHourly))} effective.
            Middlesex personal property tax on the pair is about {usd(a.propertyTax)}.
            Sales tax of {usd(a.taxCollected)} is collected and remitted. Break-even is{" "}
            {result.breakeven.events} events; capital payback is{" "}
            {result.breakeven.monthsToPayback
              ? `${result.breakeven.monthsToPayback} months`
              : "not in range"}{" "}
            at this run-rate.
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <tr className="border-b border-line">
      <td className="px-5 py-2.5 text-muted">{k}</td>
      <td className="px-5 py-2.5 text-right tabular-nums text-ink">{v}</td>
    </tr>
  );
}
