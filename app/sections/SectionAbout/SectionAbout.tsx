import styles from "./SectionAbout.module.css";

export default function SectionAbout() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        {/* <div className={styles.content}> */}
        <p className={styles.span}>
          Наша задача - не только дать знания, но и создать атмосферу, где
          хочется пробовать новое, общаться и радоваться своим успехам.
        </p>
        <h2 className={styles.title}>
          Мы школа, где дети учат английский и китайский через игру и
          удовольствие от процесса.
        </h2>
        {/* </div> */}
        <div className={styles.image}>
          <img
            className={styles.imageSrc}
            src="/images/teacher-with-book.png"
            alt="Cartoon teacher with a book and a little girl."
          />
        </div>
      </div>

    </section>
  );
}
