import { FOOTER_LINKS, SOCIALS } from "@/prototypes/footer";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-24 flex items-center justify-between gap-10 px-16">
        <div className="grid grid-cols-5 gap-5">
          {FOOTER_LINKS.map((links, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="tracking-widest">{links.title}</p>
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
          className="flex items-end
         flex-col gap-4
         text-gray-700 font-[500]"
        >
          <div className="flex gap-6">
            {SOCIALS.social_platforms.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={index}>
                  <Link href={social.link}>
                    <Icon
                      className="text-3xl text-gray-800
                    font-[500] "
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="text-[15px]"> {SOCIALS.contactNumber}</p>
          <p className="text-[15px]"> {SOCIALS.email}</p>
          <div>
            <Image
              src={"/footer/member.webp"}
              alt={"member-logo"}
              width={165}
              height={78}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
