import { Link } from "react-router";
import notFoundImage from "../../assets/notfound.svg";
import styles from "./notFound.module.css";
import PageWrapper from "../../components/pageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.card}>
          <img
            className={styles.image}
            src={notFoundImage}
            alt="Page not found"
          />
          <span className={styles.kicker}>Error 404</span>
          <h2 className={styles.title}>This page took a wrong turn</h2>
          <p className={styles.text}>
            The page you're looking for doesn't exist, moved, or is no longer
            available. Let's get you back to shopping.
          </p>
          <div className={styles.actions}>
            <Link className={styles.btnPrimary} to="/">
              Back to Home
            </Link>
            <Link className={styles.btnGhost} to="/products">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default NotFoundPage;
