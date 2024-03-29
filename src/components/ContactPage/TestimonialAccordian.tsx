"use client";
import { CONTACT_TESTIMONIALS } from "@/prototypes/contact_page";
import { TestimonialCard } from ".";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialAccordian = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 360,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
  };
  return (
    <div className="slider-container max-w-[360px] mx-auto 2xl:max-w-fit ">
      <Slider {...settings}>
        {CONTACT_TESTIMONIALS.map(
          ({ title, profile, name, testimonial }, index) => (
            <TestimonialCard
              key={index}
              title={title}
              profile={profile}
              name={name}
              testimonial={testimonial}
            />
          )
        )}
      </Slider>
    </div>
  );
};

export default TestimonialAccordian;
