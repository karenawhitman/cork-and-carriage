import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[1.05fr_0.95fr]">
        <div className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Cork & Carriage LLC · dry-hire field manual · Spring 2027
          </p>
          <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl">
            3600 Uncorked
          </h1>
          <p className="mt-3 font-display text-2xl text-ink sm:text-3xl">Sip Back in Time</p>
          <div className="mt-4 h-1 w-16 bg-lime" aria-hidden="true" />
          <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">
            A 1963 Yellowstone canned-ham bar, towed by a green 1950 Chevrolet
            3600. Opens Spring 2027. Home yard in Middlesex. The circuit is the
            Middle Peninsula, the Northern Neck, and the counties around them.
            The bar arrives. The pour is yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#overview">
                Read the plan
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#economics">Run the numbers</a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8">
            <div>
              <dt className="text-xs tracking-wide text-subtle uppercase">The pair</dt>
              <dd className="mt-1 font-display text-2xl text-ink sm:text-3xl">’63 / ’50</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-subtle uppercase">Serves</dt>
              <dd className="mt-1 font-display text-2xl text-ink sm:text-3xl">The rivers</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-subtle uppercase">ABC retail</dt>
              <dd className="mt-1 font-display text-2xl text-ink sm:text-3xl">None</dd>
            </div>
          </dl>
        </div>
        <aside className="relative min-h-72 overflow-hidden bg-forest md:min-h-full">
          <img
            src="/concept.jpg"
            alt="Green 1950 Chevrolet 3600 towing a cream-and-green 1963 Yellowstone canned-ham bar under string lights"
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-6 py-8 text-accent-fg">
            <p className="font-display text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
              Rent the Yellowstone.
              <br />
              Not the liquor.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
