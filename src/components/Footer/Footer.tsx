import { FOOTER_LINKS } from "@/prototypes/footer";
import React from "react";
import { FooterLinks, FooterMobileLayout, Socials } from ".";
import { Copyright } from "../Copyrights";
import Reveal from "../Animation/Reveal";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-12 md:mb-20 flex  flex-col md:flex-row md:justify-around lg:gap-10  max-w-[1270px]">
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-5">
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <Reveal key={index} index={index}>
              <FooterLinks title={title} links={links} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <FooterMobileLayout />
        </Reveal>
        <Reveal>
          <Socials />
        </Reveal>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
