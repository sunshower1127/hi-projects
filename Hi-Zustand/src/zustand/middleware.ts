import { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { StoreState } from "./store";

export type MiddlewareOption = [
  ["zustand/devtools", never],
  ["zustand/persist", unknown], // 이거 unknown말고 다른걸로 바꾸니깐 난리남 바꿀이유 없으니 고민 ㄴㄴ
  ["zustand/immer", never]
];

export const middlewares = (f: StateCreator<StoreState, MiddlewareOption, []>) =>
  devtools(
    persist(immer(f), { name: "persist저장소이름" /*, storage: createJSONStorage(() => sessionStorage)*/ })
  );

/* 미들웨어 정리 (순서를 지켜서 넣어줘야함)
    1. devtools(반드시 첫번째) -> redux devtools 연결. action type을 지정해줄 수 있음.
    2. persist -> 영구적 storage에 상태를 저장할 수 있음. 직렬화(jsonify)될 수 있는 상태만 저장됨.(함수는 저장 X)
        실시간으로 연동되고,
        저장소 기본값 => localStorage
        storage: createJSONStorage(() => localStorage)
        세션 저장소는
        storage: createJSONStorage(() => sessionStorage)
        
        localStorage, sessionStorage 공통점 -> 새로고침해도 데이터 유지
        localStorage -> 컴퓨터에 저장됨 -> local에 저장됨. 탭끼리 데이터 공유, 영구적 보관.
        sessionStorage -> 탭에 저장됨 -> 세션에 저장됨. 탭마다 다른 데이터. 탭 닫으면 데이터 사라짐.
        
        IndexedDB나 커스텀 저장소는 { getItem, setItem, removeItem } 구현해주면됨. key, value 인자로 받아서 ㅇㅇ
        
        partilize: (state) => ({ count: state.count }) -> count만 저장하겠다. 이런식으로 저장할 state만 선택할 수 있음.
        
        뭐 다양한 기능이 존재하는데, 쓸모는 없을거 같아서 일단 여기까지만 정리함.
        
        
    3. immer(반드시 마지막) -> 불변성을 알아서 지켜줌(nested object에 유용함). (npm i immer 필요)
    
    나머지 안쓰는 미들웨어
    1. combine -> 타입 자동추론. 근데 타입을 만들어야 컴포넌트단에서 쓸 수 있음.
    2. subscribeWithSelector -> subscribe를 부분적으로(slice단위로) 할 수 있음. 근데 react엔 불필요함.
    */
