import React from "react";
import { InputField as EditInputFieldProps } from "@/models/contact_page";

const EditTextAreaField = ({
  label,
  fieldId,
  errors,
  register,
  isRequired = true,
  maxLength,
  customValidation,
  inputType,
  defaultValue,
}: EditInputFieldProps) => {
  return (
    <div className="flex flex-col sm:flex-row py-4 border-b-2 first:border-t-2 gap-1">
      <label className="text-sm font-[700] min-w-40 text-gray-700">
        {label}
      </label>
      <div className="flex flex-col w-full">
        <textarea
          id={fieldId}
          className={`appearance-none focus:outline-none px-3 py-1 border-[1px] w-full border-gray-600 text-sm rounded-md`}
          defaultValue={defaultValue}
          {...register(fieldId)}
        />
        {errors[fieldId] && (
          <div className="text-xs font-[500] text-red mt-1">
            {errors[fieldId]?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTextAreaField;
