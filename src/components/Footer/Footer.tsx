import { FOOTER_LINKS, SOCIALS } from "@/prototypes/footer";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-24 flex items-center justify-between">
        <div className="grid grid-cols-5 gap-5">
          {FOOTER_LINKS.map((links, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="tracking-widest">{links.title}</p>
              <div className="flex flex-col gap-2 ">
                {links.links.map((link, index) => (
                  <div key={index} className="text-gray-700 font-[500] ">
                    <Link href={link.link} className="text-base">
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex items-end
         flex-col gap-4"
        >
          <div className="flex gap-6">
            {SOCIALS.social_platforms.map((social, index) => {
              const Icon = social.icon;
              return (
                <div key={index}>
                  <Link href={social.link}>
                    <Icon className="text-3xl text-gray-800" />
                  </Link>
                </div>
              );
            })}
          </div>
          <p> {SOCIALS.contactNumber}</p>
          <p> {SOCIALS.email}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
