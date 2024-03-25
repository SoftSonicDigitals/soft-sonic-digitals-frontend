import { ContactClients, LetsTalkHeadings } from "@/components/ContactPage";

import React from "react";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <LetsTalkHeadings />

      <div className="wrapper_container flex gap-2 ">
        <ContactClients />
        <div className="basis-full">form </div>
      </div>
    </main>
  );
};

export default Contact;
