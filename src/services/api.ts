import axios from "axios";
import { Todo } from "../types/todo";

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
