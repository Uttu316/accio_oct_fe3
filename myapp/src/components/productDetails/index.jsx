import { useContext, useState } from "react";
import styles from "./productDetails.module.css";
import { CartContext } from "../../contexts/CartContext";

const ProductDetails = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    sku,
    weight,
    dimensions,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    minimumOrderQuantity,
    tags,
    images = [],
    thumbnail,
    reviews = [],
  } = product;

  const gallery = images.length ? images : [thumbnail];
  const oldPrice = (price / (1 - discountPercentage / 100)).toFixed(2);
  const fullStars = Math.round(rating);

  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const inCart = isInCart(id);
  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        {/* ---------- Left: Gallery ---------- */}
        <div className={styles.gallery}>
          <div className={`${styles.glass} ${styles.mainImageWrap}`}>
            <img
              className={styles.mainImage}
              src={gallery[currentImage]}
              alt={title}
            />
          </div>
          <div className={styles.thumbs}>
            {gallery.map((img, index) => (
              <img
                key={index}
                className={`${styles.thumb} ${
                  index === 0 ? styles.thumbActive : ""
                }`}
                onClick={() => setCurrentImage(index)}
                src={img}
                alt={`${title} view ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Right: Content ---------- */}
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.brandTag}>{brand || category}</span>
            <span className={styles.stockTag}>
              {availabilityStatus} · {stock} left
            </span>
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.ratingRow}>
            <span className={styles.stars}>
              {"★".repeat(fullStars)}
              {"☆".repeat(5 - fullStars)}
            </span>
            <span className={styles.ratingText}>
              {rating} · {reviews.length} reviews
            </span>
          </div>

          <p className={styles.description}>{description}</p>

          <div className={styles.priceBlock}>
            <span className={styles.price}>${price}</span>
            <span className={styles.oldPrice}>${oldPrice}</span>
            <span className={styles.discountBadge}>-{discountPercentage}%</span>
          </div>
          <p className={styles.taxNote}>Inclusive of all taxes</p>

          <div className={styles.highlights}>
            <div className={`${styles.glass} ${styles.highlight}`}>
              <div className={styles.highlightIcon}>🚚</div>
              <div className={styles.highlightLabel}>Shipping</div>
              <div className={styles.highlightSub}>{shippingInformation}</div>
            </div>
            <div className={`${styles.glass} ${styles.highlight}`}>
              <div className={styles.highlightIcon}>🛡️</div>
              <div className={styles.highlightLabel}>Warranty</div>
              <div className={styles.highlightSub}>{warrantyInformation}</div>
            </div>
            <div className={`${styles.glass} ${styles.highlight}`}>
              <div className={styles.highlightIcon}>🔁</div>
              <div className={styles.highlightLabel}>Returns</div>
              <div className={styles.highlightSub}>{returnPolicy}</div>
            </div>
          </div>

          <p className={styles.minOrder}>
            Minimum order quantity: {minimumOrderQuantity} units
          </p>

          <div className={styles.actions}>
            <button className={styles.buyBtn}>Buy Now</button>
            {!inCart && (
              <button
                onClick={() => addToCart(product)}
                className={styles.cartBtn}
              >
                Add to Cart
              </button>
            )}
            {inCart && (
              <button
                onClick={() => removeFromCart(id)}
                className={styles.removeBtn}
              >
                Remove From Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Specifications ---------- */}
      <div className={`${styles.glass} ${styles.specs}`}>
        <h2 className={styles.specsTitle}>Product Details</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Brand</span>
            <span className={styles.specValue}>{brand || "—"}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Category</span>
            <span className={styles.specValue}>{category}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>SKU</span>
            <span className={styles.specValue}>{sku}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Weight</span>
            <span className={styles.specValue}>{weight} g</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Dimensions</span>
            <span className={styles.specValue}>
              {dimensions
                ? `${dimensions.width} × ${dimensions.height} × ${dimensions.depth} cm`
                : "—"}
            </span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Stock</span>
            <span className={styles.specValue}>{stock} units</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Tags</span>
            <span className={styles.specValue}>
              {tags && tags.length ? tags.join(", ") : "—"}
            </span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Availability</span>
            <span className={styles.specValue}>{availabilityStatus}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Return Policy</span>
            <span className={styles.specValue}>{returnPolicy}</span>
          </div>
        </div>
      </div>

      {/* ---------- Reviews ---------- */}
      <div className={`${styles.glass} ${styles.reviews}`}>
        <div className={styles.reviewsHead}>
          <h2 className={styles.reviewsTitle}>Customer Reviews</h2>
          <span className={styles.reviewsCount}>
            {rating} out of 5 · {reviews.length} reviews
          </span>
        </div>
        {reviews.length ? (
          <div className={styles.reviewList}>
            {reviews.map((r, index) => (
              <div key={index} className={styles.review}>
                <div className={styles.reviewTop}>
                  <div className={styles.reviewer}>
                    <div className={styles.reviewerAvatar}>
                      {r.reviewerName ? r.reviewerName.charAt(0) : "?"}
                    </div>
                    <div>
                      <div className={styles.reviewerName}>
                        {r.reviewerName}
                      </div>
                      <div className={styles.reviewDate}>
                        {new Date(r.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <span className={styles.reviewStars}>
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </span>
                </div>
                <p className={styles.reviewComment}>{r.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyReviews}>
            No reviews yet. Be the first to share your thoughts.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
