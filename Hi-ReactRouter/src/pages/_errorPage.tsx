import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError() as { message?: string; status?: number };
  return (
    <div className="text-red-500">
      Error:"{error?.message}" / Status: "{error?.status}"
    </div>
  );
}
