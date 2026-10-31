import { useEffect, useState } from "react";
import styles from "./bannerController.module.css";

const SaleBanner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //setup function

    console.log("Mounted");

    return () => {
      //cleanup function
      console.log("Unmounting");
      //this function will trigger after the unmounting of component
    };

    //dependecy array is empty, the setup function will invoke only once after mounting
  }, []);

  useEffect(() => {
    console.log("Count value changes", count);
    //value changes in dependecy array will trigger the setup

    return () => {
      console.log("Value removed", count);
    };
  }, [count]);

  return (
    <div className={styles.banner}>
      <h2 className={styles.bannerTitle}>Sale is Live</h2>
      <h3 className={styles.bannerDiscount}>{count}% off Discount</h3>
      <button className={styles.bannerBtn} onClick={() => setCount(count + 5)}>
        Update discount
      </button>
    </div>
  );
};
export default SaleBanner;
