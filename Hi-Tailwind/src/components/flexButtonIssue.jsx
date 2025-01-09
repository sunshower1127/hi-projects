export default function FlexButtonIssue() {
  return (
    <div className="flex flex-col gap-10">
      <button className="flex-none">Hi</button>
      <button className="flex-1">Hi</button>
      <button className="flex-auto">Hi</button>
      <button>Hi</button>
    </div>
  );
}
