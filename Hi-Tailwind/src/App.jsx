import { HomeIcon } from "@heroicons/react/24/outline";
import MyListbox from "./components/MyListbox";
import FlexButtonIssue from "./components/flexButtonIssue";

export default function App() {
  return (
    <div className="flex flex-col items-center gap-10 w-[66.66vw] h-screen bg-white">
      <HomeIcon className="w-12" />
      <h1 className="text-4xl font-bold text-center">Hi, Tailwind!</h1>
      <MyListbox />
      <hr />
      <FlexButtonIssue />
    </div>
  );
}
