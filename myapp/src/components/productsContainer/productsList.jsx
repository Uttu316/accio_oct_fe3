import ProductCard from "./productCard";
import styles from "./productsContainer.module.css";

const ProductList = ({ products, filter }) => {
  const productsToShow =
    filter === "all" ? products : products.filter((i) => i.category === filter);

  return (
    <div className={styles.grid}>
      {productsToShow.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
