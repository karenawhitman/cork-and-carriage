import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#photos", label: "Photo truck" },
  { href: "#uncorked", label: "3600 Uncorked" },
  { href: "#circuit", label: "The circuit" },
  { href: "#book", label: "Request a date" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overPhoto = !scrolled && !open;

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
        "sticky top-0 z-40 border-b transition-[background-color,border-color,color] duration-200",
        scrolled || open
          ? "border-line bg-bg/95 text-ink backdrop-blur-sm"
          : "border-transparent bg-transparent text-accent-fg",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <BrandMark className="size-10" />
          <span className="font-display text-base font-medium tracking-tight sm:text-lg">
            Cork & Carriage
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "rounded-sm px-2.5 py-2 text-sm transition-colors duration-150 " +
                (overPhoto ? "text-accent-fg/80 hover:text-accent-fg" : "text-muted hover:text-ink")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button size="sm" className="hidden sm:inline-flex" variant={overPhoto ? "inverse" : "primary"} asChild>
            <a href="#book">Book the truck</a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={overPhoto ? "text-accent-fg hover:bg-accent-fg/10 hover:text-accent-fg md:hidden" : "md:hidden"}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center border-b border-line/70 text-base text-ink last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
