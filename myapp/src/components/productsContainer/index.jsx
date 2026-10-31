import { useEffect, useState } from "react";
import ProductLoader from "./loader";

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  const [status, setStatus] = useState("loading");

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products !== null;
  const noProducts = isDone && products === null;
  return (
    <div>
      <h1>Latest Products</h1>
      {isLoading && <ProductLoader />}
      {isError && <p>Something went Wrong</p>}
      {noProducts && <p>No Product Avaialable</p>}
      {hasProducts && (
        <div>
          {products.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
