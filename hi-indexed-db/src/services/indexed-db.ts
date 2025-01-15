import { DBSchema, openDB } from "idb";

interface MyDB extends DBSchema {
  "favourite-number": {
    key: string;
    value: number;
  };
  products: {
    value: {
      name: string;
      price: number;
      productCode: string;
    };
    key: string;
    indexes: { "by-price": number };
  };
}

async function demo() {
  const db = await openDB<MyDB>("my-db", 1, {
    upgrade(db) {
      db.createObjectStore("favourite-number");

      const productStore = db.createObjectStore("products", {
        keyPath: "productCode",
      });
      productStore.createIndex("by-price", "price");
    },
  });

  // This works
  await db.put("favourite-number", 7, "Jen");
  // This fails at compile time, as the 'favourite-number' store expects a number.
  //   await db.put("favourite-number", "Twelve", "Jake");
}
