import { useCounterStore } from "../zustand/store";

export default function Counter() {
  // // 이게 같은 프로퍼티만 3번을 써야하니깐 좀 줄이고 싶어서 store에다가 막 이것저것 구현해서
  // const { count, increment, decrement } = useStore(
  //   useShallow(({ count, increment, decrement }) => ({ count, increment, decrement }))
  // );

  // 이렇게 줄여봤음. 근데 이거 구현하느라고 뼈빠짐. 잘한건지는 모르겠음. 이렇게.. 굳이.. 써야하나?
  const { count, increment, decrement } = useCounterStore();

  // // 그냥 하나씩 가져오는게 사실 권장사항임. 이렇게 하고. 이게 너무 복잡하다 싶으면 action만 묶는게 나음. state.actions에다가 함수 다 넣어서
  // const a = useStore((state: CounterState) => state.count);
  // const increment = useStore<CounterState>((state) => state.increment);
  // const decrement = useStore<CounterState>((state) => state.decrement);

  // // 얘는 전체 구독임. 이러면 리렌더링이 이곳저곳 퍼지니깐 slice가 딱 하나일때만 쓰셈.
  // const { count, increment, decrement } = useStore() as CounterState;

  // // 따로 equals 함수를 커스텀하고 싶다면 아래처럼
  // const { count, increment, decrement } = useStoreWithEqualityFn(
  //   Store,
  //   ({ count, increment, decrement }) => ({ count, increment, decrement }),
  //   shallow
  // );

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
