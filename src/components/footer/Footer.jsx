import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        Alvaro creative thought agency - All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
