import { useParams } from "react-router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import ProductLoader from "../../components/productDetails/prodcutloader";
import ProductDetails from "../../components/productDetails";
import styles from "../../components/productDetails/productDetails.module.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/" + productId);
      if (res.status >= 200 && res.status < 400) {
        const data = await res.json();
        // console.log(data);
        setProduct(data);
        setStatus("done");
        return;
      }
      throw res;
    } catch (e) {
      setStatus("error");
      console.error(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;
  return (
    <div>
      <Header title={"Product"} />
      {isLoading && <ProductLoader />}
      {isError && (
        <div className={styles.page}>
          <div
            className={`${styles.glass} ${styles.state} ${styles.stateError}`}
          >
            <div className={styles.stateIcon}>⚠️</div>
            <p className={styles.stateTitle}>Something went wrong</p>
            <p className={styles.stateText}>
              We couldn't load this product right now. Please check your
              connection and try again.
            </p>
          </div>
        </div>
      )}
      {noProduct && (
        <div className={styles.page}>
          <div className={`${styles.glass} ${styles.state}`}>
            <div className={styles.stateIcon}>🔍</div>
            <p className={styles.stateTitle}>Product not available</p>
            <p className={styles.stateText}>
              The product you're looking for doesn't exist or may have been
              removed.
            </p>
          </div>
        </div>
      )}
      {hasProduct && <ProductDetails product={product} />}
      <Footer />
    </div>
  );
};
export default ProductPage;
