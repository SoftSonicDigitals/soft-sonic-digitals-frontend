import React from "react";
import { EditInputField, EditSelectField } from "./";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldId, FormFields } from "@/models/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import { FORM_AUSTRALIAN_STATES } from "@/prototypes/contact_page";

const EditForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {};
  return (
    <div className="mt-5  ">
      <EditInputField
        fieldId={FORM_FIELDS.name.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.name.label}
      />

      <EditInputField
        fieldId={FORM_FIELDS.name.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.email.label}
        customValidation={{
          value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
          message: "Please enter a valid email",
        }}
      />
      <EditInputField
        fieldId={FORM_FIELDS.mobile.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.mobile.label}
        maxLength={10}
      />

      {/*street address field */}
      <EditInputField
        placeholder="123 Example St, Suburb"
        fieldId={FORM_FIELDS.address_line.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.address_line.label}
        isRequired={false}
      />

      {/*postcode field */}
      <EditInputField
        fieldId={FORM_FIELDS.postcode.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.postcode.label}
        isRequired={false}
      />

      {/* Select a State field */}
      <EditSelectField
        fieldId={FORM_FIELDS.state.id as FieldId}
        errors={errors}
        register={register}
        isRequired={false}
        label={FORM_FIELDS.state.label}
        options={FORM_AUSTRALIAN_STATES}
      />
    </div>
  );
};

export default EditForm;
