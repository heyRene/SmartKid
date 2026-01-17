import styles from "./SectionPride.module.css";

export default function SectionPride() {
  return (
    <section className={styles.pride} id="pride">
      <div className={styles.grid}>
        <article
          className={`${styles.card} ${styles.oval} ${styles.pink} ${styles.cambridge}`}
        >
          <h3 className={styles.subtitle}> Cambridge</h3>
          <p className={styles.text}>
            Smart Kid — единственный официальный Cambridge Preparation Centre в
            Волжске.
          </p>
          <span className={styles.ring} />
        </article>

        <article
          className={`${styles.card} ${styles.oval} ${styles.green} ${styles.certs}`}
        >
          <h3 className={styles.subtitle}>Сертификаты</h3>
          <p className={styles.text}>
            Выпускники получают Cambridge English и TOEFL, подтверждая уровень
            владения языком.
          </p>
        </article>

        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Чем мы гордимся</h2>
        </div>

        <article
          className={`${styles.card} ${styles.rectangle} ${styles.pink} ${styles.trips}`}
        >
          <h3 className={styles.subtitle}>Поездки</h3>
          <p className={styles.text}>
            Каждый год мы организуем образовательные поездки за границу, где
            дети могут практиковать язык в живой среде.
          </p>
        </article>

        <article
          className={`${styles.card} ${styles.oval} ${styles.outline} ${styles.olymp}`}
        >
          <h3 className={styles.subtitle}>Олимпиады</h3>
          <p className={styles.text}>
            Наши ученики становятся призёрами международных олимпиад и
            конкурсов.
          </p>
          <span className={styles.ring} />
        </article>
      </div>
    </section>
  );
}
