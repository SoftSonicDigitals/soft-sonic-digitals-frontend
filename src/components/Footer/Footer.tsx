import { FOOTER_LINKS } from "@/prototypes/footer";
import React from "react";
import { FooterLinks, Socials } from ".";

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
            <p
              key={index}
              className=" px-4 py-2.5 border-t-[1px] last:border-b-[1px] border-gray-200 text-sm capitalize"
            >
              {title}
            </p>
          ))}
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
