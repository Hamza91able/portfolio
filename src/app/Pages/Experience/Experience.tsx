import React from "react";
import Tabs from "./Components/Tabs";

export default function Experience() {
  return (
    <>
      <div className="relative isolate overflow-hidden lg:mt-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="headingDivider">{"Where I've Worked"}</h2>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Tabs />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
