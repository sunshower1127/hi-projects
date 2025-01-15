import { useStore } from "@/store/store";

export default function CounterExample() {
  const count = useStore((state) => state.count);
  const { increment, decrement } = useStore((state) => state.counterActions);

  return (
    <div>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      <button className="mr-2 w-6" onClick={increment}>
        +
      </button>
      <button className="w-6" onClick={decrement}>
        -
      </button>
    </div>
  );
}
