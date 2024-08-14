"use client";

import React from "react";
import { PrimaryButton } from "../../Reusable";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldId, FormFields } from "@/models/contact_page";
import {
  FORM_AUSTRALIAN_STATES,
  FORM_BUDGET,
  FORM_REQUIREMENTS,
  FORM_SERVICES,
  FORM_START,
} from "@/prototypes/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import { addClient, getNextClientID } from "@/actions";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

import { InputField, SelectField, TextAreaField } from "../Form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const { mutate } = useSWRConfig();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const clientId = await getNextClientID();
      console.log(data);
      const result = await addClient({
        ...data,
        clientId,
      });
      if (result.status === "success") {
        toast.success("Form Successfully Submitted");
        await mutate("/api/clients");
        reset();
      }
      if (result.status === "fail") {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error("Submission Error!");
      console.error(error);
    }
  };

  return (
    <section id="contact_form" className="max-w-[555px]  basis-full  w-full ">
      <div className=" px-0.5 md:pr-8">
        <form
          className="px-3.5 py-8 flex flex-col gap-3  bg-gray-300  "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/*name field */}
          <InputField
            fieldId={FORM_FIELDS.name.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.name.label}
          />

          {/*email field */}
          <InputField
            fieldId={FORM_FIELDS.email.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.email.label}
            customValidation={{
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Please enter a valid email",
            }}
          />

          {/*mobile field */}
          <InputField
            fieldId={FORM_FIELDS.mobile.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.mobile.label}
            maxLength={10}
          />

          {/*company field */}
          <InputField
            fieldId={FORM_FIELDS.company.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.company.label}
            isRequired={false}
          />

          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
            {/*street address field */}
            <InputField
              placeholder="123 Example St, Suburb"
              fieldId={FORM_FIELDS.address_line.id as FieldId}
              errors={errors}
              register={register}
              label={FORM_FIELDS.address_line.label}
              isRequired={false}
            />

            {/*postcode field */}
            <InputField
              fieldId={FORM_FIELDS.postcode.id as FieldId}
              errors={errors}
              register={register}
              label={FORM_FIELDS.postcode.label}
              isRequired={false}
            />
          </div>

          {/* Select a State field */}
          <SelectField
            fieldId={FORM_FIELDS.state.id as FieldId}
            errors={errors}
            register={register}
            isRequired={false}
            label={FORM_FIELDS.state.label}
            options={FORM_AUSTRALIAN_STATES}
          />

          {/* Select a service field */}
          <SelectField
            fieldId={FORM_FIELDS.service.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.service.label}
            options={FORM_SERVICES}
          />

          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
            {/* Select a budget field */}
            <SelectField
              fieldId={FORM_FIELDS.budget.id as FieldId}
              errors={errors}
              register={register}
              label={FORM_FIELDS.budget.label}
              options={FORM_BUDGET}
            />

            {/* Select a requirement field */}
            <SelectField
              fieldId={FORM_FIELDS.requirement.id as FieldId}
              errors={errors}
              register={register}
              label={FORM_FIELDS.requirement.label}
              options={FORM_REQUIREMENTS}
            />
          </div>

          {/* Select a start field */}
          <SelectField
            fieldId={FORM_FIELDS.estimated_start_time.id as FieldId}
            errors={errors}
            register={register}
            label={FORM_FIELDS.estimated_start_time.label}
            options={FORM_START}
          />

          {/*  project details field */}
          <TextAreaField
            fieldId={FORM_FIELDS.project_details.id as FieldId}
            register={register}
            label={FORM_FIELDS.project_details.label}
          />

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
