import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <p>
            COZA <span>STORE</span><a href=""></a>
          </p>
        </div>
        <nav className={styles.navBox}>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Features</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={styles.headerIcon}>
            <a href=""><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></a>
            <a href=""><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></a>
            <a href=""><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> </a>

        </div>
      </div>
    </div>
  );
};

export default Header;
