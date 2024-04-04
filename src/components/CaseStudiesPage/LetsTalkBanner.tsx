import React from "react";
import { GetInTouchContactBtn } from "../GetInTouch";

const LetsTalkBanner = () => {
  return (
    <section className="bg-black ">
      <div className="wrapper_container py-16 mb-24 flex flex-col lg:flex-row items-center  justify-between px-8  gap-6">
        <p className="text-white text-lg md:text-2xl font-[500] tracking-wider text-center lg:text-left">
          Have a project in mind? We’d love to make your ideas into reality.
        </p>
        <div>
          <GetInTouchContactBtn />
        </div>
      </div>
    </section>
  );
};

export default LetsTalkBanner;
