import { Link } from "react-router";
import styles from "./productCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const {
    id,
    thumbnail,
    title,
    description,
    brand,
    category,
    price,
    discountPercentage,
    rating,
  } = product;

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const onAddCart = (e) => {
    e.preventDefault(); //stops the link to navigate
    addToCart(product);
  };

  const onRemoveCart = (e) => {
    e.preventDefault();
    removeFromCart(id);
  };

  const inCart = isInCart(id);
  return (
    <Link to={"/product/" + id} className={styles.cardlink}>
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
            {!inCart && (
              <button onClick={onAddCart} className={styles.cartBtn}>
                Add to Cart
              </button>
            )}
            {inCart && (
              <button onClick={onRemoveCart} className={styles.removeBtn}>
                Remove From Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
