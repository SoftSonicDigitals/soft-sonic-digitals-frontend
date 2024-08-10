import React from "react";
import { FooterLink } from ".";

type FooterLinksType = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
};
const FooterLinks = ({ title, links }: FooterLinksType) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="tracking-widest text-lg lg:text-base font-[500] uppercase">
        {title}
      </p>
      <div className="flex flex-col gap-2 ">
        {links.map(({ title, link }, index) => (
          <FooterLink key={index} link={link} title={title} />
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
