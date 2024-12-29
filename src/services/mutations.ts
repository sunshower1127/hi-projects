import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTodo, deleteTodo, updateTodo } from "./api";

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: async () => {
      console.log("onSuccess");
      // 캐시 비우고 새로운 query
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {
      console.log("onError");
    },

    onSettled: () => {
      console.log("End of mutation");
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: async (_, variables) => {
      console.log("onSuccess");
      //   await queryClient.invalidateQueries({ queryKey: ["todos"] });
      await queryClient.invalidateQueries({
        queryKey: ["todos", { id: variables.id }],
      });
    },
    onError: () => {
      console.log("onError");
    },
    onSettled: () => {
      console.log("End of mutation");
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onMutate: () => {
      console.log("onMutate");
    },
    onSuccess: async () => {
      console.log("onSuccess");
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: () => {
      console.log("onError");
    },
    onSettled: () => {
      console.log("End of mutation");
    },
  });
}
