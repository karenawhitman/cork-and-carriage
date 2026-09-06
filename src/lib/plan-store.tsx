import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { compute, defaultInputs, type PlanInputs, type PlanResult } from "@/lib/model";

interface PlanContextValue {
  inputs: PlanInputs;
  result: PlanResult;
  setInputs: (patch: Partial<PlanInputs>) => void;
  reset: () => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [inputs, setInputsState] = useState<PlanInputs>(defaultInputs);
  const result = useMemo(() => compute(inputs), [inputs]);

  const value = useMemo<PlanContextValue>(
    () => ({
      inputs,
      result,
      setInputs: (patch) => setInputsState((prev) => ({ ...prev, ...patch })),
      reset: () => setInputsState(defaultInputs),
    }),
    [inputs, result],
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside PlanProvider");
  return ctx;
}
