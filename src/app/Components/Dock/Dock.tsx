"use client";
import * as React from "react";

import { Card } from "./Components/Card";
import { Dock } from "./Components/Dock";
import { DockCard } from "./Components/DockCard";

const IMAGES = [
  {
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/datguyhamza/",
  },
  {
    src: "/github.png",
    link: "https://github.com/Hamza91able",
  },
  {
    src: "/gmail.png",
    link: "mailto:m.hamzakhan91able@gmail.com",
  },
];

export default function DockContainer() {
  return (
    <Dock>
      {IMAGES.map((src, index) => (
        <div
          key={index}
          onClick={() =>
            setTimeout(() => window.open(src.link, "_blank"), 1500)
          }
        >
          <DockCard>
            <Card src={src.src} />
          </DockCard>
        </div>
      ))}
    </Dock>
  );
}
