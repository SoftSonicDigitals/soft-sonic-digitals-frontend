"use client";
import React from "react";
import { B2C_ECOMMERCE_STATS } from "@/prototypes/b2c";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import B2CStatsTile from "./B2CStatsTile";
import Reveal from "../Animation/Reveal";

const B2CStatsContainer = () => {
  const ecommerceStatsArray = B2C_ECOMMERCE_STATS.map(
    ({ title, value }, index) => (
      <Reveal key={index} index={index}>
        <B2CStatsTile key={index} title={title} value={value} />
      </Reveal>
    )
  );

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
    <>
      <div className="  md:hidden grid grid-cols-2  gap-4 lg:gap-0 item-center justify-center md:mx-6 lg:mx-10 xl:mx-16">
        {ecommerceStatsArray}
      </div>

      <div className="hidden md:block md:mx-6 lg:mx-10 xl:mx-16">
        <Slider {...settings} className="hidden md:block">
          {ecommerceStatsArray}
        </Slider>
      </div>
    </>
  );
};

export default B2CStatsContainer;
