import React from "react";
import styles from "./work.card.module.css";
import Image from "next/image";
import { IWork } from "@/app/constants/work";

type WorkCardProps = {
  work: IWork;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div
      className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${styles.workCardParent}`}
      style={{
        backgroundImage: `url(${work.backgroundImage})`,
        height: 300,
      }}
    >
      <div className={styles.workCard}>
        <p className="text-lg text-center select-none">{work.description}</p>
        <br />
        <a
          target="_blank"
          href={work.link}
          className={`border-2 border-green-300 rounded-2xl p-2 pl-4 pr-4 hover:bg-green-300 hover:text-black ${styles.websiteBtn}`}
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
