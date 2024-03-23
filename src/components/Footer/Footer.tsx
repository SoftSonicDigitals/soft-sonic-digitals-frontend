import { FOOTER_LINKS } from "@/prototypes/footer";
import React from "react";
import { FooterLinks, FooterMobileLayout, Socials } from ".";
import { Copyright } from "../Copyrights";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-20 flex  flex-col md:flex-row md:justify-around lg:gap-10  max-w-[1270px]">
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <FooterLinks key={index} title={title} links={links} />
          ))}
        </div>
        <FooterMobileLayout />
        <Socials />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
