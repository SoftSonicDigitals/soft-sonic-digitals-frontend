import {
  ContactClients,
  Form,
  LetsTalkHeadings,
  WhereToFind,
} from "@/components/ContactPage";

import React from "react";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <LetsTalkHeadings />
      <section>
        <div className="wrapper_container flex-center mb-24">
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row  gap-8 w-full">
            <ContactClients />

            <Form />
          </div>
        </div>
      </section>
      <WhereToFind />
    </main>
  );
};

export default Contact;
