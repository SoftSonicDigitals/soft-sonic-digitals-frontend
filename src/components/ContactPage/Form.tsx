"use client";
import React from "react";
import { PrimaryButton } from "../Reusable";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "@/models/contact_page";
import { BsFillExclamationSquareFill } from "react-icons/bs";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <section id="contact_form" className="max-w-[555px]  basis-full  w-full ">
      <div className=" px-0.5 md:pr-8">
        <form
          className="px-3 py-8 flex flex-col gap-2  bg-gray-300  "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* name field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="name" className="font-[600] text-sm">
              Name <span className="text-red text-xl">*</span>
            </label>
            <div>
              <input
                type="text"
                id="name"
                className={`relative border-[1px] ${
                  errors?.name ? "border-red" : "border-gray-600 "
                } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <div className="text-sm font-[500] text-red mt-1">
                  {errors.name.message}
                </div>
              )}
            </div>
          </div>

          {/* email field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="email" className="font-[600] text-sm">
              Email<span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="email"
              className={`relative border-[1px] ${
                errors?.email ? "border-red" : "border-gray-600 "
              } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="text-sm font-[500] text-red mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* mobile field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="mobile" className="font-[600] text-sm">
              Mobile<span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="mobile"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
              {...register("mobile", {
                required: true,
              })}
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
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
              {...register("company")}
            />
          </div>

          {/* Select a service field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="service" className="font-[600] text-sm">
              Select a service<span className="text-red text-xl">*</span>
            </label>

            <select
              id="service"
              className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm tracking-wider"
              {...register("service")}
              defaultValue={""}
            >
              <option value="" disabled>
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

          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 text-gray-700">
              <label htmlFor="budget" className="font-[600] text-sm">
                Budget<span className="text-red text-xl">*</span>
              </label>

              <select
                id="budget"
                className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm"
                {...register("budget")}
                defaultValue={""}
              >
                <option value="" disabled>
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
                id="requirement"
                className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm"
                {...register("requirement")}
                defaultValue={""}
              >
                <option value="" disabled>
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
              id="start"
              className="border-[1px] border-gray-600 w-full  py-3 outline-0 px-4 text-sm tracking-wider"
              {...register("start")}
              defaultValue={""}
            >
              <option value="" disabled>
                -Select-
              </option>
              <option value="Right now">Right now</option>
              <option value="In few weeks">In few weeks</option>
              <option value="In few months">In few months</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="details" className="font-[600] text-sm">
              Project Details
            </label>

            <textarea
              id="details"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm h-40"
              {...register("details")}
            />
          </div>

          <PrimaryButton title="SUBMIT" className="mt-8 py-2.5" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Form;
