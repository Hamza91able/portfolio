import React from "react";
import WorkCard from "./Components/WorkCard";
import { works } from "@/app/constants/work";

export default function Work() {
  return (
    <>
      <div className="relative isolate overflow-hidden lg:mt-40 mt-40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="headingDivider">My Recent Work</h2>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px- lg:px-8">
        <div className="grid md:grid-cols-3 grid-cols-1">
          {works.map((work, index) => (
            <div
              key={index}
              className="p-6 shadow border-r-0 border-l-0 border-t-0 border-b-0 bg-transparent outline-none shadow-none"
            >
              <WorkCard work={work} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}