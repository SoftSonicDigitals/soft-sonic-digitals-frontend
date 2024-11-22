import React from "react";
import { FORM_FIELDS } from "@/constants/contact_page";
import { useLeadDetailsContext } from "@/context/LeadDetailsContext";
import { FieldId, FormFields } from "@/models/contact_page";
import EditSelectField from "./EditSelectField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FORM_AUSTRALIAN_STATES } from "@/prototypes/contact_page";
import { EditInputField } from "./";

const ProfileFormFields = ({
  errors,
  register,
}: {
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
}) => {
  const { leadDetails } = useLeadDetailsContext();
  return (
    <>
      <EditInputField
        fieldId={FORM_FIELDS.name.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.name.label}
        defaultValue={leadDetails.name}
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
        defaultValue={leadDetails.email}
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
        defaultValue={leadDetails.mobile}
      />

      {/*street address field */}
      <EditInputField
        placeholder="123 Example St, Suburb"
        fieldId={FORM_FIELDS.address_line.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.address_line.label}
        isRequired={false}
        defaultValue={leadDetails.address_line}
      />

      {/*postcode field */}
      <EditInputField
        fieldId={FORM_FIELDS.postcode.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.postcode.label}
        isRequired={false}
        defaultValue={leadDetails.postcode}
      />

      {/* Select a State field */}
      <EditSelectField
        fieldId={FORM_FIELDS.state.id as FieldId}
        errors={errors}
        register={register}
        isRequired={false}
        label={FORM_FIELDS.state.label}
        options={FORM_AUSTRALIAN_STATES}
        defaultValue={leadDetails.state}
      />
    </>
  );
};

export default ProfileFormFields;
