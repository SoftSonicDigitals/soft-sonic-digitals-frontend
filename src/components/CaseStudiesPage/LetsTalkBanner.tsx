import React from "react";
import { PrimaryButton } from "../Reusable";
import { LetsTalkContactButton } from ".";

const LetsTalkBanner = () => {
  return (
    <section className="bg-black ">
      <div className="wrapper_container py-16 mb-24 flex justify-between px-8">
        <p className="text-white text-2xl font-[500] tracking-wider">
          Have a project in mind? We’d love to make your ideas into reality.
        </p>
        <div>
          <LetsTalkContactButton />
        </div>
      </div>
    </section>
  );
};

export default LetsTalkBanner;
