import Link from "next/link";
import React from "react";

const ContactPageFooter = () => {
  return (
    <section id="contact_footer" className="bg-black">
      <div className="wrapper_container text-white flex-center py-16 px-5">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2  gap-y-5 sm:gap-y-8">
          <div className="pr-24">
            <p className="footer_headings">Sales</p>
            <Link href={"/"} className="footer_info">
              info@magnetoitsolutions.com
            </Link>
          </div>
          <div className="pr-24">
            <p className="footer_headings">Career</p>
            <p className="footer_info">hiring@magnetoitsolutions.com</p>
          </div>
          <div className="pr-24">
            <p className="footer_headings">Media & Press</p>
            <p className="footer_info">outreach@magnetoitsolutions.com</p>
          </div>
          <div className="pr-24">
            <p className="footer_headings">Skype</p>
            <p className="footer_info">marketing_19207</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageFooter;
