import { useContext } from "react";

import { UseCounterContext } from "@/types/hooks";

import { CounterContext } from "@/contexts/CounterContext/CounterContext";

export const useCounterContext = (): UseCounterContext => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useCounterContext must be used within CounterProvider");
  return context;
};
