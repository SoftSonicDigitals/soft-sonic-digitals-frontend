import React from "react";

const Form = () => {
  return (
    <section
      id="contact_form"
      className="md:max-w-[555px]  basis-full  w-full "
    >
      <div className=" pr-8">
        <div className="px-3 py-8 flex flex-col gap-2  bg-gray-300  ">
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="name" className="font-[600] text-sm">
              Name <span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm text-gray-700"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="email" className="font-[600] text-sm">
              Email<span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="email"
              name="email"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="mobile" className="font-[600] text-sm">
              Mobile<span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="mobile"
              name="mobile"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="company" className="font-[600] text-sm">
              Company
            </label>

            <input
              type="text"
              id="company"
              name="company"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="service" className="font-[600] text-sm">
              Select a service
            </label>

            <select
              name="service"
              id="service"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
            >
              <option value="" disabled selected>
                -Select-
              </option>
              <option value="Ecommerce Consultation">
                Ecommerce Consultation
              </option>
              <option value="Ecommerce Development">
                Ecommerce Development
              </option>
              <option value="Ecommerce Replatforming">
                Ecommerce Replatforming
              </option>
              <option value="Mobile Application Development">
                Mobile Application Development
              </option>
              <option value="Web Application Development">
                Web Application Development
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI & UX design">UI & UX design</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
