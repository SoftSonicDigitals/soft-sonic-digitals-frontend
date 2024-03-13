"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TESTIMONIALS } from "@/prototypes/testimonials";
import React, { Component } from "react";
import Slider from "react-slick";
import { Testimony } from ".";

// Loop through each slick slide

const Testimonials = () => {
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
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="wrapper_container">
      <div className="slider-container">
        <Slider {...settings}>
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
    </div>
  );
};

export default Testimonials;
