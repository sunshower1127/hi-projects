import { memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from "../services/mutations";
import { useTodos, useTodosIds } from "../services/queries";

const Todos = memo(function Todos() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  const handleMarkAsDone = (data?: Todo) => {
    if (!data) return;
    updateTodoMutation.mutate({ ...data, checked: true });
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodoMutation.mutate(id);
    // async 버전도 있음.
    // await deleteTodoMutation.mutateAsync(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New todo:</h4>
        <label>Title:</label>
        <input type="text" {...register("title")} />
        <br />
        <label>Description:</label>
        <input type="text" {...register("description")} />
        <br />
        <button type="submit" disabled={createTodoMutation.isPending}>
          Create
        </button>
      </form>
      {/* 
      {todosIdsQuery.data?.map((id) => (
        <p key={id}>id: {id}</p>
      ))} */}

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div>Id: {data?.id}</div>
            <span>
              <strong>Title:</strong> {data?.title},{" "}
              <strong>Description:</strong> {data?.description}
            </span>
            <div>
              <button
                onClick={() => handleMarkAsDone(data)}
                disabled={data?.checked}
              >
                {data?.checked ? "Done" : "Mark as done"}
              </button>
              <button
                onClick={() => data?.id && handleDeleteTodo(data.id)}
                disabled={deleteTodoMutation.isPending}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Todos;
