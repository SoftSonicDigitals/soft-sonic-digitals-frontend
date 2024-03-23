import { FOOTER_LINKS } from "@/prototypes/footer";
import React from "react";
import { FooterLinks, Socials } from ".";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-24 flex  justify-around lg:gap-10  max-w-[1270px]">
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <FooterLinks key={index} title={title} links={links} />
          ))}
        </div>

        <div className="flex flex-col md:hidden w-full">
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <div key={index}>
              <div className="flex items-center justify-between border-y-[1px] last:border-b-[1px] border-gray-200 px-4 py-2.5">
                <p className="text-sm capitalize">{title}</p>
                <FaPlus className="text-xs text-gray-700" />
              </div>
              <div className="flex flex-col gap-2.5 px-4 py-2.5">
                {links.map(({ title, link }, index) => (
                  <Link
                    href={link}
                    key={index}
                    className="text-gray-700 font-[500] text-sm tracking-wide "
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
