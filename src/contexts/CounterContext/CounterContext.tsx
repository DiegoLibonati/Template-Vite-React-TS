import { createContext } from "react";

import { CounterContext as CounterContextT } from "@/types/contexts";

export const CounterContext = createContext<CounterContextT | null>(null);
