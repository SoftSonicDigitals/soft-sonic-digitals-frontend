import React from "react";
import { PrimaryButton } from "../Reusable";

const Form = () => {
  return (
    <section
      id="contact_form"
      className="md:max-w-[555px]  basis-full  w-full "
    >
      <div className=" pr-8">
        <form className="px-3 py-8 flex flex-col gap-2  bg-gray-300  ">
          {/* name field */}
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

          {/* email field */}
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

          {/* mobile field */}
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

          {/* Company field */}
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

          {/* Select a service field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="service" className="font-[600] text-sm">
              Select a service<span className="text-red text-xl">*</span>
            </label>

            <select
              name="service"
              id="service"
              className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm tracking-wider"
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

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 text-gray-700">
              <label htmlFor="budget" className="font-[600] text-sm">
                Budget<span className="text-red text-xl">*</span>
              </label>

              <select
                name="budget"
                id="budget"
                className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm"
              >
                <option value="" disabled selected>
                  -Select-
                </option>
                <option value="$10k+">$10k+</option>
                <option value="$50k+">$50k+</option>
                <option value="$100k+">$100k+</option>

                <option value="$200k+">$200k+</option>
                <option value="$500k+">$500k+</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 text-gray-700">
              <label htmlFor="requirement" className="font-[600] text-sm">
                Requirement<span className="text-red text-xl">*</span>
              </label>

              <select
                name="requirement"
                id="requirement"
                className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm"
              >
                <option value="" disabled selected>
                  -Select-
                </option>
                <option value="Hire Dedicated Team">Hire Dedicated Team</option>
                <option value="New Project">New Project</option>
                <option value="Existing Project">Existing Project</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="start" className="font-[600] text-sm">
              How soon you want to start?
              <span className="text-red text-xl">*</span>
            </label>

            <select
              name="start"
              id="start"
              className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm tracking-wider"
            >
              <option value="" disabled selected>
                -Select-
              </option>
              <option value="Right now">Right now</option>
              <option value="In few weeks">In few weeks</option>
              <option value="In few months">In few months</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="project_details" className="font-[600] text-sm">
              Project Details
            </label>

            <textarea
              id="project_details"
              name="project_details"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm h-24"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="shared_files" className="font-[600] text-sm">
              Have a file to share?
            </label>

            <input
              type="file"
              id="shared_files"
              name="shared_files"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm "
            />
          </div>

          <PrimaryButton title="SUBMIT" className="mt-8 py-2.5" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Form;
