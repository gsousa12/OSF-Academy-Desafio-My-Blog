import styles from "./Footer.module.css";

function Footer({ name }) {
  return (
    <div className={styles.footerContainer}>
        <hr />
      <p className={styles.footerText}>Footer Myblog.com</p>
    </div>
  );
}

export default Footer;
