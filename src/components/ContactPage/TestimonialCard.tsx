import Image from "next/image";
import React from "react";
type TestimonialCardType = {
  testimonial: string;
  title: string;
  name: string;
  profile: string;
};
const TestimonialCard = ({
  testimonial,
  title,
  name,
  profile,
}: TestimonialCardType) => {
  return (
    <div className="flex flex-col gap-10  font-[500] tracking-wider text-gray-700 sm:px-8 md:px-4   ">
      <div className="text-center px-[10%] sm:px-0 md:px-10 lg:px-6 2xl:px-16">
        {testimonial}
      </div>
      <div className="flex-center gap-6 px-12 sm:px-4 md:px-10 lg:px-10 2xl:px-[20%] 3xl:px-28">
        <div className="relative h-[64px] min-w-[64px]">
          <Image src={`/contact_page/${profile}`} alt="profile-img" fill />
        </div>
        <div>
          <p>{title}</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
