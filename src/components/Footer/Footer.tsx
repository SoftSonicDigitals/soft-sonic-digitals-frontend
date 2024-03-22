import { FOOTER_LINKS, SOCIALS } from "@/prototypes/footer";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-24 flex  justify-around lg:gap-10  max-w-[1270px]">
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
          {FOOTER_LINKS.map((links, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="tracking-widest text-lg lg:text-base font-[500]">
                {links.title}
              </p>
              <div className="flex flex-col gap-2 ">
                {links.links.map((link, index) => (
                  <div
                    key={index}
                    className="text-gray-700 font-[500] text-[15px] tracking-wide "
                  >
                    <Link href={link.link}>{link.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="hidden md:flex items-end
         flex-col gap-4
         text-gray-700 font-[500]"
        >
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
      </div>
    </footer>
  );
};

export default Footer;
