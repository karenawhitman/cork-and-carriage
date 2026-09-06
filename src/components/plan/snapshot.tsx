import { usePlan } from "@/lib/plan-store";
import { usd } from "@/lib/utils";

export function Snapshot() {
  const { result } = usePlan();
  const { annual, startup, breakeven } = result;

  const items = [
    { label: "Launch capital", value: usd(startup.total) },
    { label: "Year-1 revenue", value: usd(annual.revenue) },
    { label: "Owner profit", value: usd(annual.ownerProfit) },
    {
      label: "Payback",
      value: breakeven.monthsToPayback
        ? `${breakeven.monthsToPayback} mo`
        : "—",
    },
    { label: "Break-even", value: `${breakeven.events} events` },
    {
      label: "Effective hourly",
      value: usd(Math.max(0, annual.effectiveHourly)),
    },
  ];

  return (
    <section
      aria-label="Live plan snapshot"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={
              "px-4 py-5 sm:px-6 " +
              (i < items.length - 1 ? "border-r border-line/80" : "")
            }
          >
            <p className="text-xs tracking-wide text-subtle uppercase">{item.label}</p>
            <p className="mt-1 font-display text-xl tabular-nums text-ink sm:text-2xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
