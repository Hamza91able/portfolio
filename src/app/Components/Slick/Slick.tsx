"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./slick.module.css";

type SlickProps = {
  children: React.ReactNode;
};

export default function Slick({ children }: SlickProps) {
  return (
    <Slider
      dots={true}
      infinite={false}
      arrows={false}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      customPaging={() => <label className={style.paging}></label>}
    >
      {children}
    </Slider>
  );
}
