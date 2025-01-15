import RootLayout from "@/pages/_layout";
import NotFound from "@/pages/_not-found";
import Home from "@/pages/home";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
