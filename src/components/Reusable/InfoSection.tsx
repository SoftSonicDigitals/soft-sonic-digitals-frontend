import Image from "next/image";
import React from "react";
type InfoSectionProps = {
  heading: string;
  subHeading: string;
  description: string;
  imgpath: string;
  listArray?: string[];
  reverseLayout?: boolean;
};
const InfoSection = ({
  heading,
  subHeading,
  description,
  imgpath,
  listArray,
  reverseLayout = false,
}: InfoSectionProps) => {
  return (
    <section>
      <div className="wrapper_container mb-24">
        <div
          className={`flex-center flex-col-reverse ${
            !reverseLayout ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 px-2 `}
        >
          <div className="basis-full  max-w-[700px] ">
            <h1
              className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center md:text-left`}
            >
              {heading}
            </h1>

            <h3
              className={`text-xl md:text-2xl lg:text-xl  font-[500] text-gray-900 text-center md:text-left  tracking-wider`}
            >
              {subHeading}
            </h3>
            <br />
            <p
              className={`text-[1rem] md:text-lg lg:text-xl font-[500] text-gray-800  md:text-left  tracking-wider text-center `}
            >
              {description}
            </p>
            {listArray && (
              <ul className="mt-4">
                {listArray.map((listItem, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-4"
                  >
                    <Image
                      src={"/industry/tick-mark-icon.png"}
                      alt="tick-mark"
                      height={24}
                      width={24}
                    />
                    <p
                      className={`text-[1rem] md:text-lg lg:text-xl font-[500] text-gray-800  md:text-left  tracking-wider  `}
                    >
                      {listItem}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="basis-full">
            <Image src={`${imgpath}`} alt="assets" width={678} height={538} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
