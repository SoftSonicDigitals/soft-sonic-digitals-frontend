import Image from "next/image";
import React from "react";

type LocationCardType = {
  locationImage: string;
  location: string;
  contactNumber: string;
};
const LocationCard = ({
  locationImage,
  location,
  contactNumber,
}: LocationCardType) => {
  return (
    <div className="flex justify-start items-center gap-8 ">
      <Image
        src={`/get_in_touch/${locationImage}`}
        alt={`${location}-img`}
        width={88}
        height={88}
      />
      <div className="text-white flex item-start justify-center flex-col tracking-wide font-[700] gap-2 ">
        <p>{contactNumber}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default LocationCard;
