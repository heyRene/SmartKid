import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
<div className={styles.marquee}>
  <div className={styles.track}>
    <h1 className={styles.title}>SMART KID&nbsp;</h1>
    <h1 className={styles.title}>SMART KID&nbsp;</h1>
  </div>
</div>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.item_instagram}`}>
          <a
            className={styles.link}
            href="https://www.instagram.com/smartkid_by_elenasedova/?igsh=ZmFwaDgwODdseTVu"
            target="_blank"
            rel="noopener noreferrer"
          >
            @smartkid_by_elenasedova
          </a>
        </li>
        <li className={`${styles.item} ${styles.item_email}`}>
          <a className={styles.link} href="mailto:smartkidl@yandex.ru">
            smartkidl@yandex.ru
          </a>
        </li>
        <li className={`${styles.item} ${styles.item_phone}`}>
          <a className={styles.link} href="tel:++79613758798">
            +7 961 375-87-98
          </a>
        </li>
        <li className={`${styles.item} ${styles.item_city}`}>
          <span className={styles.text}>г. Волжск</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
