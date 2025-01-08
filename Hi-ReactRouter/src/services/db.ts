import { delay } from "../utils/delay";

type Item = { title: string; content: string };

const db: Item[] = [
  {
    title: "포스트1",
    content: "World",
  },
  {
    title: "포스트2",
    content: "Hello",
  },
  {
    title: "포스트3",
    content: "Hello World",
  },
];

export async function getLength(delayms: number) {
  await delay(delayms);
  return db.length;
}

export async function readAll(delayms: number) {
  await delay(delayms);
  return db.map(({ title }) => ({ title }));
}

export async function read(id: number, delayms: number) {
  await delay(delayms);
  return db[id - 1];
}

export async function create(item: Item, delayms: number) {
  await delay(delayms);
  db.push(item);
}
