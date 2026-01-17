"use client";

import { useMemo, useRef, useState } from "react";
import styles from "./SectionPrograms.module.css";
import Image from "next/image";
import CtaButton from "@/app/components/CtaButton/CtaButton";

type Item = {
  id: string;
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  description: string;
  meta: string;
};

type Props = {
  title?: string;
  items?: Item[];
  initialId?: string;
};

const PROGRAMS: Item[] = [
  {
    id: "english-for-kids",
    title: "Английский для дошкольников",
    image: {
      src: "/images/teacher-sitting-with-kids.png",
      alt: "Учитель играет с двумя маленькими детьми.",
    },
    description:
      "На занятиях для дошкольников дети с первых шагов привыкают к английской речи, погружаясь в языковую среду через игру и живое общение.",
    meta: "Занятия в мини группах два раза в неделю по 60 минут",
  },
  {
    id: "english-for-students",
    title: "Английский для школьников",
    image: {
      src: "/images/teacher-near-table-with-kids.png",
      alt: "Две девочки сидят за столом.",
    },
    description:
      "Мы обучаем школьников английскому по современным учебникам Cambridge, чтобы язык стал частью жизни, а не только подготовкой к экзамену.",
    meta: "Занятия в мини группах два раза в неделю по 60 минут",
  },
  {
    id: "crm",
    title: "Разговорный клуб с носителем",
    image: {
      src: "/images/kids-jumping-with-adults.png",
      alt: "Дети прыгают на футбольном поле с носителями английского.",
    },
    description:
      "Разговорный клуб с носителем языка - это живая практика, которая помогает детям преодолеть языковой барьер и почувствовать уверенность в общении.",
    meta: "Занятия в мини группах два раза в неделю по 60 минут",
  },
  {
    id: "english-for-exams",
    title: "Английский для экзаменов",
    image: {
      src: "/images/girls-talking-at-the-table.png",
      alt: "Скрин экрана код ревью",
    },
    description:
      "Подготовка к ОГЭ, ЕГЭ - это интенсивные занятия с нашими педагогами, где мы не только тренируем язык, но и разбираем все особенности форматов. Такой подход помогает выпускникам чувствовать уверенность и сдавать экзамены на высокий балл.",
    meta: "Занятия в мини группах два раза в неделю по 90 минут",
  },
  {
    id: "chineese-with-native",
    title: "Китайский язык с носителем",
    image: {
      src: "/images/girls-wrtiting-on-textbook.png",
      alt: "Превью поддержки",
    },

    description:
      "Знание китайского языка становится всё более востребованным. В нашей школе занятия проходят в мини-группах с преподавателем-носителем.",
    meta: "Занятия в мини группах два раза в неделю по 60 минут",
  },
  {
    id: "educational-trips",
    title: "Образовательные поездки",
    image: {
      src: "/images/kids-on-football-pitch.png",
      alt: "Превью поддержки",
    },

    description:
      "Образовательные поездки за границу - это уникальная возможность для детей использовать язык в реальной среде. Такие путешествия становятся не только практикой языка, но и источником ярких впечатлений и новых друзей.",
    meta: "",
  },
];

export function SectionPrograms({
  title = "Направления обучения",
  items = PROGRAMS,
  initialId,
}: Props) {
  const initialIndex = useMemo(() => {
    if (!initialId) return 0;
    const idx = items.findIndex((x) => x.id === initialId);
    return idx >= 0 ? idx : 0;
  }, [items, initialId]);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const SCROLL_OFFSET = 200;

  const handleSelect = (idx: number) => {
    setActiveItemIndex(idx);

    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 580px)").matches) return;

    requestAnimationFrame(() => {
      if (!contentRef.current) return;

      const elementTop =
        contentRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - SCROLL_OFFSET,
        behavior: "smooth",
      });
    });
  };

  const [activeItemIndex, setActiveItemIndex] = useState(initialIndex);
  const activeItem = items[activeItemIndex];
  return (
    <section className={styles.programs} aria-label={title} id="programs">
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.inner}>
        <div className={styles.content} ref={contentRef}>
          <div className={styles.image}>
            {activeItem.image?.src && (
              <Image
                className={styles.imageSrc}
                src={activeItem?.image?.src}
                alt={activeItem?.image?.alt}
                priority 
                height={300}
                width={300}
              />
            )}
          </div>

          <p className={styles.description}>{activeItem.description}</p>
          <p className={styles.meta}>{activeItem.meta}</p>

          <CtaButton />
        </div>

        <div className={styles.buttonsBlock}>
          <ul className={styles.list} role="tablist" aria-label="Список услуг">
            {items.map((item, idx) => {
              const isActiveItem = idx === activeItemIndex;

              return (
                <li key={item.id} className={styles.listItem}>
                  <button
                    type="button"
                    className={`${styles.listButton} ${
                      isActiveItem ? styles.listButton_active : ""
                    }`}
                    onClick={() => handleSelect(idx)}
                    role="tab"
                    aria-selected={isActiveItem}
                    aria-controls={`panel-${item.id}`}
                  >
                    <span className={styles.listText}>{item.title}</span>
                    <span className={styles.line} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <img className={styles.star} src="/images/decorations/purple-star.svg" />
    </section>
  );
}
