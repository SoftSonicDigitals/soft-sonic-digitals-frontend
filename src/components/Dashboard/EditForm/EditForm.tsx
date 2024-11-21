import React, { Dispatch } from "react";
import {
  EditInputField,
  EditSelectField,
  FormButton,
  FormButtonsSection,
} from "./";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldId, FormFields } from "@/models/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import { FORM_AUSTRALIAN_STATES } from "@/prototypes/contact_page";
const EditForm = ({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // error ui for form
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <EditInputField
        fieldId={FORM_FIELDS.name.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.name.label}
      />

      <EditInputField
        fieldId={FORM_FIELDS.email.id as FieldId}
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
        inputType="tel"
        customValidation={{
          value:
            /^\+?(\d{1,4})?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}$/,
          message: "Please enter a valid mobile number",
        }}
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

      <FormButtonsSection setOpen={setOpen} />
    </form>
  );
};

export default EditForm;
