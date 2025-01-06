/* eslint-disable @typescript-eslint/no-unused-vars */
import { StateCreator } from "zustand";
import { MiddlewareOption } from "./middleware";
import { StoreState } from "./store";

const initialState = {
  data: "초기 데이터",
  query: async (_key: string) => {},
  mutation: async (_key: string) => {},
};

export type DBState = typeof initialState;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createSlice: StateCreator<StoreState, MiddlewareOption, [], DBState> = (set, get) => ({
  ...initialState,

  query: async (key) => {
    // async 함수 그냥 넣으면 됨
    try {
      await delay(3000);
      console.log("데이터 가져오기 성공!");
      // // Immer 사용전
      // set({ data: key });
      // Immer 사용후(둘 다 쓸 수 있긴 하다.)
      set((state) => {
        state.data = key;
      });
    } catch (e) {
      console.log("데이터 가져오기 실패");
    }
  },

  mutation: async (key) => {
    try {
      await delay(3000);
      console.log(key);
      console.log("데이터 변경 성공! 이후 최신 데이터 가져오기");
      get().query(key);
    } catch (e) {
      console.log("데이터 변경 실패");
    }
  },
});

export default {
  createSlice,
  keys: Object.keys(initialState),
};
