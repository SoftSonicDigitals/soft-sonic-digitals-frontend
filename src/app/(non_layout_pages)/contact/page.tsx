import { ContactClients, LetsTalkHeadings } from "@/components/ContactPage";

import React from "react";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <LetsTalkHeadings />
      <section>
        <div className="wrapper_container flex-center mb-24">
          <div className="flex flex-col-reverse lg:flex-row  gap-8">
            <ContactClients />
            <div className="md:w-[555px] bg-gray-0 basis-full">form </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
