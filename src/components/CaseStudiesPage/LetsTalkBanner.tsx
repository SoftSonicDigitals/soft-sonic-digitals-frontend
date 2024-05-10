import React from "react";
import { GetInTouchContactBtn } from "../GetInTouch";
import { BANNER_MESSAGE } from "@/constants/case_studies_page";

const LetsTalkBanner = () => {
  return (
    <section className="bg-black ">
      <div className="wrapper_container py-16 mb-24 flex flex-col lg:flex-row items-center  justify-between px-8  gap-6">
        <p className="text-white text-lg md:text-2xl font-[500] tracking-wider text-center lg:text-left">
          {BANNER_MESSAGE}
        </p>
        <div>
          <GetInTouchContactBtn>LET&apso;S TALK </GetInTouchContactBtn>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkBanner;
