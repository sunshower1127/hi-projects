import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodosIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
}

export function useTodos(ids?: (number | undefined)[]) {
  return useQueries({
    queries: (ids ?? [])?.map((id) => ({
      queryKey: ["todos", id],
      queryFn: () => getTodo(id!),
    })),
  });
}
