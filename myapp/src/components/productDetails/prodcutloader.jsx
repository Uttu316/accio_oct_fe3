import styles from "./productDetails.module.css";

const ProductLoader = () => {
  return (
    <div className={styles.page}>
      <div className={styles.skeletonLayout}>
        {/* Gallery */}
        <div>
          <div className={styles.skMainImage} />
          <div className={styles.skThumbs}>
            <div className={styles.skThumb} />
            <div className={styles.skThumb} />
            <div className={styles.skThumb} />
          </div>
        </div>

        {/* Content */}
        <div className={styles.skContent}>
          <div className={styles.skTitle} />
          <div className={`${styles.skLine} ${styles.skShort}`} />
          <div className={styles.skLine} />
          <div className={styles.skLine} />
          <div className={`${styles.skLine} ${styles.skShort}`} />
          <div className={styles.skPrice} />
          <div className={styles.skActions}>
            <div className={styles.skBtn} />
            <div className={styles.skBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoader;
