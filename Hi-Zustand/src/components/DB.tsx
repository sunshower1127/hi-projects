import { useDBStore } from "../zustand/store";

export default function DB() {
  // const { data, query, mutation } = useStore(useShallow((state: DBState) => ({ ...state })));
  // const { data, query, mutation } = useStore(
  //   useShallow(({ data, query, mutation }: DBState) => ({ data, query, mutation }))
  // );
  const { data, mutation, query } = useDBStore();

  return (
    <div>
      <div>Data: {data}</div>
      <button onClick={() => query("가져온 데이터")}>Query</button>
      <button onClick={() => mutation("업데이트된 데이터")}>Mutation</button>
    </div>
  );
}
