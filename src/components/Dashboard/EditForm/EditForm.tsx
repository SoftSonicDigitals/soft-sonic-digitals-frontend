import React, { Dispatch } from "react";
import { EditInputField, EditSelectField, FormButton } from "./";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldId, FormFields } from "@/models/contact_page";
import { FORM_FIELDS } from "@/constants/contact_page";
import { FORM_AUSTRALIAN_STATES } from "@/prototypes/contact_page";
import { GoTrash } from "react-icons/go";
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
    console.log(data);
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

      <div className="flex justify-between mt-5">
        <FormButton
          btnText="Delete lead"
          btnType="button"
          btnStyles="bg-red-100 hover:bg-red-700 group "
          btnTextStyles="text-red-300 group-hover:text-white"
          iconStyles="text-red-300 group-hover:text-white"
          Icon={GoTrash}
        />
        <div className="flex gap-3">
          <FormButton
            btnText="Cancel"
            btnType="button"
            btnStyles="bg-white  group  border-[1px] hover:bg-gray-800 group"
            btnTextStyles="text-gray-800 group-hover:text-white  "
            iconStyles="text-red-300 group-hover:text-white"
            clickHandler={() => setOpen(false)}
          />
          <FormButton
            btnText="Save changes"
            btnType="submit"
            btnStyles="bg-gray-800  group  border-[1px] hover:bg-white group"
            btnTextStyles="text-white group-hover:text-gray-800 "
            iconStyles="text-red-300 group-hover:text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default EditForm;
