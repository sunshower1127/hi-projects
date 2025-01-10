import { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { StoreState } from "./store";

export type Middlewares = [
  ["zustand/devtools", never],
  ["zustand/persist", unknown],
  ["zustand/immer", never],
];

// persist ON -> localStorage에 상태 저장중
export const middlewares = (f: StateCreator<StoreState, Middlewares, []>) =>
  devtools(
    persist(immer(f), {
      name: "counter",
      partialize: (state) => ({ count: state.count }), // action은 persist에 저장하면 먹통됨.
    }),
  );
