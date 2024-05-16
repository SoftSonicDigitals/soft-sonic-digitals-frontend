"use client";

import {
  ECOMMERCE_FRAMEWORK_HEADING,
  INDUSTRY_ECOMMERCE_FRAMEWORKS,
} from "@/constants/industry";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryStyledHeadings } from "../Reusable";

const EcommerceFrameworks = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section id="ecommerce_frameworks">
      <div className="wrapper_container mb-24 ">
        <PrimaryStyledHeadings
          mainHeading={ECOMMERCE_FRAMEWORK_HEADING}
          containerStyles="mb-24"
          mainHeadingStyles="text-center"
        />
        <div className=" xl:mx-20">
          <Slider {...settings}>
            {INDUSTRY_ECOMMERCE_FRAMEWORKS.map(({ name, logo }, index) => (
              <div
                key={index}
                className="flex flex-col item-center justify-center"
              >
                <div className="flex-center">
                  <Image
                    src={logo}
                    alt={`${name}-logo`}
                    width={80}
                    height={80}
                  />
                </div>
                <p className="text-lg font-[500] mt-5 text-center">{name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default EcommerceFrameworks;
