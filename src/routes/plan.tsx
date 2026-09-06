import { createFileRoute } from "@tanstack/react-router";
import { Capital } from "@/components/plan/capital";
import { Launch, Risks, Sources } from "@/components/plan/closing";
import { Economics } from "@/components/plan/economics";
import { Forecast } from "@/components/plan/forecast";
import { Hero } from "@/components/plan/hero";
import { Legal } from "@/components/plan/legal";
import { Market } from "@/components/plan/market";
import { Marketing } from "@/components/plan/marketing";
import { ModelSection } from "@/components/plan/model-section";
import { PlanNav } from "@/components/plan/nav";
import { Operations } from "@/components/plan/operations";
import { Overview } from "@/components/plan/overview";
import { Snapshot } from "@/components/plan/snapshot";
import { Streams } from "@/components/plan/streams";
import { PlanProvider } from "@/lib/plan-store";

export const Route = createFileRoute("/plan")({
  component: PlanPage,
  head: () => ({
    meta: [
      { title: "3600 Uncorked — Field manual" },
      {
        name: "description",
        content:
          "Interactive business plan for 3600 Uncorked, a Cork & Carriage LLC dry-hire bar opening Spring 2027 on the Middle Peninsula, Northern Neck, and surrounding areas.",
      },
    ],
  }),
});

function PlanPage() {
  return (
    <PlanProvider>
      <div className="min-h-screen bg-bg text-ink">
        <PlanNav />
        <main>
          <Hero />
          <Snapshot />
          <Overview />
          <ModelSection />
          <Streams />
          <Market />
          <Legal />
          <Operations />
          <Capital />
          <Economics />
          <Forecast />
          <Marketing />
          <Risks />
          <Launch />
        </main>
        <Sources />
      </div>
    </PlanProvider>
  );
}
