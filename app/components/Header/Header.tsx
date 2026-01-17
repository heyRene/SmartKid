"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/#intro">
            <img className={styles.logo} src="/smartkid-logo.svg" />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link className={styles.link} href="/#about">
                  О школе
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/#programs">
                  Направления
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/#achievements">
                  Особенности
                </Link>
              </li>
              <li className={styles.item}>
                <Link className={styles.link} href="/#pride">
                  Гордимся
                </Link>
              </li>
              <li className={styles.item}>
                <Link
                  className={`${styles.link} ${
                    pathname === "/legal" ? styles.link_active : ""
                  }`}
                  href="/legal"
                >
                  Документы
                </Link>
              </li>
            </ul>
            <BurgerMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
