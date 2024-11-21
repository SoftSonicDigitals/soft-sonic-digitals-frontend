import React, { Dispatch } from "react";
import { EditInputField, EditSelectField, FormButtonsSection } from "./";

import { FieldId, FormFields } from "@/models/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import { FORM_AUSTRALIAN_STATES } from "@/prototypes/contact_page";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLeadDetailsContext } from "@/context/LeadDetailsContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "next/navigation";
import { mutate } from "swr";

const EditForm = ({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting, isDirty },
  } = useForm<FormFields>();

  const { leadDetails } = useLeadDetailsContext();
  const params = useParams();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        ...data,
      });

      if (result.status === 200) {
        toast.success(`Profile Updated`);
        mutate(`/api/leads/${params.leadId}`);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Submission Error!");
      console.error(error);
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
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

      <FormButtonsSection setOpen={setOpen} isSubmitting={isSubmitting} />
    </form>
  );
};

export default EditForm;
