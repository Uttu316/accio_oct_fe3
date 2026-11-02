import { useEffect, useState } from "react";
import ProductLoader from "./loader";
import ProductList from "./productsList";
import Filters from "./filters";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState("all");

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

  const handleRetry = () => {
    setStatus("loading");
    getProducts();
  };

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products !== null;
  const noProducts = isDone && products === null;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Products</h1>
      {isLoading && <ProductLoader />}
      {isError && (
        <div className={`${styles.state} ${styles.stateError}`}>
          <div className={styles.stateIcon}>⚠️</div>
          <p className={styles.stateTitle}>Something went wrong</p>
          <p className={styles.stateText}>
            We couldn't load the products right now. Please check your
            connection and try again.
          </p>
          <button className={styles.stateBtn} onClick={handleRetry}>
            Try Again
          </button>
        </div>
      )}
      {noProducts && (
        <div className={styles.state}>
          <div className={styles.stateIcon}>📦</div>
          <p className={styles.stateTitle}>No products available</p>
          <p className={styles.stateText}>
            There's nothing to show here yet. Check back again a little later.
          </p>
        </div>
      )}
      {hasProducts && (
        <div className={styles.content}>
          <Filters filter={filter} setFilter={setFilter} />
          <ProductList filter={filter} products={products} />
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
