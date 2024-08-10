import Link from "next/link";
import React from "react";

type FooterLinkType = {
  link: string;
  title: string;
};

const FooterLink = ({ link, title }: FooterLinkType) => {
  return (
    <Link
      href={link}
      className="text-gray-700 font-[500] text-sm md:text-[15px] tracking-wide "
    >
      {title}
    </Link>
  );
};

export default FooterLink;
