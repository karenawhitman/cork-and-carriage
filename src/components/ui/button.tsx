import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium transition-opacity duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-forest text-accent-fg hover:opacity-90",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-surface",
        inverse: "bg-accent-fg text-forest hover:opacity-90",
      },
      size: {
        sm: "h-10 rounded-sm px-3.5",
        md: "h-11 rounded-md px-4",
        lg: "h-12 rounded-md px-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
