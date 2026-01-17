"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BurgerMenu.module.css";

const nav = [
  { label: "О школе", href: "/#about" },
  { label: "Направления", href: "/#programs" },
  { label: "Особенности", href: "/#achievements" },
  { label: "Гордимся", href: "/#pride" },
  { label: "Документы", href: "/legal" },
];

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <button
        className={`${styles.burger} ${isOpen ? styles.burger_opened : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label="Открыть меню"
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      <nav className={`${styles.menu} ${isOpen ? styles.menu_opened : ""}`}>
        <ul className={styles.list}>
          {nav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    isActive ? styles.link_active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
