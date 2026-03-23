import { useState } from "react";

import { CounterState } from "@/types/states";
import { CounterProviderProps } from "@/types/props";

import { CounterContext } from "@/contexts/CounterContext/CounterContext";

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: 0,
  });

  const addCounter = (value: number = 1): void => {
    setCounterState((state) => ({ ...state, counter: state.counter + value }));
  };

  const subtractCounter = (value: number = 1): void => {
    setCounterState((state) => ({ ...state, counter: state.counter - value }));
  };

  return (
    <CounterContext.Provider
      value={{
        counterState: counterState,
        addCounter: addCounter,
        subtractCounter: subtractCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
