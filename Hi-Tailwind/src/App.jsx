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
      <hr />
      <p className="font-sans font-thin">안녕 100</p>
      <p className="font-sans font-extralight">안녕 200</p>
      <p className="font-sans font-light">안녕 200</p>
      <p className="font-light">안녕 100</p>
      <p className="font-normal">안녕 200</p>
      <p className="font-medium">안녕 200</p>
      <p className="font-semibold">안녕 200</p>
      <p className="font-bold">안녕 200</p>
      <p className="font-extrabold">안녕 200</p>
      <p className="">안녕 200</p>
    </div>
  );
}
