import React from "react";
import { BANNER_MESSAGE } from "@/constants/case_studies_page";
import Reveal from "../Animation/Reveal";
import { GetInTouchContactBtn } from "../Home/GetInTouch";

const LetsTalkBanner = () => {
  return (
    <section className="bg-black ">
      <Reveal>
        <div className="wrapper_container py-16 mb-24 flex flex-col lg:flex-row items-center  justify-between px-8  gap-6">
          <p className="text-white text-lg md:text-2xl font-[500] tracking-wider text-center lg:text-left">
            {BANNER_MESSAGE}
          </p>
          <div>
            <GetInTouchContactBtn>LET&apos;S TALK </GetInTouchContactBtn>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default LetsTalkBanner;
