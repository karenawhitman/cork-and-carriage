import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { BrandMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { Book } from "@/components/site/book";
import { SiteNav } from "@/components/site/nav";

const circuit = [
  { t: "Middle Peninsula", d: "Urbanna, Deltaville, Saluda, Hartfield, Gloucester, Mathews, West Point — Rappahannock and Piankatank houses, marinas, private docks." },
  { t: "Northern Neck", d: "Irvington, Kilmarnock, White Stone, Reedville, Warsaw. Tides Inn-adjacent estates and Lancaster farms." },
  { t: "Surrounding", d: "Williamsburg, James City, York, New Kent. Richmond and Hampton Roads by exception, with a mileage note." },
];

const gallery = [
  { src: "/concept.jpg", alt: "Green 1950 Chevrolet 3600 beside a cream-and-green Yellowstone canned-ham bar under string lights" },
  { src: "/gallery-hatch.jpg", alt: "Serving hatch of the Yellowstone bar with string lights, glassware, and the vintage Chevy 3600 beyond" },
  { src: "/gallery-pair.jpg", alt: "The 3600 hitched to the Yellowstone on a grass lawn at golden hour" },
];

const seasons = [
  {
    t: "Spring",
    d: "Dogwoods, azaleas, and the first warm docks. Engagements and bridal portraits on river lawns from Gloucester to Irvington.",
  },
  {
    t: "Summer",
    d: "Golden hour on the Rappahannock and Piankatank. Wedding-day portraits with the 3600. Heat is real — we idle in shade and keep sessions to three hours.",
  },
  {
    t: "Fall",
    d: "Oyster country. Foliage, harvest tables, Urbanna week, yacht-club verandas. The green Advance Design reads against maple and marsh.",
  },
  {
    t: "Winter",
    d: "Wreaths on the grille, string lights, holiday cards, New Year’s docks. The truck photographs when the Saturday calendar is quiet.",
  },
];

const sessions = [
  { t: "Engagements & portraits", d: "Couples on the circuit. Truck as backdrop or getaway. Weekday preferred." },
  { t: "Wedding-day 3600", d: "Portraits and the send-off in the Chevy. The bar is not yet on the lawn — Spring 2027." },
  { t: "Family & holiday cards", d: "Seasonal wreaths, pumpkins, or lights on a working 1950 — not a studio seamless." },
  { t: "Styled & brand", d: "Photographers and small labels who need a period truck. Usage license in the contract." },
];

const steps = [
  { n: "01", t: "You rent the bar", d: "A four- to eight-hour hire of the finished Yellowstone: hatch, ice, lighting, glass optional. Delivered behind the 3600." },
  { n: "02", t: "You bring the pour", d: "Alcohol, mixers, bartenders, and — if the venue is unlicensed — the host’s $40 Virginia ABC banquet license. Nothing we do is a liquor sale." },
  { n: "03", t: "We bring the pair", d: "Site visit if the dock is steep. We level, power, and collect. One pair, one Saturday." },
];

export function SiteHome() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <SiteNav />
      <main>
        <section id="top" className="relative -mt-14 min-h-svh sm:-mt-16">
          <img
            src="/concept.jpg"
            alt="Green 1950 Chevrolet 3600 beside a 1963 Yellowstone canned-ham bar"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />
          <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
            <p className="text-xs font-medium tracking-[0.18em] text-accent-fg/70 uppercase">
              Cork & Carriage LLC · Middlesex County, Virginia
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-accent-fg sm:text-7xl">
              Cork & Carriage
            </h1>
            <p className="mt-3 font-display text-2xl text-accent-fg sm:text-3xl">
              The truck is ready. The bar is coming.
            </p>
            <div className="mt-4 h-1 w-16 bg-lime" aria-hidden="true" />
            <p className="mt-6 max-w-lg text-base text-accent-fg/85 sm:text-lg">
              A 1950 Chevrolet 3600 for photo sessions on the Middle Peninsula,
              Northern Neck, and surrounding areas — booking now. 3600 Uncorked,
              the dry-hire Yellowstone bar, opens Spring 2027.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" variant="inverse" asChild>
                <a href="#book">Book the truck</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-accent-fg hover:bg-accent-fg/10 hover:text-accent-fg"
                asChild
              >
                <a href="#uncorked">
                  Spring 2027
                  <ArrowDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Two services</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink sm:text-5xl">
            One yard. Two machines. Different calendars.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl bg-forest p-8 text-accent-fg shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium tracking-[0.18em] text-accent-fg/60 uppercase">Available now</p>
              <h3 className="mt-3 font-display text-3xl">Photo truck</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent-fg/80">
                The vintage Chevy 3600 as set: engagements, holiday cards, styled
                work, wedding-day portraits. Three hours. No alcohol. From $550.
                The Yellowstone stays in the yard.
              </p>
              <Button size="lg" variant="inverse" className="mt-8" asChild>
                <a href="#photos">See photo days</a>
              </Button>
            </article>
            <article className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Spring 2027</p>
              <h3 className="mt-3 font-display text-3xl text-ink">3600 Uncorked</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Dry-hire mobile bar: a 1963 Yellowstone canned ham, delivered
                behind the 3600. You buy the pour. We bring the pair. Saturdays
                from $1,150 when the hatch opens.
              </p>
              <Button size="lg" variant="outline" className="mt-8" asChild>
                <a href="#uncorked">Join the waitlist</a>
              </Button>
            </article>
          </div>
        </section>

        <section id="photos" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Photo truck · booking now</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink sm:text-4xl">
              Park the Chevy. The camera does the rest.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Cork & Carriage’s first service is the 1950 Chevrolet 3600
              Advance Design — ¾-ton, chrome grille, whitewalls — rented as a
              photography set. You bring the photographer and a location on our
              circuit. We stage the truck and stay out of the frame.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {seasons.map((s) => (
                <article key={s.t} className="rounded-xl bg-bg p-5 shadow-[var(--shadow-border)]">
                  <h3 className="font-display text-xl text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
              {sessions.map((s) => (
                <article key={s.t} className="bg-bg p-6 sm:p-8">
                  <h3 className="font-display text-xl text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted">{s.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm text-muted">
              Truck-only days do not need an ABC banquet license. A certificate
              of insurance naming the venue or landowner is available on request.
              Commercial auto and general liability — not a collector policy.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <a href="#book">Request a photo date</a>
            </Button>
          </div>
        </section>

        <section id="uncorked" className="border-t border-line bg-forest text-accent-fg">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-xs font-medium tracking-[0.18em] text-accent-fg/60 uppercase">
              3600 Uncorked · Spring 2027
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
              Rent the Yellowstone. Not the liquor.
            </h2>
            <p className="mt-4 max-w-2xl text-accent-fg/80">
              A 1963 Yellowstone canned-ham bar, towed by the same 3600. Dry
              hire to river weddings and oyster-country Saturdays. The hatch
              opens Spring 2027. Hold a date on the waitlist if you already
              know the lawn.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.n} className="border-t border-accent-fg/20 pt-5">
                  <p className="text-xs tabular-nums text-accent-fg/50">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent-fg/75">{s.d}</p>
                </article>
              ))}
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-accent-fg/20 pt-8">
              <div>
                <dt className="text-xs tracking-wide text-accent-fg/50 uppercase">Trailer</dt>
                <dd className="mt-1 font-display text-2xl">’63</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-accent-fg/50 uppercase">Opens</dt>
                <dd className="mt-1 font-display text-2xl">Spring ’27</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-accent-fg/50 uppercase">ABC retail</dt>
                <dd className="mt-1 font-display text-2xl">None</dd>
              </div>
            </dl>
            <Button size="lg" variant="inverse" className="mt-10" asChild>
              <a href="#book">Join the waitlist</a>
            </Button>
          </div>
        </section>

        <section id="circuit" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">The circuit</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-ink sm:text-4xl">
            Two rivers. The counties that touch them.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {circuit.map((c) => (
              <article key={c.t} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <h3 className="font-display text-xl text-ink">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">Lookbook</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">The only ad that matters.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {gallery.map((g) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  className="h-64 w-full rounded-lg object-cover sm:h-80"
                />
              ))}
            </div>
          </div>
        </section>

        <Book />
      </main>
      <footer className="border-t border-line bg-ink text-accent-fg">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <BrandMark className="size-14" />
              <div>
                <p className="font-display text-xl">Cork & Carriage LLC</p>
                <p className="text-xs tracking-wide text-accent-fg/50 uppercase">Middlesex County, Virginia</p>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-accent-fg/70">
              Photo truck booking now. 3600 Uncorked dry-hire mobile bar, Spring
              2027. Middle Peninsula, Northern Neck, and surrounding areas.
            </p>
          </div>
          <div className="text-sm text-accent-fg/70">
            <p>Not a liquor sale. Confirm ABC with the host and the venue.</p>
            <p className="mt-2">
              <Link to="/plan" className="underline decoration-accent-fg/30 underline-offset-4 hover:decoration-accent-fg">
                3600 Uncorked field manual
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
