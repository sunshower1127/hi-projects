import { create } from "zustand";
import { CounterState, createSlice as createCounterSlice } from "./counter";
import { middlewares } from "./middleware";

export type StoreState = CounterState;

export const useStore = create<StoreState>()(
  middlewares((...args) => ({
    ...createCounterSlice(...args),
  })),
);
