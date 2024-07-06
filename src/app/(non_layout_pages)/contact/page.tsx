import Reveal from "@/components/Animation/Reveal";
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
      <section>
        <Reveal>
          <LetsTalkHeadings />
        </Reveal>
        <Reveal>
          <div className="wrapper_container flex-center mb-24">
            <div className="flex justify-center items-center flex-col-reverse lg:flex-row  gap-8 w-full">
              <ContactClients />

              <Form />
            </div>
          </div>
        </Reveal>
      </section>
      <Reveal>
        <WhereToFind />
      </Reveal>
    </main>
  );
};

export default Contact;
