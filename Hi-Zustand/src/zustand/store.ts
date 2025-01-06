import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import counter, { CounterState } from "./counter";
import db, { DBState } from "./db";
import { middlewares } from "./middleware";

export type StoreState = CounterState & DBState;

export const useStore = create<StoreState>()(
  middlewares((...a) => ({
    ...counter.createSlice(...a),
    ...db.createSlice(...a),
  }))
);

// key를 통해 필요한 상태만 추출
const pick = (obj: object, keys: string[]) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));

// 더이상 간단하게 못만듦. 이게 최선임. useStore하고 useShallow를 분리시킬 수가 없음 -> hook은 분리불가.
// 이렇게 하면 Slice 비슷하게 흉내낼 수 있음.
// 근데 그냥 하나씩 가져오는게 권장임. 쩝. 괜히 Slice단위로 가져오겠다고 initialState바꾸고 아래 이짓도 하고 useShallow도 쓰고.. 에휴..
// 암튼 선택적 구독에는 useShallow 사용 -> 안쓰면 에러남
// 왜냐면 useStore의 인자 안에 오브젝트를 넣으면 이게 상태가 변했는지 체크할때
// 계속 false를 리턴해서 제대로 작동을 안함.
// useShallow는 그리고 얕은 비교가 재귀적으로는 안됨. 그래서 nested object는 안됨.
// 함수는 문제없음. 중첩된 객체만 안됨.
export const useCounterStore = () => useStore(useShallow((state) => pick(state, counter.keys) as CounterState));
export const useDBStore = () => useStore(useShallow((state) => pick(state, db.keys) as DBState));
