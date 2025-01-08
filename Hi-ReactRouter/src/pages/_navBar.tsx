import clsx from "clsx";
import { NavLink, NavLinkRenderProps, Outlet, ScrollRestoration } from "react-router";

const NAVLINK_STYLE = (
  state: NavLinkRenderProps // className을 wrapping해서 특이하게 제공함. 그냥 css 쓰는게 나을수도 // 그냥 css 쓰면 .active, .pending, .transitioning 클래스를 부여해줌.
) =>
  clsx(" text-lg ", {
    " text-blue-500": state.isActive, // 페이지 도착
    " text-red-500": state.isPending, // 페이지 데이터 로딩중
    " text-green-500": state.isTransitioning, //페이지 전환 애니메이션중
  });

export default function NavBar() {
  return (
    <>
      <header className="flex gap-20 border p-4">
        <h1>Header</h1>
        <nav>
          <ul className="flex gap-10">
            <li>
              <NavLink to="/" className={NAVLINK_STYLE}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/post" className={NAVLINK_STYLE} end>
                Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet /> {/* Outlet대신 useOutlet을 쓸 수도 있음 -> 페이지 전환 애니메이션 넣을 떄 유용하다? */}
      <ScrollRestoration /> {/*하나 넣어놓으면 모든 스크롤의 flashing을 방지한다나*/}
    </>
  );
}

/* end를 붙이면 하위 URL에는 active 상태가 되지 않음
예시) /page1/child1 에는 active가 되지않으므로, 이 상태에서 Page1을 클릭해서 /page1로 이동가능.
*/

/* NavLink 개수가 많아지면 그냥 [{to, label}].map 으로 관리하는 방법도 있음. */
// NavLink에 `caseSensitive` 옵션도 있음. 경로의 대소문자 구분함.
/* isActive는 className 말고 children도 감싸고 있으니 활용하려면 하셈 */

// viewTransition 옵션은 아직 잘 모르겠음.
