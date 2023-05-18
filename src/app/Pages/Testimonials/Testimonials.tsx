"use client";
import React, { useState } from "react";
import TestimonialCard from "./Components/TestimonialCard";
import { testimonials } from "@/app/constants/testimonials";
import Slick from "@/app/Components/Slick/Slick";

export default function Testimonials() {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div
        className="relative isolate overflow-hidden lg:mt-40 mt-40"
        id="testimonials"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="headingDivider">Testimonials</h2>
        </div>
      </div>
      <p className="text-center text-lg">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        People I've worked with have said some nice things...
      </p>
      <div className="mx-auto max-w-6xl px- lg:px-8 mt-12">
        <Slick>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard testimonial={testimonial} key={index} />
            </div>
          ))}
        </Slick>
      </div>
    </>
  );
}
