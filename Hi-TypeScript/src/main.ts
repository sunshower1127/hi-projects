interface Parent {
  a: string;
  b: string;
}

interface Child {
  b: string;
}

const parent: Parent = { a: "a", b: "parent_b" };
const child: Child = { b: "child_b" };

const childKeys = Object.keys(child);

console.log(Object.entries(parent));
console.log(Object.fromEntries(Object.entries(parent).filter(([key, _]) => childKeys.includes(key))));
