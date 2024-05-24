"use client";
import React from "react";
import { B2C_ECOMMERCE_STATS } from "@/prototypes/b2c";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const B2CStatsContainer = () => {
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
        {B2C_ECOMMERCE_STATS.map(({ title, value }) => (
          <div
            key={title}
            className="flex flex-col justify-center items-center "
          >
            <div className="flex flex-center">
              <h2 className="text-4xl  sm:text-[2.8rem] font-[500] text-gray-800">
                {value}
              </h2>
              <div className="text-6xl lg:text-5xl  xl:text-7xl font-[400] text-red ">
                +
              </div>
            </div>
            <div className="text-xs sm:text-lg lg:text-[1.2rem] xl:text-[1.5rem] font-[600] text-gray-800 text-center">
              {title}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block md:mx-6 lg:mx-10 xl:mx-16">
        <Slider {...settings} className="hidden md:block">
          {B2C_ECOMMERCE_STATS.map(({ title, value }) => (
            <div
              key={title}
              className="flex flex-col justify-center items-center px-2 "
            >
              <div className="flex flex-center">
                <h2 className="text-4xl  sm:text-[2.8rem] font-[500] text-gray-800">
                  {value}
                </h2>
                <div className="text-6xl lg:text-5xl  xl:text-7xl font-[400] text-red ">
                  +
                </div>
              </div>
              <div className=" sm:text-base font-[600] text-gray-400 text-center mt-2">
                {title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default B2CStatsContainer;
