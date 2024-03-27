import { CONTACT_TESTIMONIALS } from "@/prototypes/contact_page";
import Image from "next/image";
import React from "react";

const testimonial = CONTACT_TESTIMONIALS[0];
const TestimonialAccordian = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 px-16 ">
        <div className="text-center">{testimonial.testimonial}</div>
        <div className="flex">
          <div>
            <Image
              src={`/contact_page/profile-1.png`}
              alt="profile-img"
              height={64}
              width={64}
            />
          </div>
          <div>
            <p>{testimonial.title}</p>
            <p>{testimonial.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAccordian;
