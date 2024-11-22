"use client";
import React, { Dispatch } from "react";
import {
  EditInputField,
  EditSelectField,
  FormButtonsSection,
  EditTextAreaField,
} from ".";

import { FieldId, FormFields } from "@/models/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import {
  FORM_AUSTRALIAN_STATES,
  FORM_REQUIREMENTS,
  FORM_START,
} from "@/prototypes/contact_page";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLeadDetailsContext } from "@/context/LeadDetailsContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "next/navigation";
import { mutate } from "swr";

const EditRequirementsForm = ({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const { leadDetails } = useLeadDetailsContext();
  const params = useParams();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        ...data,
      });

      if (result.status === 200) {
        toast.success(`Requirements Updated`);
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
        inputType="tel"
        defaultValue={leadDetails.project_details}
      />

      <FormButtonsSection setOpen={setOpen} isSubmitting={isSubmitting} />
    </form>
  );
};
export default EditRequirementsForm;
