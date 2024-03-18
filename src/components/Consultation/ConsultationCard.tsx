import Image from "next/image";
import Link from "next/link";
import React from "react";

type ConsultationCardType = {
  id: string;
  imageName: string;
  title: string;
  description: string;
};

const ConsultationCard = ({
  id,
  imageName,
  title,
  description,
}: ConsultationCardType) => {
  return (
    <div
      key={id}
      className=" flex-col gap-4    basis-full md:max-w-[325px] lg:max-w-[435px] 2xl:max-w-[375px] card_shadow  "
    >
      <div className="relative w-full max-w-3xl">
        <Image
          src={`/consultation/${imageName}`}
          alt={"team member"}
          width={700}
          height={705}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="px-5 md:px-8 pb-6 flex flex-col gap-6 card_bottom_shadow pt-8 text-gray-800">
        <h3 className="text-lg sm:text-xl md:text-2xl font-[700] text-gray-800 tracking-wide">
          {title}
        </h3>
        <p className="tracking-wider mb-2 font-[500]">{description}</p>

        <button
          type="button"
          className="rounded border-2 px-8 py-2 border-gray-800 tracking-wider  font-[700]"
        >
          <Link href={"/contact"}>{"LET'S TALK"}</Link>
        </button>
      </div>
    </div>
  );
};

export default ConsultationCard;
