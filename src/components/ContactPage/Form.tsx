import React from "react";

const Form = () => {
  return (
    <section
      id="contact_form"
      className="md:max-w-[555px]  basis-full bg-gray-100"
    >
      <div className="px-3 pt-8">
        <label htmlFor="name" className="font-[600] text-sm pl-2">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="border-[1px] border-gray-200 w-full  py-2 outline-0 px-5 text-sm"
        />
        <br />
      </div>
    </section>
  );
};

export default Form;
