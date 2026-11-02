import styles from "./productsContainer.module.css";

const SKELETONS = Array.from({ length: 8 });
const FILTER_WIDTHS = [56, 78, 104, 92, 84];

const ProductLoader = () => {
  return (
    <div>
      <div className={styles.skeletonFilters}>
        {FILTER_WIDTHS.map((width, index) => (
          <div
            key={index}
            className={styles.skeletonFilter}
            style={{ width }}
          />
        ))}
      </div>
      <div className={styles.skeletonGrid}>
        {SKELETONS.map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonBody}>
              <div
                className={`${styles.skeletonLine} ${styles.skeletonLineLg}`}
              />
              <div className={styles.skeletonLine} />
              <div
                className={`${styles.skeletonLine} ${styles.skeletonLineSm}`}
              />
              <div className={styles.skeletonFooter}>
                <div className={styles.skeletonPrice} />
                <div className={styles.skeletonBtn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLoader;
