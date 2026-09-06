import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const SERVICES = [
  { id: "photo", label: "Photo truck — available now" },
  { id: "uncorked", label: "3600 Uncorked waitlist — Spring 2027" },
] as const;

const PHOTO_OCCASIONS = [
  "Engagement / portraits",
  "Seasonal / holiday cards",
  "Family session",
  "Styled / brand",
  "Wedding-day 3600",
] as const;

const BAR_OCCASIONS = ["Wedding", "Oyster roast", "Festival", "Private party"] as const;
const PLACES = ["Middle Peninsula", "Northern Neck", "Surrounding"] as const;

const field =
  "mt-1.5 h-11 w-full rounded-md bg-bg px-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none transition-opacity duration-150 placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

type Inquiry = {
  name: string;
  email: string;
  date: string;
  place: string;
  service: string;
  occasion: string;
  notes: string;
};

const empty: Inquiry = {
  name: "",
  email: "",
  date: "",
  place: "Middle Peninsula",
  service: "photo",
  occasion: "Engagement / portraits",
  notes: "",
};

export function Book() {
  const [form, setForm] = useState<Inquiry>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const isPhoto = form.service === "photo";
  const occasions = isPhoto ? PHOTO_OCCASIONS : BAR_OCCASIONS;

  function setService(service: string) {
    setForm({
      ...form,
      service,
      occasion: service === "photo" ? PHOTO_OCCASIONS[0] : BAR_OCCASIONS[0],
    });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email get a reply.");
      return;
    }
    if (isPhoto && !form.date) {
      setError("Photo days need a date.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email does not look right.");
      return;
    }
    const key = "cork-carriage-inquiries";
    let prev: Inquiry[] = [];
    try {
      prev = JSON.parse(localStorage.getItem(key) || "[]") as Inquiry[];
      if (!Array.isArray(prev)) prev = [];
    } catch {
      prev = [];
    }
    localStorage.setItem(key, JSON.stringify([...prev, form]));
    setSent(true);
    setError("");
  }

  return (
    <section id="book" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Request a date</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
            Book the 3600 now. Hold a Saturday for 2027.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Cork & Carriage LLC is booking the vintage Chevy for photo
            sessions today. 3600 Uncorked dry-hire starts Spring 2027 — join the
            waitlist if you already have a lawn.
          </p>
          <p className="mt-6 text-sm text-muted">
            Photo truck, three hours, from $550. A COI naming your venue or
            landowner is available. The bar, when it rolls, is dry hire from
            $1,150.
          </p>
        </div>
        {sent ? (
          <div className="rounded-xl bg-forest p-8 text-accent-fg">
            <p className="font-display text-2xl">We have it.</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-accent-fg/80">
              {form.name.split(" ")[0]}, we’ll write back from the Middlesex
              yard
              {isPhoto ? ` about ${form.date} on the ${form.place}` : " about the 3600 Uncorked waitlist"}.
              If the date is already spoken for, we’ll say so plainly.
            </p>
            <Button
              variant="inverse"
              className="mt-8"
              onClick={() => {
                setSent(false);
                setForm(empty);
              }}
            >
              Send another date
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="rounded-xl bg-bg p-6 shadow-[var(--shadow-border)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-muted sm:col-span-2">
                Service
                <select
                  className={field}
                  value={form.service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-muted">
                Name
                <input
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm text-muted">
                Email
                <input
                  type="email"
                  className={field}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                />
              </label>
              <label className="block text-sm text-muted">
                Date{isPhoto ? "" : " (optional)"}
                <input
                  type="date"
                  className={field}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
              <label className="block text-sm text-muted">
                Where
                <select
                  className={field}
                  value={form.place}
                  onChange={(e) => setForm({ ...form, place: e.target.value })}
                >
                  {PLACES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-muted sm:col-span-2">
                Occasion
                <select
                  className={field}
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                >
                  {occasions.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm text-muted sm:col-span-2">
                Notes
                <textarea
                  className="mt-1.5 min-h-28 w-full rounded-md bg-bg px-3 py-2 text-sm text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder={
                    isPhoto
                      ? "Photographer, location, seasonal props (wreath, pumpkins, lights)."
                      : "Venue, guest count, Saturday in 2027 you want held."
                  }
                />
              </label>
            </div>
            {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              {isPhoto ? "Request the truck" : "Join the waitlist"}
            </Button>
            <p className="mt-3 text-xs text-subtle">
              {isPhoto
                ? "Photo days are equipment rental. No alcohol travels with the 3600."
                : "A waitlist note, not a liquor order. The bar does not pour."}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
