"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TESTIMONIALS } from "@/prototypes/testimonials";
import React, { MutableRefObject, useRef } from "react";
import Slider from "react-slick";
import { SliderArrow, Testimony } from ".";

const Testimonials = () => {
  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    // bug for typescript

    (sliderRef as any).slickNext();
  };
  const previous = () => {
    // bug for typescript
    (sliderRef as any).slickPrev();
  };

  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="wrapper_container mb-24">
      <div className="slider-container">
        <Slider
          {...settings}
          ref={(slider) => {
            // Typenot working properly FIX needed For the component
            sliderRef = slider as unknown as MutableRefObject<Slider | null>;
          }}
        >
          {TESTIMONIALS.map(({ id, name, position, thumbnail, videoKey }) => (
            <Testimony
              key={id}
              id={id}
              name={name}
              position={position}
              thumbnail={thumbnail}
              videoKey={videoKey}
            />
          ))}
        </Slider>
      </div>
      <div className="flex-center gap-5">
        <SliderArrow onClick={previous} direction="left" />
        <SliderArrow onClick={next} direction="right" />
      </div>
    </div>
  );
};

export default Testimonials;
