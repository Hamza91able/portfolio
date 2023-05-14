"use client";
import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

import styles from "./work.card.v2.module.css";
import { IWork } from "@/app/constants/work";

type WorkCardProps = {
  work: IWork;
};

export default function WorkCardV2({ work }: WorkCardProps) {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <div onClick={() => set((state) => !state)}>
        <a.div
          className={styles.c}
          style={{
            opacity: !flipped ? opacity.to((o) => 1 - o) : opacity,
            transform,
            rotateX: flipped ? "180deg" : "unset",
            background: !flipped
              ? `url(${work.backgroundImage})`
              : "rgb(55 65 81 / 1)",
            border: flipped ? "1px solid rgb(55 65 81 / 1)" : "unset",
            borderRadius: 20,
          }}
          data-tooltip-target="tooltip-work-info"
        >
          {flipped && (
            <div className={styles.workCard}>
              <p className="text-lg text-center select-none">
                {work.description}
              </p>
              <br />
              {work.link && (
                <a
                  target="_blank"
                  href={work.link}
                  className={`border-2 border-green-300 rounded-2xl p-2 pl-4 pr-4 hover:bg-green-300 hover:text-black ${styles.websiteBtn}`}
                >
                  Visit Website
                </a>
              )}
            </div>
          )}
        </a.div>
      </div>
    </>
  );
}
