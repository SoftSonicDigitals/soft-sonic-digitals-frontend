"use client";
import React, { Dispatch } from "react";
import {
  FormButtonsSection,
  ProfileFormFields,
  RequirementFormFields,
} from ".";
import { FormFields } from "@/models/contact_page";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "next/navigation";
import { mutate } from "swr";

const EditFormLayout = ({
  setOpen,
  displayForm,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  displayForm: "profile" | "requirement";
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const params = useParams();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        ...data,
      });

      if (result.status === 200) {
        toast.success(
          `${
            displayForm === "profile" ? "Profile" : "Project requirements"
          } Updated`
        );
        mutate(`/api/leads/${params.leadId}`);
        setOpen(false);
      }
    } catch (error) {
      toast.error("Submission Error!");
      console.error(error);
    }
  };

  const displayFormFiels =
    displayForm === "profile" ? (
      <ProfileFormFields register={register} errors={errors} />
    ) : (
      <RequirementFormFields register={register} errors={errors} />
    );

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      {displayFormFiels}
      <FormButtonsSection
        setOpen={setOpen}
        isSubmitting={isSubmitting}
        showDeleteButton={displayForm === "profile"}
      />
    </form>
  );
};

export default EditFormLayout;
