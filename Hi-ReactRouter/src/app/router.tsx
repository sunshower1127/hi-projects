import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../pages/_errorPage";
import NavBar from "../pages/_navBar";
import NotFound from "../pages/_notFound";
import Home from "../pages/home";
import Post, { loader as postLoader } from "../pages/post";
import Posts, { action as postsAction, loader as postsLoader } from "../pages/posts";

const router = createBrowserRouter(
  [
    {
      path: "/", // root는 index 사용 불가
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "post",
          children: [
            {
              index: true,
              element: <Posts />,
              loader: postsLoader,
              action: postsAction,
              errorElement: <ErrorPage />,
              // lazy: () => import("../pages/posts"), // lazy loading인데 레퍼런스가 많이 없음. react.lazy는 알겠는데 흠..
            },
            { path: ":id", element: <Post />, loader: postLoader },
          ],
        },
      ],
    },
    { path: "*", element: <NotFound /> }, // *은 뒤에 경로 싹다 캡쳐해서 params["*"]로 넘김.
  ],
  {
    basename: "", // 루트 경로를 설정할 수 있음. /app 같은거. 보통 production할때 basename={process.env.PUBLIC_URL} 하기도 함.
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}

//

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<NavBar />}>
//           <Route index element={<Home />} />
//           <Route path="page1">
//             <Route index element={<Page1 />} />
//             <Route path=":id" element={<PathParam />} />
//           </Route>
//         </Route>
//         <Route path="*" element={<NotFound />} />{" "}
//       </Routes>
//     </BrowserRouter>
//   );
// }
/* 놀랍게도 createBrowserRoute를 안쓰면 몇몇 기능들을 쓸 수 없다. (ScrollRestoration, useNavigation...) */
// 구조가 이게 더 나은거 같은데 어째서..

/* index는 path=""와 1대1 대응이 아님. 리프 라우트에만 쓸 수 있음. 부모 라우트 주소를 그대로 따라가겠다는 거임.

---

이게 Route 안에 Route 넣을떄 부모 Route에는 레이아웃(안에 Outlet 있는거)만 들어갈 수 있음

/page1 에선 Page1을 보여주고, /page1/123 에선 Dynamic을 보여주려면

잘못된 예시 ->
<Route path="page1" element={<Page1 />}>
  <Route path=":id" element={<Dynamic />} />
</Route>

맞는 예시 -> 
<Route path="page1">
  <Route index element={<Page1 />} />
  <Route path=":id" element={<Dynamic />} />
</Route>

---

param 나오는건 무조건 마지막에 배치해야됨. 안그러면 덮어쓰기됨.

 */
