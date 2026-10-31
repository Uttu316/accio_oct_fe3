import { useState } from "react";
import SaleBanner from "./salebanner";
import styles from "./bannerController.module.css";

const BannerController = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.controller}>
      <h2 className={styles.title}>Control Banner</h2>

      <button
        className={styles.toggle}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"} Banner
      </button>
      {isVisible && <SaleBanner />}
    </div>
  );
};
export default BannerController;
