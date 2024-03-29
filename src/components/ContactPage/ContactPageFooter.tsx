import React from "react";

const ContactPageFooter = () => {
  return (
    <section id="contact_footer" className="bg-black">
      <div className="wrapper_container text-white">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>Sales</p>
            <p>info@magnetoitsolutions.com</p>
          </div>
          <div>
            <p>Career</p>
            <p>hiring@magnetoitsolutions.com</p>
          </div>
          <div>
            <p>Media & Press</p>
            <p>outreach@magnetoitsolutions.com</p>
          </div>
          <div>
            <p>Skype</p>
            <p>marketing_19207</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageFooter;
