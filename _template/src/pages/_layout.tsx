import { NavLink, Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
