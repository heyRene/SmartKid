import CtaButton from "@/app/components/CtaButton/CtaButton";
import styles from "./SectionIntro.module.css";

export default function SectionIntro() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>SMART KID</h1>

      <p className={styles.span}>
        Стираем границы для новых возможностей
      </p>

      <h2 className={styles.subtitle}>Cовременная языковая школа для детей и подростков в городе Волжск</h2>

      <div className={styles.ctaBox}>
      <CtaButton/>
        <p className={styles.description}>
          Мы помогаем детям расти уверенными, любознательными и открытыми к миру.
        </p>
      </div>
      <img
          className={styles.image}
          src="/images/girl-with-flower.png"
          alt="A little girl with a flower."
        />
    </section>
  );
}
