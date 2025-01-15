import CounterExample from "@/components/counter-example";
import RandomImageViewer from "@/components/random-image-viewer";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterExample />
      <button onClick={() => setCount((prev) => prev + 1)}>
        ↻(5초에 한번씩 이미지 교체 가능)
      </button>

      <RandomImageViewer key={count} />
    </>
  );
}
