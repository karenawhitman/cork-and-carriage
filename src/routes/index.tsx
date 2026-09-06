import { createFileRoute } from "@tanstack/react-router";
import { SiteHome } from "@/components/site/home";

export const Route = createFileRoute("/")({
  component: SiteHome,
  head: () => ({
    meta: [
      { title: "Cork & Carriage" },
      {
        name: "description",
        content:
          "Cork & Carriage LLC — book the 1950 Chevy 3600 for photo sessions now. 3600 Uncorked dry-hire bar opens Spring 2027. Middle Peninsula, Northern Neck, and surrounding areas.",
      },
    ],
  }),
});
