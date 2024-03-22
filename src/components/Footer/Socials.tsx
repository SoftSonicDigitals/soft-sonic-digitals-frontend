import { SOCIALS } from "@/prototypes/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="hidden md:flex  items-end flex-col gap-4 text-gray-700 font-[500]">
      <div className="flex gap-6 text-[15px]">
        {SOCIALS.social_platforms.map((social, index) => {
          const Icon = social.icon;
          return (
            <div key={index}>
              <Link href={social.link}>
                <Icon
                  className="text-3xl text-gray-800
            font-[500] hover:text-pink "
                />
              </Link>
            </div>
          );
        })}
      </div>
      <p> {SOCIALS.contactNumber}</p>
      <p> {SOCIALS.email}</p>
      <Image
        src={"/footer/member.webp"}
        alt={"member-logo"}
        width={165}
        height={78}
      />
    </div>
  );
};

export default Socials;
