import React from "react";
import { InputField as EditInputFieldProps } from "@/models/contact_page";

const EditInputField = ({
  label,
  fieldId,
  errors,
  register,
  isRequired,
  maxLength,
  customValidation,
}: EditInputFieldProps) => {
  return (
    <div className="flex py-4 border-b-2 first:border-t-2">
      <label className="text-sm font-[700] w-32 text-gray-700">{label}</label>
      <input
        type="text"
        id={fieldId}
        className={`appearance-none focus:outline-none px-3 py-1 border-[1px] ${
          errors[fieldId] ? "border-red" : "border-gray-600 "
        }text-sm rounded-md`}
        defaultValue={"Amelie Laurent"}
        {...register(fieldId, {
          required: isRequired ? `${label} is required` : false,
          maxLength: maxLength ? maxLength : undefined,
          pattern: customValidation ? customValidation : undefined,
        })}
      ></input>
    </div>
  );
};

export default EditInputField;
