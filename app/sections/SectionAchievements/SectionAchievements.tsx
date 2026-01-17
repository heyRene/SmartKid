"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./SectionAchievements.module.css";

type StackCard = {
  title: string;
  description: string;
};
const STACK: StackCard[] = [
  {
    title: "Учимся в общении",
    description:
      "Мы используем коммуникативную методику — дети учат язык в живых ситуациях, а не по сухим правилам.",
  },
  {
    title: "Атмосфера поддержки",
    description:
      "На уроках спокойно и комфортно  ребёнку легко открываться и чувствовать уверенность.",
  },
  {
    title: "Опытные педагоги и носители языка",
    description:
      "В нашей команде 8 квалифицированных преподавателей, а также носители английского и китайского.",
  },
  {
    title: "Прозрачность для родителей",
    description:
      "Через мобильное приложение можно видеть прогресс ребёнка и быть в курсе всего, что происходит.",
  },
];

export default function SectionAchievements() {
  return (
    <section
      className={styles.achievements}
      aria-label="Что делает занятия особенными"
      id="achievements"
    >
      <h2 className={styles.title}>Что делает занятия особенными</h2>

      <Swiper
        className={styles.swiper}
        modules={[Pagination, Navigation, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
        }}
        breakpoints={{
          581: { slidesPerView: "auto" },
        }}
      >
        <button className={styles.next} type="button" aria-label="Previous">
          <svg
            viewBox="0 0 121 37"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className={styles.arrowLeft}
          >
            <path
              d="M119.837 20.3174C120.821 19.3489 120.834 17.766 119.865 16.782L104.082 0.74613C103.114 -0.237907 101.531 -0.250494 100.547 0.718028C99.563 1.68655 99.5504 3.26941 100.519 4.25345L114.548 18.5076L100.294 32.5368C99.3101 33.5054 99.2975 35.0882 100.266 36.0723C101.235 37.0563 102.817 37.0689 103.801 36.1004L119.837 20.3174ZM0.0195312 17.5972L-0.000340488 20.0971L118.064 21.0356L118.084 18.5357L118.104 16.0357L0.039403 15.0972L0.0195312 17.5972Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className={styles.prev} type="button" aria-label="Next">
          <svg
            viewBox="0 0 121 37"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            className={styles.arrowIcon}
          >
            <path
              d="M0.744722 16.5009C-0.239321 17.4695 -0.251901 19.0523 0.716617 20.0364L16.4996 36.0722C17.4681 37.0563 19.0509 37.0689 20.035 36.1003C21.019 35.1318 21.0316 33.549 20.0631 32.5649L6.0338 18.3108L20.2879 4.28153C21.2719 3.313 21.2845 1.73015 20.316 0.746103C19.3475 -0.237934 17.7646 -0.250514 16.7806 0.718004L0.744722 16.5009ZM120.562 19.2212L120.582 16.7213L2.51825 15.7828L2.49838 18.2827L2.47851 20.7826L120.543 21.7211L120.562 19.2212Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {STACK.map((item) => (
          <SwiperSlide key={item.title} className={styles.slide}>
            <article className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.head}>
                  <h3 className={styles.subtitle}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <img className={styles.star} src="/images/decorations/purple-star.svg" />
    </section>
  );
}
