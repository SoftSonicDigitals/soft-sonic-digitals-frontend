import { CONTACT_FOOTER_LINKS } from "@/prototypes/contact_page";
import Link from "next/link";
import React from "react";

const ContactPageFooter = () => {
  return (
    <footer className="bg-black">
      <div className="wrapper_container text-white flex-center py-16 px-5">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2  gap-y-5 sm:gap-y-8">
          {CONTACT_FOOTER_LINKS.map(({ email, handle, title, link }, index) => (
            <div key={index} className="pr-24">
              <p className="footer_headings">{title}</p>
              <Link href={`${link ? link : "/"}`} className="footer_info">
                {email && email}
                {handle && handle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ContactPageFooter;
