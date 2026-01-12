import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>SMART KID</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="https://www.instagram.com/renaaataata?igsh=ZXFsZXljNzI4NzZj&utm_source=qr" target="_blank" rel="noopener noreferrer">
              @smartkid_by_elenasedova
              
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="mailto:smartkidl@yandex.ru">
              smartkidl@yandex.ru
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="tel:++79613758798">
              +7 961 375-87-98
            </a>
          </li>
          <li className={styles.item}>
            <span className={styles.text}>г. Волжск</span>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;