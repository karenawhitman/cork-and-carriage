import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt=""
      className={cn("size-10 rounded-full object-cover", className)}
    />
  );
}

/** Champagne-cork mark — mushroom head, cage, forest tile. */
export function CorkMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("block", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" className="fill-forest" />
      {/* muselet wire */}
      <path
        d="M11 11.5h10M12.5 11.5v3.5M19.5 11.5v3.5M16 11.5v3.2"
        className="stroke-lime"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="11.2" rx="6.2" ry="2.1" className="stroke-lime" strokeWidth="1.1" />
      {/* mushroom cork head */}
      <ellipse cx="16" cy="16.2" rx="7.4" ry="4.2" fill="#C4A574" />
      <ellipse cx="16" cy="15.2" rx="5.8" ry="2.2" fill="#D8C29A" />
      {/* tapered stem */}
      <path d="M11.6 17.2c.6 5.4 2.2 8.6 4.4 8.6s3.8-3.2 4.4-8.6" fill="#B89563" />
      <path d="M13.2 17.4c.5 4.2 1.5 6.6 2.8 6.6s2.3-2.4 2.8-6.6" fill="#C4A574" />
    </svg>
  );
}

export function TrailerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("block", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="8" className="fill-forest" />
      <rect x="4.5" y="10" width="23" height="10" rx="5" className="fill-accent-fg" />
      <rect x="10" y="12.5" width="8" height="5" rx="1" className="fill-lime" />
      <circle cx="11" cy="22.5" r="2" className="fill-accent-fg" />
      <circle cx="21" cy="22.5" r="2" className="fill-accent-fg" />
    </svg>
  );
}
