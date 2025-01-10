import { Suspense } from "react";
import {
  ActionFunctionArgs,
  Await,
  Form,
  Link,
  useActionData,
  useBeforeUnload,
  useBlocker,
  useLoaderData,
  useNavigate,
  useNavigation,
  useRevalidator,
} from "react-router";
import PostLink from "../components/postLink";
import { create, getLength, readAll } from "../services/db";

export async function loader() {
  try {
    const length = await getLength(1000); // 데이터를 가져온 후 렌더링
    const titles = readAll(3000); // 데이터 가져오는 중에 렌더링
    return { length, titles };
  } catch (error) {
    throw { status: 500, message: "데이터를 불러오는데 실패했습니다." };
  } // 에러 처리는 프로덕션 레벨에서 필수다. fetch에서 다양한 에러는 나중에 거기서 정리하도록 함.
}

export async function action({ params, request, context }: ActionFunctionArgs) {
  console.log(params);
  console.log(context);
  const formData = await request.formData();
  const { title, content } = Object.fromEntries(formData.entries()) as Record<string, string>;
  console.log(`title: ${title}, content: ${content}`);
  await create({ title, content }, 2000);
  // return redirect(""); 가 생략된 꼴임. 무조건 redirect 됨. 안넣어도 ㅇㅇ
  // 만약 redirect를 막고 싶다면 fetcher.Form 을 쓰면 됨.
  // 다른 경로로 redirect를 할건지, 여기서 값을 리턴해서 useActionData로 받을건지는 선택의 문제임.
  return { message: `"${title}" 작성 완료` };
}

export default function Posts() {
  const navigate = useNavigate();
  const navigation = useNavigation(); // state로 현재 라우터 상태 판단가능. 또 form 데이터에 접근 가능함 이걸로 -> 근데 쓸거면 useActionData 쓰는게 더 나음
  const { length, titles } = useLoaderData<typeof loader>(); // 약간 useEffect 분리시키는 느낌임
  //                                        ^ loader의 반환값 타입을 가져옴
  const back = () => navigate(-1);
  const data = useActionData<typeof action>();
  // const forward = () => navigate(1);

  // const submit = useSubmit(); // form submit을 버튼이 아니라 함수로 하려면 이거 쓰면 됨. 사용예시 잘 적혀있음.

  // const fetcher = useFetcher(); // action으로 form을 보내는게 아니라 그냥 컴포넌트 안에서 처리함. -> redirect 방지
  // 다른 라우터의 loader, action을 호출해서 데이터만 가져올 수 있다는 점에서 강력한 함수임.

  const blocker = useBlocker(true);
  // 페이지 이동(Link, navigate, 뒤로가기등..)을 하려고 하면 block.state가 blocked 상태가 되면서 멈춤. (새로고침은 허용)
  // 이때 blocker.proceed()를 호출하면 그제서야 이동함. reset은 다시 unblocked 상태로 되돌리고 이동 취소.
  // 사용자의 최종 확인 메시지라던가, form 작성하다말고 이동하려할때 쓰면 유용할듯.

  useBeforeUnload((e) => {
    // 새로고침이나 URL 수정 방지. 브라우저에서 알아서 경고메시지를 띄워줌.
    e.preventDefault(); // 왜 preventDefault를 덩그러니 쓰면 잘 작동되는지는 모르겠지만 잘됨.
  }); //  useBlocker하고 같이 쓰면 완벽하게 유저의 이동을 막을 수 있음.

  // const asyncValue = useAsyncValue();
  // const asyncError = useAsyncError(); 얘네는 <Await>의 children 컴포넌트에서 사용하는 훅임. 함수로 값을 받는게 아니라 use로 받는거.

  const revalidator = useRevalidator(); // 새로고침임. loader만 따로 호출해줌. navigation에 영향을 주지않음 -> blocker 안통함
  // 자기만의 로딩 상태가 있음 -> revalidator.state

  return (
    <main>
      <button className="border m-3" onClick={revalidator.revalidate}>
        새로고침(revalidate)
      </button>
      <button className="border" onClick={() => navigate(".", { replace: true })}>
        새로고침(nativigate('.'))
      </button>
      <p>{`Revalidator.State: ${revalidator.state}`}</p>
      <p>{`State: ${navigation.state}`}</p>
      <p>{`Data: ${data?.message}`}</p>
      <p>{`useBlocker: ${blocker.state}`}</p>

      <div>
        <button className="border mr-2" onClick={blocker.proceed}>
          blocker.proceed
        </button>
      </div>
      <div>
        <button className="border" onClick={blocker.reset}>
          blocker.reset
        </button>
      </div>
      <Link to="1">Go to Post1</Link>
      {/* Link로 이동 */}
      <br />
      <button onClick={() => navigate("1")}>Go to Post1 with navigate()</button>
      <button onClick={back}>Back</button>
      <br />
      <Form method="post" action="" className=" grid grid-cols-8 border-4">
        <h2 className="col-span-8">새 글 쓰기</h2>
        <label htmlFor="title">Title</label>
        <input className="col-span-7 border" type="text" name="title" id="title" />
        <label htmlFor="content">Content</label>
        <input className="col-span-7 border" type="text" name="content" id="content" />
        <button className="col-span-8 border-2" type="submit">
          Submit
        </button>
      </Form>
      <br />
      <section className="flex flex-col gap-5">
        <Suspense
          fallback={Array.from({ length }).map((_, i) => (
            <PostLink to="스켈레톤임" key={i}></PostLink> // 개수만 알아내서 스켈레톤 넣기
          ))}
        >
          <Await resolve={titles}>
            {(titles) =>
              titles.map(({ title }, index) => (
                <PostLink to={`${index + 1}`} key={title}>
                  {title}
                </PostLink>
              ))
            }
          </Await>
        </Suspense>
      </section>
    </main>
  );
}

/* https://developer.mozilla.org/en-US/docs/Web/API/History
history API
1. back, forward 지원
2. state 지원
3. scroll restoration 지원
 */

/* Link, navigate 옵션
  - to: string | { pathname, search, hash } // 이동할 경로. query를 집어넣을 수 있다.
  - replace: boolean // history 스택에 쌓지 않고 교체 -> 뒤로가기 불가
  - state: any // 상태 데이터 전달 -> useLocation() 으로 사용 가능. query로는 쓰기 껄끄러운것들?
  - relative: "route" | "path" // 상대 경로 기준
  - preventScrollReset: boolean // 스크롤 위치 유지
  - reloadDocument: boolean // 전체 페이지 새로고침

relative가 헷갈릴 수 있는데,
- route:default -> 라우터 단위로 이동함. 즉, URL과는 상관없음
- path -> URL 기준으로 이동함. 직관적이긴함.

예시:
만약 현재 라우터가 `/page1/123` 이고 부모 라우터는 `/` 이며, to=".." 이라면
- relative="route" -> `/`
- relative="path" -> `/page1`

*/
