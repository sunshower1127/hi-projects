import { StateCreator } from "zustand";
import { Middlewares } from "./middleware";
import { StoreState } from "./store";

export type CounterState = {
  count: number;
  counterActions: {
    increment: () => void;
    decrement: () => void;
  };
};

export const createSlice: StateCreator<
  StoreState,
  Middlewares,
  [],
  CounterState
> = (set) => ({
  count: 0,

  counterActions: {
    increment: () =>
      set(
        (state: CounterState) => ({ count: state.count + 1 }), // ...state 안써도 됨. zustand 기본 지원
        undefined,
        "counter/increment",
      ),

    decrement: () =>
      set(
        (state: CounterState) => ({ count: state.count - 1 }),
        undefined,
        "counter/decrement",
      ),
  },
});
