import { useState } from "react";
import { useProjects } from "../services/queries";

export default function Projects() {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    useProjects(page);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
      <span>Current page: {page}</span>
      <button
        onClick={() => {
          setPage((prev) => Math.max(prev - 1, 1));
        }}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        disabled={isPlaceholderData}
      >
        Next Page
      </button>
      {isFetching && <div>Fetching...</div>}
    </div>
  );
}
