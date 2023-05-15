import React from "react";
import TestimonialCard from "./Components/TestimonialCard";

export default function Testimonials() {
  return (
    <>
      <div className="relative isolate overflow-hidden lg:mt-40 mt-40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="headingDivider">Testimonials</h2>
        </div>
      </div>
      <p className="text-center text-lg">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        People I've worked with have said some nice things...
      </p>
      <div
        className="mx-auto max-w-6xl px- lg:px-8 mt-12"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TestimonialCard />
      </div>
    </>
  );
}
