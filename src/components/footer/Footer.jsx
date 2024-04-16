import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>jompy31</div>
      <div className={styles.text}>
        Jean Pierre Barnett Caruzo © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
