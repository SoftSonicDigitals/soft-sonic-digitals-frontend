import Image from "next/image";
import React from "react";

const InfoSection = () => {
  return (
    <section>
      <div className="wrapper_container mb-24">
        <div className="flex-center gap-12 ">
          <div className="basis-full ">
            <h1 className={` text-2xl md:text-[2.1rem] font-[500] mb-8 `}>
              Digital Asset Management
            </h1>

            <p
              className={` text-[1rem] md:text-[19px] font-[500] text-gray-800 `}
            >
              DAM is a centralized platform for jewelry design asset sharing,
              version control, and task assignment. It enables smooth
              communication, enhances collaboration, and improves overall
              workflow management. It can effortlessly conduct global jewelry
              design collaboration support and co-marketing campaigns for
              multiple stakeholders, such as designers, photographers,
              marketers, and customers. It will help to reduce offline marketing
              material wastage.
              <br />
              <br />
              Efficient design inventory management is essential to accurately
              track and categorize jewelry and diamond assets. Media asset
              management tools help businesses organize design inventory, track
              stock levels, find specific items, and maintain a consistent brand
              image. It saves time and reduces errors associated with manual
              inventory management processes.
            </p>
          </div>
          <div className="basis-full">
            <Image
              src={"/industry/info1.png"}
              alt="assets"
              width={678}
              height={538}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
