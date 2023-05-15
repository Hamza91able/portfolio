"use client";
import React from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";

import styles from "./scroll.module.scss";

const X_LINES = 40;

const INITIAL_WIDTH = 20;

type ScrollProps = {
  children: React.ReactNode;
};

export default function Scroll({ children }: ScrollProps) {
  const containerRef = React.useRef<HTMLDivElement>(null!);
  const barContainerRef = React.useRef<HTMLDivElement>(null!);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div ref={containerRef} className={styles.body}>
      <div className={`${styles.animated__layers} hidden md:block`}>
        <animated.div ref={barContainerRef} className={styles.bar__container}>
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className={styles.bar}
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = (i + 1) / X_LINES;

                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) **
                        32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className={styles.bar__container__inverted}>
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className={styles.bar}
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;

                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) **
                        32
                  );
                }),
              }}
            />
          ))}
        </animated.div>
      </div>
      {children}
    </div>
  );
}
