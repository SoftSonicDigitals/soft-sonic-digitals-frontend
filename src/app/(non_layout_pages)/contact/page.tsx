import { ContactClients, LetsTalkHeadings } from "@/components/ContactPage";

import React from "react";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <LetsTalkHeadings />

      <div className="flex gap-2 ">
        <ContactClients />
        <div>form </div>
      </div>
    </main>
  );
};

export default Contact;
