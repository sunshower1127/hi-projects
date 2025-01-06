interface Parent {
  a: string;
  b: string;
}

interface Child {
  b: string;
}

// 중요한건 인터페이스만으로는 실제 key들을 배열로 추출할 수가 없음. 빈 오브젝트라도 있어야함.
const parent: Parent = { a: "a", b: "parent_b" };
const child: Child = { b: "child_b" };

console.log(Object.entries(parent));

const pickByKeys = <T>(parent: object, child: object) => {
  const childKeys = Object.keys(child);
  return Object.fromEntries(Object.entries(parent).filter(([key, _]) => childKeys.includes(key))) as T;
};

console.log(pickByKeys(parent, child));
