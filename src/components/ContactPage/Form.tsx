"use client";

import React from "react";
import { PrimaryButton } from "../Reusable";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "@/models/contact_page";
import {
  FORM_BUDGET,
  FORM_REQUIREMENT,
  FORM_SERVICES,
  FORM_START,
} from "@/prototypes/contact_page";
import { FormDropDownOption } from ".";
import { FORM_FIELDS } from "@/constants/contact_page";
import { addClientDetails, getNextClientID } from "@/actions";
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const clientID = await getNextClientID();

      const client = await addClientDetails({ ...data, clientID });

      if (client) {
        toast.success("Form Successfully Submitted");
      }

      reset();
    } catch (error) {
      toast.error("Submission Error!");
      console.log(error);
    }
  };

  return (
    <section id="contact_form" className="max-w-[555px]  basis-full  w-full ">
      <div className=" px-0.5 md:pr-8">
        <form
          className="px-3.5 py-8 flex flex-col gap-3  bg-gray-300  "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* name field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="name" className="font-[600] text-sm">
              {FORM_FIELDS.name} <span className="text-red text-xl">*</span>
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
              {FORM_FIELDS.email}
              <span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="email"
              className={` relative border-[1px] ${
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
              {FORM_FIELDS.mobile}
              <span className="text-red text-xl">*</span>
            </label>

            <input
              type="text"
              id="mobile"
              maxLength={10}
              className={`relative border-[1px] ${
                errors?.mobile ? "border-red" : "border-gray-600 "
              } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
              {...register("mobile", {
                required: "Mobile is required",
              })}
            />
            {errors.mobile && (
              <div className="text-sm font-[500] text-red mt-1">
                {errors.mobile.message}
              </div>
            )}
          </div>

          {/* Company field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="company" className="font-[600] text-sm">
              {FORM_FIELDS.company}
            </label>

            <input
              type="text"
              id="company"
              className=" h-[38px] border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm"
              {...register("company")}
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="service" className="font-[600] text-sm">
              {FORM_FIELDS.service}
              <span className="text-red text-xl">*</span>
            </label>

            {/* Select a service field */}
            <select
              id="service"
              className={`appearance-none relative border-[1px] ${
                errors?.service ? "border-red" : "border-gray-600 "
              } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
              {...register("service", {
                required: "Please select a service ",
              })}
              defaultValue={""}
            >
              {FORM_SERVICES.map(({ value, title }, index) => (
                <FormDropDownOption value={value} title={title} key={index} />
              ))}
            </select>
            {errors.service && (
              <div className="text-sm font-[500] text-red mt-1">
                {errors.service.message}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 text-gray-700">
              <label htmlFor="budget" className="font-[600] text-sm">
                {FORM_FIELDS.budget}
                <span className="text-red text-xl">*</span>
              </label>
              {/* Select a budget field */}
              <select
                id="budget"
                className={`appearance-none relative border-[1px] ${
                  errors?.budget ? "border-red" : "border-gray-600 "
                } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
                {...register("budget", {
                  required: "Please select the budget",
                })}
                defaultValue={""}
              >
                {FORM_BUDGET.map(({ value, title }, index) => (
                  <FormDropDownOption value={value} title={title} key={index} />
                ))}
              </select>

              {errors.budget && (
                <div className="text-sm font-[500] text-red mt-1">
                  {errors.budget.message}
                </div>
              )}
            </div>

            {/* Select a requirement field */}
            <div className="flex flex-col gap-1 text-gray-700">
              <label htmlFor="requirement" className="font-[600] text-sm">
                {FORM_FIELDS.requirement}
                <span className="text-red text-xl">*</span>
              </label>

              <select
                id="requirement"
                className={`appearance-none relative border-[1px] ${
                  errors?.requirement ? "border-red" : "border-gray-600 "
                } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
                {...register("requirement", {
                  required: "Please select the requirement",
                })}
                defaultValue={""}
              >
                {FORM_REQUIREMENT.map(({ value, title }, index) => (
                  <FormDropDownOption value={value} title={title} key={index} />
                ))}
              </select>
              {errors.requirement && (
                <div className="text-sm font-[500] text-red mt-1">
                  {errors.requirement.message}
                </div>
              )}
            </div>
          </div>
          {/* Select a start field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="start" className="font-[600] text-sm">
              {FORM_FIELDS.start}
              <span className="text-red text-xl">*</span>
            </label>
            <select
              id="start"
              className={`appearance-none relative border-[1px] ${
                errors?.start ? "border-red" : "border-gray-600 "
              } w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
              {...register("start", {
                required: "Please select your estimated start date",
              })}
              defaultValue={""}
            >
              {FORM_START.map(({ value, title }, index) => (
                <FormDropDownOption value={value} title={title} key={index} />
              ))}
            </select>
            {errors.start && (
              <div className="text-sm font-[500] text-red mt-1">
                {errors.start.message}
              </div>
            )}
          </div>

          {/*  project details field */}
          <div className="flex flex-col gap-1 text-gray-700">
            <label htmlFor="details" className="font-[600] text-sm">
              {FORM_FIELDS.details}
            </label>

            <textarea
              id="details"
              className="border-[1px] border-gray-600 w-full  py-2 outline-0 px-4 text-sm h-40"
              {...register("details")}
            />
          </div>

          <PrimaryButton
            title="SUBMIT"
            className="mt-8 py-2.5"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default Form;
