import { StateCreator } from "zustand";
import { MiddlewareOption } from "./middleware";
import { StoreState } from "./store";

const initialState = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

// 왜 이따구로 타입을 지정하나요?
// 어.. Slice째로 가져오기를 구현하려면 이렇게 해야함. initialState의 key가 필요하거든요

export type CounterState = typeof initialState;

// // 아니면 그냥 이렇게 하면 됨. Default
// type CounterState = { count: number; increment: () => void; decrement: () => void };

// 첫번째 제너릭이 전체 상태. StoreState. -> set으로 받는 상태의 타입이기도 하다.
// 두번째 제너릭이 middleware 목록
// 세번째 제네릭은 상태 확장 -> 쓸 일은 없어보인다.
// 4번째 제너릭이 createSlice 안에 들어가는 애들 자동완성 (첫번쨰 제네릭과 같다면 생략가능) -> CounterState
const createSlice: StateCreator<StoreState, MiddlewareOption, [], CounterState> = (set) => ({
  ...initialState,

  increment: () =>
    // 2번째 인자는 replace. default=false고, 상태를 모두 포함하지않아도 됨.
    // 3번째 인자는 action type (devtools용)
    set((state) => ({ count: state.count + 1 }), undefined, "counter/increment"),

  // Immer 사용
  decrement: () =>
    //           안전하게 쓰려면
    set((state: CounterState) => {
      state.count--;
    }),
});

export default {
  createSlice,
  keys: Object.keys(initialState),
};
