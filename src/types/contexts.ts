import { CounterState } from "@/types/states";

export type CounterContext = {
  counterState: CounterState;
  addCounter: (value: number) => void;
  subtractCounter: (value: number) => void;
};
