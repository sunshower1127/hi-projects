import React from "react";
import { useProduct, useProducts } from "../services/queries";

export default function Products() {
  const [selectedProductId, setSelectedProductId] = React.useState<
    number | null
  >(null);
  const productsQuery = useProducts();
  const productQuery = useProduct(selectedProductId);

  return (
    <>
      {productsQuery.data?.pages.map((group, index) => (
        <React.Fragment key={index}>
          {group.map((product) => (
            <React.Fragment key={product.id}>
              <button onClick={() => setSelectedProductId(product.id)}>
                {product.name}
              </button>
              <br />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
      <br />
      <div>
        <button
          onClick={() => productsQuery.fetchNextPage()}
          disabled={
            !productsQuery.hasNextPage || productsQuery.isFetchingNextPage
          }
        >
          {productsQuery.isFetchingNextPage
            ? "Loading more..."
            : productsQuery.hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>Selected product:</div>
      {JSON.stringify(productQuery.data)}
    </>
  );
}
