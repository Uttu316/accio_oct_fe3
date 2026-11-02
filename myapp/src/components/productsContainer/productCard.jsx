import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const {
    thumbnail,
    title,
    description,
    brand,
    category,
    price,
    discountPercentage,
    rating,
  } = product;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <span className={styles.discount}>-{discountPercentage}%</span>
        <img className={styles.thumb} src={thumbnail} alt={title} />
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <p className={styles.title}>{title}</p>
          <span className={styles.rating}>★ {rating}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {brand && <span className={styles.tag}>{brand}</span>}
          <span className={styles.tag}>{category}</span>
        </div>
        <div className={styles.priceRow}>
          <span className={styles.price}>${price}</span>
          <button className={styles.cartBtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
