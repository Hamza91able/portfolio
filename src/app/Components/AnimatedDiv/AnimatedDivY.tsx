"use client";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

type AnimatedDivProps = {
  children: React.ReactNode;
  delay: number;
};

export default function AnimatedDivY({ children, delay }: AnimatedDivProps) {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay,
  });

  return <animated.div style={props}>{children}</animated.div>;
}
