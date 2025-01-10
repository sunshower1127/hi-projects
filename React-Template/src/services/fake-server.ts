import ky from "ky";

interface PostHeader {
  title: string;
}

interface Post {
  title: string;
  content: string;
}

interface SearchParams {
  delay?: number;
  error?: number; // staus code
  message?: string; // error message
}

const api = ky.create({ prefixUrl: "http://localhost:3030" });

export async function fetchAllPost(queries: SearchParams = {}) {
  return await api
    .get<
      PostHeader[]
    >("posts", { searchParams: queries as Record<string, string | number> })
    .json();
}

export async function fetchPost(id: number, queries: SearchParams = {}) {
  return await api
    .get<Post>(`posts/${id}`, {
      searchParams: queries as Record<string, string | number>,
    })
    .json();
}

export async function createPost(post: Post, queries: SearchParams = {}) {
  return await api
    .post("posts", {
      json: post,
      searchParams: queries as Record<string, string | number>,
    })
    .json();
}

export async function updatePost(
  id: number,
  post: Post,
  queries: SearchParams = {},
) {
  return await api
    .put(`posts/${id}`, {
      json: post,
      searchParams: queries as Record<string, string | number>,
    })
    .json();
}

export async function deletePost(id: number, queries: SearchParams = {}) {
  return await api
    .delete(`posts/${id}`, {
      searchParams: queries as Record<string, string | number>,
    })
    .json();
}

export async function fetchRandomImage(queries: SearchParams = {}) {
  return await api
    .get("random_image", {
      searchParams: queries as Record<string, string | number>,
    })
    .blob();
}
