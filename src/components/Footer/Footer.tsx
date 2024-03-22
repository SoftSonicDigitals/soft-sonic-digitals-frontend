import { FOOTER_LINKS } from "@/prototypes/footer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper_container mb-24 flex-center ">
        <div className="grid grid-cols-5 gap-8">
          {FOOTER_LINKS.map((links, index) => (
            <div key={index} className="flex flex-col gap-6">
              <p className="tracking-widest">{links.title}</p>
              <div className="flex flex-col gap-2 ">
                {links.links.map((link, index) => (
                  <div key={index} className="text-gray-700">
                    <Link href={link.link} className="text-base">
                      {link.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>socials</div>
      </div>
    </footer>
  );
};

export default Footer;
