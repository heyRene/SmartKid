import Link from "next/link";
import styles from "./SectionDocs.module.css";

export default function SectionDocs() {
  return (
    <section className={styles.docs} id="docs">
      <img
        className={styles.maskot}
        src="/images/maskot-hands-in-pockets.png"
        alt="Cartoon teacher with hands in her pockets."
      />
      {/* <img
        className={styles.star}
        src="/images/decorations/big-green-star.svg"
        alt=""
      /> */}
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          Сведения об образовательной организации
        </h2>
        <p className={styles.text}>
          Мы учим детей открытости и честности и сами действуем так же. Все наши
          официальные документы доступны по ссылке ниже.
        </p>

        <Link className={styles.link} href="/legal">
          <p className={styles.span}>Посмотреть документы</p>
          <svg
            className={styles.icon}
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 19.5001L20.1062 2.70007"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M21.4297 19.5V1.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M21.4352 1.5L1.5 1.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <img
        className={styles.purpleStar}
        src="/images/decorations/purple-star.svg"
      />
      <img
        className={styles.greenStar}
        src="/images/decorations/big-green-star.svg"
      />
    </section>
  );
}
