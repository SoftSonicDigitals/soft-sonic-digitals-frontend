import React from "react";
import { FORM_FIELDS } from "@/constants/contact_page";
import { useLeadDetailsContext } from "@/context/LeadDetailsContext";
import { FieldId, FormFields } from "@/models/contact_page";
import EditSelectField from "./EditSelectField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FORM_REQUIREMENTS, FORM_START } from "@/prototypes/contact_page";
import { EditTextAreaField } from "./";

const RequirementFormFields = ({
  errors,
  register,
}: {
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
}) => {
  const { leadDetails } = useLeadDetailsContext();
  return (
    <>
      <EditSelectField
        fieldId={FORM_FIELDS.requirement.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.requirement.label}
        defaultValue={leadDetails.requirement}
        options={FORM_REQUIREMENTS}
      />

      <EditSelectField
        fieldId={FORM_FIELDS.estimated_start_time.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.estimated_start_time.label}
        defaultValue={leadDetails.estimated_start_time}
        options={FORM_START}
      />

      <EditTextAreaField
        fieldId={FORM_FIELDS.project_details.id as FieldId}
        errors={errors}
        register={register}
        label={FORM_FIELDS.project_details.label}
        defaultValue={leadDetails.project_details}
      />
    </>
  );
};

export default RequirementFormFields;
