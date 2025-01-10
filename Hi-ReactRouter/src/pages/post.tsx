import { LoaderFunctionArgs, useLoaderData, useParams, useSearchParams } from "react-router";
import { read } from "../services/db";

export async function loader({ params, request, context }: LoaderFunctionArgs) {
  //                           ^ useParams 대신 여기서 받아와야함. 컴포넌트 안이 아니라 훅은 못씀.

  console.log(request); // 이건 다른 곳에서 action으로 넘겨주거나 외부에서 post로 넘겨주거나 한 것들 받아 쓸 수 있음. header + body
  console.log(context); // undefined네.. auth에서 사용?
  const data = await read(+params.id!, 1000);
  return { ...data };
  // return redirect(); 하는 경우도 있음. -> 로그인페이지로 강제 이동 시키기 할때라던지.
}

export default function Post() {
  const { title, content } = useLoaderData<typeof loader>();
  // const data = useRouteLoaderData("root"); // 여기서 Home 컴포넌트에 id: root 달고 이렇게 가져올 수도 있음.
  const [queries, setQuries] = useSearchParams();
  const queryData = Object.fromEntries(queries.entries()) as { query1: string }; // object로 쓰기
  const { id } = useParams(); // 여기서 타입 체크로 안정성 챙기려면 tanstack-router가 맞음.
  return (
    <main>
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <p>Content: {content}</p>
      <h2>Query: {queryData.query1}</h2>
      <button className="border-2" onClick={() => setQuries((prev) => ({ ...prev, query1: "123" }))}>
        {/* 실시간으로 URL 바뀜 */}
        Set Query to 123
      </button>
    </main>
  );
}
