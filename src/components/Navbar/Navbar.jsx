import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar}>
        <div className={styles.navLogoContent}>
          <img src={logo} alt="logo" className={styles.Logo} />
          <h2>DAO KING</h2>
        </div>
        <div className={styles.navButtons}>
          <div className={`${styles.websiteButton} ${styles.navButton}`}>
            WEBSITE
          </div>
          <div className={`${styles.connectButton} ${styles.navButton}`}>
            CONNECT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
