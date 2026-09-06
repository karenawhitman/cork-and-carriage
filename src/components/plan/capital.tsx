import { usePlan } from "@/lib/plan-store";
import { usd } from "@/lib/utils";
import { trailers } from "@/lib/model";

export function Capital() {
  const { result, inputs, setInputs } = usePlan();

  return (
    <section id="capital" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">07 — Capital</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium text-ink sm:text-4xl">
          Write two checks: the Yellowstone and the 3600.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Three restoration grades of the same pair. Shore is a working first
          rig. Tide is the recommended launch — cream-and-green two-tone, the
          look in the photograph. Harbor is for operators who already have
          Saturday demand. The truck is not optional — it is how the bar
          arrives, and half of what you are selling.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {(Object.keys(trailers) as Array<keyof typeof trailers>).map((id) => {
            const t = trailers[id];
            const on = inputs.trailer === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setInputs({ trailer: id })}
                className={
                  "rounded-lg px-4 py-4 text-left transition-opacity duration-150 " +
                  (on ? "bg-forest text-accent-fg" : "bg-bg text-ink shadow-[var(--shadow-border)]")
                }
              >
                <p className="font-display text-lg">{t.name}</p>
                <p className={"mt-1 text-sm tabular-nums " + (on ? "text-accent-fg/80" : "text-muted")}>
                  {usd(t.build + t.truck)} pair · from {usd(t.weekend)} / Saturday
                </p>
              </button>
            );
          })}
        </div>
        <div className="mt-8 overflow-hidden rounded-xl bg-bg shadow-[var(--shadow-border)]">
          <table className="w-full text-sm">
            <tbody>
              {result.startup.lines.map((line) => (
                <tr key={line.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-3">
                    <p className="text-ink">{line.label}</p>
                    {line.note ? <p className="mt-0.5 text-xs text-subtle">{line.note}</p> : null}
                  </td>
                  <td className="px-5 py-3 text-right font-medium tabular-nums text-ink">
                    {usd(line.amount)}
                  </td>
                </tr>
              ))}
              <tr className="bg-forest text-accent-fg">
                <td className="px-5 py-4 font-display text-lg">Total to launch</td>
                <td className="px-5 py-4 text-right font-display text-lg tabular-nums">
                  {usd(result.startup.total)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-subtle">
          Figures are 2026 planning estimates, not quotes. A running 3600 and a
          solid Yellowstone shell can be found for less; a frame-off pair will
          exceed Harbor. Budget mechanicals before paint.
        </p>
      </div>
    </section>
  );
}
