import React from "react";
import styles from "./FirstSection.module.scss";

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstTextBox}>
        <h3>Men New-Season</h3>
        <h1>Jackets & Coats</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default FirstSection;
