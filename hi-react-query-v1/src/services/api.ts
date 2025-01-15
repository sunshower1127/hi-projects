import axios from "axios";

const BASE_URL = "http://localhost:8080";
const axiosInst = axios.create({
  baseURL: BASE_URL,
});

export async function getTodosIds() {
  const res = await axiosInst.get<Todo[]>("todos");
  return res.data.map((todo) => todo.id);
}

export async function getTodo(id: number) {
  const res = await axiosInst.get<Todo>(`todos/${id}`);
  return res.data;
}

export const createTodo = async (data: Todo) => {
  await axiosInst.post("todos", data);
};

export const updateTodo = async (data: Todo) => {
  await axiosInst.put(`todos/${data.id}`, data);
};

export const deleteTodo = async (id: number) => {
  await axiosInst.delete(`todos/${id}`);
};

export const getProjects = async (page: number) => {
  const res = await axiosInst.get<Project[]>(`projects?_page=${page}&_limit=3`);
  return res.data;
};

export const getProducts = async ({ pageParam }: { pageParam: number }) => {
  return (
    await axiosInst.get<Product[]>(`products?_page=${pageParam + 1}&_limit=3`)
  ).data;
};

export const getProduct = async (id: number) => {
  return (await axiosInst.get<Product>(`products/${id}`)).data;
};
