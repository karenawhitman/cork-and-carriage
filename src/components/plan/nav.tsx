import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Printer, X } from "lucide-react";
import { BrandMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#model", label: "The model" },
  { href: "#streams", label: "Other checks" },
  { href: "#market", label: "Market" },
  { href: "#legal", label: "Virginia law" },
  { href: "#operations", label: "Operations" },
  { href: "#capital", label: "Capital" },
  { href: "#economics", label: "The modeler" },
  { href: "#forecast", label: "Forecast" },
  { href: "#marketing", label: "Marketing" },
  { href: "#risks", label: "Risks" },
  { href: "#launch", label: "90 days" },
] as const;

export function PlanNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "no-print sticky top-0 z-40 border-b transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-line bg-bg/95 backdrop-blur-sm"
          : "border-transparent bg-bg",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <BrandMark className="size-10" />
          <span className="font-display text-base font-medium tracking-tight sm:text-lg">
            3600 Uncorked
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.slice(0, 6).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-2.5 py-2 text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/">The site</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => window.print()}
          >
            <Printer className="size-4" />
            Print
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="#economics">Open modeler</a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center border-b border-line/70 text-base text-ink last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4" asChild>
              <Link to="/" onClick={() => setOpen(false)}>
                The site
              </Link>
            </Button>
            <Button className="mt-2" variant="outline" onClick={() => window.print()}>
              <Printer className="size-4" />
              Print plan
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
