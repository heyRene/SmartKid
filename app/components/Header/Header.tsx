import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
        <img className={styles.logo} src="/smartkid-logo.svg"/>
        <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} href='/#about'>
              О школе
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href='/#programs'>
              Направления
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href='/#features'>
              Особенности
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href='/#achievements'>
              Гордимся
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href='/legal'>
              Документы
            </Link>
          </li>
        </ul>
        </nav>
    </header>
  )
}

export default Header;