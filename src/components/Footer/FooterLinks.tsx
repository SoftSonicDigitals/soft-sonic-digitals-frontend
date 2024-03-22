import Link from "next/link";
import React from "react";

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
          <Link
            href={link}
            key={index}
            className="text-gray-700 font-[500] text-[15px] tracking-wide "
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
