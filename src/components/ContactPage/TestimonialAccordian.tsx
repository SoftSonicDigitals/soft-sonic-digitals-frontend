import { CONTACT_TESTIMONIALS } from "@/prototypes/contact_page";
import Image from "next/image";
import React from "react";

const testimonial = CONTACT_TESTIMONIALS[3];
const TestimonialAccordian = () => {
  return (
    <div className="flex flex-col gap-10  font-[500] tracking-wider text-gray-700 sm:px-16 md:px-12 ">
      <div className="text-center px-[10%] md:px-10">
        {testimonial.testimonial}
      </div>
      <div className="flex-center gap-6 px-14 md:px-8 lg:px-16">
        <div className="relative h-[64px] min-w-[64px]">
          <Image src={`/contact_page/profile-2.png`} alt="profile-img" fill />
        </div>
        <div className="">
          <p>{testimonial.title}</p>
          <p>{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAccordian;
