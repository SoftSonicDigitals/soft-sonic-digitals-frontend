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
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
