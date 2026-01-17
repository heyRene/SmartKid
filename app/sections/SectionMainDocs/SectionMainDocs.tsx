import AccordionItem from "@/app/components/AccordionItem/AccordionItem";
import { mainDocuments } from "@/app/data/mainDocuments";
import { npaDocuments } from "@/app/data/npaDocuments";

import styles from "./SectionMainDocs.module.css";

export default function SectionMainDocs() {
  return (
    <section className={styles.legal}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Сведения об образовательной организации
        </h1>
        <p className={styles.description}>
          На этой странице размещены официальные документы школы, подтверждающие
          нашу деятельность и соответствие требованиям законодательства.
        </p>
      </div>
      <h3 className={styles.subtitle}>Основные документы</h3>
      <div className={styles.accordion}>
        {mainDocuments.map((item) => (
          <AccordionItem key={item.title} title={item.title} docs={item.docs} />
        ))}
      </div>
      <h3 className={styles.subtitle}>
        Подписанные нормативно-правовые акты (НПА)
      </h3>
      <div className={styles.accordion}>
        {npaDocuments.map((item) => (
          <AccordionItem key={item.title} title={item.title} docs={item.docs} />
        ))}
      </div>
      <img
        className={styles.maskot}
        src="/images/teacher-with-paper.png"
        alt="Cartoon teacher with papers."
      />
      <img className={styles.purpleStar} src="/images/decorations/purple-star.svg" />
      <img
        className={styles.greenStar}
        src="/images/decorations/big-green-star.svg"
      />
    </section>
  );
}
