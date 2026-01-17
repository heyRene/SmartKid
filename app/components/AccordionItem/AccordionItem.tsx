"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./AccordionItem.module.css";

type DocLink = {
  label?: string;
  href: string;
};

type AccordionItemProps = {
  title: string;
  docs?: DocLink[];
  defaultOpen?: boolean;
};

export default function AccordionItem({
  title,
  docs = [],
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpenAccordion, setIsOpenAccordion] = useState(defaultOpen);
  const contentId = useId();

  const hasDocs = Array.isArray(docs) && docs.length > 0;

  return (
    <div className={`${styles.item} ${isOpenAccordion ? styles.item_opened : ""}`}>
      <button
        type="button"
        className={`${styles.header} ${isOpenAccordion ? styles.header_opened : ""}`}
        onClick={() => setIsOpenAccordion((v) => !v)}
        aria-expanded={isOpenAccordion}
        aria-controls={contentId}
      >
        <h2 className={`${styles.title} ${isOpenAccordion ? styles.title_opened : ""}`}>
          {title}
        </h2>
      </button>

      <div id={contentId} className={`${styles.body} ${isOpenAccordion ? styles.body_opened : ""}`}>
        {hasDocs && (
          <ul className={styles.list}>
            {docs.map((document, index) => (
              <li key={`${document.href}-${index}`} className={styles.document}>
                <Link className={styles.link} href={document.href} target="_blank">
                  <span className={styles.label}>
                    {document.label || "Открыть документ"}
                  </span>
                  <svg
                    className={styles.icon}
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.5 19.5001L20.1062 2.70007" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M21.4297 19.5V1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M21.4352 1.5L1.5 1.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
